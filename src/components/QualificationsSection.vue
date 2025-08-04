<template>
  <section id="qualifications" class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-800/50">
    <!-- Background Pattern -->
    <!-- <div class="absolute inset-0 opacity-5">
      <div class="grid grid-cols-8 gap-4 h-full">
        <div v-for="i in 64" :key="i" class="bg-current rounded animate-pulse" :style="{ animationDelay: `${i * 50}ms` }"></div>
      </div>
    </div> -->

    <div class="container py-16 mx-auto px-6 lg:px-12 relative z-10">
      <div class="text-center mb-16" data-scroll-animation="fade-up" data-scroll-reverse="true">
        <h2 class="text-4xl lg:text-6xl font-bold mb-6">
          Education &
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-sewing-tin-accent dark:from-dev-text dark:to-dev-accent to-dev-accent">
            Certifications
          </span>
        </h2>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Education -->
          <div data-scroll-animation="slide-right" data-scroll-reverse="true">
            <h3 class="text-2xl font-bold mb-8 flex items-center">
              <span class="w-8 h-8 bg-gray-100 dark:bg-gray-800 border rounded-full flex items-center justify-center text-base mr-3"><i class="bi bi-mortarboard"></i></span>
              Education
            </h3>
            <div class="space-y-6">
              <div v-for="(edu, index) in config.education" :key="index" 
                   class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 class="text-lg 2xl:text-xl font-bold mb-2">{{ edu.degree }}</h4>
                <p class="text-dev-accent font-semibold text-sm 2xl:text-base mb-2">{{ edu.institution }}</p>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ edu.year }}</p>
                <p class="text-gray-700 dark:text-gray-300 mb-2 text-sm 2xl:text-base"><b>{{ edu.result }}</b></p>
                <p class="text-gray-700 dark:text-gray-300 text-sm 2xl:text-base">{{ edu.description }}</p>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div data-scroll-animation="slide-left" data-scroll-reverse="true">
            <h3 class="text-2xl font-bold mb-8 flex items-center">
              <span class="w-8 h-8 bg-gray-100 dark:bg-gray-800 border rounded-full flex items-center justify-center text-base mr-3"><i class="bi bi-patch-check"></i></span>
              Certifications
            </h3>
            <div class="space-y-6">
              <div v-for="(cert, index) in config.certifications" :key="index" 
                   class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h4 class="text-xl font-bold mb-2">{{ cert.name }}</h4>
                <p class="text-dev-accent font-semibold mb-2">{{ cert.issuer }}</p>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ cert.year }}</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in cert.skills" :key="skill"
                        class="px-3 py-1 bg-sewing-tin-accent/10 text-dev-accent rounded-full text-sm">
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Matrix -->
        <!-- <div class="mt-16" data-scroll-animation="fade-up">
          <h3 class="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="(category, index) in skillCategories" :key="index" 
                 class="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-3xl mb-4">{{ category.icon }}</div>
              <h4 class="font-bold mb-3">{{ category.name }}</h4>
              <div class="space-y-2">
                <div v-for="skill in category.skills" :key="skill.name" class="flex items-center justify-between">
                  <span class="text-sm">{{ skill.name }}</span>
                  <div class="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div class="bg-gradient-to-r from-dev-accent to-sewing-tin-accent h-2 rounded-full" 
                         :style="{ width: `${skill.level}%` }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
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
        
        if (animation === 'slide-right') {
          element.style.transform = 'translateX(0)'
        } else if (animation === 'slide-left') {
          element.style.transform = 'translateX(0)'
        } else {
          element.style.transform = 'translateY(0)'
        }
      }
    })
  }, { threshold: 0.2 })

  // Observe all elements with scroll animation
  const animatedElements = document.querySelectorAll('[data-scroll-animation]')
  animatedElements.forEach((el) => {
    const animation = el.dataset.scrollAnimation
    
    // Set initial state based on animation type
    el.style.opacity = '0'
    el.style.transition = 'all 0.6s ease-out'
    
    if (animation === 'slide-right') {
      el.style.transform = 'translateX(-50px)'
    } else if (animation === 'slide-left') {
      el.style.transform = 'translateX(50px)'
    } else {
      el.style.transform = 'translateY(20px)'
    }
    
    observer.observe(el)
  })
})
</script>
