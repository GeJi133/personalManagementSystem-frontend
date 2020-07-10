<template>
    <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                PersonManagement App
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>密码修改</h3>" customHeader>
                <p class="widget-auth-info">
                    请查看邮箱验证码
                </p>
                <form class="mt" @submit.prevent="login">
                    <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                        {{errorMessage}}
                    </b-alert>
                    <div class="form-group">
                        <input class="form-control no-border" v-model="resetForm.id" required type="text" name="email" placeholder="员工号" />
                    </div>
                    <div class="form-group">

                        <input class="form-control no-border" v-model="resetForm.seCode" required type="text" name="email" placeholder="邮箱验证码" />
                    </div>
                    <div class="form-group">
                        <input class="form-control no-border" v-model="resetForm.password"  required type="password" name="password" placeholder="密码" />
                    </div>
                    <div class="form-group">
                        <input class="form-control no-border" v-model="resetForm.repeatPassword"  required type="password" name="password" placeholder="重复密码" />
                    </div>
                    <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">修改</b-button>

                    <!--          <div class="social-buttons">-->
                    <!--            <b-button variant="primary" class="social-button mb-2">-->
                    <!--              <i class="social-icon social-google"></i>-->
                    <!--              <p class="social-text">邮箱验证</p>-->
                    <!--            </b-button>-->
                    <!--            <b-button variant="success" class="social-button">-->
                    <!--              <i class="social-icon social-microsoft"></i>-->
                    <!--              <p class="social-text">手机号验证</p>-->
                    <!--            </b-button>-->
                    <!--          </div>-->
                </form>
                <p class="widget-auth-info">
                    欢迎登录员工管理系统
                </p>

                <router-link class="d-block text-center" to="/resetPassword">未收到验证码？重新验证</router-link>
            </Widget>
        </b-container>
        <footer class="auth-footer">
            2019 &copy; Sing App Vue Admin Dashboard Template.
        </footer>
    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';

    export default {
        name: 'LoginPage',
        components: { Widget },
        data() {
            return {
                errorMessage: null,
                resetForm:{
                    id:"",
                    seCode:"",
                    password:"",
                    repeatPassword:""
                }
            };
        },
        methods: {
            login() {
                const email = this.$refs.email.value;
                const password = this.$refs.password.value;

                if (email.length !== 0 && password.length !== 0) {
                    window.localStorage.setItem('authenticated', true);
                    this.$router.push('/login');
                }
            },
        },
        created() {
            // if (window.localStorage.getItem('authenticated') === 'true') {
            //     this.$router.push('/app/main/analytics');
            // }
        },
    };
</script>
