<script setup lang="ts">
const { stream, isLive } = useStream()
const { messages, isConnected } = useTwitchChat()
const channelId = computed(() => stream.value?.user?.id || '')
</script>

<template>
  <div class="chat-container h-full">
    <!-- <template v-if="!isConnected">
      <span class="text-red-500">
        Disconnected from chat
      </span>
    </template> -->
    <template>
      <ChatOverlay
        :messages
        :channel-id
        :max-messages="30"
        class="rounded-lg w-full max-w-lg"
      />
    </template>
  </div>
</template>
