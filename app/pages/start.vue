<script setup lang="ts">
const { stream } = useStream()

const subtitle = computed(() => {
  return stream.value?.stream?.title || 'Initialisation du stream...'
})

const title = 'Le stream va démarrer dans <span class="font-serif italic">quelques secondes</span><span class="text-primary">.</span>'
</script>

<template>
  <OverlayPage
    :subtitle
    :title
  />
</template>
