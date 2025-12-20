<template>
  <section id="stores" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-gray-800 mb-4">{{ $t('featured_stores') }}</h2>
        <p class="text-xl text-gray-600 w-full text-center">
          {{ special_providers_title }}
        </p>
      </div>


      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


        <div
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
          v-for="(value, index) in special_providers"
          :key="index"
        >
          <div class="relative h-48 overflow-hidden">
            <img
              :src="value?.image"
              :alt="value?.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              v-if="value?.is_fave"
              class="absolute top-4 right-4 bg-[#E94B35] text-white px-3 py-1 rounded-full text-sm"
            >
              {{ $t('featured') }}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-gray-800 mb-1">{{ value?.full_name }}</h3>
                <p class="text-sm text-gray-500 text-right">{{ value?.section }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 mb-3">
              <div class="flex items-center gap-1">
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
                  class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400"
                  aria-hidden="true"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg
                >
                <span class="text-sm text-gray-700">{{ value?.rate }}</span>
              </div>
            </div>
             <a
            class="flex items-center justify-start gap-2 text-sm text-gray-600 mb-6" 
            :href="value?.location"
            target="_blank"
          >
            <span>{{ value?.address }}</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin w-4 h-4"
              aria-hidden="true"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              ></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </a>
          
            <router-link
              :to="`/store/${value?.id}/${value?.full_name.replace(/\s+/g, '-').toLowerCase()}`"
              class="btn-primary w-full px-6 py-3 bg-[#E94B35] text-white rounded-xl hover:bg-[#d43d2a] transition-all flex items-center justify-center gap-2 group"
            >
              <span>{{ $t('details') }}</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-left w-5 h-5 group-hover:-translate-x-1 transition-transform"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </router-link>
          </div>
        </div>


       
      </div>
      <div class="text-center mt-12">
        <router-link
          to="/stores"
          class="px-8 py-4 bg-[#E94B35] text-white rounded-2xl hover:bg-[#d43d2a] transition-all shadow-lg hover:shadow-xl"
        >
          {{ $t('more_stores') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from '../../router';

defineProps({
  special_providers: {
    type: Array,
    required: false,
    default: () => [],
  },
  special_providers_title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>