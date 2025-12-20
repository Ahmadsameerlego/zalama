<template>
  <!-- banner  -->
  <section
    class="relative  text-white py-20 px-4 overflow-hidden"
    :style="{ backgroundColor: section?.color || '#E94B35' }"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
      ></div>
    </div>
    <div class="container mx-auto max-w-6xl text-center relative z-10">
      <h1 class="text-4xl md:text-5xl lg:text-6xl mb-6">{{ section?.title }}</h1>
      <p
        class="text-lg md:text-xl text-white/90 text-center mb-8 px-[0px] py-[16px]"
      >
        {{ section?.desc }}
      </p>
      <div class="max-w-2xl mx-auto">
        <div class="relative">
          <input
            type="text"
            v-model="search"
            :placeholder="`${$t('search_for_stores_in')} ${section?.title}`"
            class="w-full px-6 py-4 pr-14 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg text-right"
            dir="rtl"
            value=""
          /><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search absolute right-4 top-1/2 -translate-y-1/2 text-white"
            aria-hidden="true"
          >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
        </div>
      </div>
    </div>
  </section>

  <!-- sub categories  -->
  <section class="py-[8px] bg-white sticky top-[72px] z-40 shadow-sm px-[0px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 pb-2">
          <button
          @click="filterByCategory(null)"
          :class="[
            'flex flex-col items-center justify-center gap-2 p-6 w-28 rounded-2xl transition-all',
            category_id === null
              ? 'bg-[#E94B35] text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border border-gray-100 hover:shadow-md hover:scale-105',
          ]"
        >
          <span class="text-3xl">🏪</span>
          <span class="text-sm">الكل</span>
        </button>

        <button
          v-for="category in subCategories"
          :key="category.id"
          @click="filterByCategory(category)"
          :class="[
            'flex flex-col items-center justify-center gap-2 p-6 w-28 rounded-2xl transition-all',
            category_id === category.id
              ? 'bg-[#E94B35] text-white shadow-lg scale-105'
              : 'bg-white text-gray-700 border border-gray-100 hover:shadow-md hover:scale-105',
          ]"
        >
          <span class="text-3xl">
            <img :src="category?.image" alt="" class="w-12 h-12" />
          </span>
          <span class="text-sm">{{ category?.title }}</span>
        </button>

           
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-[rgb(249,249,249)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h3 class="text-gray-800 mb-1 text-right">{{$t('all_stores')}}</h3>
          <!-- <p class="text-gray-600 text-right">12 مطاعم</p> -->
        </div>
      </div>
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
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, computed } from "vue";

import api from "@/api/http"; // ← استدعاء ملف الـ axios
import { useRoute } from "vue-router";
const route = useRoute();
const sections = ref(null);
const section = ref(null);
const stores = ref(null);
const subCategories = ref(null);
const search = ref("");


// get specific category data 
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/sections", {
      user_id: user.id,
      id: Number(route.params.id),
    });

    sections.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const category_id = ref(null);
const sub_section_id = ref(null);
const filterByCategory = (category) => {
  category_id.value = category?.id;
  sub_section_id.value = category?.id;
  getStores();
};
const getStores = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post(`/api/providers`, {
      user_id: user.id,
      section_id: route.params.id || category_id.value,
      sub_section_id : sub_section_id.value
    });

    stores.value = response.data?.data?.providers;
    subCategories.value = response.data?.data?.sub_sections;
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
  section.value = localStorage.getItem("selectedCategory")
    ? JSON.parse(localStorage.getItem("selectedCategory"))
    : null;
});
</script>