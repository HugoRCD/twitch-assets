<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <UApp class="relative">
    <div class="pointer-events-none absolute -top-56 z-40 size-44 rounded-full opacity-50 blur-[200px] dark:bg-white dark:blur-[200px] sm:size-72" />
    <div class="pointer-events-none fixed inset-0 z-40 size-full overflow-hidden">
      <div class="noise pointer-events-none absolute inset-[-200%] z-50 size-[400%] bg-[url('/noise.png')] opacity-[4%]" />
    </div>
    <div class="flex min-h-screen flex-col p-12">
      <div class="relative flex size-full mx-auto flex-1 flex-col gap-3 border-2 border-default">
        <NbViewer :nb-viewers="stream?.stream?.viewer_count" class="absolute top-2 right-2" />
        <slot />
        <div class="flex items-center justify-center gap-2 absolute bottom-0 w-full">
          <div v-for="social in socials" :key="social.name" class="flex items-center justify-center gap-2 p-4">
            <UIcon :name="social.icon" class="size-6" />
            <span class="text-lg">
              {{ social.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </UApp>
</template>
