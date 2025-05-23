<script setup lang="ts">
const { stream } = useStream()

const subtitle = computed(() => {
  return stream.value?.stream?.title || 'Stream en cours...'
})

const title = 'Le stream est en <span class="font-serif italic">pause</span><span class="text-primary">.</span>'
</script>

<template>
  <OverlayPage
    :subtitle
    :title
  />
</template> 
