<script setup lang="ts">
defineProps<{
  test: string
}>()
</script>

<template>
  <div>
    Hello {{ test }}
  </div>
</template>
