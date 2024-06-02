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
                  Hi there, I'm Delaney, a passionate software developer specializing in web application development. With over three years of experience, I've established myself as a skilled developer with a meticulous attention to detail and a commitment to excellence.
                </p>
                <p class="about-text">
                  My journey in software development began back in April 2020 when I ventured into freelance web development. It was here that I sharpened my skills in crafting websites using static HTML/CSS/JS and exploring dynamic frameworks like React, Next, Gatsby, Vue, and Nuxt. Additionally, I became proficient in leveraging Netlify CMS, Functions, and Hosting for most of my projects.
                </p>
                <p class="about-text">
                  In 2021, I joined Gravity Laboratories as a Web App Developer for seven months. During my time there, I focused on developing full-stack web applications using a React/AWS stack. I integrated end-to-end tests into CI Pipelines and utilized Node.js and Python for AWS Lambda functions interacting with AWS AppSync.
                </p>
                <p class="about-text">
                  Moving forward, in January 2022, I became part of United Supermarkets, LLC as a Web Application Developer. Here, I'm responsible for crafting both forward-facing and internal web applications using ASP.NET (C#) with Microsoft SQL Server databases.
                </p>
                <p class="about-text">
                  Outside of coding, I'm also a skilled drummer and percussionist, performing as a sideman since June 2012. This background has helped me cultivate strong interpersonal skills, crucial for collaborating with team members and clients to ensure project success.
                </p>
                <p class="about-text">
                  Overall, I pride myself on being a highly versatile software developer with expertise across various programming languages and frameworks. I bring value to any team I'm a part of and am committed to delivering top-notch software solutions.
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
