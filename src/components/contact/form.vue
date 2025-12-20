<template>
  <section class="py-16 bg-[rgb(249,249,249)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
          <div class="mb-8">
            <h2 class="text-gray-800 mb-3 text-right">{{ $t('send_message') }}</h2>
            <p class="text-gray-600 text-right">
              {{ $t('fill_form') }}
            </p>
          </div>
          <form @submit.prevent="sendData" class="space-y-6">
            <div>
              <label class="block text-gray-700 mb-2 text-right"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user inline w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle></svg>
                {{ $t('full_name') }}</label
              >
              <input
                type="text"
                name="name"
                v-model="form.name"
                required=""
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E94B35] focus:ring-2 focus:ring-[#E94B35]/20 outline-none transition-all text-right"
                :placeholder="$t('enter_full_name')"
                value=""
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-2 text-right"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail inline w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect></svg ><span>{{ $t('your_email') }}</span></label
              >
              <input
                type="email"
                name="email"
                required=""
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E94B35] focus:ring-2 focus:ring-[#E94B35]/20 outline-none transition-all text-right"
                placeholder="example@email.com"
                v-model="form.email"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-2 text-right"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone inline w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path
                    d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                  ></path></svg ><span>{{ $t('phone') }}</span></label
              >
              <input
                type="tel"
                v-model="form.phone"
                required=""
                name="phone"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E94B35] focus:ring-2 focus:ring-[#E94B35]/20 outline-none transition-all text-right"
                placeholder="+962 79 123 4567"
              />
            </div>
            <div>
              <label class="block text-gray-700 mb-2 text-right"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-building inline w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                  <rect x="4" y="2" width="16" height="20" rx="2"></rect></svg><span>{{ $t('subject') }}</span></label
              >
              <select
                name="subject"
                required=""
                v-model="form.subject"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E94B35] focus:ring-2 focus:ring-[#E94B35]/20 outline-none transition-all text-right"
              >
                <option value="">{{ $t('select_subject') }}</option>
                <option v-for="(option, index) in info?.data?.titles" :key="index" :value="option.title">{{ option.title }}</option>
              </select>
            </div>
            <div>
              <label class="block text-gray-700 mb-2 text-right"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-message-square inline w-5 h-5 ml-2"
                  aria-hidden="true"
                >
                  <path
                    d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                  ></path></svg><span>{{ $t('message') }}</span></label
              >
              <textarea
                name="message"
                required=""
                rows="5"
                v-model="form.message"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#E94B35] focus:ring-2 focus:ring-[#E94B35]/20 outline-none transition-all text-right resize-none"
                :placeholder="$t('enter_your_message')"
              ></textarea>
            </div>

            <div>
              <p v-if="messageSuccess" class="text-green-500">{{ $t('message_sent') }}</p>
            </div>
            <button
              type="submit"
              class="w-full px-8 py-4 bg-[#E94B35] text-white rounded-xl hover:bg-[#d43d2a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span>{{ $t('send_now') }}</span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-send w-5 h-5"
                aria-hidden="true"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                ></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </button>
          </form>
        </div>
        <div class="space-y-6">
          <div class="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MjI0OTQ0MXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080&amp;utm_source=figma&amp;utm_medium=referral"
              alt="خدمة العملاء"
              class="w-full h-[400px] object-cover"
            />
          </div>
          <div
            class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] rounded-3xl p-8 text-white shadow-xl"
          >
            <h3 class="text-white mb-4 text-right">{{ $t('join_us_title') }}</h3>
            <p class="text-white/90 mb-6 leading-relaxed text-right">
              {{ $t('join_us_desc') }}
            </p>
            <router-link
              to="/pricing"
              class="px-6 py-3 bg-white text-[#E94B35] rounded-xl hover:shadow-2xl transition-all text-center"
            >
              {{ $t('join_now') }}
            </router-link>
          </div>
          <div
            class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <h3 class="text-gray-800 mb-4 text-right">{{ $t('faq_title') }}</h3>
            <div class="space-y-4">
              <div v-for="(faq, index) in info?.data?.faq" :key="index">
                <p class="text-gray-800 mb-2 text-right">
                  {{ faq.title }}
                </p>
                <p class="text-gray-600 text-sm leading-relaxed text-right">
                  {{ faq.desc }}
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
  import {  ref } from "vue";
  import api from "@/api/http"; // ← استدعاء ملف الـ axios

  defineProps({
    info: {
      type: Object,
      required: false,
      default: null,
    },
  });

  const form = ref({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const messageSuccess = ref(false);
  const sendData = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post("/api/contact-us", {
      user_id: user.id,
      ...form.value,
    });

    form.value = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    messageSuccess.value = true;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

</script>