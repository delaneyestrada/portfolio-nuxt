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
                  Meet Delaney, a software developer with a passion for web
                  application development. With over three years of experience
                  in the field, she has established herself as a skilled
                  developer with a keen eye for detail and a dedication to
                  quality.
                </p>
                <p class="about-text">
                  Delaney's journey in software development began in April 2020,
                  where she started working as a freelance web developer. During
                  this time, she honed her skills in creating websites using
                  static HTML/CSS/JS and JavaScript frameworks such as React,
                  Next, Gatsby, Vue, and Nuxt. She also became proficient in
                  using Netlify CMS, Functions, and Hosting for most of her
                  projects.
                </p>
                <p class="about-text">
                  Delaney joined Gravity Laboratories in 2021, where she was a
                  Web App Developer for seven months. During this time, she
                  developed full-stack web applications using a React/AWS stack.
                  She also integrated end-to-end tests to be used with a CI
                  Pipeline and used Node.js and Python for AWS Lambda functions
                  that interacted with AWS AppSync.
                </p>
                <p class="about-text">
                  In January 2022, Delaney joined United Supermarkets, LLC as a
                  Web Application Developer, where she is responsible for
                  developing both forward-facing and internal web applications
                  using ASP.NET (C#) with Microsoft SQL Server databases.
                </p>
                <p class="about-text">
                  Delaney is also a skilled drummer and percussionist and has
                  been performing as a sideman since June 2012. This experience
                  has helped her develop strong interpersonal skills, which she
                  utilizes to collaborate with team members and clients to
                  deliver successful projects.
                </p>
                <p class="about-text">
                  Overall, Delaney is a highly skilled and versatile software
                  developer with expertise in a variety of programming languages
                  and frameworks. She is a valuable addition to any team and is
                  dedicated to delivering high-quality software solutions.
                </p>
              </b-card>
              <!-- <div class="header mt-5 mb-3">
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
                    <div id="features">
                      <div class="features-section" id="performance">
                        <h4>Performance</h4>
                        <div class="feature-info">
                          <p>
                            I make sure that all files are the smallest size
                            possible to decrease load times for the people
                            visiting your website.
                          </p>
                        </div>
                      </div>
                      <div class="features-section" id="content-management">
                        <h4>Content Management</h4>
                        <div class="feature-info">
                          <p>
                            Using a CMS like Wordpress, I can design a website
                            that will allow you to change, add, or remove
                            content at will.
                          </p>
                        </div>
                      </div>
                      <div class="features-section" id="ecommerce">
                        <h4>Ecommerce</h4>

                        <div class="feature-info">
                          <p>
                            Integrate an Ecommerce service such as Shopify or
                            have me build a custom Ecommerce solution with
                            payment handlers such as PayPal or Stripe.
                          </p>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                  <b-tab title="For Musicians">
                    <div class="features-section" id="bandsintown">
                      <h4>Bandsintown</h4>

                      <div class="feature-info">
                        <img src="@/static/bandsintownwidget.jpg" alt="" />

                        <p>
                          Integrate the
                          <a
                            href="https://artists.bandsintown.com/support/events-widget"
                            target="_blank"
                            >Bandsintown Widget</a
                          >
                          or a custom styled solution built using their API.
                        </p>
                      </div>
                    </div>
                    <div class="features-section" id="youtube">
                      <h4>YouTube</h4>
                      <div class="feature-info">
                        <img src="@/static/youtubeslider.png" alt="" />

                        <p>
                          Display as many YouTube videos you want in a creative
                          user friendly way instead of just having them
                          haphazardly thrown on your page.
                        </p>
                      </div>
                    </div>
                    <div class="features-section" id="music-streaming">
                      <h4>Music Streaming</h4>
                      <div class="feature-info">
                        <img src="@/static/streaming.png" alt="" />
                        <p>
                          Get a widget from almost any streaming music provider
                          you can think of to allow fans to preview your songs
                          and guide them to purchase or stream your songs.
                        </p>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </b-card> -->
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
