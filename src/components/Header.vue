<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between py-4">
        <div class="flex items-center gap-3">
          <router-link to="/">
            <img
            :src="homeData?.logo"
            alt="زلمة - دليل المتاجر المحلية"
            class="h-16 lg:h-20 w-auto object-contain cursor-pointer"
          />
          </router-link>
        </div>
        <nav class="hidden lg:flex items-center gap-1">
          <router-link
            to="/"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path === '/'
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("home") }}
          </router-link>

          <router-link
            to="/categories"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/categories')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("categories_head") }}
          </router-link>

          <router-link
            to="/stores"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/stores')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("stores") }}
          </router-link>

          <router-link
            to="/pricing"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/pricing')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("pricing") }}
          </router-link>

          <router-link
            to="/about"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/about')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("about_us") }}
          </router-link>

          <router-link
            to="/contact"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/contact')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("contact_us") }}
          </router-link>
        </nav>

        <div class="hidden lg:flex items-center gap-2">
          <button
            class="px-4 py-2.5 text-gray-700 hover:text-[#E94B35] hover:bg-red-50 rounded-xl transition-all"
            title="English"
            @click="toggleLanguage"
          >
            {{ currentLanguage === "ar" ? "English" : "العربية" }}
          </button>
        </div>

        <div @click="showMenu = !showMenu" class="flex items-center gap-3 lg:hidden">
          <button
            class="hidden px-3 py-2 text-gray-700 hover:text-[#E94B35] hover:bg-red-50 rounded-xl transition-all text-sm"
            title="English"
          >
            English</button
          ><button
            class="p-2 text-gray-700 hover:text-[#E94B35] hover:bg-red-50 rounded-xl transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu"
              aria-hidden="true"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </button>
        </div>

        
      </div>

      <div v-show="showMenu" class="lg:hidden pb-4 border-t pt-4">
          <nav class="flex flex-col gap-2">

            <router-link
            to="/"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path === '/'
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("home") }}
          </router-link>

          <router-link
            to="/categories"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/categories')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("categories_head") }}
          </router-link>

          <router-link
            to="/stores"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/stores')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("stores") }}
          </router-link>

          <router-link
            to="/pricing"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/pricing')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("pricing") }}
          </router-link>

          <router-link
            to="/about"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/about')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("about_us") }}
          </router-link>

          <router-link
            to="/contact"
            :class="[
              'px-5 py-2.5 rounded-xl transition-all',
              route.path.startsWith('/contact')
                ? 'text-white bg-[#E94B35]'
                : 'text-gray-700 hover:text-[#E94B35] hover:bg-red-50',
            ]"
          >
            {{ $t("contact_us") }}
          </router-link>

           <button
            class="px-4 py-2.5 text-gray-700 hover:text-[#E94B35] hover:bg-red-50 rounded-xl transition-all"
            title="English"
            @click="toggleLanguage"
          >
            {{ currentLanguage === "ar" ? "English" : "العربية" }}
          </button>
          </nav>
        </div>

    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { setLanguage } from "../i18n";
import api from "@/api/http"; // ← استدعاء ملف الـ axios

const props = defineProps({
  cartCount: { type: Number, default: 0 },
  homeData: { type: Object, default: () => ({}) },
});
const showMenu = ref(false);
const open = ref(false);
const router = useRouter();
import { useRoute } from "vue-router";

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    open.value = false;
    console.log("Route changed, menu closed.");
  }
);

const { locale } = useI18n();

const currentLanguage = computed(() => locale.value);

// Check if user is authenticated
const token = ref(localStorage.getItem("token"));

const isAuthed = computed(() => !!token.value);

function goToCart() {
  if (!isAuthed.value) {
    router.push("/login");
    return;
  }
  router.push("/cart");
}

function toggleLanguage() {
  const newLocale = currentLanguage.value === "ar" ? "en" : "ar";
  setLanguage(newLocale);
  open.value = false;
  window.location.reload();
}
const cart_count = ref(null);
const notification_count = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/home", {
      user_id: user.id,
    });

    cart_count.value = response.data.cart_count;
    notification_count.value = response.data.notification_count;
    console.log("Cart count fetched successfully:", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// onMounted(() => {
//   getData();
// });

async function logout() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    await api.post("/api/logout", {
      lang: currentLanguage.value, // ar أو en
      device_id: localStorage.getItem("device_id") || "unknown",
      user_id: user.id,
    });

    // تنظيف البيانات
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // رجوع لصفحة تسجيل الدخول
    router.push("/login");
    setTimeout(() => {
      location.reload();
    }, 500);
  } catch (error) {
    console.error("Logout failed:", error);
  }
}

// اقفل المينيو أول ما الصفحة تتغير
watch(
  () => route.fullPath,
  () => {
    showMenu.value = false;
  }
);


</script>


<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
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