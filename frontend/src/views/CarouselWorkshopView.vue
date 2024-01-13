<script setup>
import { WorkshopData } from '../data/Workshop';
import { useRouter } from 'vue-router';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  perPage: 3,
  perMove: 1,
  gap: '3rem',
  type: 'slide',
  rewindSpeed: 3000,
  autoplayDelay: 300,
  arrows: false,
  pagination: false,
  extensions: { AutoScroll },
  interval: 1000,
  autoScroll: {
    speed: 800,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  breakpoints: {
    725: { perPage:  WorkshopData.length>1 ?1 : WorkshopData.length , autoplay: WorkshopData.length > 1 },
    1056: { perPage: WorkshopData.length>2 ?2 : WorkshopData.length , autoplay: WorkshopData.length > 2},
    1350: { perPage: WorkshopData.length>3 ?3 : WorkshopData.length , autoplay: WorkshopData.length > 3},
    1700: { perPage: WorkshopData.length>4 ?4 : WorkshopData.length , autoplay: WorkshopData.length > 4},
    2000: { perPage: WorkshopData.length>5 ?5 : WorkshopData.length , autoplay: WorkshopData.length > 5},
    2500: { perPage: WorkshopData.length>5 ?5 : WorkshopData.length , autoplay: WorkshopData.length > 5},
    3500: { perPage: WorkshopData.length>6 ?6 : WorkshopData.length , autoplay: WorkshopData.length > 6},
    4500: { perPage: WorkshopData.length>7 ?7 : WorkshopData.length , autoplay: WorkshopData.length > 7},
    5500: { perPage: WorkshopData.length>8 ?8 : WorkshopData.length , autoplay: WorkshopData.length > 8},
    6500: { perPage: WorkshopData.length>9 ?9 : WorkshopData.length , autoplay: WorkshopData.length > 9},
    7500: { perPage: WorkshopData.length>10 ?10 : WorkshopData.length, autoplay: WorkshopData.length > 10},
  },
};
const router = useRouter()

</script>

<template>
  <div class="flex flex-col gap-5 max-sm:gap-4 sm:pb-10 pb-6 max-vsm:py-4 overflow-hidden bg-[#2d1304]">
    <div class="flex justify-center px-8">
      <button @click="router.push('/event/list')" class="text-center font-extrabold font-montserrat text-[45px] max-sm:text-[45px] max-ssm:text-[40px]  max-vsm:text-[30px] max-vvsm:text-[30px]">Workshop</button>
    </div>
    <div class="flex justify-end px-8 "><button @click="router.push('/event/list')" class="flex place-items-end mb-2 max-ssm:text-[14px] text-[18px] relative hover:underline transition-all">View All</button></div>
    <div class="flex justify-center items-center">
      <Splide :options="options" class="flex justify-center">
        <SplideSlide v-for="(event,index) in WorkshopData" :key="index" class="flex  justify-center lg:w-[380px] lg:h-[480px] max-lg:w-[350px] max-lg:h-[420px] max-md:w-[300px] max-md:h-[380px] ssm:w-[360px] ssm:h-[450px] vsm:w-[350px] 
        vsm:h-[400px] max-vsm:w-[280px] max-vsm:h-[350px] max-vvsm:w-[220px] max-vvsm:h-[300px] bg-[#2d1304] ">
          <div class="flex justify-center active:cursor-grabbing cursor-grab rounded-3xl overflow-hidden  ">
            {{ console.log(index , event.title) }}
           <img @click="router.push({ name: 'single-workshop', params:{index: event.index , title: event.title} })"
            :src="event.image" :alt="event.title"
            class="object-fill transition-all hover:scale-105 hover:overflow-hidden"/>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>

.splide{
  padding:20px;
}
.carousel-container-c {
  animation: carousel-scroll 17s linear infinite;
}

@keyframes carousel-scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(-21%)}
}

.image-slide:hover .carousel-container-c,
.carousel-container-c:hover
{
  animation-play-state: paused;
}
</style>
