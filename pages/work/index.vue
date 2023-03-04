<template>
  <div class="projects main">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="11">
          <h1>My Work</h1>
          <div class="tags mt-3">
            <span>Filter: </span>
            <b-badge
              @click="filterCards"
              class="mx-1"
              :class="tag.id == show ? 'active' : ''"
              v-for="tag in tags"
              :key="tag.id"
              :data-target="tag.id"
              >{{ tag.name }}</b-badge
            >
          </div>
          <div class="projects-container justify-content-center mt-5">
            <b-card
              v-for="post in posts"
              :key="post.id"
              :data-tag="post.tags.join(' ')"
              v-show="post.tags.includes(parseInt(show)) || show == 'all'"
            >
              <b-card-img
                v-if="post._embedded['wp:featuredmedia']"
                :src="post._embedded['wp:featuredmedia'][0].source_url"
              />
              <div class="buttons">
                <b-button
                  target="_blank"
                  variant="primary"
                  :href="getLink(post.excerpt.rendered, 'site')"
                  >View Site</b-button
                ><b-button :to="`/work/${post.slug}`">More Info</b-button>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "all",
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
  },
  created() {
    this.$store.dispatch("getPosts");
    this.$store.dispatch("getTags");
  },
  methods: {
    getLink(string, linkName) {
      const regex = /<.*?>/gi;
      const links = string.replace(regex, "").split("|");
      const linkMap = {
        site: 0,
        github: 1,
      };
      if (!links[linkMap[linkName]]) {
        return false;
      }
      return links[linkMap[linkName]];
    },
    filterCards(e) {
      let el = e.target;
      let target = el.dataset.target;
      if (target == this.show) {
        this.show = "all";
      } else {
        this.show = target;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.btn-primary {
  background-color: $primary-light;
  border-color: $primary;
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 1rem;
}
.card {
  width: 300px;
  .card-body {
    padding: 0;
    .buttons {
      padding: 1em;
      display: flex;
      justify-content: space-evenly;
    }
  }
}
.card-img {
  width: 300px;
}
.badge {
  padding: 0.5em 0.8em;
  cursor: pointer;
  &.active {
    background-color: $primary-dark;
  }
  &:hover {
    background-color: $primary-dark;
  }
}
</style>