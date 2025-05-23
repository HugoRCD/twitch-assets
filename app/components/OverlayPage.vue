<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  subtitle?: string
  title: string
  showTags?: boolean
  showChat?: boolean
  chatClass?: string
  showTechStack?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showTags: true,
  showChat: false,
  chatClass: 'h-[70%] w-[500px]',
  showTechStack: true
})

const techStack = [
  { icon: 'i-simple-icons-nuxtdotjs', name: 'NUXT', color: 'text-primary', isPrimary: true },
  { icon: 'i-simple-icons-vuedotjs', name: 'VUE', color: 'text-green-400' },
  { icon: 'i-simple-icons-tailwindcss', name: 'TAILWIND', color: 'text-cyan-400' },
  { icon: 'i-simple-icons-raycast', name: 'RAYCAST', color: 'text-orange-400' }
]

const primaryTech = computed(() => techStack.find(tech => tech.isPrimary))
const secondaryTechs = computed(() => techStack.filter(tech => !tech.isPrimary))

const glitchTrigger = ref(false)

onMounted(() => {
  const interval = setInterval(() => {
    glitchTrigger.value = true
    setTimeout(() => {
      glitchTrigger.value = false
    }, 200)
  }, 8000)
  
  onUnmounted(() => clearInterval(interval))
})
</script>

