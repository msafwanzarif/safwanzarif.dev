<template>
  <div class="fixed left-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-xl z-40 hidden lg:block overflow-y-auto">
    <!-- Profile Image -->
    <div class="flex flex-col h-full items-center justify-center text-center">
      <div class="px-8 py-4  text-center">
        <div class="w-28 h-28 2xl:w-40 2xl:h-40 mx-auto rounded-full bg-gradient-to-br from-dev-accent to-sewing-tin-accent mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {{ initials }}
        </div>
        <h2 class="text-xl 2xl:text-2xl font-bold mb-2 text-dev-accent">{{ config.personal.name }}</h2>
        <p class="text-base 2xl:text-xl text-gray-600 dark:text-gray-400 mb-2">{{ config.personal.title }}</p>
        <div class="flex items-center justify-center mb-4 text-xs 2xl:text-sm">
          <i class="bi bi-geo-alt-fill"></i> <span class=" ms-2">{{ config.personal.location }}</span>
        </div>
        <p class="2xl:mt-12 text-xs 2xl:text-sm text-gray-500 dark:text-gray-500 leading-relaxed" v-html="config.personal.bio"></p>
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
        <div class="flex items-center justify-center space-x-3 2xl:my-8">
          <a v-for="social in config.socialLinks" :key="social.platform"
             :href="social.url" target="_blank" :download="social.platform === 'resume'?fileName : null"
             :title="social.platform === 'resume' ? 'Download Resume' : `Visit my ${social.platform}`"
             class="relative w-8 h-8 2xl:w-12 2xl:h-12 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-500  flex items-center justify-center text-dev-accent hover:bg-dev-accent hover:text-white transition-colors group">
            <i :class="social.icon" class="text-sm 2xl:text-xl "></i>
            
            <!-- Tooltip -->
            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {{ social.platform === 'resume' ? 'Download Resume' : social.platform }}
              <div class="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </a>
        </div>
      </div>
      <!-- Skills -->
      <div class="px-8 pt-5">
        <h3 class="font-semibold mb-4 text-md 2xl:text-lg">Core Skills</h3>
        <div class="flex flex-wrap gap-2 justify-center">
          <span v-for="skill in config.coreSkills" :key="skill"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-[0.625rem] 2xl:text-xs text-dev-accent">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioConfig } from '../config/portfolio.js'

const config = portfolioConfig

const fileName = `Resume of - ${config.personal.name}.pdf`

const initials = computed(() => config.personal.name.split(' ').map(n => n[0]).join(''));
</script>
