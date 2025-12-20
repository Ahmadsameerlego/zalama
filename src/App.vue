<template>
  <div class="flex flex-col min-h-screen">
    <Header :homeData="homeData" />
    <main class="flex-1">
      <Transition name="fade-slide" mode="out-in">
        <router-view />
      </Transition>
    </main>
    <Footer :homeData="homeData" />
  </div>
</template>

<script setup>
import { ref, provide, computed, onMounted } from 'vue' ;
import Header from './components/Header.vue';
import Footer from './components/Footer.vue' ;

import api from "@/api/http"; // ← استدعاء ملف الـ axios

const homeData = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/home", {
      user_id: user.id,
    });

    homeData.value = response.data;
    console.log("Cart count fetched successfully:", homeData.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});

provide('homeData', homeData);
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
</style>