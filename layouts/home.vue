<template>
  <div id="app">
    <b-overlay
      opacity="1"
      spinner-type="border"
      spinner-variant="primary"
      :show="!isLoaded"
      z-index="101"
    >
      <div class="main" :style="mainStyle">
        <!-- <transition name="fade" mode="out-in"> -->
        <Nuxt />
        <!-- </transition> -->
      </div>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      sidebarWidth: 0,
      sidebarHeight: 0,
      isLoaded: false,
    };
  },
  computed: {
    mainStyle() {
      return "";
    },
  },

  mounted() {
    if (process.browser) {
      this.isLoaded = true;
    }
  },
  updated() {},

  methods: {},
};
</script>

<style>
.main {
  min-height: calc(100vh - 4em);
  padding: 2em 0;
}
</style>

<style lang="scss">
@font-face {
  font-family: "Hoodson";
  src: local("Hoodson"), url(/Hoodson.ttf) format("truetype");
}

@media (min-width: 1200px) {
  body {
    font-size: 16px;
  }
}
@media (max-width: 1200px) and (min-width: 950px) {
  body {
    font-size: 15px;
  }
}
@media (max-width: 950px) and (min-width: 500px) {
  body {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  body {
    font-size: 13px;
  }
}

// @media (max-width: 575px) {
//   #sidebar {
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     svg {
//       font-size: 2em;
//     }
//     .nav {
//       display: grid;
//       grid-template-columns: repeat(4, 1fr);
//     }
//     .nav-link {
//       display: flex;
//       flex-direction: column;
//       text-align: center;
//       padding: 2em 0;

//       span {
//         &.nav-item-header {
//           font-size: clamp(1em, 1vw, 1.5em);
//           order: 1;
//         }
//       }
//     }
//   }
// }

body {
  background-color: $body-bg;
  color: $white;
}

#app {
  font-family: $montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
}
hr {
  display: inline-block;
  width: 3em;
  margin: 0 0.4em;
  border: 1px solid rgba(lighten($white, 10%), 0.6);
}

h1 {
  font-family: "Hoodson";
  color: $primary-light;
}
</style>
