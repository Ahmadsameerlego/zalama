<template>
  <section id="categories" class="py-16 bg-[rgb(249,249,249)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-gray-800 mb-4">{{ $t('categories') }}</h2>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
      >
        <router-link
          :to="`sub-categories/${value.id}/${value.title.replace(/\s+/g, '-').toLowerCase()}`"
          @click="storeCategory(value)"
          v-for="(value, index) in sections"
          :key="index"
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
        >
          <div class="aspect-square relative">
            <img
              :src="value?.image"
              :alt="value?.title"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0  opacity-80 group-hover:opacity-90 transition-opacity"
              :style="{ backgroundColor: value?.color }"
            ></div>
            <div
              class="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
            >
              <div class="mb-2 group-hover:scale-110 transition-transform">
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
                  class="lucide lucide-utensils w-8 h-8"
                  aria-hidden="true"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                  <path d="M7 2v20"></path>
                  <path
                    d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                  ></path>
                </svg>
              </div>
              <h3 class="text-white mb-1">{{value?.title}}</h3>
              <p class="text-white/90 text-sm">{{value?.providers_count}} {{ $t('commerce') }}</p>
            </div>
          </div>
        </router-link>

      </div>
    </div>
  </section>
</template>


<script setup>
import router from '../../router';

defineProps({
  sections: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const storeCategory = (category) => {
  localStorage.setItem("selectedCategory", JSON.stringify(category));
};

</script>