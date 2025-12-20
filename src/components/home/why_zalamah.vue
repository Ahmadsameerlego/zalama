<template>
  <section class="py-16 bg-gradient-to-br from-[#E94B35] to-[#d43d2a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-white mb-4">{{ $t('why_us_title') }}</h2>
        <p class="text-xl text-white/90 w-full text-center">
          {{ why_us_title }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div
          v-for="(value, index) in why_us_items"
          :key="index"
          class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all"
        >
          <div class="mb-6 flex justify-center">
            <div class="bg-white rounded-2xl p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-users w-10 h-10 text-[#E94B35]"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <h3 class="text-white mb-3">{{ value?.title }}</h3>
          <p class="text-white/80 leading-relaxed">
            {{ value?.desc }}
          </p>
        </div>


       
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  why_us_items: {
    type: Array,
    required: false,
    default: () => [],
  },
  why_us_title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>