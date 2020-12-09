<template>
  <section>
    <b-container>
      <div
        class="d-flex flex-column justify-content-around align-items-center main"
      >
        <div class="header">
          <h1>Dillon Estrada</h1>
          <h2>Welcome to my web development portfolio</h2>
        </div>
        <b-card no-body>
          <div class="work-section">
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
                        class="d-block img-fluid w-100"
                        v-if="item._embedded['wp:featuredmedia']"
                        :src="item._embedded['wp:featuredmedia'][0].source_url"
                        alt="image slot"
                      />
                      <div class="image-overlay"><span>View Project</span></div>
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
          </div>
        </b-card>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Home",
  props: ["windowSize"],
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
// .main {
//   min-height: calc(100vh);
// }
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 4em);
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  h2 {
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
}

.card {
  border: none !important;
  max-width: 780px;
}

.work-section {
  display: grid;
  grid-template-columns: minmax(320px, 50vw) 1fr;
  place-items: center;

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

  // &::before {
  //     position: absolute;

  //     left: 0%;
  //     content: '';
  //     height: 101%;
  //     width: 101%;

  //     border-radius: 0.25rem;
  //     background-color: lighten($secondary, 10%);
  //     z-index: -1;
  //     border: 1px solid rgba(5, 14, 14, 0.125);
  // }

  // &::before {
  //     top: -.5em;
  //     transform: rotate(.5deg);
  // }
}

.carousel-item {
  .img-container {
    position: relative;
    max-height: 50vh;
  }

  img {
    height: 100%;
  }

  .image-overlay {
    display: grid;
    place-content: center;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1;

    span {
      z-index: 2;
      font-family: $montserrat;
      color: $white;
      font-weight: 800;
      text-transform: uppercase;
      font-size: 2em;
    }

    &:hover {
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: skew(30deg) translateX(-50%);
      width: 85%;
      height: 100%;
      background-image: linear-gradient(120deg, $primary-light, $primary-dark);
      background-color: #333;
      opacity: 0.9;
      z-index: 0;
    }
  }
}
</style>