<template>
  <div class="bg-black text-gray-100">
    <Navbar />
    <main class="mt-[65px] py-[2rem] flex justify-center items-center">
      <div class="space-y-[3rem] max-w-[80vw]">
        <!-- profile -->
        <div class="flex justify-start items-center space-x-[0.6rem]">
          <div class="hover-scale relative w-[16rem] h-[16rem] overflow-hidden rounded-2xl border-2 border-gray-400">
            <img src="/profile.jpg" alt="Profile Image" class="absolute top-5 object-cover scale-150" />
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
        <div class="grid grid-cols-2 gap-[0.6rem]">
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
          <Swiper :slides-per-view="10" :space-between="-5" :free-mode="true" :modules="modules" :loop="true" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }">
            <SwiperSlide v-for="(value, index) in skills" :key="index">
              <img :src="`/imgs/skills/${value}.png`" :alt="value" loading="lazy">
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="grid grid-cols-2 gap-[0.6rem]">
          <!-- work experience -->
          <div class="space-y-[1.5rem]">
            <h2>
              Work Experience
            </h2>
            <div class="flex flex-wrap gap-2">
              <div v-for="(value, index) in workExperience" :key="index"
                class="hover-scale bg-blackMute rounded-lg px-6 py-5">
                <span class="text-blue-400 font-semibold text-lg">
                  {{ value.year }}
                </span>
                <p class="text-gray-100 font-semibold text-md">
                  {{ value.company }} <br>
                </p>
                <p class="text-gray-100 text-md">
                  {{ value.position }}
                </p>
              </div>
            </div>
          </div>
          <!-- contact -->
          <div id="contact" class="text-center bg-gray-100 text-blackMute space-y-[1.5rem] p-8 rounded-xl">
            <h2>
              contact
            </h2>
            <div class="space-y-[2rem]">
              <div class="space-x-[0.6rem] flex items-center">
                <div class="flex justify-center items-center">
                  <img src="/profile.jpg" alt="Profile Image" class="w-[6rem] h-[6rem]" />
                </div>
                <div class="hover-scale bg-blackMute text-gray-100 rounded-lg p-2 w-fit h-fit">
                  <span>062-741-3716</span>
                </div>
              </div>
              <div class="space-x-[0.6rem] flex items-center">
                <div class="flex justify-center items-center">
                  <img src="/profile.jpg" alt="Profile Image" class="w-[6rem] h-[6rem]" />
                </div>
                <div class="hover-scale bg-blackMute text-gray-100 rounded-lg p-2 w-fit h-fit">
                  <span>sarawut_bm@outlook.com</span>
                </div>
              </div>
              <div class="space-x-[0.6rem] flex items-center">
                <div class="flex justify-center items-center">
                  <img src="/profile.jpg" alt="Profile Image" class="w-[6rem] h-[6rem]" />
                </div>
                <div class="hover-scale bg-blackMute text-gray-100 rounded-lg p-2 w-fit h-fit">
                  <span>www.github.com/owutowut</span>
                </div>
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

import { reactive, ref } from 'vue';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Autoplay } from 'swiper/modules';

const modules = ref([FreeMode, Autoplay]);
const skills = ref(['nextjs', 'vue', 'nuxtjs', 'tailwind', 'bootstrap', 'html', 'js', 'typescript', 'jquery', 'pug', 'nodejs', 'adonisjs', 'ex', 'postgresql', 'mongodb', 'mysql', 'firebase', 'git', 'figma', 'adobexd', 'postman']);
const workExperience = reactive([
  {
    company: 'OneDee Solution',
    position: 'Front-End Developer',
    year: '2023 - 2024'
  },
  {
    company: 'Never Sleep',
    position: 'Front-End Developer',
    year: '2022 - 2023'
  },
  {
    company: 'Zezembly',
    position: 'Front-End Developer ( Internship )',
    year: '2022'
  },
  {
    company: 'Owl Day House',
    position: 'Full Stack Developer ( Internship )',
    year: '2022'
  },
  {
    company: 'OneDee Solution',
    position: 'Front-End Developer ( Internship )',
    year: '2021'
  },
]);

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