<template>
  <client-only>
    <section>
      <b-container>
        <div class="main">
          <b-row class="justify-content-center">
            <b-col md="11" sm="12">
              <div class="header">
                <h1>About Me</h1>
              </div>
              <b-card class="mt-3">
                <p class="about-text">
                Delaney is a talented and experienced web developer, with a passion for creating dynamic and engaging websites. She has worked on a variety of projects, from large-scale enterprise applications to small, boutique websites.
                </p>
                <p class="about-text">
As a Software Developer at United Supermarkets in Lubbock, Texas, Delaney hones her skills in ASP.NET and Microsoft SQL Server. She develops many forward-facing and internal web applications, leveraging her expertise to create powerful and intuitive user experiences. Her work is critical to the success of the company, and she is known for her attention to detail and her ability to deliver high-quality results on time and on budget.
                </p>
                <p class="about-text">
In addition to her work at United Supermarkets, Delaney has also pursued freelance web development, utilizing a range of technologies such as React, Next, Gatsby, Vue, and Nuxt. She has created websites with static HTML/CSS/JS as well as complex, dynamic applications that incorporate the latest web development tools and frameworks. She has also leveraged the power of Netlify CMS, Functions, and Hosting to create scalable and responsive websites that deliver exceptional user experiences.
                </p>
                <p class="about-text">
Throughout her career, Delaney has also maintained her passion for music, and she has played drums and toured extensively across the US and Europe. This experience has given her a unique perspective and an appreciation for the importance of creativity and expression in web development. She approaches each project with a fresh perspective and a commitment to delivering the best possible user experience.
                </p>
                <p class="about-text">
Previously, Delaney worked as a Software Developer at Gravity Laboratories, where she gained experience in full-stack web development in a React/AWS stack. She was responsible for integrating end-to-end tests to be used with a CI Pipeline, and she developed Node.js and Python AWS Lambda functions that interacted with AWS AppSync.
                </p>
                <p class="about-text">
Delaney's passion for web development and her commitment to delivering exceptional user experiences have made her a valuable asset to any organization. She is a talented and innovative developer who is always eager to take on new challenges and push the boundaries of what is possible in web development.
                </p>
</b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </client-only>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      renderComponent: true,
      windowWidth: process.browser ? window.innerWidth : null,
    };
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        window.addEventListener("resize", this.onResize);
      });
    }
  },
  methods: {
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
.features-section:nth-child(odd) {
  background-color: darken($white, 5%);
}
.features-section {
  display: grid;
  grid-template-columns: 1fr 2fr;

  padding: 1.5rem 0.5rem;
  place-items: center;
  .feature-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;

    img {
      max-height: 175px;
    }
    p {
      margin-top: 1rem;
      font-weight: 600;
    }
  }
  h4 {
    text-align: center;
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 800;
    font-family: $martel;
  }
}
.about-text {
  font-size: 1rem;
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
