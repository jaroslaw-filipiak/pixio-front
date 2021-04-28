import axios from "axios";

const dynamicRoutes = async () => {
  // careers
  const itemsEndpoint = await axios.get(process.env.MAIN_API_ENDPOINT + "jobs");

  const careersRoutes = itemsEndpoint.data.map(job => {
    return {
      route: `/careers/${job.id}`,
      payload: job
    };
  });

  const applyRoutes = itemsEndpoint.data.map(apply => {
    return {
      route: `/careers/apply/job-offer/${apply.id}`,
      payload: apply
    };
  });

  const routes = careersRoutes.concat(applyRoutes);

  return routes;
};

// let dynamicRoutes = () => {
//   return axios.get("https://7e6805.stage.titans24.com/jobs").then(res => {
//     return res.data.map(product => `/product/${product.id}`);
//   });
// };

export default {
  env: {
    baseUr: process.env.MAIN_API_ENDPOINT
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    // base: "/pxo-test/"
  },

  generate: {
    routes: dynamicRoutes
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Pixomondo | International visual effects company",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { name: "format-detection", content: "telephone=no" },
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
        content:
          "PIXOMONDO is an international visual effects company with a network of studios in Los Angeles, Vancouver, Toronto, Stuttgart, Beijing, Frankfurt & Shanghai."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.jpg"
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
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  loading: {
    continuous: true,
    height: "10px",
    color: "#5680e9"
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/vue-fullpage.js",
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
    },
    {
      src: "@/plugins/vuelidate.js",
      ssr: false
    }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@aceforth/nuxt-optimized-images"],

  optimizedImages: {
    optimizeImages: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/apollo",
    "@nuxtjs/device",
    "@nuxtjs/markdownit"
  ],

  markdownit: {
    runtime: true // Support `$md()`
  },

  device: {
    refreshOnResize: true
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.GRAPHQL_ENDPOINT}`
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  styleResources: {
    scss: ["~/assets/scss/main.scss"]
  }
};
