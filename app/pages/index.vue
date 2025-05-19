<script setup lang="ts">
const { data: stream } = await useFetch('/api/stream')
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <div class="text-2xl font-bold">
        {{ stream.user.display_name }}
      </div>
    </div>
    <pre class="text-xs">
        {{ stream }}
    </pre>
  </div>
</template>
