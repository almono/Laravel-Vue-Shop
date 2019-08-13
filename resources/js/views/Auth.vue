<template>
    <div class="container">
        <div class="row">
            <!-- <b-card border-variant="dark" header="Login Form" header-border-variant="dark" align="center" class="col-12 col-sm-10 col-md-8 col-lg-5 auth-card" style="padding: 0px; display: inline-block">
                <b-card-text>
                    <form @submit.prevent="login">
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" for="login_email">Email</label>
                            <input type="login_email" v-model="login_email" id="login_email" name="login_email" class="form-control col-8" :class="{ 'is-invalid': submitted && !login_email }" required />
                            <div v-show="submitted && !login_email" class="invalid-feedback">Email is required</div>
                        </div>
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" for="login_password">Password</label>
                            <input type="login_password" v-model="login_password" id="login_password" name="login_password" class="form-control col-8" :class="{ 'is-invalid': submitted && !login_password }" required />
                            <div v-show="submitted && !login_password" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="form-group col-12 text-center">
                            <button class="btn btn-primary col-6 col-sm-4" :disabled="loggingIn">Login</button>
                        </div>
                    </form>
                </b-card-text>
            </b-card>
            <b-card border-variant="dark" header="Create new account" header-border-variant="dark" align="center" class="col-12 col-sm-10 col-md-8 col-lg-5 auth-card" style="padding: 0px; display: inline-block">
                <b-card-text>
                    <form @submit.prevent="register">
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" for="register_username">Username</label>
                            <input type="text" v-model="register_username" id="register_username" name="register_username" class="form-control col-8" :class="{ 'is-invalid': submitted && !register_username }" required />
                            <div v-show="submitted && !register_username" class="invalid-feedback">Username is required</div>
                        </div>
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" for="register_email">Email</label>
                            <input type="email" v-model="register_email" id="register_email" name="register_email" class="form-control col-8" :class="{ 'is-invalid': submitted && !register_email }" required />
                            <div v-show="submitted && !register_email" class="invalid-feedback">Email is required</div>
                        </div>
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" htmlFor="register_password">Password</label>
                            <input type="password" v-model="register_password" ud="register_password" name="register_password" class="form-control col-8" :class="{ 'is-invalid': submitted && !register_password }" required />
                            <div v-show="submitted && !register_password" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="row form-group col-12 padding-fix">
                            <label class="col-4 form-label" htmlFor="register_pass_conf">Confirm password</label>
                            <input type="password" v-model="register_pass_conf" name="register_pass_conf" class="form-control col-8" :class="{ 'is-invalid': submitted && !register_pass_conf }" required />
                            <div v-show="submitted && !register_pass_conf" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="form-group col-12 text-center">
                            <button class="btn btn-primary col-6 col-sm-4" :disabled="loggingIn">Register</button>
                        </div>
                    </form>
                </b-card-text>
            </b-card> -->

                    <div class="col-12 auth-div text-center">
                        <div class="auth-div-right">
                            <div class="col-12 register-header">
                                <h2>Register</h2>
                            </div>
                            <div class="col-12 register-form-div">
                                <input type="text" v-model="register_username" placeholder="Username" class="form-control auth-form-input col-4" required />
                                <input type="text" v-model="register_email" placeholder="E-mail" class="form-control auth-form-input col-4" required />
                                <input type="text" v-model="register_password" placeholder="Password" class="form-control auth-form-input col-4" required />
                                <input type="text" v-model="register_pass_conf" placeholder="Confirm password" class="form-control auth-form-input col-4" required />

                                <button class="btn btn-primary auth-form-btn col-4">Register</button>
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
            login (e) {
                console.log(e)
            },
            register (e) {
                console.log(e)
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
