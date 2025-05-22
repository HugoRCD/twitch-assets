<script setup lang="ts">
const { stream, isLive } = useStream()
const { messages, isConnected } = useTwitchChat()
const channelId = computed(() => stream.value?.user?.id || '')
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-col gap-4 p-4">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold flex flex-col gap-2">
            <h1 class="text-highlighted">
              {{ stream?.user?.display_name }}
            </h1>
            <p class="text-muted text-sm">
              {{ stream?.user?.description }}
            </p>
          </div>
          <UBadge
            :color="isLive ? 'success' : 'neutral'"
            :label="isLive ? 'LIVE' : 'OFFLINE'"
          />
        </div>
      </div>
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
  </NuxtLayout>
</template>
