<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <img
            src="@/assets/Zalameh.png"
            alt="زلمة - دليل المتاجر المحلية"
            class="h-14 w-auto object-contain mb-4 mix-blend-screen"
          />
          <p class="text-gray-400 leading-relaxed mb-4 text-right">
            {{ homeData?.desc }}
          </p>
        </div>
        <div>
          <h3 class="text-white mb-4 text-right py-[16px] px-[0px]">
            {{$t('quick_links')}}
          </h3>
          <ul class="space-y-3 text-right">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{$t('home')}}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{$t('about_us')}}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{$t('contact_us')}}
              </router-link>
            </li>
            <li>
              <router-link to="/privacy" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{$t('privacy_policy')}}
              </router-link>
            </li>
            
            <li>
             
              <router-link to="/terms" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{$t('terms_of_service')}}
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-white mb-4 text-right px-[0px] py-[16px]">
            {{ $t('categories') }}
          </h3>
          <ul class="space-y-3 text-right">
            <li v-for="category in homeData?.data?.sections" :key="category.id">
              <router-link :to="`/categories/${category.id}`" class="text-gray-400 hover:text-[#E94B35] transition-all">
                {{ category?.title }}
              </router-link>
            </li>
           
          </ul>
        </div>
        <div>
          <h3 class="text-white mb-4 text-right px-[0px] py-[16px]">
            {{ $t('contact_us') }}
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
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
                class="lucide lucide-map-pin text-[#E94B35] mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg>
                
              <span class="text-gray-400">{{ homeData?.address }}</span>
            </li>
            <li class="flex items-start gap-3">
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
                class="lucide lucide-phone text-[#E94B35] mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                ></path></svg>
                
                <a
                :href="`tel:${homeData?.phone}`"
                target="_blank"
                class="text-gray-400 hover:text-[#E94B35] transition-all"
                dir="ltr"
                >
                {{ homeData?.phone }}
                </a
              >
            </li>
            <li class="flex items-start gap-3">
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
                class="lucide lucide-mail text-[#E94B35] mt-1 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
                <a
                :href="`mailto:${homeData?.email}`"
                class="text-gray-400 hover:text-[#E94B35] transition-all"
                >
                {{ homeData?.email }}
                </a
              >
            </li>
          </ul>
          <div class="flex gap-3 mt-6">
            <a
              :href="homeData?.facebook"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E94B35] flex items-center justify-center transition-all"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook"
                aria-hidden="true"
              >
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                ></path></svg>
              
            </a
            ><a
              :href="homeData?.twitter"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E94B35] flex items-center justify-center transition-all"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
                aria-hidden="true"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path></svg></a
            ><a
              :href="homeData?.instagram"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E94B35] flex items-center justify-center transition-all"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                ></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a
            ><a
              :href="homeData?.youtube"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E94B35] flex items-center justify-center transition-all"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube"
                aria-hidden="true"
              >
                <path
                  d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                ></path>
                <path d="m10 15 5-3-5-3z"></path></svg></a
            >
            <a
              :href="homeData?.linkedin"
              target="_blank"
              class="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E94B35] flex items-center justify-center transition-all"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
                aria-hidden="true"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle></svg >
              
              </a>
          </div>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-800 text-center">
        <p class="text-center text-gray-400 text-sm">{{ $t('copy') }}</p>
      </div>
    </div>
  </footer>
</template>



<script setup>
import { ref, onMounted } from "vue";
defineProps({
  homeData: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});
</script>