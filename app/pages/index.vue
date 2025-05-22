<script setup lang="ts">
definePageMeta({
  layout: 'overlay',
})

const { stream, isLive } = useStream()
const { messages, isConnected } = useTwitchChat()
const channelId = computed(() => stream.value?.user?.id || '')
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-4 p-4">
      <div class="hidden chat-container">
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
  </NuxtLayout>
</template>
