<template>
    <div class="container">
        <b-card border-variant="dark" header="Registration Form" header-border-variant="dark" align="center" class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" style="padding: 0px;">
            <b-card-text>
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" required />
                        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" required />
                        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="loggingIn">Login</button>
                        <router-link :to="{ name: 'register' }" class="btn btn-link">Register</router-link>
                    </div>
                </form>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data () {
            return {
                username: '',
                password: '',
                submitted: false,
                loggingIn: false
            }
        },
        methods: {
            register (e) {
                console.log(e)
            }
        }
    }
</script>
