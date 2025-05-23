<script setup lang="ts">
interface Props {
  subtitle?: string
  title: string
  showTags?: boolean
  showChat?: boolean
  chatClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  showTags: true,
  showChat: false,
  chatClass: 'h-[70%] w-[500px]'
})
</script>

<template>
  <NuxtLayout>
    <div class="flex-1 w-full flex items-center">
      <div class="ml-12 flex flex-col w-full gap-2">
        <span v-if="subtitle" class="text-2xl text-muted">
          {{ subtitle }}
        </span>
        <MDC tag="h1" class="text-5xl" :value="title" />
        <Tags v-if="showTags" />
      </div>
      <div v-if="showChat" class="flex flex-col items-center justify-center">
        <Chat :class="chatClass" />
      </div>
    </div>
  </NuxtLayout>
</template> 
