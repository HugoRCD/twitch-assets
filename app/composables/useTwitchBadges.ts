import { useFetch } from '#app'
import type { BadgeSets } from '~/types/chat'

export const useTwitchBadges = (channelId: string) => {
  const globalBadges = ref<BadgeSets>({})
  const channelBadges = ref<BadgeSets>({})

  useFetch('https://badges.twitch.tv/v1/badges/global/display', {
    onResponse({ response }) {
      globalBadges.value = response._data?.badge_sets || {}
    }
  })

  useFetch(`https://badges.twitch.tv/v1/badges/channels/${channelId}/display`, {
    onResponse({ response }) {
      channelBadges.value = response._data?.badge_sets || {}
    }
  })

  function getBadgeUrl(badge: string, version: string): string | undefined {
    const channel = channelBadges.value[badge]?.versions[version]?.image_url_1x
    const globalBadge = globalBadges.value[badge]?.versions[version]?.image_url_1x
    if (channel) return channel
    if (globalBadge) return globalBadge
    if (badge === 'broadcaster' && version === '1') {
      return 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1'
    }
  }

  return { getBadgeUrl }
} 
