<template>
  <div class="auth-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        PersonManagement App
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
        <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
          {{errorMessage}}

        </b-alert>

        <p class="widget-auth-info">
            Use your id to sign in.
        </p>

        <form class="mt" @submit.prevent="login">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" v-model="loginForm.username" required type="text" name="email" placeholder="员工号" />
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
import { mapMutations } from "vuex";

export default {
  name: 'LoginPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      loginForm:{
        username:"",
        password:"",
      }
    };
  },
  methods: {
    ...mapMutations(["ChangeLogin"]),

    login() {
      this.$store.dispatch("Login",this.loginForm).then(response => {
        console.log("登录");
        status = response.data.code;

        this.loading = false;
        console.log(response.data.code);
        console.log("登录响应",response.data.data);
        let _this=this;

        if (status == 200) {
          let token=response.data.data.token;
          let role=response.data.data.role;
          _this.ChangeLogin(token);
          console.log("执行后的token",localStorage.getItem('token'));

          this.routeTo(role);

          console.log("lalallala");
          this.transferList = response.data.data;
        } else {
          this.errorMessage=response.data.data.message;
          console.log("请求出错");
          alert("请求出错");
        }
      });
      // if (1) {

      //   }
      },
    routeTo(role){
        if(role=='ROLE_ADMIN') {
          this.$router.push('/manage/manageMain');
        }else if(role=='ROLE_EMPLOYEE'){
          this.$router.push('/staff/main');
        }else if(role=='ROLE_TRAINEE'){
          this.$router.push('/staff/main');
        }else{
          alert("身份验证失败");
        }
    }

  },
  // created() {
  //   if (window.localStorage.getItem('authenticated') === 'true') {
  //     this.$router.push('/app/main/analytics');
  //   }
  // },
};
</script>
