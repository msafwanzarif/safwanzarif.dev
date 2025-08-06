<template>
  <!-- Mobile Profile Panel (Hidden by default, shown when menu is toggled) -->
  <div class="bg-black/50 z-50 lg:hidden" id="profile">
    <div
      class="h-full w-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 min-h-[92vh]">
      <div class="flex flex-col h-full items-center text-center pt-[10vh]" data-scroll-animation="fade-up" data-scroll-reverse="true">

        <!-- Profile Content (Same as desktop) -->
        <div class="p-8 text-center">
          <div
            class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-dev-accent to-sewing-tin-accent mb-4 flex items-center justify-center text-white text-4xl font-bold">
            {{ initials }}
          </div>
          <h2 class="text-2xl font-bold mb-2 text-dev-accent">{{ config.personal.name }}</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-2">{{ config.personal.title }}</p>
          <div class="flex items-center justify-center mb-4 text-sm">
            <i class="bi bi-geo-alt-fill"></i> <span class=" ms-2">{{ config.personal.location }}</span>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-500 leading-relaxed" v-html="config.personal.bio"></p>
        </div>

        <!-- Contact Info -->
        <div class="px-8">
          <!-- <div class="space-y-2">
            <div class="flex items-center space-x-3">
              <span class="text-dev-accent dark:text-dev-accent">📧</span>
              <span class="text-sm">{{ config.personal.email }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-dev-accent dark:text-dev-accent">📱</span>
              <span class="text-sm">{{ config.personal.phone }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-dev-accent dark:text-dev-accent">📍</span>
              <span class="text-sm">{{ config.personal.location }}</span>
            </div>
                   </div> -->

          <!-- Social Links -->
          <div class="flex items-center justify-center space-x-3 mt-4">
            <a v-for="social in config.socialLinks" :key="social.platform" :href="social.url" target="_blank"
              :download="social.platform === 'resume' ? fileName : null"
              :title="social.platform === 'resume' ? 'Download Resume' : `Visit my ${social.platform}`"
              class="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-500  flex items-center justify-center text-dev-accent hover:bg-dev-accent hover:text-white transition-colors group">
              <i :class="social.icon" class="text-xl"></i>
              
              <!-- Tooltip -->
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {{ social.platform === 'resume' ? 'Download Resume' : social.platform }}
                <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
              </div>
            </a>
          </div>
        </div>

        <!-- Skills -->
        <div class="px-8 pt-8 mt-5">
          <h3 class="font-semibold mb-4">Core Skills</h3>
          <div class="flex flex-wrap gap-2 justify-center">
            <span v-for="skill in config.coreSkills" :key="skill"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs text-dev-accent">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, computed,onMounted } from 'vue'
import portfolioConfig from '../config/portfolio.js'

const emit = defineEmits(['close'])
const config = computed(() => portfolioConfig)

const fileName = `Resume of - ${portfolioConfig.personal.name}.pdf`

const initials = computed(() => {
  return config.value.personal.name.split(' ').map(n => n[0]).join('')
})

function closeMobileProfile() {
  emit('close')
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const animation = element.dataset.scrollAnimation
        const reverse = element.dataset.scrollReverse === 'true'
        
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
        
        if (animation && animation.includes('fade-up')) {
          const delay = animation.match(/fade-up-(\d+)/)?.[1] || 0
          element.style.transitionDelay = `${delay * 100}ms`
        }
      }
    })
  }, { threshold: 0.2 })

  // Observe all elements with scroll animation
  const animatedElements = document.querySelectorAll('[data-scroll-animation]')
  animatedElements.forEach((el) => {
    // Set initial state for elements with reverse animation
    if (el.dataset.scrollReverse === 'true') {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-20px)'
    } else {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
    }
    el.style.transition = 'all 0.6s ease-out'
    observer.observe(el)
  })
})
</script>
