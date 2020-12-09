<template>
  <div class="project">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="11" v-if="post">
          <h2>{{ post.title.rendered }}</h2>
          <div class="content">
            <span v-html="post.content.rendered"></span>
            <b-button
              variant="primary"
              :href="removeTags(post.excerpt.rendered)"
              >Visit Site</b-button
            >
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
    removeTags(string) {
      const regex = /<.*?>/gi;
      return string.replace(regex, "");
    },
  },
};
</script>

<style lang="scss">
.wp-block-image img {
  width: 100%;
  height: auto;
}
</style>