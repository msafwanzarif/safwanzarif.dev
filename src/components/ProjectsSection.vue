<template>
  <section id="projects" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-16 h-16 bg-dev-accent dark:bg-dev-text rounded-lg animate-spin"></div>
      <div class="absolute bottom-10 right-10 w-20 h-20 bg-sewing-tin-accent rounded-full animate-pulse"></div>
      <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-dev-accent/50 rounded-full animate-bounce"></div>
    </div>

    <div class="container py-16 mx-auto px-6 lg:px-12 relative z-10">
      <div class="text-center mb-16" data-scroll-animation="fade-up" data-scroll-reverse="true">
        <h2 class="text-4xl lg:text-6xl font-bold mb-6">
          Featured 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-dev-accent to-sewing-tin-accent dark:to-dev-text">
            Projects
          </span>
        </h2>
      </div>

      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-8">
          <div v-for="(project, index) in config.projects" :key="index" 
               class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               :data-scroll-animation="`fade-up-${index % 3}`"
               data-scroll-reverse="true">
            
            <!-- Project Image/Preview -->
            <div class="relative h-48 bg-gradient-to-br from-dev-accent/20 to-sewing-tin-accent/20 flex items-center justify-center overflow-hidden">
              <!-- Project Image -->
              <img v-if="project.image" 
                   :src="project.image" 
                   :alt="`${project.title} screenshot`"
                   class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              
              <!-- Fallback Icon if no image -->
              <div v-else class="text-6xl opacity-60">{{ project.icon }}</div>
              
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <!-- Live/GitHub Links -->
              <div class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank"
                   class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100/75 dark:bg-gray-800/75 dark:hover:bg-gray-500 text-dev-accent hover:bg-dev-accent hover:text-white transition-colors">
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                   class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100/75 dark:bg-gray-800/75 dark:hover:bg-gray-500 text-dev-accent hover:bg-dev-accent hover:text-white transition-colors">
                  <i class="bi bi-git text-dev-accent"></i>
                </a>
              </div>
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-xl font-bold group-hover:text-dev-accent transition-colors">
                  {{ project.title }}
                </h3>
                <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                  {{ project.status }}
                </span>
              </div>
              
              <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ project.description }}
              </p>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech,index) in project.technologies" :key="index"
                      class="px-2 py-1 bg-dev-accent/10 text-dev-accent rounded text-xs font-medium">
                  {{ tech }}
                </span>
              </div>

              <!-- Project Stats -->
              <div v-if="project.stats" class="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div v-for="(stat, key) in project.stats" :key="key" class="text-center">
                  <div class="text-sm font-bold">{{ stat }}</div>
                  <div class="text-xs text-gray-500 capitalize">{{ key }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Projects CTA -->
        <div class="text-center mt-16" data-scroll-animation="fade-up" data-scroll-reverse="true">
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a :href="config.socialLinks.github" target="_blank"
             class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-dev-accent to-sewing-tin-accent text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <span class="mr-2">📁</span>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import portfolioConfig from '../config/portfolio.js'

const config = computed(() => portfolioConfig)

// Handle image loading errors
const handleImageError = (event) => {
  // Hide the broken image and show fallback icon
  const img = event.target
  const container = img.parentElement
  img.style.display = 'none'
  
  // Create fallback icon element
  const fallback = document.createElement('div')
  fallback.className = 'text-6xl opacity-60'
  fallback.textContent = container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('E-Commerce') ? '🛒' : 
                         container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('Task') ? '📋' :
                         container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('Weather') ? '🌤️' :
                         container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('Social') ? '📱' :
                         container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('AI') ? '🤖' :
                         container.closest('[data-scroll-animation]').querySelector('h3').textContent.includes('Blockchain') ? '🗳️' : '📁'
  
  container.appendChild(fallback)
}

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
