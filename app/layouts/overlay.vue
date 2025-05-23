<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <UApp class="relative min-h-screen bg-transparent overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]">
      <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, rgba(var(--ui-text-dimmed), 0.5) 1px, transparent 0); background-size: 50px 50px;" />
    </div>

    <div class="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-default" />
    <div class="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-default" />
    <div class="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-default" />
    <div class="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-default" />

    <div class="absolute top-6 right-16 flex items-center gap-4">
      <div class="flex items-center gap-2">
        <div class="w-2 h-2 border border-muted rotate-45" />
        <NbViewer :nb-viewers="stream?.stream?.viewer_count ?? 0" />
        <div class="w-8 h-[1px] bg-muted" />
      </div>
    </div>

    <div class="h-screen p-8">
      <div class="h-full relative">
        <slot />
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div class="flex items-center gap-6">
        <div class="relative">
          <div class="w-3 h-3 border border-muted rotate-45" />
          <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-highlighted transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div class="bg-default/40 backdrop-blur-sm border border-default px-4 py-2 flex items-center gap-1">
          <div class="w-1 h-1 bg-highlighted" />
          <div class="flex items-center gap-4 mx-3">
            <div 
              v-for="(social, index) in socials" 
              :key="social.name" 
              class="flex items-center gap-2 text-muted text-xs font-mono"
            >
              <div class="w-1 h-1 bg-dimmed" />
              <UIcon :name="social.icon" class="size-3" />
              <span class="tracking-wider">{{ social.name }}</span>
              <div v-if="index < socials.length - 1" class="w-3 h-[1px] bg-muted" />
            </div>
          </div>
          <div class="w-1 h-1 bg-highlighted" />
        </div>

        <div class="relative">
          <div class="w-3 h-3 border border-muted rotate-45" />
          <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-highlighted transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>

    <div class="absolute top-1/3 left-0 w-16 h-[1px] bg-gradient-to-r from-transparent via-muted to-transparent animate-pulse" />
    <div class="absolute top-2/3 right-0 w-16 h-[1px] bg-gradient-to-l from-transparent via-muted to-transparent animate-pulse" style="animation-delay: 1s;" />
    
    <div class="absolute top-1/2 left-8 transform -translate-y-1/2">
      <div class="flex flex-col gap-1">
        <div class="w-2 h-[1px] bg-default" />
        <div class="w-1 h-[1px] bg-muted" />
        <div class="w-3 h-[1px] bg-default" />
      </div>
    </div>
    
    <div class="absolute top-1/2 right-8 transform -translate-y-1/2">
      <div class="flex flex-col gap-1">
        <div class="w-2 h-[1px] bg-default" />
        <div class="w-1 h-[1px] bg-muted" />
        <div class="w-3 h-[1px] bg-default" />
      </div>
    </div>
  </UApp>
</template>

<style scoped>
.font-mono {
  font-family: 'JetBrains Mono', monospace;
}
</style>
