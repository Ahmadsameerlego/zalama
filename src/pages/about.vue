<template>
    <Banner :about="about" />
    <!-- <Vision :data="about" /> -->
    <!-- <Counter :data="about?.counter" /> -->
    <!-- <Value :data="about?.value" /> -->
    <!-- <Story :data="about?.story" /> -->
</template>
<script setup>
import Banner from '@/components/about/banner.vue';
import Vision from '@/components/about/vision.vue';
import Counter from '@/components/about/counter.vue';
import Value from '@/components/about/value.vue';
import Story from '@/components/about/story.vue';

  import { ref, computed, inject, onMounted } from "vue";
  import api from "@/api/http"; // ← استدعاء ملف الـ axios

const about = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/page", {
      user_id: user.id,
      title : 'about'
    });

    about.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});


</script>