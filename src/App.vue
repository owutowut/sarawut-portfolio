<template>
  <div class="bg-black text-gray-100">
    <Navbar />
    <main class="py-[4rem] flex justify-center items-center">
      <div class="space-y-[3rem] max-w-[80vw]">
        <!-- profile -->
        <div class="flex justify-start items-center space-x-[2rem]">
          <div class="hover-scale relative w-[16rem] h-[16rem] overflow-hidden rounded-2xl border-2 border-gray-400">
            <img src="./assets/imgs/profile.jpg" alt="Profile Image" class="absolute top-5 object-cover scale-150" />
          </div>
          <div class="space-y-4">
            <h1>
              Sarawut Bunmee
            </h1>
            <h2 class="text-xl text-gray-400">
              Front-End Developer
            </h2>
            <p>
              Passionate Front-End Developer with experience in creating user-friendly web applications. <br>
              Proficient in HTML, CSS, JavaScript, Vue, Nuxt, React and Next.js.
              Eager to learn new skills and contribute effectively to team projects, <br>
              delivering high-quality solutions that meet user needs.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-[2rem]">
          <!-- education -->
          <div class="space-y-[1.5rem]">
            <h2>
              education
            </h2>
            <div class="flex space-x-[0.6rem]">
              <div class="hover-scale bg-blackMute rounded-lg px-6 py-5 w-fit">
                <span class="text-blue-400 font-semibold text-lg">
                  2019
                </span>
                <p class="text-gray-100 font-semibold text-md">
                  University of Phayao <br>
                </p>
                <p class="text-gray-100 text-md">
                  ( Bachelor of Engineering )
                </p>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-6 py-5 w-fit">
                <span class="text-blue-400 font-semibold text-lg">
                  2013
                </span>
                <p class="text-gray-100 font-semibold text-md">
                  Maesai Prasitsart School <br>
                </p>
                <p class="text-gray-100 text-md">
                  ( Science and Mathematics )
                </p>
              </div>
            </div>
          </div>
          <!-- hobbies and interests -->
          <div class="space-y-[1.5rem]">
            <h2>
              hobbies and
              interests
            </h2>
            <div class="flex flex-wrap gap-[0.6rem]">
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-code" class="text-blue-400" />
                <span>Learning New Programming Skills</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-podcast" class="text-blue-400" />
                <span>Listening to Podcasts</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-microchip" class="text-blue-400" />
                <span>Reading Tech Articles</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-gamepad" class="text-blue-400" />
                <span>Gaming</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-guitar" class="text-blue-400" />
                <span>Playing an instrument</span>
              </div>
              <div class="hover-scale bg-blackMute rounded-lg px-4 py-2 w-fit space-x-2">
                <FontAwesomeIcon icon="fas fa-music" class="text-blue-400" />
                <span>Listening to Music</span>
              </div>
            </div>
          </div>
        </div>
        <!-- skills -->
        <div class="space-y-[1.5rem]">
          <h2>SKILLS</h2>
          <swiper :slides-per-view="10" :free-mode="true" :modules="modules" :loop="true" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }">
            <swiper-slide><img src="./assets/imgs/skills/react.png" alt="react" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/nextjs.png" alt="nextjs" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/vue.png" alt="vue" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/nuxtjs.png" alt="nuxtjs" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/tailwind.png" alt="tailwind" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/bootstrap.png" alt="bootstrap" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/html.png" alt="html" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/js.png" alt="js" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/typescript.png" alt="typescript" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/jquery.png" alt="jquery" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/pug.png" alt="pug" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/nodejs.png" alt="node js" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/adonisjs.png" alt="adonis js" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/ex.png" alt="express js" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/postgresql.png" alt="postgresql" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/mongodb.png" alt="mongodb" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/mysql.png" alt="mysql" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/firebase.png" alt="firebase" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/git.png" alt="git" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/figma.png" alt="figma" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/adobexd.png" alt="adobexd" loading="lazy"></swiper-slide>
            <swiper-slide><img src="./assets/imgs/skills/postman.png" alt="postman" loading="lazy"></swiper-slide>
          </swiper>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'

import { onMounted, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Autoplay } from 'swiper/modules';

const modules = ref([FreeMode, Autoplay]);

onMounted(() => {
  document.title = "Sarawut Bunmee - Portfolio";
});

</script>

<style scoped>
p {
  @apply text-gray-100;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  @apply h-full w-full p-2;
}

.swiper-slide img {
  @apply bg-blackMute p-3 hover-scale h-full w-full rounded-lg object-cover;
}
</style>