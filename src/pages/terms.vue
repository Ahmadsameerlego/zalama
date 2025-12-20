<template>
     <div class="bg-gradient-to-br from-[#E94B35] to-[#c73d2a] text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
       <img :src="info?.page?.image" class="w-32 h-32 mx-auto mb-6" alt="">
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