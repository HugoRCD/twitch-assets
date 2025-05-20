<script setup lang="ts">
import type { ChatMessage } from '~/types/chat'

const props = defineProps<{
  messages: ChatMessage[]
  channelId: string
  maxMessages?: number
  class?: string
}>()

const displayedMessages = computed(() =>
  props.maxMessages ? props.messages.slice(-props.maxMessages) : props.messages
)
</script>

<template>
  <div :class="['flex flex-col gap-1 w-full', props.class]">
    <ChatMessage
      v-for="message in displayedMessages"
      :key="message.timestamp + message.username + message.message"
      :message
      :channel-id
    />
  </div>
</template> 
