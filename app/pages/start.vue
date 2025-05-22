<script setup lang="ts">
const { stream } = useStream()

const tags = [
  'Nuxt',
  'Vue',
  'Tailwind',
  'TypeScript',
  'Raycast'
]
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 flex items-center p-18">
      <div class="flex flex-col gap-2">
        <span v-if="stream && stream.stream" class="text-2xl text-muted">
          {{ stream.stream.title }}
        </span>
        <span class="text-5xl">
          Le stream va démarrer dans <span class="font-serif italic">quelques secondes</span><span class="text-primary">.</span>
        </span>
        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in tags" :key="tag" class="text-muted border border-default px-2 py-0.5">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
