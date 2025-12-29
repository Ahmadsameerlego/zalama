<template>
     <div class="bg-gradient-to-br from-[#E94B35] to-[#c73d2a] text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale w-16 h-16 mx-auto mb-6" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
        <h1 class="text-white mb-4">{{ info?.page?.title }}</h1>
        <p class="text-white text-xl opacity-90">
          {{ $t('terms_desc') }}
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
        title: "condition",
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