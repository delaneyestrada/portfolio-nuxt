<template>
  <div id="app">
    <b-overlay
      opacity="1"
      spinner-type="border"
      spinner-variant="primary"
      :show="!isLoaded"
      z-index="101"
    >
      <div id="sidebar" ref="sidebar">
        <b-nav :vertical="windowWidth > 575 ? true : false">
          <b-nav-item to="/">
            <span
              class="nav-item-header"
              v-show="windowWidth > 767 || windowWidth < 576"
              >Home</span
            >
            <div class="icon">
              <hr v-show="windowWidth > 767" />
              <font-awesome-icon :icon="['fas', 'home']" />
              <hr v-show="windowWidth > 767" />
            </div>
            <span class="nav-item-footer" v-show="windowWidth > 767"></span>
          </b-nav-item>
          <b-nav-item to="/work"
            ><span
              class="nav-item-header"
              v-show="windowWidth > 767 || windowWidth < 576"
              >Work</span
            >

            <div class="icon">
              <hr v-show="windowWidth > 767" />
              <font-awesome-icon :icon="['fas', 'laptop-code']" />
              <hr v-show="windowWidth > 767" />
            </div>
            <span class="nav-item-footer" v-show="windowWidth > 767"
              >View Case Studies</span
            >
          </b-nav-item>
          <b-nav-item to="/about"
            ><span
              class="nav-item-header"
              v-show="windowWidth > 767 || windowWidth < 576"
              >About</span
            >
            <div class="icon">
              <hr v-show="windowWidth > 767" />
              <font-awesome-icon :icon="['fas', 'book']" />
              <hr v-show="windowWidth > 767" />
            </div>
            <span class="nav-item-footer" v-show="windowWidth > 767"
              >Who I Am</span
            >
          </b-nav-item>
          <b-nav-item to="/contact"
            ><span
              class="nav-item-header"
              v-show="windowWidth > 767 || windowWidth < 576"
              >Contact</span
            >
            <div class="icon">
              <hr v-show="windowWidth > 767" />
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <hr v-show="windowWidth > 767" />
            </div>
            <span class="nav-item-footer" v-show="windowWidth > 767"
              >Get In Touch</span
            >
          </b-nav-item>
        </b-nav>
        <div class="social-links" v-show="windowWidth > 575">
          <a href="https://www.instagram.com/dillon_estrada/" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
          <a href="https://github.com/dillonestrada" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </div>
      </div>
      <div class="main" :style="mainStyle">
        <!-- <transition name="fade" mode="out-in"> -->
        <Nuxt :windowSize="windowSize" :windowWidth="windowWidth" />
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
      windowWidth: process.browser ? window.innerWidth : null,
      sidebarWidth: 0,
      sidebarHeight: 0,
      isLoaded: false,
    };
  },
  computed: {
    mainStyle() {
      if (this.windowWidth > 575) {
        return `padding-left: ${this.sidebarWidth}px`;
      }
      if (this.windowWidth <= 575) {
        return `padding-bottom: calc(2em + ${this.sidebarHeight}px)`;
      }
      return "";
    },
    windowSize() {
      if (this.windowWidth < 420) {
        return "xs";
      }
      if (this.windowWidth < 950) {
        return "sm";
      }
      if (this.windowWidth < 1200) {
        return "md";
      }
      if (this.windowWidth < 1800) {
        return "lg";
      }
      if (this.windowWidth >= 1800) {
        return "xl";
      }
      return "null";
    },
  },
  //  watch: {
  //   windowWidth(newWidth, oldWidth) {
  //    this.txt = `it changed to ${newWidth} from ${oldWidth}`;
  //   }
  // },

  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
        this.sidebarWidth = this.$refs.sidebar.clientWidth;
        this.sidebarHeight = this.$refs.sidebar.clientHeight;
      });
      this.isLoaded = true;
    }
  },
  updated() {
    this.$nextTick(() => {
      this.sidebarWidth = this.$refs.sidebar.clientWidth;
      this.sidebarHeight = this.$refs.sidebar.clientHeight;
    });
  },

  methods: {
    onResize() {
      if (process.browser) {
        this.windowWidth = window.innerWidth;
        this.sidebarWidth = this.$refs.sidebar.clientWidth;
        this.sidebarHeight = this.$refs.sidebar.clientHeight;
      }
    },
  },
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
  #sidebar {
    font-size: 13px;
  }
  body {
    font-size: 14px;
  }
}
@media (max-width: 1200px) and (min-width: 950px) {
  #sidebar {
    font-size: 12px;
  }
  body {
    font-size: 13px;
  }
}
@media (max-width: 950px) and (min-width: 500px) {
  #sidebar {
    font-size: 11px;
  }
  body {
    font-size: 12px;
  }
}
@media (max-width: 500px) {
  body {
    font-size: 11px;
  }
  #sidebar {
    font-size: 10px;
  }
}

