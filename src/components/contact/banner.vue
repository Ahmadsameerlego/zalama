<template>
  <section
    class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] text-white py-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-white mb-6">{{ $t("contact_us") }}</h1>
        <p
          class="text-xl text-white/90 w-full text-center leading-relaxed px-[0px] py-[16px]"
        >
          {{ $t("contact_us_desc") }}
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 text-center group"
        >
          <div
            class="mb-4 flex justify-center group-hover:scale-110 transition-transform"
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
              class="lucide lucide-map-pin w-8 h-8 text-[#E94B35]"
              aria-hidden="true"
            >
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              ></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-2">{{ $t('address') }}</h3>
          <p class="text-gray-600 text-center">{{info?.address }}</p>
        </div>
        <div
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 text-center group"
        >
          <div
            class="mb-4 flex justify-center group-hover:scale-110 transition-transform"
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
              class="lucide lucide-phone w-8 h-8 text-[#E94B35]"
              aria-hidden="true"
            >
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
              ></path>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-2">{{ $t('phone') }}</h3>
          <a
            :href="`tel:${info?.phone}`"
            class="text-gray-600 text-center hover:text-[#E94B35] transition-colors"
            >
            {{ info?.phone }}
            </a
          >
        </div>
        <div
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 text-center group"
        >
          <div
            class="mb-4 flex justify-center group-hover:scale-110 transition-transform"
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
              class="lucide lucide-mail w-8 h-8 text-[#E94B35]"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-2">{{ $t('email') }}</h3>
          <a
            :href="`mailto:${info?.email}`"
            class="text-gray-600 text-center hover:text-[#E94B35] transition-colors"
            >{{ info?.email }}</a
          >
        </div>
        <div
          class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#E94B35]/20 text-center group"
        >
          <div
            class="mb-4 flex justify-center group-hover:scale-110 transition-transform"
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
              class="lucide lucide-clock w-8 h-8 text-[#E94B35]"
              aria-hidden="true"
            >
              <path d="M12 6v6l4 2"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <h3 class="text-gray-800 mb-2">{{ $t('work_time') }}</h3>
          <p class="text-gray-600 text-center">{{ info?.work_time }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
    info: {
      type: Object,
      required: false,
    },
  });
</script>