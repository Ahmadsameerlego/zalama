<template>
     <div class="bg-gradient-to-br from-[#E94B35] to-[#c73d2a] text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-16 h-16 mx-auto mb-6" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
        <h1 class="text-white mb-4">{{ info?.page?.title }}</h1>
        <p class="text-white text-xl opacity-90">
          {{ $t('privacy_desc') }}
        </p>
      </div>
    </div>

  <section class="max-w-4xl mx-auto my-12 px-4">
   

    <h1 class="text-3xl font-bold mb-6 text-center">
      {{ info?.page?.title }}
    </h1>

    <div v-html="info?.page?.desc" class="prose"></div>
  </section>
</template>

<script setup>
import { ref, computed, inject, onMounted } from "vue";
import api from "@/api/http"; // ← استدعاء ملف الـ axios

const info = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/page", {
      user_id: user.id,
      title: "privacy",
    });

    info.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});
</script>