@media (max-width: 575px) {
  #sidebar {
    position: fixed;
    bottom: 0;
    width: 100%;
    svg {
      font-size: 2em;
    }
    .nav {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    .nav-link {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 2em 0;

      span {
        &.nav-item-header {
          font-size: clamp(1em, 1vw, 1.5em);
          order: 1;
        }
      }
    }
  }
}

body {
  background-color: $body-bg;
  color: $white;
}
.card {
  background: $card-bg;
}
#sidebar {
  background-color: $card-bg;
  padding: 0;
  z-index: 100;

  svg {
    margin: 0;
    color: $primary-light;
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: $white;

    &:hover {
      background-color: lighten($black, 10%);
    }
    span {
      letter-spacing: 0.2em;

      text-transform: uppercase;
      &.nav-item-header {
        font-weight: 700;
        color: lighten($white, 15%);
      }
    }
  }
}
@media (min-width: 576px) {
  #sidebar {
    max-width: 154px;

    display: flex;
    height: 100vh;
    position: fixed;
    top: 0;
    flex-direction: column;
    // border-right: 1px solid hsla(37, 100%, 50%, 0.295);
    justify-content: center;

    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
    svg {
      font-size: 1.5em;
    }
    .nav {
      margin: auto 0;
    }

    .social-links {
      display: flex;
      gap: 1em;
      width: 100%;
      margin: 1.5em 0;
      text-align: center;
      justify-content: center;

      svg {
        @media screen and (max-width: 767px) {
          font-size: 2.5em !important;
        }
        @media screen and (min-width: 767px) {
          font-size: 3em;
        }
        margin: 0;
        color: $white;
        &:hover {
          color: lighten($white, 20%);
        }
      }
    }

    .nav-link {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 2.5em 1em;
      color: $white;

      &:hover {
        background-color: lighten($white, 5%);
      }
      span {
        letter-spacing: 0.2em;

        text-transform: uppercase;
        &.nav-item-footer {
          font-family: $martel;
          font-weight: bold;
          font-size: 0.75em;
          letter-spacing: 0.15em;
          margin-top: 0.5em;
        }
        &.nav-item-header {
          font-size: 1.5em;
          font-weight: 700;
          color: lighten($white, 15%);
        }
      }
    }
  }
}
@media (max-width: 767px) and (min-width: 576px) {
  .social-links {
    flex-direction: column;
    a {
      padding: 0.25em 0;
    }
  }
  #sidebar {
    .nav-link {
      padding: 2.5em 2em !important;
    }
  }
}
#app {
  font-family: $montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
}

.sidebar-logo {
  padding: 1em;
  h1 {
    font-size: 2em;
    margin: 0 auto;
  }
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3em 0;
}
hr {
  display: inline-block;
  width: 3em;
  margin: 0 0.4em;
  border: 1px solid rgba(lighten($white, 10%), 0.6);
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

h1 {
  font-family: "Hoodson";
  color: $primary-light;
}
</style>
