<template>
    <div class="container">
        <b-card border-variant="dark" header="Login Form" header-border-variant="dark" align="center" class="col-12 col-sm-10 col-md-8 col-lg-5" style="padding: 0px; display: inline-block">
            <b-card-text>
                <form @submit.prevent="login">
                    <div class="row form-group col-12 padding-fix">
                        <label class="col-4 form-label" for="email">Email</label>
                        <input type="email" v-model="email" id="email" name="email" class="form-control col-8" :class="{ 'is-invalid': submitted && !email }" required />
                        <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                    </div>
                    <div class="row form-group col-12 padding-fix">
                        <label class="col-4 form-label" for="password">Password</label>
                        <input type="password" v-model="password" id="password" name="password" class="form-control col-8" :class="{ 'is-invalid': submitted && !password }" required />
                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                    </div>
                    <div class="form-group col-12 text-center">
                        <button class="btn btn-primary col-6 col-sm-4" :disabled="loggingIn">Login</button>
                    </div>
                </form>
            </b-card-text>
        </b-card>
        <b-card border-variant="dark" header="Create new account" header-border-variant="dark" align="center" class="col-12 col-sm-10 col-md-8 col-lg-5" style="padding: 0px; display: inline-block">
            <b-card-text>
                <form @submit.prevent="register">
                    <div class="row form-group col-12 padding-fix">
                        <label class="col-4 form-label" for="username">Username</label>
                        <input type="text" v-model="username" name="username" class="form-control col-8" :class="{ 'is-invalid': submitted && !username }" required />
                        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                    </div>
                    <div class="row form-group col-12 padding-fix">
                        <label class="col-4 form-label" for="email">Email</label>
                        <input type="email" v-model="email" name="email" class="form-control col-8" :class="{ 'is-invalid': submitted && !email }" required />
                        <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                    </div>
                    <div class="row form-group col-12 padding-fix">
                        <label class="col-4 form-label" htmlFor="password">Password</label>
                        <input type="password" v-model="password" name="password" class="form-control col-8" :class="{ 'is-invalid': submitted && !password }" required />
                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                    </div>
                    <div class="form-group col-12 text-center">
                        <button class="btn btn-primary col-6 col-sm-4" :disabled="loggingIn">Register</button>
                    </div>
                </form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'auth',
        data () {
            return {
                username: '',
                password: '',
                submitted: false,
                loggingIn: false
            }
        },
        methods: {
            login (e) {
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
</style>
