<template>
  <div class="relative">
    <div class="h-64 bg-gradient-to-br from-[#E94B35] to-[#d43d2a]"></div>
    <button
      @click="$router.back()"
      class="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:bg-white transition-all z-10"
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
        class="lucide lucide-chevron-right text-gray-800"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </button>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative -mt-20">
        <div class="bg-white rounded-3xl shadow-2xl p-8 p-[32px]">
          <div
            class="flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <div
              class="w-32 h-32 rounded-2xl bg-white shadow-xl flex items-center justify-center overflow-hidden flex-shrink-0 border-4 border-white"
            >
              <img
                :src="store?.logo"
                :alt="store?.full_name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1 text-right">
              <div class="flex items-start justify-between gap-4 mb-3 flex-col md:flex-row">
                <div>
                  <h1 class="text-gray-800 mb-1 p-[0px]">
                    {{ store?.full_name }}
                  </h1>
                  <div
                    class="flex items-center gap-2 flex-wrap px-[0px] py-[8px]"
                  >
                    <span
                      class="inline-flex items-center gap-1.5 bg-[#E94B35]/10 text-[#E94B35] px-[12px] py-[8px] rounded-lg text-sm"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-utensils"
                        aria-hidden="true"
                      >
                        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                        <path d="M7 2v20"></path>
                        <path
                          d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
                        ></path></svg
                      ><span>{{ store?.section }}</span></span
                    ><span
                      class="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-tag"
                        aria-hidden="true"
                      >
                        <path
                          d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                        ></path>
                        <circle
                          cx="7.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle></svg
                      ><span>{{ store?.sub_sections_string }}</span></span
                    >
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="flex items-center gap-2">
                    <!-- whats app -->
                    <a
                      :href="`https://wa.me/${store?.whatsapp}`"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-xl bg-[#E94B35]/10 hover:bg-[#E94B35]/20 flex items-center justify-center transition-all group relative"
                      aria-label="واتساب"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="#d43d2a"
                      >
                        <path
                          d="M16.01 3C9.383 3 4 8.383 4 15.01c0 2.65.86 5.095 2.314 7.073L4 29l7.09-2.27a11.94 11.94 0 0 0 4.92 1.05h.01C22.617 27.78 28 22.397 28 15.77 28 9.143 22.617 3.76 16.01 3Zm0 21.69c-1.55 0-3.06-.42-4.38-1.2l-.31-.18-4.21 1.35 1.37-4.1-.2-.33a8.64 8.64 0 1 1 7.73 4.46Zm4.74-6.52c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.1-1.27-.78-.7-1.3-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.5c-.17 0-.46.06-.7.33-.24.26-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.73.13.17 1.87 2.85 4.53 4 .63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.53-.63 1.75-1.23.22-.6.22-1.12.15-1.23-.06-.1-.24-.17-.5-.3Z"
                        />
                      </svg>

                      <span
                        class="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                        >واتساب</span
                      ></a
                    >

                    <!-- snapchat  -->
                    <a
                      :href="store?.snapchat"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-xl bg-[#E94B35]/10 hover:bg-[#E94B35]/20 flex items-center justify-center transition-all group relative"
                      aria-label="سناب شات"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="#d43d2a"
                      >
                        <path
                          d="M16 2C9.383 2 4 7.383 4 14c0 4.98 3.37 9.18 8 10.77V30l4-2 4 2v-5.23c4.63-1.59 8-5.79 8-10.77 0-6.617-5.383-12-12-12z"
                        />
                      </svg>

                      <span
                        class="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                        >سناب شات</span
                      ></a
                    ><a
                      :href="store?.instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-xl bg-[#E94B35]/10 hover:bg-[#E94B35]/20 flex items-center justify-center transition-all group relative"
                      aria-label="انستغرام"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-instagram text-[#E94B35] group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        ></path>
                        <line
                          x1="17.5"
                          x2="17.51"
                          y1="6.5"
                          y2="6.5"
                        ></line></svg
                      ><span
                        class="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                        >انستغرام</span
                      ></a
                    ><a
                      :href="store?.facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="w-10 h-10 rounded-xl bg-[#E94B35]/10 hover:bg-[#E94B35]/20 flex items-center justify-center transition-all group relative"
                      aria-label="فيسبوك"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-facebook text-[#E94B35] group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        ></path></svg
                      ><span
                        class="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10"
                        >فيسبوك</span
                      ></a
                    >
                  </div>
                  <div
                    class="flex items-center gap-2 bg-[#E94B35]/10 px-4 py-2 rounded-xl"
                  >
                    <span class="text-[#E94B35]">{{ store?.rate }}</span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star text-[#E94B35] fill-[#E94B35]"
                      aria-hidden="true"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
              >
                <div
                  class="flex items-center justify-start gap-3 bg-white border-2 border-[#F1F5F9] p-4 rounded-xl"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0"
                  >
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
                      class="lucide lucide-map-pin text-red-600"
                      aria-hidden="true"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="text-left">
                    <p class="text-gray-600 text-sm mb-1 text-right">
                      {{ $t("address") }}
                    </p>
                    <p class="text-gray-800">{{ store?.address }}</p>
                  </div>
                </div>
                <div
                  class="flex items-center justify-start gap-3 bg-white border-2 border-[#F1F5F9] p-4 rounded-xl"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0"
                  >
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
                      class="lucide lucide-phone text-red-600"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                  </div>
                  <div class="text-left">
                    <p class="text-gray-600 text-sm mb-1 text-right">
                      {{ $t("phone") }}
                    </p>
                    <p class="text-gray-800" dir="ltr">{{ store?.phone }}</p>
                  </div>
                </div>
                <div
                  class="flex items-center justify-start gap-3 bg-white border-2 border-[#F1F5F9] p-4 rounded-xl"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0"
                  >
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
                      class="lucide lucide-clock text-red-600"
                      aria-hidden="true"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div class="text-left">
                    <p class="text-gray-600 text-sm mb-1 text-right">
                      {{ $t("work_time") }}
                    </p>
                    <p class="text-gray-800">{{ store?.work_time }}</p>
                  </div>
                </div>
                <div
                  class="flex items-center justify-start gap-3 bg-white border-2 border-[#F1F5F9] p-4 rounded-xl"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0"
                  >
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
                      class="lucide lucide-calendar text-red-600"
                      aria-hidden="true"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div class="text-left">
                    <p class="text-gray-600 text-sm mb-1 text-right">
                      {{ $t("work_day") }}
                    </p>
                    <p class="text-gray-800">{{ store?.work_day }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-8 pt-[16px] border-t border-gray-200 pr-[0px] pb-[0px] pl-[0px]"
          >
            <div class="flex items-center justify-between gap-4 mb-3 flex-col md:flex-row">
              <h3 class="text-gray-800 text-right">{{ $t("about_store") }}</h3>
              <a
                v-if="store?.url"
                :href="store?.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-gradient-to-br from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] text-[rgb(255,255,255)] px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-globe text-white"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path
                    d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                  ></path>
                  <path d="M2 12h20"></path></svg
                ><span class="text-[rgb(255,255,255)]">{{
                  $t("website")
                }}</span></a
              >
            </div>
            <p
              class="text-gray-600 leading-relaxed text-right px-[0px] py-[8px]"
            >
              {{ store?.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="bg-white rounded-2xl shadow-md p-2 mb-8 flex gap-2 overflow-x-auto">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="[
          'flex-1 py-4 px-6 rounded-xl transition-all',
          activeTab === tab.key
            ? 'bg-[#E94B35] text-white shadow-lg'
            : 'text-gray-600 hover:bg-gray-50 bg-white',
        ]"
      >
        {{ $t(tab.label) }}
      </button>
    </div>
    <!-- العروض  -->
    <div
      v-if="activeTab === 'offers'"
      class="bg-white rounded-2xl shadow-md p-8"
    >
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(offer, index) in store?.offers"
            :key="index"
            class="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E94B35] bg-white"
          >
            <div
              class="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
            >
              <img
                :src="offer.image"
                :alt="offer.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-gray-800 text-right">{{ offer.title }}</h3>
              <p
                class="text-gray-600 text-sm leading-relaxed text-right line-clamp-2"
              >
                {{ offer.desc }}
              </p>
              <div class="flex items-center justify-between gap-3 pt-2">
                <div
                  class="bg-gradient-to-br from-[#E94B35] to-[#d43d2a] text-white px-4 py-2 rounded-xl"
                >
                  <span class="text-sm">{{ $t("dinar") }}</span
                  ><span class="mx-1">{{ offer.price }}</span>
                </div>
                <div class="flex-1">
                  <div
                    class="flex items-center justify-center gap-2 bg-[#E94B35]/10 px-3 py-2 rounded-lg"
                  >
                    <div class="flex items-center gap-1 text-[#E94B35]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-timer"
                        aria-hidden="true"
                      >
                        <line x1="10" x2="14" y1="2" y2="2"></line>
                        <line x1="12" x2="15" y1="14" y2="11"></line>
                        <circle cx="12" cy="14" r="8"></circle>
                      </svg>
                    </div>
                    <div class="flex items-center gap-1" dir="ltr">
                      <span class="text-[#E94B35]"
                        >س{{ countdowns[index]?.hours }}</span
                      >
                      <span class="text-gray-400">:</span>
                      <span class="text-[#E94B35]"
                        >د{{ countdowns[index]?.minutes }}</span
                      >
                      <span class="text-gray-400">:</span>
                      <span class="text-[#E94B35]"
                        >ث{{ countdowns[index]?.seconds }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- الصور  -->
    <div
      v-if="activeTab === 'images'"
      class="bg-white rounded-2xl shadow-md p-8"
    >
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(image, index) in store?.photos"
            :key="index"
              @click="openViewer(index)"
  class="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E94B35]"
            >
            <div
              class="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
            >
              <img
                :src="image.image"
                alt="صورة 1"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- الفيديوها  -->
    <div
      v-if="activeTab === 'videos'"
      class="bg-white rounded-2xl shadow-md p-8"
    >
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(video, index) in store?.videos"
            :key="index"
            @click="openVideo(video)"
            class="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E94B35] relative"
          >
            <div
              class="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden"
            >
              <img
                :src="video.image"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div
                class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="64"
                  height="64"
                >
                  <!-- الخلفية -->
                  <circle cx="12" cy="12" r="11" fill="#FF0000" />

                  <!-- علامة التشغيل -->
                  <polygon points="10,8 17,12 10,16" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- الفروع  -->
    <div
      v-if="activeTab === 'branches'"
      class="bg-white rounded-2xl shadow-md p-8"
    >
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(branch, index) in store?.branches"
            :key="index"
            class="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#E94B35] hover:shadow-lg transition-all"
          >
            <div class="space-y-4">
              <h3 class="text-gray-800 text-right px-[0px] py-[8px]">
                {{ branch.title }}
              </h3>
              <div class="flex items-center justify-between gap-3">
                <a
                  :href="`tel:${branch.phone}`"
                  class="flex-1 flex items-center justify-end gap-2 bg-white border-2 border-[#F1F5F9] text-red-700 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all"
                  dir="ltr"
                  ><span>{{ branch.phone }}</span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-phone"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                    ></path></svg
                ></a>

                <a
                  :href="branch?.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-11 h-11 rounded-xl bg-white border-2 border-[#F1F5F9] flex items-center justify-center hover:bg-gray-50 transition-all group flex-shrink-0"
                  aria-label="فتح الخريطة"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pinned text-red-700 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
                    ></path>
                    <circle cx="12" cy="8" r="2"></circle>
                    <path
                      d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
                    ></path></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- jobs  -->
    <div v-if="activeTab==='jobs'" class="bg-white rounded-2xl shadow-md p-8">
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(job, index) in store?.jobs"
            :key="index"
            class="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#E94B35] hover:shadow-lg transition-all"
          >
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-right">
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E94B35] to-[#d43d2a] flex items-center justify-center flex-shrink-0"
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
                    class="lucide lucide-briefcase text-white"
                    aria-hidden="true"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 class="text-gray-800">{{ job.title }}</h3>
              </div>
              <p
                class="text-gray-600 text-sm leading-relaxed text-right pr-[0px] pt-[0px] pb-[8px] pl-[60px]"
              >
                {{ job.desc }}
              </p>
              <div class="flex flex-col gap-3 pt-2 border-t border-gray-200">
                <a
                  :href="'tel:' + job.phone"
                  class="flex items-center justify-end gap-2 text-gray-700 hover:text-[#E94B35] transition-all group text-right"
                  dir="ltr"
                  ><span>{{ job.phone }}</span>
                  <div
                    class="w-9 h-9 rounded-lg bg-white border-2 border-[#F1F5F9] flex items-center justify-center group-hover:bg-gray-50 transition-all"
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
                      class="lucide lucide-phone text-red-700"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg></div></a
                ><a
                  :href="'mailto:' + job.email"
                  class="flex items-center justify-end gap-2 text-gray-700 hover:text-[#E94B35] transition-all group text-right"
                  dir="ltr"
                  ><span>{{ job.email }}</span>
                  <div
                    class="w-9 h-9 rounded-lg bg-white border-2 border-[#F1F5F9] flex items-center justify-center group-hover:bg-gray-50 transition-all"
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
                      class="lucide lucide-send text-red-700"
                      aria-hidden="true"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                      ></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg></div
                ></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <!-- video pop up  -->
  <div
    v-if="showVideoModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
  >
    <div class="relative w-full max-w-4xl mx-4">
      <!-- Close button -->
      <button
        @click="closeVideo"
        class="absolute -top-10 right-0 text-white text-3xl hover:text-[#E94B35] transition"
      >
        ✕
      </button>

      <!-- Video -->
      <div class="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <iframe
          v-if="activeVideo"
          :src="activeVideo.url.replace('watch?v=', 'embed/') + '?autoplay=1'"
          class="w-full h-full"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>


  <!-- Image Viewer -->
<div
  v-if="viewerOpen"
  class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
>
  <!-- Close -->
  <button
    @click="closeViewer"
    class="absolute top-6 right-6 text-white text-3xl font-bold"
  >
    ✕
  </button>

  <!-- Prev -->
  <button
    @click="prevImage"
    class="absolute left-6 text-white text-4xl"
  >
     ›
  </button>

  <!-- Image -->
  <div
    class="max-w-[90vw] max-h-[90vh] overflow-hidden flex items-center justify-center"
  >
    <img
      :src="store.photos[currentIndex].image"
      class="transition-transform duration-300 cursor-zoom-in"
      :style="{ transform: `scale(${zoom})` }"
      @wheel="handleZoom"
      @dblclick="toggleZoom"
    />
  </div>

  <!-- Next -->
  <button
    @click="nextImage"
    class="absolute right-6 text-white text-4xl"
  >
   
    ‹
  </button>
</div>


</template>



<script setup>
import { ref, onMounted, computed, onUnmounted } from "vue";

import api from "@/api/http"; // ← استدعاء ملف الـ axios
import { useRoute } from "vue-router";
const route = useRoute();
const store = ref(null);

const activeTab = ref("offers"); // القيمة الافتراضية

const tabs = [
  { key: "offers", label: "offers" },
  { key: "images", label: "images" },
  { key: "videos", label: "videos" },
  { key: "branches", label: "branches" },
  { key: "jobs", label: "jobs" },
];

const getStore = async () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  try {
    const response = await api.post(`/api/show-provider`, {
      user_id: user.id,
      provider_id: route.params.id,
    });

    store.value = response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(() => {
  getStore();
});

// هذا المصفوفة لتخزين countdown لكل offer
const countdowns = ref([]);

const initializeCountdowns = () => {
  countdowns.value = store.value?.offers.map(() => ({
    hours: "00",
    minutes: "00",
    seconds: "00",
  }));
};

let intervalId = null;

const updateCountdowns = () => {
  const now = new Date();

  store.value?.offers.forEach((offer, index) => {
    const endDate = new Date(offer.end_date);
    let diff = endDate - now;

    if (diff <= 0) {
      countdowns.value[index] = { hours: "00", minutes: "00", seconds: "00" };
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    countdowns.value[index] = {
      hours: h.toString().padStart(2, "0"),
      minutes: m.toString().padStart(2, "0"),
      seconds: s.toString().padStart(2, "0"),
    };
  });
};

onMounted(() => {
  setTimeout(() => {
    initializeCountdowns();
    updateCountdowns();
    intervalId = setInterval(updateCountdowns, 1000);
  }, 1000); // تأخير بسيط لضمان تحميل البيانات
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const showVideoModal = ref(false);
const activeVideo = ref(null);

const openVideo = (video) => {
  activeVideo.value = video;
  showVideoModal.value = true;
};

const closeVideo = () => {
  showVideoModal.value = false;
  activeVideo.value = null;
};



const viewerOpen = ref(false);
const currentIndex = ref(0);
const zoom = ref(1);

const openViewer = (index) => {
  currentIndex.value = index;
  zoom.value = 1;
  viewerOpen.value = true;
};

const closeViewer = () => {
  viewerOpen.value = false;
};

const nextImage = () => {
  if (currentIndex.value < store?.value?.photos.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
  zoom.value = 1;
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = store?.value?.photos.length - 1;
  }
  zoom.value = 1;
};

const handleZoom = (event) => {
  event.preventDefault();
  zoom.value += event.deltaY > 0 ? -0.1 : 0.1;
  zoom.value = Math.min(Math.max(zoom.value, 1), 3);
};

const toggleZoom = () => {
  zoom.value = zoom.value === 1 ? 2 : 1;
};


</script>