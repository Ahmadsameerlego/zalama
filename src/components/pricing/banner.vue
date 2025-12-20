<template>
  <div
    class="relative bg-gradient-to-br from-[#E94B35] to-[#d63d28] text-white py-20 px-4 overflow-hidden"
  >
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
      ></div>
    </div>
    <div class="container mx-auto max-w-6xl text-center relative z-10">
      <div
        class="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full"
      >
        <p class="text-sm">{{ $t('solutions') }}</p>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl mb-6">{{ $t('digital_marketing_solutions') }}</h1>
      <p
        class="text-lg md:text-xl text-white/90 text-center mb-8 px-[0px] py-[16px]"
      >
    {{ $t('marketing_banner_description') }}
      </p>
    </div>
  </div>
</template>