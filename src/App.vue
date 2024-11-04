<template>
  <div class="bg-black text-gray-100 overflow-hidden">
    <Navbar />
    <main class="mt-[65px] pt-[2.5rem]">
      <div class="flex justify-center items-center xl:mb-[6rem] lg:mb-[4rem] md:mb-[4rem] sm:mb-[3rem]">
        <div class="space-y-[3rem] max-w-[80vw]">
          <!-- profile -->
          <div class="md:flex md:space-x-[2rem] md:space-y-0 sm:space-y-8 justify-start items-center">
            <div
              class="hover-scale relative xl:w-[16rem] xl:h-[16rem] lg:w-2/3 lg:h-[20rem] md:w-full md:h-[18rem] sm:w-full sm:h-[24rem] overflow-hidden rounded-2xl border-2 border-gray-400">
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
          <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-[0.6rem] md:space-y-0 sm:space-y-[2rem]">
            <!-- education -->
            <div class="space-y-[1.5rem]">
              <h2>
                education
              </h2>
              <div class="flex flex-wrap gap-[0.6rem]">
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
            <Swiper :slides-per-view="10" :space-between="-5" :free-mode="true" :modules="modules" :loop="true"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              :breakpoints="{ 1440: { slidesPerView: 10 }, 1024: { slidesPerView: 7 }, 768: { slidesPerView: 5 }, 425: { slidesPerView: 3 } }">
              <SwiperSlide v-for="(value, index) in skills" :key="index">
                <img :src="`/imgs/skills/${value}.png`" :alt="value" loading="lazy">
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div id="contact"></div>
      </div>
      <div
        class="bg-[#161616] flex justify-center items-center relative xl:py-[6rem] lg:py-[4rem] md:py-[4rem] sm:py-[3rem]">
        <!-- contact -->
        <div class="w-full max-w-[80vw] space-y-[3rem]">
          <div class="space-y-[1.5rem]">
            <h2 class="xl:hidden">
              Contact
            </h2>
            <div class="xl:absolute xl:top-[-3.5rem] xl:left-0 xl:justify-center flex flex-wrap w-full gap-4">
              <a href="tel:062-741-3716"
                class="cursor-default hover:scale-105 duration-500 p-[1.5rem] gap-2 flex justify-center bg-blackMute border-b-2 border-blue-400 text-center h-fit rounded-2xl">
                <FontAwesomeIcon icon="fas fa-phone" class="text-[1rem] p-2 rounded-full border-blue-400 border-2" />
                <p class="lg:text-[1.3rem] sm:text-[1rem] ">062-741-3716</p>
              </a>
              <a href="mailto:sarawut_bm@outlook.com"
                class="cursor-default hover:scale-105 duration-500 p-[1.5rem] gap-2 flex justify-center bg-blackMute border-b-2 border-blue-400 text-center h-fit rounded-2xl">
                <FontAwesomeIcon icon="fas fa-envelope" class="text-[1rem] p-2 rounded-full border-blue-400 border-2" />
                <p class="lg:text-[1.3rem] sm:text-[1rem] ">sarawut_bm@outlook.com</p>
              </a>
              <a href="tel:062-741-3716"
                class="cursor-default hover:scale-105 duration-500 p-[1.5rem] gap-2 flex justify-center bg-blackMute border-b-2 border-blue-400 text-center h-fit rounded-2xl">
                <FontAwesomeIcon icon="fas fa-code" class="text-[1rem] p-2 rounded-full border-blue-400 border-2" />
                <p class="lg:text-[1.3rem] sm:text-[1rem] ">www.github.com/owutowut</p>
              </a>
            </div>
          </div>
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
          <!-- projects -->
          <div id="projects" class="space-y-[1.5rem]">
            <h2>
              Projects
            </h2>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div v-for="(value, index) in 8" :key="index"
                class="relative w-full lg:hover:mt-[-10px] transition-all duration-700 sm:flex sm:justify-center">
                <div class="group text-center text-white lg:w-full sm:w-full h-full relative">
                  <div
                    class="z-[2] absolute top-0 left-0 sec6card-inner cursor-pointer group rounded-[10px] transition-all duration-[1s]">
                    <div
                      class="z-[2] absolute top-0 left-0 sec6card-inner cursor-pointer group rounded-[10px] transition-all duration-[1s]">
                    </div>
                  </div>
                  <div class="z-[1] cursor-pointer relative rounded-[10px] overflow-y-hidden">
                    <img loading="lazy" class="xl:h-[260px] lg:h-[200px] md:h-[240px] sm:h-[280px] w-full object-cover"
                      :src="`/imgs/projects/${value}.png`" alt="sarawut portfolio projects" />
                    <p v-if="value == 1"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      เว็บไซต์บริษัทก่อสร้างถนนสะพานและอุโมงค์
                    </p>
                    <p v-if="value == 2"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      เว็บประกาศ ขาย เช่า บ้าน ที่ดิน ภาคเหนือ
                    </p>
                    <p v-if="value == 3"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      ระบบจัดการข้อมูลพนักงาน
                    </p>
                    <p v-if="value == 4"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      ระบบบันทึกข้อมูลการเงิน
                    </p>
                    <p v-if="value == 5"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      เว็บไซต์บริษัทรับออกแบบและการตลาดออนไลน์
                    </p>
                    <p v-if="value == 6"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      ระบบจัดการข้อมูลบัญชีบริษัท
                    </p>
                    <p v-if="value == 7"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      เว็บไซต์รับทำเว็บไซต์และออกแบบเว็บไซต์
                    </p>
                    <p v-if="value == 8"
                      class="bg-blackMute px-2 py-1 rounded-lg line-clamp-1 z-[3] absolute group-hover:bottom-[15px] bottom-[10px] mx-[10px] transition-all duration-[1s]">
                      เว็บไซต์บริษัทออกแบบพร้อมก่อสร้าง
                    </p>
                  </div>
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