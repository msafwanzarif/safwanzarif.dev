<template>
  <!-- Mobile Profile Panel (Hidden by default, shown when menu is toggled) -->
  <div v-show="showMobileProfile" 
       class="fixed inset-0 bg-black/50 z-50 lg:hidden"
       @click="closeMobileProfile">
    <div class="fixed left-0 top-0 h-full w-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 overflow-y-scroll"
         :class="{ 'translate-x-0': showMobileProfile, '-translate-x-full': !showMobileProfile }"
         @click.stop>
      
      <!-- Close Button -->
      <button @click="closeMobileProfile" 
              class="absolute top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
        ✕
      </button>

      <!-- Profile Content (Same as desktop) -->
      <div class="p-8 text-center">
        <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-dev-accent to-sewing-tin-accent mb-4 flex items-center justify-center text-white text-4xl font-bold">
          {{ initials }}
        </div>
        <h2 class="text-2xl font-bold mb-2">{{ config.personal.name }}</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">{{ config.personal.title }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">{{ config.personal.bio }}</p>
      </div>

      <!-- Contact Info -->
      <div class="px-8 space-y-4">
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
        <div class="flex space-x-3 pt-4">
          <a v-for="social in config.socialLinks" :key="social.platform" 
             :href="social.url" target="_blank"
             class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-dev-accent hover:text-white transition-colors">
            {{ social.icon }}
          </a>
        </div>
      </div>

      <!-- Skills -->
      <div class="px-8 pt-8">
        <h3 class="font-semibold mb-4">Core Skills</h3>
        <div class="flex flex-wrap gap-2">
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
import { defineEmits, computed } from 'vue';
import portfolioConfig from '../config/portfolio.js';

const emit = defineEmits(['close']);
const config = computed(() => portfolioConfig);

const props = defineProps({
  showMobileProfile: { type: Boolean, default: false }
});

const initials = computed(() => {
  return config.value.personal.name.split(' ').map(n => n[0]).join('');
});

function closeMobileProfile() {
  emit('close');
}
</script>
