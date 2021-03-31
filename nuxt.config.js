export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pixomondo | International visual effects company",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js"
      },
      {
        src: "https://www.youtube.com/iframe_api"
      },
      {
        src:
          "https://cdn.jsdelivr.net/gh/arkdevuk/InstaPost@master/dist/instapost.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/instafeed.js/1.4.1/instafeed.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/InstagramFeed/2.0.2/InstagramFeed.min.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/vue-video-background",
      ssr: false
    },
    {
      src: "@/plugins/slider.js",
      ssr: false
    },
    {
      src: "@/plugins/vue-fullpage.js",
      ssr: false
    },
    {
      src: "@/plugins/projectsScroll.js",
      ssr: false
    },
    {
      src: "@/plugins/instagram.js",
      ssr: false
    },
    {
      src: "@/plugins/vue-waypoint.js",
      ssr: false
    },
    {
      src: "@/plugins/vue-awesome-swiper.js",
      ssr: false
    },
    {
      src: "@/plugins/v-video.js",
      ssr: false
    },
    {
      src: "@/plugins/shuffle.js",
      ssr: false
    }
    // {
    //   src: "@/plugins/vuelidate.js",
    //   ssr: false
    // }
    // {
    //   src: "@/plugins/vue-validator.js",
    //   ssr: false
    // }

    // {
    //   src: "@/plugins/nodemailer.js",
    //   ssr: false
    // }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/apollo",
    "@nuxtjs/device"
  ],
  device: {
    refreshOnResize: true,
    defaultUserAgent:
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36"
  },

  axios: {
    // proxy: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://7e6805.stage.titans24.com/graphql"
        // httpEndpoint: "http://localhost:1337/graphql"
      }
    }
  },

  serverMiddleware: [
    { path: "/api/mailer", handler: "~/api/report-mailer.js" }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ["~/assets/scss/main.scss"]
  }
};
