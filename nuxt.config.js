import axios from "axios";
let dynamicRoutes = () => {
  return axios
    .get(
      `https://wp.dillonestrada.xyz/wp-json/wp/v2/posts?page=1&per_page=20&categories=3&_embed`
    )
    .then(res => {
      return res.data.map(post => `/work/${post.slug}`);
    });
};

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Dillon Estrada - Web Developer & Designer",
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
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Martel:wght@600;700&family=Montserrat:wght@600;800;&display=swap"
      }
    ]
    // script: [{
    //   charset: "utf-8",
    //   src: "https://widget.bandsintown.com/main.min.js",
    // }, ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "bootstrap-vue/nuxt"
  ],
  bootstrapVue: {
    componentPlugins: [
      "ButtonPlugin",
      "CardPlugin",
      "FormPlugin",
      "LayoutPlugin",
      "AlertPlugin",
      "TabsPlugin",
      "OverlayPlugin",
      "NavbarPlugin",
      "CarouselPlugin",
      "BadgePlugin"
    ]
  },

  fontawesome: {
    icons: {
      solid: ["faHome", "faLaptopCode", "faBook", "faEnvelope"],
      brands: ["faGithub", "faInstagram"]
    }
  },

  styleResources: {
    scss: ["~/assets/scss/_variables.scss", "~/assets/scss/_mixins.scss"]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {
    routes: dynamicRoutes
  }
};
