<template>
  <section
    class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] text-white py-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-white mb-6">{{ about?.page?.title }}</h1>
        <p
          class="text-xl text-white/90 w-full text-center leading-relaxed px-[0px] py-[16px]"
        >
          {{ about?.page?.desc }}
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="mb-12">
            <div class="flex items-start gap-4 mb-4">
              <div class="bg-[#E94B35]/10 p-2 rounded-2xl">
                <img :src="about?.message?.image" class="w-12 h-12 object-cover" alt="">
              </div>
              <div>
                <h2 class="text-gray-800 mb-3 text-right">{{ about?.message?.title }}</h2>
                <p class="text-gray-600 leading-relaxed text-right">
                  {{ about?.message?.desc }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-start gap-4">
              <div class="bg-[#E94B35]/10 p-2 rounded-2xl">
                <img :src="about?.vision?.image" class="w-12 h-12 object-cover" alt="">
              </div>
              <div>
                <h2 class="text-gray-800 mb-3 text-right">{{ about?.vision?.title }}</h2>
                <p class="text-gray-600 leading-relaxed text-right">
                  {{ about?.vision?.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img
              :src="about?.page?.image"
              alt="فريق زلمة"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute -bottom-6 -right-6 bg-[#E94B35] text-white p-8 rounded-2xl shadow-xl"
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
              class="lucide lucide-heart w-12 h-12 mb-2"
              aria-hidden="true"
            >
              <path
                d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
              ></path>
            </svg>
            <p class="text-sm">{{ $t('passion') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-16 bg-gradient-to-br from-[#E94B35] to-[#d43d2a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(item, index) in about?.statics" :key="index" class="text-center">
          <div class="text-white mb-2">{{ item.title }}</div>
          <p class="text-white/90">{{ item.desc }}</p>
        </div>
        
      </div>
    </div>
  </section>


  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-gray-800 mb-4">{{ $t('our_values') }}</h2>
        <p class="text-xl text-gray-600 w-full text-center">
          {{ $t('our_values_desc') }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in about?.values"
          :key="index"
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 group text-center"
        >
          <div
            class="mb-6 group-hover:scale-110 transition-transform flex justify-center"
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
              class="lucide lucide-shield w-12 h-12 text-[#E94B35]"
              aria-hidden="true"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-3">{{ item.title }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ item.desc }}
          </p>
        </div>


        <!-- <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 group text-center"
        >
          <div
            class="mb-6 group-hover:scale-110 transition-transform flex justify-center"
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
              class="lucide lucide-users w-12 h-12 text-[#E94B35]"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-3">المجتمع</h3>
          <p class="text-gray-600 leading-relaxed">
            ندعم الاقتصاد المحلي ونساعد في بناء مجتمع تجاري قوي
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 group text-center"
        >
          <div
            class="mb-6 group-hover:scale-110 transition-transform flex justify-center"
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
              class="lucide lucide-zap w-12 h-12 text-[#E94B35]"
              aria-hidden="true"
            >
              <path
                d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
              ></path>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-3">السهولة</h3>
          <p class="text-gray-600 leading-relaxed">
            نسهل عملية البحث والوصول إلى المتاجر المحلية
          </p>
        </div>
        <div
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 group text-center"
        >
          <div
            class="mb-6 group-hover:scale-110 transition-transform flex justify-center"
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
              class="lucide lucide-award w-12 h-12 text-[#E94B35]"
              aria-hidden="true"
            >
              <path
                d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
              ></path>
              <circle cx="12" cy="8" r="6"></circle>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-3">الجودة</h3>
          <p class="text-gray-600 leading-relaxed">
            نضمن جودة عالية في المحتوى والخدمات المقدمة
          </p>
        </div> -->
      </div>
    </div>
  </section>


  <section class="py-16 bg-[rgb(249,249,249)]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-gray-800 mb-4">{{about?.story?.title }}</h2>
      </div>
      <div class="rounded-3xl p-8 md:p-12 px-[48px] py-[0px]">
        <p class="text-gray-700 leading-relaxed mb-6 text-lg text-right">
          {{ about?.story?.desc }}
        </p>
       
      </div>
    </div>
  </section>



</template>

<script setup>
  defineProps({
    about: {
      type: Object,
      default: () => ({}),
    },
  });
</script>