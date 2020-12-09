<template>
    <div>
        <b-container>
            <div class="main">
                <div class="center-container">
                    <div class="text">
                        <h1>Contact Me</h1>
                        <p>Shoot me a message through the contact form below and I will get back to you ASAP.</p>
                    </div>
                    <b-form @submit="onSubmit">
                        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                            <b-form-input id="input-1" type="text" required placeholder="Enter name"></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
                            <b-form-input id="input-2" type="email" required placeholder="Enter email"></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Message:" label-for="input-3">
                            <b-form-textarea id="input-3" placeholder="Enter message" rows="3" max-rows="6" required>
                            </b-form-textarea>
                        </b-form-group>
                        <b-button type="submit">Submit</b-button>
                    </b-form>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        methods: {
            onSubmit() {
                console.log('submit')
            }
        }
    }
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

        // form {
            
        // }
    }
</style>