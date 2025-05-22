<script setup lang="ts">
import { AnimateNumber } from 'motion-plus-vue'

const { nbViewers = 0 } = defineProps<{
  nbViewers: number
}>()
</script>

<template>
  <UBadge color="error" variant="soft" size="lg">
    <span class="relative flex size-2 mr-1">
      <span class="absolute inline-flex size-full rounded-full opacity-75 bg-error animate-ping" />
      <span class="relative inline-flex size-2 scale-90 rounded-full bg-error" />
    </span>
    <AnimateNumber :value="nbViewers" />
    <span>
      viewers
    </span>
  </UBadge>
</template>
