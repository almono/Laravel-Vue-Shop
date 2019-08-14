<template>
    <div class="col-12 auth-div text-center">
        <div class="auth-div-right">
            <div class="col-12 register-header">
                <h2>Register</h2>
            </div>
            <div class="col-12 register-form-div">
                <input type="text" v-model="register_username" placeholder="Username" class="form-control auth-form-input col-12 col-md-4 col-lg-2" required />
                <input type="text" v-model="register_email" placeholder="E-mail" class="form-control auth-form-input col-12 col-md-4 col-lg-2" required />
                <input type="text" v-model="register_password" placeholder="Password" class="form-control auth-form-input col-12 col-md-4 col-lg-2" required />
                <input type="text" v-model="register_pass_conf" placeholder="Confirm password" class="form-control auth-form-input col-12 col-md-4 col-lg-2" required />

                <button class="btn btn-primary auth-form-btn col-12 col-md-4 col-lg-2">Register</button>
                <span class="col-12 register-got-account">Already got an account?</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {
                register_username: '',
                register_email: '',
                register_password: '',
                register_pass_conf: ''
            }
        },
        methods: {
            register (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>
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
    .register-got-account {
        display: block;
        font-size: 14px;
    }
</style>
