<template>
  <div class="bg-black text-gray-100">
    <Navbar />
    <main class="py-[4rem] flex justify-center items-center">
      <div class="space-y-[4rem] max-w-[80vw]">
        <div class="flex justify-start items-center space-x-[2rem]">
          <div class="hover-scale relative w-[16rem] h-[16rem] overflow-hidden rounded-2xl border-2 border-gray-400">
            <img src="./assets/imgs/profile.jpg" alt="Profile Image" class="absolute top-5 object-cover scale-150" />
          </div>
          <div class="space-y-4">
            <h1 class="text-5xl font-bold bg-gradient-accent-primary bg-clip-text text-transparent">
              Sarawut Bunmee
            </h1>
            <h2 class="text-xl text-gray-400">
              Front-End Developer / Full Stack Developer
            </h2>
            <p>
              Passionate Front-End Developer with experience in creating user-friendly web applications. <br>
              Proficient in HTML, CSS, JavaScript, Vue, Nuxt, React and Next.js.
              Eager to learn new skills and contribute effectively to team projects, <br>
              delivering high-quality solutions that meet user needs.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2">
          <div class="space-y-[1.5rem]">
            <h2 class="text-3xl font-bold uppercase">
              education
            </h2>
            <div class="flex space-x-[1rem]">
              <div class="hover-scale bg-blackMute rounded-lg py-4 px-6 w-fit">
                <p class="text-accent font-semibold text-lg">
                  University of Phayao
                </p>
                <p class="font-medium text-md text-gray-100">
                  Bachelor of Engineering
                </p>
                <p class="text-gray-100">
                  2019
                </p>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-4 px-6 w-fit">
                <p class="text-accent font-semibold text-lg">
                  Maesai Prasitsart School
                </p>
                <p class="font-medium text-md text-gray-100">
                  Science and Mathematics
                </p>
                <p class="text-gray-100">
                  2013
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-[1.5rem]">
            <h2 class="text-3xl font-bold uppercase">
              hobbies and
              interests
            </h2>
            <div class="flex flex-wrap gap-[1rem]">
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-code" class="text-blue-400" />
                <span>Learning New Programming Skills</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-podcast" class="text-blue-400" />
                <span>Listening to Podcasts</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-microchip" class="text-blue-400" />
                <span>Reading Tech Articles</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-gamepad" class="text-blue-400" />
                <span>Gaming</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-guitar" class="text-blue-400" />
                <span>Playing an instrument</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg py-2 px-4 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-music" class="text-blue-400" />
                <span>Listening to Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'

import { onMounted } from 'vue';

onMounted(() => {
  document.title = "Sarawut Bunmee - Portfolio";
});
</script>