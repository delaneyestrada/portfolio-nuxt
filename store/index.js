export const state = () => ({
  posts: [],
  tags: []
});

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updateTags: (state, tags) => {
    state.tags = tags;
  }
};

export const actions = {
  async getTags({ state, commit }) {
    if (state.tags.length) return;
    try {
      let tags = await fetch(
        `http://www.delaneyestrada.xyz/wp-json/wp/v2/tags`
      ).then(res => res.json());
      tags = tags.map(({ id, name }) => ({
        id,
        name
      }));
      commit("updateTags", tags);
    } catch (err) {
      console.log(`error: ${err}`);
    }
  },
  async getPosts({ state, commit }) {
    if (state.posts.length) return;
    try {
      let posts = await fetch(
        `http://www.delaneyestrada.xyz/wp-json/wp/v2/posts?page=1&per_page=20&categories=2&_embed`
      ).then(res => res.json());
      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, _embedded, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          _embedded,
          tags,
          content
        }));
      commit("updatePosts", posts);
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }
};
