<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <NuxtLayout>
    <div ref="containerRef" class="flex-1 flex items-center p-18">
      <div class="flex flex-col gap-2">
        <span class="text-2xl text-muted">
          À la prochaine !
        </span>
        <h1 class="text-5xl">
          Le stream est fini <span class="font-serif italic">merci pour votre participation</span><span class="text-primary">.</span>
        </h1>
        <Tags />
      </div>
    </div>
  </NuxtLayout>
</template>
