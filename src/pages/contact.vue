<template>
  <banner  :info="info"/>
  <contactForm :info="info" />
</template>

<script setup>
import { ref, computed, inject, onMounted } from "vue";

import banner from "@/components/contact/banner.vue";
import contactForm from "@/components/contact/form.vue";
import api from "@/api/http"; // ← استدعاء ملف الـ axios

const info = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/app-data", {
      user_id: user.id,
    });

    info.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});
</script>