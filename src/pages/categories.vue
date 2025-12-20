<template>
  <!-- search  -->
  <section
    class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] text-white py-16"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-white mb-4">{{ $t('categories') }}</h1>
        <p
          class="text-xl text-white/90 w-full text-center leading-relaxed pt-[16px] pr-[0px] pb-[0px] pl-[0px]"
        >
          {{ $t('find_your_favorite_store') }}
        </p>
      </div>
      <div class="mt-8 max-w-2xl mx-auto">
        <div class="relative">
          <input
            type="text"
              v-model="search"
            :placeholder="$t('search_for_categories')"
            class="w-full px-6 py-4 pl-14 bg-white rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-800 text-right"
            value=""
          />
          <button
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

  <!-- categories  -->
  <section v-if="filteredSections?.length > 0 && !loading" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="mb-8">
      <h2 class="text-gray-800 text-right">{{ $t('all_categories') }}</h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <router-link
        :to="`sub-categories/${category.id}/${category.title.replace(/\s+/g, '-').toLowerCase()}`"
        v-for="category in filteredSections"
        :key="category.id"
        @click="storeCategory(category)"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 text-right group cursor-pointer border-2 border-transparent hover:border-[#E94B35]"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-16 h-16 rounded-2xl  flex items-center justify-center text-white group-hover:scale-110 transition-transform"
            :style="{ backgroundColor: category?.color }"
          >
            
            <img :src="category?.image" alt="Category Image" class="w-12 h-12 object-cover rounded-lg" />
          </div>
        </div>
        <h3 class="text-gray-800 mb-2 text-right">{{ category?.title }}</h3>
        <p class="text-gray-600 text-sm mb-4 text-right leading-relaxed">
          {{ category?.desc }}
        </p>
        <div class="flex items-center justify-start gap-2">
          <div class="w-2 h-2 rounded-full bg-[#E94B35]"></div>
          <span class="text-[#E94B35]">{{ category?.providers_count }} {{ $t('commerce') }}</span>
        </div>
      </router-link>
    </div>
  </section>

  <div v-else>
      <div class="flex flex-col items-center justify-center py-16 text-center">
        <div class="text-6xl mb-4">😕</div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ $t('no_categories_found') }}
        </h3>
        <p class="text-gray-500 max-w-md">
          {{ $t('no_categories_found_description') }}
        </p>
      </div>
    </div>
</template>

<script setup>
  import { ref, onMounted  , computed} from "vue";

  import api from "@/api/http"; // ← استدعاء ملف الـ axios
import router from "../router";

const sections = ref(null);
const search = ref('');
const loading = ref(false);

const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  loading.value = true;

  try {
    const response = await api.post("/api/sections", {
      user_id: user.id,
    });

    sections.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

const filteredSections = computed(() => {
  if (!search.value) return sections.value;

  return sections.value.filter(category =>
    category.title
      ?.toLowerCase()
      .includes(search.value.toLowerCase())
  );
});

const storeCategory = (category) => {
  localStorage.setItem("selectedCategory", JSON.stringify(category));
};

onMounted(() => {
  getData();
});

</script>