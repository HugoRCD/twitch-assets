import type { StreamData } from '~/types/stream'

export const useStream = () => {
  const stream = useState<StreamData | null>('stream-data', () => null)
  const isLive = computed(() => !!stream.value?.stream)

  const POLLING_INTERVALS = {
    LIVE: 10000,
    OFFLINE: 30000,
  }

  let pollingInterval: NodeJS.Timeout | null = null

  const fetchStreamData = async () => {
    try {
      const response = await $fetch<StreamData>('/api/stream')
      if (response) {
        stream.value = response
      }
    } catch (error) {
      console.error('Error fetching stream data:', error)
    }
  }

  const startPolling = () => {
    if (pollingInterval) return

    const poll = () => {
      fetchStreamData()
      const interval = isLive.value ? POLLING_INTERVALS.LIVE : POLLING_INTERVALS.OFFLINE
      pollingInterval = setTimeout(poll, interval)
    }

    poll()
  }

  const stopPolling = () => {
    if (pollingInterval) {
      clearTimeout(pollingInterval)
      pollingInterval = null
    }
  }

  watch(isLive, () => {
    if (pollingInterval) {
      stopPolling()
      startPolling()
    }
  })

  onMounted(() => {
    fetchStreamData()
    startPolling()
  })

  onUnmounted(() => {
    stopPolling()
  })

  return {
    stream,
    isLive,
  }
} 
