<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        PersonManagement App
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <p class="widget-auth-info">
            Use your id to sign in.
        </p>
        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" v-model="loginForm.id" required type="text" name="email" placeholder="员工号" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="loginForm.password"  required type="text" name="password" placeholder="密码" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">登录</b-button>
          <p class="widget-auth-info">忘记密码</p>
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

        <router-link class="d-block text-center" to="/resetPassword">邮箱验证</router-link>
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
      loginForm:{
        id:"",
        password:"",
      }
    };
  },
  methods: {

    login() {

      if (1) {
        if(this.loginForm.id=='1') {
          this.$router.push('/manage/manageMain');
        }else{
          this.$router.push('/staff/main');
        }
      }
    },
  },
  // created() {
  //   if (window.localStorage.getItem('authenticated') === 'true') {
  //     this.$router.push('/app/main/analytics');
  //   }
  // },
};
</script>
