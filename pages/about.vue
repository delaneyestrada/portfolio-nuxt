<template>
  <section>
    <b-container>
      <div class="main">
        <b-row class="justify-content-center">
          <b-col md="11" sm="12">
            <div class="header">
              <h1>About Me</h1>
            </div>
            <b-card class="mt-3">
              <p>
                I am a full-stack web developer based in Austin, Texas with a
                love for creating websites and apps that are user friendly,
                fast, and search engine optimized.
              </p>

              <p>
                Also being a professional musician, I am aware of the importance
                of tools that don't get in the way of your process; and that is
                what I hope to provide.
              </p>
            </b-card>
            <div class="header mt-5 mb-3">
              <h1>What I Offer</h1>
            </div>
            <b-card no-body v-show="renderComponent">
              <b-tabs
                card
                pills
                active-nav-item-class="active-nav-item"
                class="sub-nav"
              >
                <b-tab title="Features" active>
                  <b-tabs
                    pills
                    card
                    :vertical="windowWidth <= 850 ? false : true"
                    start
                    active-nav-item-class="active-nav-item"
                  >
                    <b-tab title="Stores" active>
                      <b-card-text
                        >Using the ecommerce platform Shopify, I can seamlessly
                        integrate a store into your website. No more clicking
                        away to a whole different website for your store. Check
                        out the test store below.</b-card-text
                      >
                      <div class="demo-store">
                        <div id="collection-component-1605831560423"></div>
                      </div>
                    </b-tab>
                    <b-tab title="Hosting">
                      <b-card-text
                        >With static websites, I can take care of hosting free
                        of charge via a hosting service called
                        <a href="https://www.netlify.com">Netlify</a>. For more
                        demanding sites, I'll talk you through your options on a
                        case-by-case basis.</b-card-text
                      >
                    </b-tab>
                    <b-tab title="Speed">
                      <b-card-text
                        >Without getting too technical, I make sure file sizes
                        are as small as possible and served in the most
                        efficient way so that your site will run fast even on
                        slower internet connections.</b-card-text
                      >
                    </b-tab>
                  </b-tabs>
                </b-tab>
                <b-tab title="For Musicians">
                  <b-tabs
                    pills
                    card
                    :vertical="windowWidth <= 850 ? false : true"
                    start
                    active-nav-item-class="active-nav-item"
                  >
                    <b-tab title="YouTube" active>
                      <b-card-text
                        >Instead of embedding individual videos haphazardly on
                        your website, I have different techniques to make a
                        YouTube playlist of your choice display in more creative
                        and user-friendly ways. Check out the slide show below
                        for an example.</b-card-text
                      >
                      <YouTubeSlider></YouTubeSlider>
                    </b-tab>
                    <b-tab title="Streaming">
                      <b-card-text
                        >Spotify or Apple Music integration allows your fans to
                        easily get a taste of your music before deciding to
                        purchase an album or follow you on the respective
                        streaming platform.
                      </b-card-text>
                      <iframe
                        src="https://open.spotify.com/embed/album/57L4MhqfDun3uimhVBXX0Z"
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>

                      <iframe
                        src="https://embed.music.apple.com/us/album/dont-forget-where-you-come-from/1385723075?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ct=albums_don%27t_forget_where_you_come_from&amp;ls=1"
                        height="380px"
                        frameborder="0"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        allow="autoplay *; encrypted-media *;"
                        style="
                          width: 100%;
                          max-width: 300px;
                          overflow: hidden;
                          border-radius: 10px;
                          background: transparent;
                        "
                      ></iframe>
                    </b-tab>
                    <b-tab title="Bandsintown" @click="fixBit">
                      <b-card-text
                        >I can integrate Bandsintown to your website to keep
                        your fans updated on your shows.</b-card-text
                      >
                      <div class="bandsintown-demo">
                        <a
                          class="bit-widget-initializer"
                          data-artist-name="Kyle Park"
                          data-display-local-dates="false"
                          data-display-past-dates="false"
                          data-auto-style="false"
                          data-text-color="#000000"
                          data-link-color="#116afc"
                          data-background-color="rgba(0,0,0,0)"
                          data-display-limit="15"
                          data-display-start-time="false"
                          data-link-text-color="#FFFFFF"
                          data-display-lineup="false"
                          data-display-play-my-city="true"
                          data-separator-color="rgba(255, 255, 255, 0.5)"
                        ></a>
                      </div>
                    </b-tab>
                  </b-tabs>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </section>
</template>

<script>
import { initShopify } from "../assets/js/shopify";
// import { initBandsintown } from "../assets/js/bandsintown";
import YouTubeSlider from "../components/YouTubeSlider";

export default {
  name: "About",
  // head: {
  //   script: [
  // {
  //   charset: "utf-8",
  //   src: "https://widget.bandsintown.com/main.min.js",
  // },
  //   ],
  // },
  data() {
    return {
      renderComponent: true,
      windowWidth: process.browser ? window.innerWidth : null,
    };
  },
  components: {
    YouTubeSlider,
  },
  // computed: {
  //     vertical() {
  //         if(this.windowSize > 850){
  //             return true
  //         } else {
  //             return false
  //         }
  //     }
  // },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
      });
    }
    this.$nextTick(() => {
      initShopify();
    });
  },
  methods: {
    fixBit() {
      try {
        document.querySelector(".bit-widget").classList.add("bit-layout-ipad");
      } catch (err) {
        console.log(err);
      }
    },
    onResize() {
      if (process.browser) {
        this.windowWidth = window.innerWidth;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-text {
  a {
    font-weight: bold;
  }
}
.demo-store {
  padding: 1em;
}
.bandsintown-demo {
  background-color: lighten($card-bg, 5%);
  padding: 1em;
}
.social-links {
  display: flex;
  gap: 1em;
  width: 100%;
  margin: 1.5em 0;
  text-align: center;

  svg {
    @media screen and (max-width: 767px) {
      font-size: 2em !important;
    }
    @media screen and (min-width: 767px) {
      font-size: 2em;
    }
    margin: 0;
    color: $dark;
    &:hover {
      color: lighten($dark, 20%);
    }
  }
}
</style>
<style lang="scss">
@import "../assets/scss/_shopify.scss";

.active-nav-item {
  background-color: $secondary-light !important;
}
.card {
  .nav-link {
    color: $secondary;
    font-weight: bold;
  }
}

@media (max-width: 850px) {
}
</style>