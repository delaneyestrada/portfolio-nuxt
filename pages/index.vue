<template>
  <section>
    <b-container>
      <div
        class="d-flex flex-column justify-content-around align-items-center main"
      >
        <div class="header">
          <h1>Delaney Estrada</h1>
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