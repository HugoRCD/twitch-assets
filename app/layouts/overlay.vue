<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <UApp class="relative">
    <div class="w-8 h-full absolute top-0 left-0 bg-default" />
    <div class="w-8 h-full absolute top-0 right-0 bg-default" />
    <div class="w-full h-8 absolute bottom-0 left-0 top-0 bg-default" />
    <div class="w-full h-8 absolute bottom-0 right-0 left-0 bg-default" />
    <div class="flex min-h-screen flex-col p-8 z-20">
      <div class="relative flex size-full mx-auto flex-1 flex-col gap-3 border-2 border-default">
        <NbViewer :nb-viewers="stream?.stream?.viewer_count" class="absolute top-2 right-2" />
        <div class="flex-1">
          <slot />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4 absolute bottom-0 w-full">
      <div v-for="social in socials" :key="social.name" class="flex items-center justify-center gap-1">
        <UIcon :name="social.icon" class="size-4" />
        <span class="text-lg">
          {{ social.name }}
        </span>
      </div>
    </div>
  </UApp>
</template>

<style scoped>
.clip-path {
  clip-path: rect(5px 145px 160px 5px round 20%);
}
</style>
