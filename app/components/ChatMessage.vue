<script setup lang="ts">
import type { ChatMessage } from '~/types/chat'

const props = defineProps<{
  message: ChatMessage
  channelId: string
}>()

const { getBadgeUrl } = useTwitchBadges(props.channelId)
const emoteParts = computed(() => parseTwitchEmotes(props.message.rawEmotes, props.message.message))
</script>

<template>
  <div class="flex items-start gap-2 py-0.5">
    <span v-for="(version, badge) in message.badges" :key="badge" class="inline-block align-middle">
      <img
        v-if="getBadgeUrl(badge, version)"
        :src="getBadgeUrl(badge, version)"
        :alt="badge"
        class="h-5 w-5 inline-block align-middle"
        loading="lazy"
      >
    </span>
    <span class="font-bold mr-1" :style="{ color: message.color }">{{ message.username }}</span>
    <span class="break-words">
      <template v-for="(part, i) in emoteParts" :key="i">
        <img
          v-if="part.emoteId"
          :src="getTwitchEmoteUrl(part.emoteId)"
          class="inline h-6 align-text-bottom"
          :alt="part.text"
        >
        <span v-else>{{ part.text }}</span>
      </template>
    </span>
  </div>
</template> 
