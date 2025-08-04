<template>
  <nav id="navBar" class="fixed top-0 right-0 left-0 lg:left-96 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-30 border-b border-gray-200 dark:border-gray-800">
    <div class="px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          <span class="block w-6 h-0.5 bg-current mb-1"></span>
          <span class="block w-6 h-0.5 bg-current mb-1"></span>
          <span class="block w-6 h-0.5 bg-current"></span>
        </button>

        <!-- Logo/Name for mobile -->
        <div class="lg:hidden">
          <h1 class="text-lg font-bold">{{ config.personal.name }}</h1>
        </div>

        <!-- Navigation Links -->
        <div class="hidden lg:flex space-x-8">
          <a v-for="section in sections" :key="section.id"
             @click="scrollToSection(section.id)"
             class="text-sm font-medium hover:text-dev-accent transition-colors cursor-pointer"
             :class="{ 'text-dev-accent': activeSection === section.id }">
            {{ section.name }}
          </a>
        </div>

        <!-- Theme Toggle -->
        <ThemeToggle />
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileMenuOpen" class="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div class="px-6 py-4 space-y-2">
        <a v-for="section in sections" :key="section.id"
           @click="scrollToSection(section.id); mobileMenuOpen = false"
           class="block py-2 text-sm font-medium hover:text-dev-accent transition-colors cursor-pointer"
           :class="{ 'text-dev-accent': activeSection === section.id }">
          {{ section.name }}
        </a>
      </div>
    </div>
  </nav>

  <!-- Mobile Profile Panel -->
  <MobileProfilePanel 
    :showMobileProfile="showMobileProfile" 
    @close="showMobileProfile = false" 
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
import MobileProfilePanel from './MobileProfilePanel.vue';
import portfolioConfig from '../config/portfolio.js';

const config = computed(() => portfolioConfig);

const mobileMenuOpen = ref(false);
const showMobileProfile = ref(false);
const activeSection = ref('experience');

const sections = [
  { id: 'experience', name: 'Experience' },
  { id: 'qualifications', name: 'Qualifications' },
  { id: 'projects', name: 'Projects' }
];

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function toggleMobileProfile() {
  showMobileProfile.value = !showMobileProfile.value;
}

function getNavBarHeight() {
  const navBar = document.getElementById('topPad');
  if (navBar) {
    return navBar.offsetHeight; // Most commonly used for layout calculations
  }
  return 0;
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  const navHeight = getNavBarHeight(); // Dynamic height calculation
  console.log(`Scrolling to section: ${sectionId}, Nav Height: ${navHeight}`);
  if (element) {
    const elementPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

function updateActiveSection() {
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section.id);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section.id;
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
});
</script>
