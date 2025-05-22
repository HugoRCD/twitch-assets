<template>
  <div class="flex flex-wrap gap-2 mt-4">
    <Motion
      v-for="(tag, index) in tags"
      :key="tag"
      class="text-muted border border-default px-2 py-0.5"
      :initial="{ opacity: 0, y: 10 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ 
        duration: 2,
        type: 'spring',
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 4,
        bounce: 0,
        delay: index * 0.05
      }"
    >
      {{ tag }}
    </Motion>
  </div>
</template>
