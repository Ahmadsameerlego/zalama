<template>
  <section class="py-16 bg-[rgb(249,249,249)]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-gray-800 mb-4">{{ $t('app_download_title') }}</h2>
        <p
          class="text-xl text-gray-600 text-center mx-auto max-w-7xl px-4 px-[16px] py-[8px]"
        >
          {{ app_download_title }}
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <a
          :href="android_link"
          target="_blank"
          class="bg-white rounded-2xl text-center shadow-lg hover:shadow-xl transition-all px-[32px] py-[24px]"
        >
          <div class="mb-[16px] mt-[0px] mr-[0px] ml-[0px]">
            <svg
              class="w-16 h-16 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.609 1.814L13.792 12L3.609 22.186C3.223 21.863 3 21.359 3 20.814V3.186C3 2.64 3.223 2.137 3.609 1.814Z"
                fill="url(#paint0_linear_google)"
              ></path>
              <path
                d="M13.792 12L3.609 1.814C3.822 1.635 4.091 1.528 4.386 1.528C4.583 1.528 4.773 1.577 4.943 1.67L16.297 8.024L13.792 12Z"
                fill="url(#paint1_linear_google)"
              ></path>
              <path
                d="M20.5 12C20.5 12.469 20.234 12.891 19.828 13.121L16.297 15.041L13.792 12L16.297 8.959L19.828 10.879C20.234 11.109 20.5 11.531 20.5 12Z"
                fill="url(#paint2_linear_google)"
              ></path>
              <path
                d="M16.297 15.976L4.943 22.33C4.773 22.423 4.583 22.472 4.386 22.472C4.091 22.472 3.822 22.365 3.609 22.186L13.792 12L16.297 15.976Z"
                fill="url(#paint3_linear_google)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_google"
                  x1="11.9"
                  y1="1.814"
                  x2="2.15"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A0FF"></stop>
                  <stop offset="0.657" stop-color="#00A1FF"></stop>
                  <stop offset="1" stop-color="#00BEFF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_google"
                  x1="15.4"
                  y1="10.5"
                  x2="1.75"
                  y2="0.57"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00D676"></stop>
                  <stop offset="1" stop-color="#00D675"></stop>
                </linearGradient>
                <linearGradient
                  id="paint2_linear_google"
                  x1="13.792"
                  y1="12"
                  x2="20.5"
                  y2="12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFCE00"></stop>
                  <stop offset="1" stop-color="#FFEA00"></stop>
                </linearGradient>
                <linearGradient
                  id="paint3_linear_google"
                  x1="1.75"
                  y1="23.43"
                  x2="15.4"
                  y2="13.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4E42"></stop>
                  <stop offset="1" stop-color="#FF4E42"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="flex justify-center items-center">
            <svg height="160" width="160" viewBox="0 0 33 33" role="img">
              <path
                fill="#FFFFFF"
                d="M0,0 h33v33H0z"
                shape-rendering="crispEdges"
              ></path>
              <path
                fill="#000000"
                d="M0 0h7v1H0zM8 0h3v1H8zM12 0h1v1H12zM17 0h5v1H17zM23 0h1v1H23zM26,0 h7v1H26zM0 1h1v1H0zM6 1h1v1H6zM8 1h3v1H8zM14 1h1v1H14zM16 1h3v1H16zM22 1h2v1H22zM26 1h1v1H26zM32,1 h1v1H32zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM12 2h3v1H12zM22 2h3v1H22zM26 2h1v1H26zM28 2h3v1H28zM32,2 h1v1H32zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h3v1H8zM15 3h1v1H15zM17 3h1v1H17zM23 3h2v1H23zM26 3h1v1H26zM28 3h3v1H28zM32,3 h1v1H32zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM9 4h1v1H9zM11 4h3v1H11zM16 4h1v1H16zM19 4h1v1H19zM22 4h1v1H22zM24 4h1v1H24zM26 4h1v1H26zM28 4h3v1H28zM32,4 h1v1H32zM0 5h1v1H0zM6 5h1v1H6zM9 5h1v1H9zM11 5h2v1H11zM14 5h8v1H14zM24 5h1v1H24zM26 5h1v1H26zM32,5 h1v1H32zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22 6h1v1H22zM24 6h1v1H24zM26,6 h7v1H26zM8 7h3v1H8zM15 7h4v1H15zM20 7h1v1H20zM22 7h2v1H22zM0 8h1v1H0zM2 8h2v1H2zM5 8h3v1H5zM10 8h1v1H10zM12 8h1v1H12zM14 8h6v1H14zM21 8h1v1H21zM23 8h1v1H23zM26 8h1v1H26zM29 8h1v1H29zM31,8 h2v1H31zM2 9h1v1H2zM5 9h1v1H5zM9 9h1v1H9zM11 9h1v1H11zM13 9h1v1H13zM16 9h1v1H16zM18 9h3v1H18zM23 9h2v1H23zM26 9h2v1H26zM29,9 h4v1H29zM3 10h1v1H3zM5 10h2v1H5zM9 10h1v1H9zM11 10h1v1H11zM13 10h1v1H13zM17 10h1v1H17zM20 10h1v1H20zM22 10h3v1H22zM26 10h4v1H26zM31,10 h2v1H31zM0 11h2v1H0zM3 11h2v1H3zM11 11h1v1H11zM15 11h2v1H15zM18 11h1v1H18zM20 11h1v1H20zM27 11h1v1H27zM29 11h1v1H29zM31 11h1v1H31zM0 12h1v1H0zM2 12h1v1H2zM4 12h1v1H4zM6 12h2v1H6zM11 12h2v1H11zM14 12h4v1H14zM19 12h1v1H19zM22 12h4v1H22zM27 12h3v1H27zM0 13h6v1H0zM7 13h4v1H7zM13 13h2v1H13zM19 13h1v1H19zM21 13h1v1H21zM24 13h1v1H24zM27 13h1v1H27zM29 13h1v1H29zM31 13h1v1H31zM1 14h1v1H1zM5 14h2v1H5zM9 14h3v1H9zM18 14h2v1H18zM21 14h1v1H21zM24 14h1v1H24zM26 14h1v1H26zM28 14h3v1H28zM1 15h1v1H1zM3 15h3v1H3zM7 15h2v1H7zM11 15h1v1H11zM15 15h1v1H15zM19 15h1v1H19zM21 15h3v1H21zM25 15h2v1H25zM30 15h1v1H30zM0 16h3v1H0zM5 16h2v1H5zM9 16h2v1H9zM14 16h1v1H14zM16 16h1v1H16zM19 16h4v1H19zM24 16h3v1H24zM28 16h3v1H28zM3 17h1v1H3zM11 17h2v1H11zM14 17h2v1H14zM17 17h1v1H17zM22 17h3v1H22zM26 17h1v1H26zM28 17h2v1H28zM32,17 h1v1H32zM0 18h1v1H0zM3 18h2v1H3zM6 18h3v1H6zM10 18h1v1H10zM15 18h2v1H15zM20 18h2v1H20zM26 18h3v1H26zM30 18h2v1H30zM4 19h2v1H4zM8 19h2v1H8zM12 19h7v1H12zM22 19h2v1H22zM25 19h2v1H25zM28 19h1v1H28zM32,19 h1v1H32zM0 20h3v1H0zM6 20h1v1H6zM9 20h1v1H9zM11 20h1v1H11zM13 20h1v1H13zM15 20h7v1H15zM24 20h1v1H24zM27 20h1v1H27zM29 20h3v1H29zM0 21h2v1H0zM4 21h2v1H4zM8 21h2v1H8zM12 21h1v1H12zM15 21h6v1H15zM22 21h3v1H22zM26 21h1v1H26zM29 21h1v1H29zM32,21 h1v1H32zM2 22h1v1H2zM6 22h4v1H6zM13 22h3v1H13zM18 22h1v1H18zM20 22h5v1H20zM26 22h2v1H26zM30,22 h3v1H30zM1 23h1v1H1zM3 23h2v1H3zM8 23h2v1H8zM15 23h1v1H15zM18 23h1v1H18zM20 23h1v1H20zM23 23h1v1H23zM25 23h1v1H25zM27 23h3v1H27zM0 24h1v1H0zM3 24h1v1H3zM6 24h1v1H6zM10 24h1v1H10zM12 24h1v1H12zM14 24h1v1H14zM17 24h1v1H17zM19 24h1v1H19zM22 24h1v1H22zM24 24h5v1H24zM32,24 h1v1H32zM8 25h2v1H8zM12 25h1v1H12zM14 25h6v1H14zM23 25h2v1H23zM28 25h2v1H28zM31 25h1v1H31zM0 26h7v1H0zM8 26h1v1H8zM10 26h3v1H10zM16 26h1v1H16zM18 26h2v1H18zM22 26h3v1H22zM26 26h1v1H26zM28 26h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM8 27h3v1H8zM12 27h1v1H12zM15 27h2v1H15zM20 27h2v1H20zM23 27h2v1H23zM28 27h4v1H28zM0 28h1v1H0zM2 28h3v1H2zM6 28h1v1H6zM9 28h1v1H9zM12 28h1v1H12zM18 28h11v1H18zM30 28h1v1H30zM32,28 h1v1H32zM0 29h1v1H0zM2 29h3v1H2zM6 29h1v1H6zM8 29h1v1H8zM10 29h1v1H10zM13 29h2v1H13zM16 29h1v1H16zM27 29h1v1H27zM29 29h1v1H29zM32,29 h1v1H32zM0 30h1v1H0zM2 30h3v1H2zM6 30h1v1H6zM8 30h1v1H8zM14 30h2v1H14zM17 30h2v1H17zM22 30h2v1H22zM26 30h2v1H26zM30 30h1v1H30zM0 31h1v1H0zM6 31h1v1H6zM9 31h5v1H9zM17 31h2v1H17zM20 31h1v1H20zM22 31h1v1H22zM24 31h2v1H24zM27 31h2v1H27zM32,31 h1v1H32zM0 32h7v1H0zM8 32h2v1H8zM11 32h1v1H11zM15 32h1v1H15zM17 32h3v1H17zM21 32h1v1H21zM23 32h1v1H23zM25 32h1v1H25zM28 32h1v1H28zM30 32h1v1H30z"
                shape-rendering="crispEdges"
              ></path>
            </svg>
          </div>
        </a>

        <a
          :href="ios_link"
          target="_blank"
          class="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
        >
          <div class="mb-[16px] mt-[0px] mr-[0px] ml-[0px]">
            <svg
              class="w-16 h-16 mx-auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.05 20.28c-.98.95-2.05.72-3.08.35-1.09-.38-2.09-.4-3.23 0-1.41.52-2.15.37-2.99-.35-4.94-4.96-4.2-12.47 1.08-12.75 1.32.07 2.24.73 3.01.78 1.15-.23 2.26-.93 3.5-.84 1.5.12 2.62.71 3.36 1.79-3.37 2.02-2.58 6.46.74 7.7-.42 1.07-.95 2.14-1.65 3.19-.84.92-1.72 1.84-2.74 1.84z"
                fill="#000000"
              ></path>
              <path
                d="M12.03 5.5c-.09-1.97 1.37-3.67 3.33-3.5.2 2.14-2.07 4.01-3.33 3.5z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <div class="flex justify-center items-center">
            <svg height="160" width="160" viewBox="0 0 29 29" role="img">
              <path
                fill="#FFFFFF"
                d="M0,0 h29v29H0z"
                shape-rendering="crispEdges"
              ></path>
              <path
                fill="#000000"
                d="M0 0h7v1H0zM9 0h2v1H9zM13 0h3v1H13zM17 0h3v1H17zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM10 1h1v1H10zM13 1h5v1H13zM20 1h1v1H20zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h3v1H8zM13 2h1v1H13zM15 2h1v1H15zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h1v1H8zM14 3h2v1H14zM17 3h1v1H17zM19 3h1v1H19zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM12 4h1v1H12zM15 4h2v1H15zM18 4h3v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM8 5h4v1H8zM18 5h1v1H18zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h3v1H8zM12 7h1v1H12zM14 7h1v1H14zM16 7h1v1H16zM19 7h2v1H19zM0 8h1v1H0zM2 8h5v1H2zM11 8h1v1H11zM17 8h1v1H17zM19 8h1v1H19zM22 8h5v1H22zM0 9h3v1H0zM8 9h2v1H8zM12 9h4v1H12zM19 9h4v1H19zM24 9h1v1H24zM28,9 h1v1H28zM0 10h1v1H0zM3 10h2v1H3zM6 10h3v1H6zM10 10h1v1H10zM12 10h4v1H12zM18 10h1v1H18zM20 10h1v1H20zM22 10h2v1H22zM0 11h2v1H0zM5 11h1v1H5zM7 11h1v1H7zM10 11h1v1H10zM13 11h1v1H13zM15 11h1v1H15zM18 11h2v1H18zM21 11h2v1H21zM24 11h2v1H24zM27 11h1v1H27zM1 12h1v1H1zM3 12h4v1H3zM8 12h1v1H8zM11 12h2v1H11zM14 12h1v1H14zM17 12h1v1H17zM23 12h1v1H23zM25 12h2v1H25zM1 13h4v1H1zM9 13h1v1H9zM12 13h1v1H12zM16 13h1v1H16zM19 13h6v1H19zM28,13 h1v1H28zM0 14h2v1H0zM4 14h1v1H4zM6 14h2v1H6zM9 14h1v1H9zM12 14h1v1H12zM15 14h2v1H15zM18 14h1v1H18zM21 14h1v1H21zM24 14h3v1H24zM0 15h3v1H0zM4 15h1v1H4zM7 15h1v1H7zM9 15h4v1H9zM14 15h3v1H14zM18 15h3v1H18zM24 15h1v1H24zM27 15h1v1H27zM4 16h4v1H4zM9 16h3v1H9zM15 16h1v1H15zM17 16h3v1H17zM23 16h1v1H23zM25 16h2v1H25zM0 17h1v1H0zM2 17h1v1H2zM4 17h1v1H4zM10 17h5v1H10zM16 17h4v1H16zM22 17h3v1H22zM26 17h1v1H26zM28,17 h1v1H28zM0 18h1v1H0zM3 18h1v1H3zM6 18h6v1H6zM13 18h5v1H13zM20 18h2v1H20zM24 18h1v1H24zM26 18h1v1H26zM0 19h1v1H0zM7 19h1v1H7zM9 19h1v1H9zM12 19h2v1H12zM15 19h2v1H15zM20 19h2v1H20zM24 19h1v1H24zM27 19h1v1H27zM0 20h1v1H0zM4 20h5v1H4zM10 20h3v1H10zM14 20h1v1H14zM17 20h1v1H17zM20 20h5v1H20zM26,20 h3v1H26zM8 21h4v1H8zM16 21h2v1H16zM20 21h1v1H20zM24,21 h5v1H24zM0 22h7v1H0zM9 22h3v1H9zM15 22h6v1H15zM22 22h1v1H22zM24 22h3v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM12 23h1v1H12zM14 23h2v1H14zM18 23h3v1H18zM24 23h1v1H24zM27,23 h2v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h1v1H8zM11 24h1v1H11zM15 24h1v1H15zM17 24h1v1H17zM20 24h5v1H20zM26 24h2v1H26zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h1v1H8zM11 25h1v1H11zM13 25h2v1H13zM16 25h1v1H16zM18 25h1v1H18zM23 25h1v1H23zM25,25 h4v1H25zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h6v1H8zM15 26h1v1H15zM18 26h3v1H18zM22 26h6v1H22zM0 27h1v1H0zM6 27h1v1H6zM10 27h3v1H10zM15 27h2v1H15zM20 27h2v1H20zM23 27h3v1H23zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM11 28h2v1H11zM14 28h1v1H14zM17 28h1v1H17zM19 28h1v1H19zM21 28h1v1H21zM24 28h1v1H24zM26 28h1v1H26z"
                shape-rendering="crispEdges"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  app_download_title: {
    type: String,
    required: false,
    default: "",
  },
  android_link: {
    type: String,
    required: false,
    default: "",
  },
  ios_link: {
    type: String,
    required: false,
    default: "",
  },
});
</script>