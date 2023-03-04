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
    title: "Delaney Estrada - Web Developer & Designer",
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
        content:
          "Meet Delaney, a software developer with a passion for web application development. With over three years of experience in the field, she has established herself as a skilled developer with a keen eye for detail and a dedication to quality."
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Delaney Estrada - Web Developer & Designer"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Meet Delaney, a software developer with a passion for web application development. With over three years of experience in the field, she has established herself as a skilled developer with a keen eye for detail and a dedication to quality."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://www.delaneyestrada.com/dewebdev.png"
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: "Delaney Estrada - Web Developer & Designer"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Delaney Estrada - Web Developer & Designer"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Meet Delaney, a software developer with a passion for web application development. With over three years of experience in the field, she has established herself as a skilled developer with a keen eye for detail and a dedication to quality."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.delaneyestrada.com/dewebdev.png"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://www.delaneyestrada.com/dewebdev.png"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Delaney Estrada - Web Developer & Designer"
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
          "https://fonts.googleapis.com/css2?family=Martel:wght@600;700&family=Montserrat:wght@600;700;800&display=swap"
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
  build: {
    splitChunks: {
      layouts: true
    }
  },
  generate: {
    routes: dynamicRoutes
  }
};
