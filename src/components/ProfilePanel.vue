<template>
  <div class="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl z-40 hidden lg:block">
    <!-- Profile Image -->
    <div class="flex flex-col h-full items-center justify-center text-center">
      <div class="px-8 py-4 text-center">
        <div class="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-dev-accent to-sewing-tin-accent mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {{ initials }}
        </div>
        <h2 class="text-2xl font-bold mb-2">{{ config.personal.name }}</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-2">{{ config.personal.title }}</p>
        <div class="flex items-center justify-center mb-4">
          <i class="bi bi-geo-alt-fill"></i> <span class="text-sm ms-2">{{ config.personal.location }}</span>
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
        <div class="flex items-center justify-center space-x-3">
          <a v-for="social in config.socialLinks" :key="social.platform"
             :href="social.url" target="_blank" :download="social.platform === 'resume'?fileName : null"
             class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-500 flex items-center justify-center hover:bg-dev-accent hover:text-white transition-colors">
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
      <!-- Skills -->
      <div class="px-8 pt-8">
        <h3 class="font-semibold mb-4">Core Skills</h3>
        <div class="flex flex-wrap gap-2 justify-center">
          <span v-for="skill in config.coreSkills" :key="skill"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
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
