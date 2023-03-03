<template>
  <section>
    <b-container>
      <div class="d-flex flex-column main">
        <div class="header">
          <div class="header-text">
            <h1 class="text-center">Delaney Estrada</h1>
            <h2 class="text-center">Welcome to my web development portfolio</h2>
          </div>
          <img src="@/static/delaney.jpg" alt="Delaney Estrada head shot" />
        </div>
        <div>
          <div id="nav-items">
            <a href="/work" class="nav-item-home">
              <div class="nav-item-container">
                <span class="nav-item-header">Work</span>
                <div class="icon">
                  <hr />
                  <font-awesome-icon :icon="['fas', 'laptop-code']" />
                  <hr />
                </div>
                <span class="nav-item-footer">View Case Studies</span>
              </div>
            </a>
            <a href="/about" class="nav-item-home">
              <span class="nav-item-header">About</span>
              <div class="icon">
                <hr />
                <font-awesome-icon :icon="['fas', 'book']" />
                <hr />
              </div>
              <span class="nav-item-footer">Who I Am</span>
            </a>
            <div class="nav-item-container">
              <a href="/contact" class="nav-item-home">
                <span class="nav-item-header">Contact</span>
                <div class="icon">
                  <hr />
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <hr />
                </div>
                <span class="nav-item-footer">Get In Touch</span>
              </a>
            </div>
          </div>
          <div class="social-links">
            <a href="https://www.instagram.com/dillon_estrada/" target="_blank">
              <font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
            <a href="https://github.com/dillonestrada" target="_blank">
              <font-awesome-icon :icon="['fab', 'github']"
            /></a>
          </div>
        </div>
        <!-- <div class="work-section">
            <b-carousel
              id="carousel-1"
              controls
              background="#ababab"
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333"
            >
              <b-carousel-slide v-for="(item, i) in featured" :key="i">
                <template #img>
                  <a :href="`/work/${item.slug}`">
                    <div class="img-container">
                      <img
                        class="d-block img-fluid"
                        v-if="item._embedded['wp:featuredmedia']"
                        :src="item._embedded['wp:featuredmedia'][0].source_url"
                        alt="image slot"
                      />
                    </div>
                  </a>
                </template>
              </b-carousel-slide>
            </b-carousel>
            <div class="work-text">
              <h3>Featured Work</h3>
              <p>
                My favorite projects that I've worked on... So far, that is.
              </p>
              <b-button to="/work" :size="windowSize">See All</b-button>
            </div>
          </div> -->
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Home",
  layout: "home",
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    featured() {
      let featuredTag = this.tags.find((el) => el.name === "featured");
      if (featuredTag) {
        return this.posts.filter((el) => el.tags.includes(featuredTag.id));
      } else {
        return null;
      }
    },
  },
  created() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getTags");
  },
  methods: {
    removeTags(string) {
      const regex = /<.*?>/gi;
      return string.replace(regex, "");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4em);
}
.header > img {
  filter: brightness(0.8);
  border-radius: 5%;
  width: 100%;
}
.header {
  display: grid;
  gap: 1rem;
  grid-template-columns: 3fr 1fr;
  max-height: calc(100vh - 2em);

  h1 {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
}
a {
  text-decoration: none;
}

#nav-items {
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
}

.nav-item-home {
  height: 100%;
  width: 100%;
  padding: 3rem 1rem;
  color: $white;
  position: relative;

  ::before {
    content: "";
    background-color: hsla(196, 61%, 58%, 0.75);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 8px;
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }
  :hover::before {
    bottom: 0;
    height: 100%;
  }
}

.nav-item-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  margin: 4rem 1rem 1rem 1rem;
  outline: lighten($black, 10%) 5px solid;

  // &:hover {
  //   background-color: lighten($black, 10%);
  //   transition: all 0.25s ease;
  // }
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

.card {
  border: none !important;
  max-width: 780px;
}

.work-section {
  @media screen and (min-width: 575px) {
    display: grid;
    grid-template-columns: minmax(320px, 50vw) 30%;
    place-items: center;

    .carousel-item {
      .img-container {
        position: relative;
      }

      img {
        width: 700px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .carousel {
      width: 300px;
    }
    .carousel-item {
      // .img-container {
      //   display: flex;
      //   justify-content: center;
      // }
      img {
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .btn {
      max-width: 90%;
    }
  }

  @media screen and (min-width: 767px) {
    .btn {
      max-width: 50%;
    }
  }

  .work-text {
    padding: 2em;
    h3 {
      font-family: $martel;
      font-weight: 600;
    }
  }
}
</style>