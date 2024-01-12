<script setup>
import Page2Video from '../assets/video/Page2Video.mp4';
import { ref, onMounted } from 'vue';

const bgVideo2 = ref(null);

onMounted(() => {
      if (bgVideo2.value) {
        bgVideo2.value.play().catch(error => {
          console.error('Autoplay failed:', error);
        });
      }
    })
</script>

<template>
    <div class="app-container relative justify-start max-ssm:px-8 max-md:justify-center max-xl:justify-end flex place-items-center m-0 overflow-hidden">
      <video ref="bgVideo2" class="object-cover" muted loop autoplay width="100%" height="100vh" :style="{ opacity: '0.5' }">
        <source :src="Page2Video" type="video/mp4">
      </video>
      <div class="overlay-box md:mx-16">
        <h2 class="overlay-heading font-extrabold mb-3 text-[40px] max-md:text-[35px] max-sm:text-[30px] max-ssm:text-[25px]">VastraShala' 24</h2>
        <p class="text-[17px] font-montserrat max-sm:text-[16px] max-ssm:text-[14px] mb-3 ">"VastraShala," the crown jewel event by the dynamic "Fitoor – e – Kala" club, is ready to dazzle the national stage. More than just a fashion show, it's an immersive experience where each outfit, accessory, and makeup choice is a brushstroke in a canvas of self-expression. Expect a vibrant celebration of individuality, where fashion becomes a powerful medium for making statements and embracing authenticity. "VastraShala" is not just about garments; it's a journey through diverse styles and a visual ode to the magic of creativity. Get ready to witness the raw, unfiltered art of self-expression on display.<br><br>
        </p>
      </div>
    </div>


</template>

<style scoped>
.app-container {
  height: 100vh;
  background-color: #2d1304;
}

.overlay-box {
  max-width: 500px;
  background-color: transparent;
  backdrop-filter: blur(25px);
  box-shadow: 0 0 10 rgba(0, 0, 0, .5);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  color: #fff;
}

.overlay-box p {
  letter-spacing: 1px;
}

.overlay-heading {
  font-family: 'Merriweather', serif;
}


video {
  object-fit: fill;
  position: absolute;
  height: 100%;
}

.content-container {
  text-align: center;
  padding: 20px;
  background-color: #000;
}

</style>
