<template>
  <div>
    <b-container>
      <div class="main">
        <div class="center-container">
          <div class="text">
            <h1>Contact Me</h1>
            <p>
              Shoot me a message through the contact form below and I will get
              back to you ASAP.
            </p>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" required type="text" v-model="form.name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" required type="email" v-model="form.email" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" required rows="3" v-model="form.message" />
            </div>
            <b-button type="submit">Submit</b-button>
          </form>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios.post("/.netlify/functions/send-email", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;

  .center-container {
    max-width: 800px;
    min-width: 300px;
    width: 50%;
  }

  .text {
    margin-bottom: 2em;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }

  // form {

  // }
}
</style>