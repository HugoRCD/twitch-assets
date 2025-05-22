<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 w-full flex items-center">
      <div class="ml-12 flex flex-col w-full gap-2">
        <span v-if="stream && stream.stream" class="text-2xl text-muted">
          {{ stream.stream.title }}
        </span>
        <span v-else class="text-2xl text-muted">
          Initialisation du stream...
        </span>
        <h1 class="text-5xl">
          Le stream va démarrer dans <span class="font-serif italic">quelques secondes</span><span class="text-primary">.</span>
        </h1>
        <Tags />
      </div>
      <!-- <div class="flex flex-col items-center justify-center">
        <Chat class="w-[500px]" />
      </div> -->
    </div>
  </NuxtLayout>
</template>
