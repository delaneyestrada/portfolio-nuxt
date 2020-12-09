<template>
  <client-only>
    <div class="wrapper youtube">
      <vueper-slides bullets-outside v-if="slides.length" :slideRatio="9 / 16">
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :video="slide.video.url"
        />
      </vueper-slides>
    </div>
  </client-only>
</template>

<script>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  name: "YouTube-Slider",
  data() {
    return {
      slides: [],
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
  mounted() {
    this.getYouTubeVideos(
      "OLAK5uy_ncB_sd5DftDu87uC1x87u6z2Wfk_Wk9Mg",
      "AIzaSyDszoPLeaA632JMvuThtT_ymwHuPADG33I",
      10
    );
  },
  methods: {
    getYouTubeVideos: async function (playlistId, apiKey, numResults) {
      let url = "https://www.googleapis.com/youtube/v3/playlistItems";
      let params = {
        key: apiKey,
        part: "snippet",
        playlistId: playlistId,
        maxResults: numResults,
      };
      const { data } = await axios.get(url, {
        params,
      });
      const videos = await data.items;

      const slides = videos.map((video) => {
        return {
          image: video.snippet.thumbnails.standard
            ? video.snippet.thumbnails.standard.url
            : video.snippet.thumbnails.high.url,
          video: {
            url: `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1&autoplay=0`,
          },
        };
      });
      this.slides = slides;
    },
  },
};
</script>

<style lang="scss">
.youtube {
  padding: 1em;
  display: flex;
  place-content: center;
  // img {
  //   -o-object-fit: cover;
  //   object-fit: cover;
  //   width: 100%;
  //   height: 100%;
  // }
  .vueperslides {
    width: 100%;
  }

  .splide {
    // max-width: 800px;
    max-width: 100%;
    margin-top: 1.5em;
    margin-bottom: 3em;

    // .splide__arrow {
    //   top: initial;
    //   transform: initial;
    //   border-radius: 15%;
    //   font-weight: bold;
    //   font-family: $montserrat;
    //   bottom: -3em;
    //   width: initial;
    //   padding: 0.5em;
    //   background: $black;
    //   color: $white;
    // }
  }

  .splide__slide {
    img {
      -o-object-fit: cover;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>