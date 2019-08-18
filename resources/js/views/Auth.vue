<template>
    <div class="container">
        <div class="row">
            <div class="col-6 auth-div text-center padding-fix" style="border-right: 1px solid rgba(132, 132, 132, 0.51);">
                <div class="auth-div-left">
                    <div class="col-12 login-header">
                        <h2>Login</h2>
                    </div>
                    <div class="col-12 login-form-div text-center">
                        <input type="text" v-model="login_username" placeholder="Username" class="form-control auth-form-input col-6" required />
                        <input type="text" v-model="login_password" placeholder="Password" class="form-control auth-form-input col-6" required />

                        <button class="btn btn-primary auth-form-btn col-6">Login</button>
                        <span class="col-12 login-forgot-password">Forgot password?</span>
                    </div>
                </div>
            </div>
            <div class="col-6 auth-div text-center padding-fix" style="border-right: 1px solid rgba(132, 132, 132, 0.51);">
                <div class="auth-div-right">
                    <div class="col-12 register-header">
                        <h2>Register</h2>
                    </div>
                    <div class="col-12 register-form-div">
                        <b-form v-on:submit.prevent="register">
                            <input type="text" v-model="register_username" placeholder="Username" class="form-control auth-form-input col-6" required />
                            <input type="text" v-model="register_email" placeholder="E-mail" class="form-control auth-form-input col-6" required />
                            <input type="text" v-model="register_password" placeholder="Password" class="form-control auth-form-input col-6" required />
                            <input type="text" v-model="register_pass_conf" placeholder="Confirm password" class="form-control auth-form-input col-6" required />

                            <button class="btn btn-primary auth-form-btn col-6">Register</button>
                        </b-form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'auth',
        data () {
            return {
                register_username: '',
                register_email: '',
                register_password: '',
                register_pass_conf: '',
                login_password: '',
                login_username: '',
                submitted: false,
                loggingIn: false
            }
        },
        methods: {
            login() {

            },
            register() {
                this.$store.dispatch('registerUser', {
                    username: this.register_username,
                    email: this.register_email,
                    password: this.register_password,
                    password_confirmation: this.register_pass_conf
                })
            }
        }
    }
</script>

<style scoped>
    .form-label {
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .auth-card {
        margin: 5px;
    }
    .auth-tabs > div > .nav-tabs {
        border-bottom: none;
    }
    .nav-link {
        text-decoration: underline;
    }
    .auth-div {
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 10px;
        height: 400px;
        max-height: 400px;
    }
    .auth-form-input {
        border: none;
        border-bottom: 1px solid gray;
        border-radius: 0px;
        padding: 2px;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    .auth-form-input::placeholder {
        color: rgba(132, 132, 132, 0.51);
    }
    .auth-form-input:focus {
        border-color: white;
        border-bottom: 1px solid gray;
        box-shadow: none;
    }
    .auth-form-btn {
        margin-top: 25px;
    }
    .login-forgot-password {
        display: block;
        font-size: 14px;
    }
    .auth-div-left, .auth-div-right {
        position: relative;
        top: 50%;
        transform: perspective(1px) translateY(-50%);
    }
</style>
