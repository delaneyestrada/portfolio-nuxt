<template>
  <div class="project">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="11" v-if="post">
          <div id="header" class="my-4">
            <h2>{{ post.title.rendered }}</h2>
            <b-button
              squared
              variant="primary"
              :href="getLink(post.excerpt.rendered, 'site')"
              class="ml-3"
              target="_blank"
              >Visit Site</b-button
            >
            <b-button
              v-if="getLink(post.excerpt.rendered, 'github')"
              squared
              variant="secondary"
              :href="getLink(post.excerpt.rendered, 'github')"
              class="ml-1"
              target="_blank"
            >
              <font-awesome-icon
                class="mr-2"
                :icon="['fab', 'github']"
              />GitHub</b-button
            >
          </div>
          <div class="content">
            <span v-html="post.content.rendered"></span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Project",
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find((el) => el.slug === this.slug);
    },
  },
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  created() {
    this.$store.dispatch("getPosts");
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
  },
};
</script>

<style lang="scss">
.wp-block-image img {
  width: 100%;
  height: auto;
}
.project {
  h2 {
    font-weight: 600;
  }
  figure {
    margin-top: 2rem;
  }
  #header {
    display: flex;
    align-items: center;
  }
}
</style>