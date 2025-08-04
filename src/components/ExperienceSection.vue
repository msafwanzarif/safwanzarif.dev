<template>
  <section id="experience" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background Animation -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-20 w-32 h-32 bg-dev-accent rounded-full animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-sewing-tin-accent rounded-full animate-bounce"></div>
    </div>

    <div class="container mx-auto py-16 px-6 lg:px-12 relative z-10">
      <div class="text-center mb-16" data-scroll-animation="fade-up" data-scroll-reverse="true">
        <h2 class="text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-6">
          Professional 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-dev-accent to-sewing-tin-accent dark:to-sewing-tin-bg">
            Experience
          </span>
        </h2>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-12">
          <div v-for="(job, index) in config.experiences" :key="index" 
               class="relative pl-8 border-l-2 border-dev-accent/30" 
               :data-scroll-animation="`delay-${index * 200}`"
               data-scroll-reverse="true">
            <!-- Timeline dot -->
            <div class="absolute -left-3 top-0 w-6 h-6 bg-dev-accent rounded-full border-4 border-white dark:border-gray-900"></div>
            
            <div class="bg-white glass dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 class="text-xl 2xl:text-2xl font-bold mb-2">{{ job.title }}</h3>
                  <p class="text-base 2xl:text-lg text-dev-accent font-semibold">{{ job.company }}</p>
                </div>
                <div class="my-3 lg:mt-0 lg:self-start">
                  <span class="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-xs 2xl:text-sm font-medium">
                    {{ job.duration }}
                  </span>
                </div>
              </div>
              
              <ul class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm lg:text-base 2xl:text-lg space-y-2">
                <li v-for="description in job.descriptions" :key="description" class="flex items-start">
                  <span class="text-dev-accent mr-2 mt-0">•</span>
                  <span v-html="description"></span>
                </li>
              </ul>
              
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in job.technologies" :key="tech"
                      class="px-3 py-1 bg-dev-accent/10 text-dev-accent rounded-full text-xs 2xl:text-sm font-medium">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import portfolioConfig from '../config/portfolio.js'

const config = computed(() => portfolioConfig)

// Initialize scroll animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const animation = element.dataset.scrollAnimation
        const reverse = element.dataset.scrollReverse === 'true'
        
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
        
        if (animation && animation.includes('delay')) {
          const delay = animation.match(/delay-(\d+)/)?.[1] || 0
          element.style.transitionDelay = `${delay}ms`
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
