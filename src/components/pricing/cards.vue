<template>
  <div class="container mx-auto max-w-7xl px-4 py-16 md:py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">

        
      <div
        v-for="value in packages"
        :key="value.id"
        class="relative rounded-3xl border-2 transition-all duration-300 overflow-hidden border-gray-200 hover:border-gray-300 hover:shadow-lg"
      >
        <div class="h-full bg-gradient-to-br from-blue-50 to-sky-50 p-8">
          <div class="text-center mb-8">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4"
            >
              <img :src="value?.image" class="w-12 h-12 object-contain" alt="">
            </div>
            <h3 class="text-2xl mb-2">{{ value?.title }}</h3>
            <p class="text-sm text-gray-600 mb-6">
              {{ value?.short_desc }}
            </p>
            <div class="mb-6">
              <div class="flex items-baseline justify-center gap-1">
                <span
                  class="text-5xl bg-gradient-to-r ${pkg.color} bg-clip-text text-[rgb(0,0,0)]"
                  >
                    {{ value?.price }}
                  </span
                ><span class="text-gray-600">{{ $t('monthly') }}</span>
              </div>
            </div>
            <div v-html="value?.desc" class="space-y-4">

            </div>
            <a
              href="https://wa.me/962791234567?text=مرحباً، أود الاستفسار عن باقة %D8%B2%D9%84%D9%85%D8%A9%20%D8%B9%D9%84%D9%89%20%D8%A7%D9%84%D8%AE%D9%81%D9%8A%D9%81"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-3 px-6 rounded-xl text-center transition-all duration-300 mt-6 !text-white bg-[#E94B35] border-2 border-gray-200 hover:border-[#E94B35]"
              >{{ $t('buy_now') }}</a
            >
          </div>
        </div>
      </div>


      
    </div>
  </div>
</template>


<script setup>
  import { ref, computed, inject, onMounted } from "vue";
  import api from "@/api/http"; // ← استدعاء ملف الـ axios

const packages = ref(null);
const getData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/packages", {
      user_id: user.id,
    });

    packages.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
onMounted(() => {
  getData();
});

</script>