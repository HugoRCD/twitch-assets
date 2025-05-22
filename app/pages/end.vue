<script setup lang="ts">
const { stream } = useStream()
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 w-full flex items-center">
      <div class="ml-12 flex flex-col w-full gap-2">
        <span class="text-2xl text-muted">
          À la prochaine !
        </span>
        <h1 class="text-5xl">
          Le stream est fini <span class="font-serif italic">merci pour votre participation</span><span class="text-primary">.</span>
        </h1>
        <Tags />
      </div>
      <!-- <div class="flex flex-col items-center justify-center">
        <Chat class="h-[70%] w-[500px]" />
      </div> -->
    </div>
  </NuxtLayout>
</template>
