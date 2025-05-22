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
  <div class="border-l-2 border-t-2 border-b-2 border-default p-2">
    <div class="flex-1" :class="displayedMessages.length > 0 ? 'mask-t-from-50%' : ''">
      <ChatMessage
        v-for="message in displayedMessages"
        :key="message.timestamp + message.username + message.message"
        :message
        :channel-id
      />
    </div>
  </div>
</template> 
