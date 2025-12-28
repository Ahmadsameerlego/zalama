<template>
  <!-- search  -->
  <section
    class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] text-white py-16"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-white mb-4">{{ $t("featured_stores") }}</h1>
        <p
          class="text-xl text-white/90 w-full text-center leading-relaxed pt-[16px] pr-[0px] pb-[0px] pl-[0px]"
        >
          {{ $t("discover_best_featured_stores") }}
        </p>
      </div>
      <div class="mt-8 max-w-2xl mx-auto">
        <div class="relative">
          <input
            v-model="search"
            type="text"
            :placeholder="$t('search_for_stores')"
            class="w-full px-6 py-4 pl-14 bg-white rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800 text-right"
            value=""
          /><button
            class="absolute left-2 top-1/2 -translate-y-1/2 bg-[#E94B35] text-white p-3 rounded-xl hover:bg-[#d43d2a] transition-all"
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
    </div>
  </section>

  <!-- categories. and stores  -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-8">
      <h2
        class="text-gray-800 text-right px-[0px] py-[24px] pt-[0px] pr-[0px] pb-[16px] pl-[0px]"
      >
        {{ $t("store_categories") }}
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        <button
          @click="filterByCategory(null)"
          :class="[
            'flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all',
            category_id === null
              ? 'bg-[#E94B35] text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border border-gray-100 hover:shadow-md hover:scale-105',
          ]"
        >
          <span class="text-3xl">🏪</span>
          <span class="text-sm">{{ $t("all") }}</span>
        </button>

        <button
          v-for="category in sections"
          :key="category.id"
          @click="filterByCategory(category.id)"
          :class="[
            'flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all',
            category_id === category.id
              ? 'bg-[#E94B35] text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border border-gray-100 hover:shadow-md hover:scale-105',
          ]"
        >
          <span class="text-3xl">
            <img :src="category?.image" alt="" class="w-8 h-8" />
          </span>
          <span class="text-sm">{{ category?.title }}</span>
        </button>
      </div>
    </div>
    <!-- <div class="mb-6">
      <p class="text-gray-600 text-right">عرض 15 من 15 متجر</p>
    </div> -->
    <div
      v-if="stores?.length > 0 && filteredStores?.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="store in filteredStores"
        :key="store.id"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer group"
      >
        <div class="relative h-48 overflow-hidden">
          <img
            :src="store.image"
            :alt="store.full_name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div
            v-if="store.is_fave"
            class="absolute top-3 right-3 bg-[#E94B35] text-white px-3 py-1 rounded-full text-sm"
          >
            {{ $t("featured") }}
          </div>
        </div>
        <div class="p-5">
          <div class="mb-3">
            <h3 class="text-gray-800 mb-1 text-right">{{ store.full_name }}</h3>
            <span class="text-sm text-gray-500 block text-right">{{
              store.section
            }}</span>
          </div>
          <div class="flex items-center justify-start gap-2 mb-3">
            <div class="flex items-center gap-1">
              <span class="text-gray-800">{{ store.rate }}</span
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
                class="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400"
                aria-hidden="true"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </div>
          </div>
          <a
            class="flex items-center justify-start gap-2 text-sm text-gray-600"
            :href="store.location"
            target="_blank"
          >
            <span>{{ store.address }}</span
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
              :to="`/store/${store?.id}/${store?.full_name.replace(/\s+/g, '-').toLowerCase()}`"
              class="btn-primary w-full px-6 py-3 bg-[#E94B35] text-white rounded-xl hover:bg-[#d43d2a] transition-all flex items-center justify-center gap-2 group mt-3"
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
    <div v-else>
      <div class="flex flex-col items-center justify-center py-16 text-center">
        <div class="text-6xl mb-4">😕</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ $t('no_stores_found') }}
        </h3>
        <p class="text-gray-500 max-w-md">
          {{ $t('no_stores_found_description') }}
        </p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, computed } from "vue";

import api from "@/api/http"; // ← استدعاء ملف الـ axios

const sections = ref(null);
const stores = ref(null);
const search = ref("");

const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/sections", {
      user_id: user.id,
    });

    sections.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const category_id = ref(null);

const filterByCategory = (id) => {
  category_id.value = id;
  getStores();
};
const getStores = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post(`/api/providers`, {
      user_id: user.id,
      section_id: category_id.value,
    });

    stores.value = response.data?.data?.providers;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const filteredStores = computed(() => {
  if (!search.value) return stores.value;

  return stores.value.filter((store) =>
    store.full_name?.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(() => {
  getData();
  getStores();
});
</script>