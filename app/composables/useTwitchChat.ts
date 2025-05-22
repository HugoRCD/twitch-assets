import type { ChatMessage } from '~/types/chat'

export const useTwitchChat = () => {
  const messages = useState<ChatMessage[]>('twitch-chat-messages', () => [])
  const isConnected = computed(() => status.value === 'OPEN')

  const { status, data, send, open, close } = useWebSocket<ChatMessage>('/api/chat', {
    autoReconnect: {
      retries: 3,
      delay: 5000,
      onFailed: () => {
        console.error('Failed to connect to Twitch chat after 3 retries')
      }
    },
    onMessage: (ws, event) => {
      const message = JSON.parse(event.data) as ChatMessage
      console.log(message)
      messages.value = [...messages.value, message].slice(-100)
    }
  })

  onMounted(() => {
    open()
  })

  onUnmounted(() => {
    close()
  })

  return {
    messages,
    isConnected,
    connect: open,
    disconnect: close,
    send
  }
} 
