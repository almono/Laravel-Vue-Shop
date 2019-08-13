<template>
    <div class="col-12 auth-div text-center">
        <div class="auth-div-left">
            <div class="col-12 login-header">
                <h2>Login</h2>
            </div>
            <div class="col-12 login-form-div text-center">
                <input type="text" v-model="login_username" placeholder="Username" class="form-control auth-form-input col-4" required />
                <input type="text" v-model="login_password" placeholder="Password" class="form-control auth-form-input col-4" required />

                <button class="btn btn-primary auth-form-btn col-4">Login</button>
                <span class="col-12 login-forgot-password">Forgot password?</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
                login_password: '',
                login_username: ''
            }
        },
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