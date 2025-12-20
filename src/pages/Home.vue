<template>
  <div class="">
    <banner
      :sliders="homeData?.sliders"
      :slider_div_desc="homeData?.slider_div_desc"
      :slider_div_title="homeData?.slider_div_title"
      :providers_count="homeData?.providers_count"
    />
    <categories :sections="homeData?.sections" />
    <featured_stores
      :special_providers="homeData?.special_providers"
      :special_providers_title="homeData?.special_providers_title"
    />
    <why_zalamah
      :why_us_items="homeData?.why_us_items"
      :why_us_title="homeData?.why_us_title"
    />
    <download_app
      :app_download_title="homeData?.app_download_title"
      :android_link="homeData?.android_link"
      :ios_link="homeData?.ios_link"
    />
  </div>
</template>

<script setup>
import { ref, computed, inject, onMounted } from "vue";
import banner from "@/components/home/banner.vue";
import categories from "@/components/home/categories.vue";
import featured_stores from "@/components/home/featured_stores.vue";
import why_zalamah from "@/components/home/why_zalamah.vue";
import download_app from "@/components/home/download_app.vue";

import api from "@/api/http"; // ← استدعاء ملف الـ axios

const homeData = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/home", {
      user_id: user.id,
    });

    homeData.value = response.data?.data;
    console.log("Cart count fetched successfully:", homeData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});
</script>