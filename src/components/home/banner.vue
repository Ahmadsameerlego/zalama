<template>
  <section
    class="relative bg-gradient-to-br from-[#E94B35] via-[#e85d47] to-[#d43d2a] overflow-hidden"
  >
    <div
      class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
    ></div>
    <div class="relative max-w-7xl mx-auto sm:px-6 lg:px-8 px-[32px] py-[48px]">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="text-white space-y-6 text-center lg:text-right">
          <div
            class="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4"
          >
            <span class="text-sm text-white">
              {{ $t('more_than') }}   {{ providers_count }} {{$t('stores_waiting')}}</span
            >
          </div>
          <h1 class="text-white leading-tight">{{ slider_div_title }}</h1>
          <p class="text-xl text-white/90 leading-relaxed py-[16px] px-[0px]">
            {{ slider_div_desc }}
          </p>
          <div class="relative max-w-xl mx-auto lg:mx-0">
            <input
              type="text"
              :placeholder="$t('search_for_stores_or_categories')"
              class="w-full px-6 py-4 pl-14 bg-white rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800 text-right"
            /><button
              class="btn-primary absolute left-2 top-1/2 -translate-y-1/2 bg-[#E94B35] text-white p-3 rounded-xl hover:bg-[#d43d2a] transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="relative hero-slider-container">
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-white/20 to-transparent rounded-3xl z-10 pointer-events-none"
            ></div>

            <div
              class="slick-slider rounded-3xl overflow-hidden shadow-2xl slick-initialized"
              dir="ltr"
            >
              <div v-if="sliders?.length" class="slider-container">
                <div class="slider-wrapper">
                  <transition name="fade">
                    <img
                      :key="currentIndex"
                      :src="sliders[currentIndex].image"
                      class="slide-image"
                    />
                  </transition>
                </div>

                <div class="dots">
                  <span
                    v-for="(img, index) in sliders"
                    :key="index"
                    class="dot"
                    :class="{ active: index === currentIndex }"
                    @click="goToSlide(index)"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import img1 from "@/assets/banner1.jpeg";
import img2 from "@/assets/banner2.jpeg";
import img3 from "@/assets/banner3.jpeg";
const props = defineProps({
  sliders: {
    type: Array,
    required: true,
  },
  slider_div_desc : {
    type: String,
    default: "",
  },
  slider_div_title : {
    type: String,
    default: "",
  },
  providers_count : {
    type: Number,
    default: 0,
  },
});
const images = [img1, img2, img3];
const currentIndex = ref(0);
let timer = null;

const startAutoplay = () => {
  if (!props?.sliders?.length) return;

  timer = setInterval(() => {
    nextSlide();
  }, 3000);
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props?.sliders?.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 420px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

.slider-wrapper {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Dots */
.dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dot.active {
  background: white;
  width: 12px;
  height: 12px;
}
</style>


