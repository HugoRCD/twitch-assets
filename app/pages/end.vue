<script setup lang="ts">
const { stream } = useStream()

const subtitle = 'À la prochaine !'
const title = 'Le stream est fini <span class="font-serif italic">merci pour votre participation</span><span class="text-primary">.</span>'
</script>

<template>
  <OverlayPage
    :subtitle
    :title
  />
</template>
