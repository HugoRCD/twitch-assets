<script setup lang="ts">
const { data: stream } = await useFetch('/api/stream')
const { messages, isConnected } = useTwitchChat()
const channelId = computed(() => stream?.user?.id || '')
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex flex-col gap-2">
      <div class="text-2xl font-bold">
        {{ stream.user.display_name }}
      </div>
    </div>
    <pre class="text-xs">
        {{ stream }}
    </pre>
    <div class="chat-container">
      <div v-if="!isConnected" class="text-red-500">
        Disconnected from chat
      </div>
      <div v-else class="messages">
        <ChatOverlay
          :messages
          :channel-id
          :max-messages="30"
          class="rounded-lg w-full max-w-lg"
        />
      </div>
    </div>
  </div>
</template>
