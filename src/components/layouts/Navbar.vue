<template>
  <nav :class="[isScrolled ? 'bg-[#000]' : 'bg-black']"
    class="z-20 fixed top-0 py-6 h-[65px] w-full flex justify-center transition-colors duration-300">
    <div class="max-w-[80vw] w-full flex justify-between items-center">
      <p><a href="#" class="hover:text-accent text-3xl font-semibold duration-300 uppercase">Portfolio</a></p>
      <ul class="flex space-x-4 uppercase">
        <li><a href="#" class="hover:text-accent transition-colors duration-300 text-lg">About</a></li>
        <li><a href="#projects" class="hover:text-accent transition-colors duration-300 text-lg">Projects</a></li>
        <li><a href="#contact" class="hover:text-accent transition-colors duration-300 text-lg">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>