<template>
  <NuxtLayout name="overlay">
    <div class="absolute inset-0 opacity-[0.02]">
      <div class="w-full h-full" style="background-image: linear-gradient(rgba(var(--ui-text-dimmed), 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--ui-text-dimmed), 0.3) 1px, transparent 1px); background-size: 20px 20px;" />
    </div>
    <div class="pointer-events-none fixed inset-0 z-40 size-full overflow-hidden">
      <div class="noise pointer-events-none absolute inset-[-200%] z-50 size-[400%] bg-[url('/noise.png')] opacity-[2%]" />
    </div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <Motion
        v-if="showTechStack && primaryTech"
        class="absolute top-1/2 right-12 transform -translate-y-1/2"
        :initial="{ opacity: 0, x: 50, filter: 'blur(10px)' }"
        :animate="{ opacity: 1, x: 0, filter: 'blur(0px)' }"
        :transition="{ duration: 1.5, ease: 'easeOut', delay: 2.5 }"
      >
        <div class="flex flex-col gap-6">
          <Motion
            class="flex items-center gap-3 mb-2"
            :animate="{ opacity: [0.6, 1, 0.6] }"
            :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
          >
            <div class="w-6 h-[1px] bg-muted" />
            <span class="text-xs font-mono text-muted tracking-widest">TECH STACK</span>
            <div class="w-6 h-[1px] bg-muted" />
          </Motion>

          <Motion
            class="relative"
            :animate="{ scale: [0.98, 1.02, 0.98] }"
            :transition="{ duration: 6, repeat: Infinity, ease: 'easeInOut' }"
          >
            <div class="relative">
              <Motion
                class="absolute inset-0 border border-primary opacity-40"
                :animate="{ opacity: [0.3, 0.6, 0.3] }"
                :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
              />
              
              <div class="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary" />
              <div class="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-primary" />
              <div class="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary" />
              <div class="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary" />
              
              <div class="p-3 relative flex items-center justify-center">
                <Motion
                  :class="`opacity-30 ${primaryTech.color}`"
                  :animate="{ opacity: [0.25, 0.45, 0.25] }"
                  :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut' }"
                >
                  <UIcon :name="primaryTech.icon" class="text-[60px] drop-shadow-[0_0_15px_rgba(var(--ui-primary),0.4)]" />
                </Motion>
                 
                <Motion
                  class="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
                  :animate="{ scaleX: [0.6, 1.4, 0.6] }"
                  :transition="{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }"
                />
              </div>
            </div>
          </Motion>

          <div class="grid grid-cols-3 gap-3">
            <Motion
              v-for="(tech, index) in secondaryTechs"
              :key="tech.name"
              class="relative"
              :animate="{ scale: [0.95, 1.05, 0.95] }"
              :transition="{ duration: 4 + (index * 0.5), repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }"
            >
              <div class="relative group">
                <Motion
                  class="absolute inset-0 border border-muted opacity-25"
                  :animate="{ opacity: [0.15, 0.35, 0.15] }"
                  :transition="{ duration: 3 + (index * 0.2), repeat: Infinity, ease: 'easeInOut' }"
                />
                
                <div class="absolute -top-0.5 -left-0.5 w-2 h-2 border-l border-t border-highlighted" />
                <div class="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-r border-b border-highlighted" />
                
                <div class="p-2 relative">
                  <Motion
                    :class="`opacity-25 ${tech.color}`"
                    :animate="{ opacity: [0.2, 0.4, 0.2] }"
                    :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }"
                  >
                    <UIcon :name="tech.icon" class="text-[32px]" />
                  </Motion>
                  
                  <Motion
                    class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    :animate="{ opacity: [0.3, 0.6, 0.3] }"
                    :transition="{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }"
                  >
                    <span class="text-[10px] font-mono text-muted tracking-widest">{{ tech.name }}</span>
                  </Motion>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </Motion>

      <Motion
        class="absolute top-20 right-20 w-16 h-16 border border-muted opacity-20"
        :animate="{ 
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }"
        :transition="{ 
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }"
      >
        <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-primary transform -translate-x-1/2 -translate-y-1/2" />
      </Motion>

      <Motion
        class="absolute bottom-20 left-20 w-12 h-12 border border-muted opacity-20"
        :animate="{ 
          rotate: [360, 0],
          opacity: [0.1, 0.3, 0.1]
        }"
        :transition="{ 
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }"
      >
        <div class="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary" />
        <div class="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary" />
      </Motion>

      <Motion
        v-for="i in 6"
        :key="`diagonal-${i}`"
        class="absolute border-t border-muted opacity-30"
        :style="{
          width: '200px',
          left: `${10 + i * 15}%`,
          top: `${20 + i * 10}%`,
          transform: `rotate(${35 + i * 10}deg)`
        }"
        :animate="{ 
          opacity: [0.1, 0.5, 0.1],
          scaleX: [0.8, 1.2, 0.8]
        }"
        :transition="{ 
          duration: 3 + (i * 0.2),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.3
        }"
      />

      <Motion
        v-for="i in 4"
        :key="`corner-element-${i}`"
        class="absolute w-8 h-8 border border-muted"
        :style="{
          left: i % 2 === 0 ? '10%' : '85%',
          top: i < 2 ? '15%' : '80%',
          transform: 'rotate(45deg)'
        }"
        :animate="{ 
          rotate: [45, 135, 45],
          opacity: [0.3, 0.8, 0.3]
        }"
        :transition="{ 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.5
        }"
      >
        <div class="absolute top-1/2 left-1/2 w-1 h-1 bg-primary transform -translate-x-1/2 -translate-y-1/2" />
      </Motion>

      <Motion
        class="absolute left-8 top-1/4 transform -translate-y-1/2"
        :animate="{ x: [-5, 5, -5] }"
        :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
      >
        <div class="flex flex-col gap-4">
          <Motion
            class="flex items-center gap-2"
            :animate="{ opacity: [0.5, 1, 0.5] }"
            :transition="{ duration: 2, repeat: Infinity }"
          >
            <div class="w-8 h-[1px] bg-default" />
            <Motion
              class="w-2 h-2 border border-muted rotate-45"
              :animate="{ rotate: [45, 135, 45] }"
              :transition="{ duration: 3, repeat: Infinity, ease: 'easeInOut' }"
            />
            <div class="w-4 h-[1px] bg-muted" />
          </Motion>
          <Motion
            class="flex items-center gap-2"
            :animate="{ opacity: [0.3, 0.9, 0.3] }"
            :transition="{ duration: 2.5, repeat: Infinity, delay: 0.5 }"
          >
            <div class="w-6 h-[1px] bg-muted" />
            <Motion
              class="w-1 h-1 bg-highlighted"
              :animate="{ scale: [1, 1.5, 1] }"
              :transition="{ duration: 1.5, repeat: Infinity }"
            />
            <div class="w-8 h-[1px] bg-default" />
          </Motion>
          <Motion
            class="flex items-center gap-2"
            :animate="{ opacity: [0.4, 1, 0.4] }"
            :transition="{ duration: 3, repeat: Infinity, delay: 1 }"
          >
            <div class="w-12 h-[1px] bg-default" />
            <div class="w-2 h-2 border border-default rotate-45" />
          </Motion>
        </div>
      </Motion>

      <Motion
        class="absolute right-8 bottom-1/4 transform translate-y-1/2"
        :animate="{ x: [5, -5, 5] }"
        :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
      >
        <div class="flex flex-col gap-4">
          <Motion
            class="flex items-center gap-2 justify-end"
            :animate="{ opacity: [0.4, 1, 0.4] }"
            :transition="{ duration: 2.2, repeat: Infinity }"
          >
            <div class="w-4 h-[1px] bg-muted" />
            <Motion
              class="w-1 h-1 bg-highlighted"
              :animate="{ scale: [1, 1.8, 1] }"
              :transition="{ duration: 1.8, repeat: Infinity }"
            />
            <div class="w-6 h-[1px] bg-default" />
          </Motion>
          <Motion
            class="flex items-center gap-2 justify-end"
            :animate="{ opacity: [0.5, 1, 0.5] }"
            :transition="{ duration: 2.8, repeat: Infinity, delay: 0.3 }"
          >
            <Motion
              class="w-2 h-2 border border-muted rotate-45"
              :animate="{ rotate: [45, -45, 45] }"
              :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
            />
            <div class="w-8 h-[1px] bg-default" />
          </Motion>
          <Motion
            class="flex items-center gap-2 justify-end"
            :animate="{ opacity: [0.3, 0.9, 0.3] }"
            :transition="{ duration: 3.5, repeat: Infinity, delay: 0.7 }"
          >
            <div class="w-12 h-[1px] bg-muted" />
            <div class="w-1 h-1 bg-highlighted" />
          </Motion>
        </div>
      </Motion>

      <Motion
        v-for="i in 12" 
        :key="`indicator-${i}`"
        class="absolute w-1 h-1 bg-highlighted"
        :style="{
          left: `${15 + (i * 6)}%`,
          top: `${20 + (i % 3) * 20}%`
        }"
        :animate="{ 
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5]
        }"
        :transition="{ 
          duration: 2,
          delay: i * 0.15,
          repeat: Infinity,
          ease: 'easeInOut'
        }"
      />

      <Motion
        class="absolute top-16 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-muted to-transparent"
        :animate="{ opacity: [0.3, 1, 0.3] }"
        :transition="{ duration: 3, repeat: Infinity }"
      >
        <Motion
          class="w-4 h-[3px] bg-highlighted -translate-y-[1px]"
          :animate="{ x: [0, 128, 0] }"
          :transition="{ 
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity
          }"
        />
      </Motion>
      
      <Motion
        class="absolute bottom-16 right-1/4 w-32 h-[1px] bg-gradient-to-l from-transparent via-muted to-transparent"
        :animate="{ opacity: [0.4, 1, 0.4] }"
        :transition="{ duration: 3.5, repeat: Infinity }"
      >
        <Motion
          class="w-4 h-[3px] bg-highlighted -translate-y-[1px] ml-auto"
          :animate="{ x: [0, -128, 0] }"
          :transition="{ 
            duration: 3.5,
            ease: 'easeInOut',
            repeat: Infinity
          }"
        />
      </Motion>

      <Motion
        v-for="i in 6"
        :key="`floating-${i}`"
        class="absolute w-2 h-2 border border-primary rotate-45"
        :style="{
          left: `${10 + (i * 15)}%`,
          top: `${70 + (i % 2) * 15}%`
        }"
        :animate="{ 
          y: [-10, 10, -10],
          rotate: [45, 135, 45],
          opacity: [0.3, 0.8, 0.3]
        }"
        :transition="{ 
          duration: 2.5 + (i * 0.3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.4
        }"
      />
    </div>

    <Motion
      class="absolute top-6 left-6 z-20"
      :initial="{ opacity: 0, x: -50, filter: 'blur(10px)' }"
      :animate="{ 
        opacity: 1, 
        x: 0, 
        filter: 'blur(0px)',
        ...(glitchTrigger ? { 
          x: [0, -2, 2, 0], 
          textShadow: ['0 0 0 transparent', '2px 0 0 #ff0000, -2px 0 0 #00ffff', '0 0 0 transparent'] 
        } : {})
      }"
      :transition="{ 
        duration: glitchTrigger ? 0.1 : 1.5, 
        ease: 'easeOut',
        ...(glitchTrigger ? { repeat: 3 } : {})
      }"
    >
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Motion
            class="w-3 h-3 border border-muted rotate-45"
            :animate="{ rotate: [45, 225, 45] }"
            :transition="{ duration: 4, repeat: Infinity }"
          />
          <div class="w-12 h-[1px] bg-default" />
          <Motion
            class="w-1 h-1 bg-highlighted"
            :animate="{ scale: [1, 2, 1] }"
            :transition="{ duration: 2, repeat: Infinity }"
          />
        </div>
        <span class="text-sm font-mono text-muted tracking-widest uppercase">STREAM STATUS</span>
        <div class="flex items-center gap-2">
          <Motion
            class="w-1 h-1 bg-highlighted"
            :animate="{ scale: [1, 2, 1] }"
            :transition="{ duration: 2, repeat: Infinity, delay: 0.5 }"
          />
          <div class="w-12 h-[1px] bg-default" />
          <Motion
            class="w-3 h-3 border border-muted rotate-45"
            :animate="{ rotate: [45, -135, 45] }"
            :transition="{ duration: 4, repeat: Infinity }"
          />
        </div>
      </div>
    </Motion>

    <div class="relative z-10 size-full flex items-center">
      <div class="ml-6 flex flex-col max-w-7xl">
        <Motion
          v-if="subtitle"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            ...(glitchTrigger ? { 
              x: [0, -3, 3, 0], 
              filter: ['blur(0px)', 'blur(1px)', 'blur(0px)'],
              textShadow: ['0 0 0 transparent', '1px 0 0 #ff0000, -1px 0 0 #00ffff', '0 0 0 transparent'] 
            } : {})
          }"
          :transition="{ 
            duration: glitchTrigger ? 0.15 : 0.8, 
            ease: 'easeOut', 
            delay: glitchTrigger ? 0 : 0.3,
            ...(glitchTrigger ? { repeat: 2 } : {})
          }"
        >
          <div class="flex items-center gap-3 mb-1">
            <div class="w-2 h-[1px] bg-muted" />
            <span class="text-3xl text-muted">{{ subtitle }}</span>
          </div>
        </Motion>

        <Motion
          :initial="{ 
            opacity: 0, 
            y: 30,
            filter: 'blur(15px)'
          }"
          :animate="{ 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            ...(glitchTrigger ? { 
              x: [0, -4, 4, -2, 2, 0], 
              filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
              textShadow: ['0 0 0 transparent', '3px 0 0 #ff0000, -3px 0 0 #00ffff', '0 0 0 transparent'],
              scaleX: [1, 1.02, 0.98, 1]
            } : {})
          }"
          :transition="{ 
            duration: glitchTrigger ? 0.2 : 1.2, 
            ease: 'easeOut', 
            delay: glitchTrigger ? 0 : 0.6,
            ...(glitchTrigger ? { repeat: 1 } : {})
          }"
        >
          <div class="relative">
            <MDC tag="h1" class="text-6xl leading-tight" :value="title" />
            <Motion
              class="absolute -bottom-4 left-0 h-[3px] bg-primary"
              :initial="{ width: 0, filter: 'blur(5px)' }"
              :animate="{ 
                width: '200px', 
                filter: 'blur(0px)',
                ...(glitchTrigger ? { 
                  scaleX: [1, 1.1, 0.9, 1],
                  filter: ['blur(0px)', 'blur(1px)', 'blur(0px)']
                } : {})
              }"
              :transition="{ 
                duration: glitchTrigger ? 0.1 : 1, 
                ease: 'easeOut', 
                delay: glitchTrigger ? 0 : 1.2,
                ...(glitchTrigger ? { repeat: 3 } : {})
              }"
            />
          </div>
        </Motion>

        <Motion
          v-if="showTags"
          :initial="{ opacity: 0, y: 20, filter: 'blur(10px)' }"
          :animate="{ 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            ...(glitchTrigger ? { 
              x: [0, -1, 1, 0],
              filter: ['blur(0px)', 'blur(0.5px)', 'blur(0px)']
            } : {})
          }"
          :transition="{ 
            duration: glitchTrigger ? 0.1 : 0.8, 
            ease: 'easeOut', 
            delay: glitchTrigger ? 0 : 1.8,
            ...(glitchTrigger ? { repeat: 2 } : {})
          }"
        >
          <div class="flex items-center gap-3 mt-6">
            <div class="w-4 h-[1px] bg-muted" />
            <Motion
              class="w-1 h-1 bg-highlighted"
              :animate="{ scale: [1, 1.5, 1] }"
              :transition="{ duration: 2, repeat: Infinity }"
            />
            <Tags />
          </div>
        </Motion>
      </div>

      <Motion
        v-if="showChat"
        class="absolute right-12 top-1/2 transform -translate-y-1/2"
        :initial="{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }"
        :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 1.5, ease: 'easeOut', delay: 2 }"
      >
        <div class="relative">
          <div class="absolute inset-0 -m-4">
            <Motion
              class="w-full h-full border border-default relative"
              :animate="{ opacity: [0.5, 1, 0.5] }"
              :transition="{ duration: 3, repeat: Infinity }"
            >
              <div class="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary" />
              <div class="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-primary" />
              <div class="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-primary" />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary" />
            </Motion>
          </div>
          <Chat :class="chatClass" />
        </div>
      </Motion>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.font-mono {
  font-family: 'JetBrains Mono', monospace;
}
</style> 
