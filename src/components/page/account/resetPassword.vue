<template>
    <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                PersonManagement App
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>密码修改</h3>" customHeader>


                <form class="mt" >
                    <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                        {{errorMessage}}
                    </b-alert>
                    <div class="form-group">
                        <input class="form-control no-border" @change="getEmail"  v-model="resetForm.username" required type="text" name="email" placeholder="员工号" />
                    </div>
                    <p class="widget-auth-info float-left">
                        邮箱为：{{email}}
                    </p>
                    <div class="form-group ">
                    <b-button
                            variant="default" style="margin-bottom: 10px" class="mr-xs float-right" size="sm"
                            @click="senfMessage"
                    >发送验证码</b-button>
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
                    <b-button  @click="reset" size="sm" class="auth-btn mb-3" variant="inverse">修改</b-button>

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

                <router-link class="d-block text-center" @click="senfMessage">未收到验证码？重新验证</router-link>
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
        components: {Widget},
        data() {
            return {
                errorMessage: null,
                email:"",
                resetForm: {
                    username: "",
                    seCode: "",
                    password: "",
                    repeatPassword: ""
                }
            };
        },
        methods: {
            ...mapMutations(["ChangeSysCode"]),
            senfMessage() {
                let _this=this;
                this.$store.dispatch("SendEmail", this.resetForm.username).then(response => {

                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);
                    console.log("send email", response.data.data);
                    if (status == 200) {
                        this.errorMessage="验证码发送成功，请查看验证"
                        _this.ChangeSysCode(response.data.data);
                        console.log("localsSys",localStorage.getItem("sysCode"))
                    } else {
                        this.errorMessage = response.data.data.message;
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },

            getEmail() {
                this.$store.dispatch("GetEmailById", this.resetForm.username).then(response => {

                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);
                    console.log("send email", response.data.data);
                    if (status == 200) {
                        this.email=response.data.data;
                    } else {
                        this.errorMessage = response.data.data.message;
                        alert("请求出错"+status);
                    }
                });
            },
            reset() {
                console.log("进入reste")

                if(this.resetForm.seCode!=localStorage.getItem("sysCode")){
                    this.errorMessage="验证码不正确";
                }
                else if(this.resetForm.repeatPassword!=this.resetForm.password){
                    this.errorMessage="两次输入密码不一致"
                }else {
                    this.$store.dispatch("ResetPassword", this.resetForm).then(response => {

                        status = response.data.code;
                        this.loading = false;
                        console.log(response.data.code);
                        console.log("send email", response.data.data);
                        if (status == 204) {
                            this.$router.push('/login');
                        } else {
                            this.errorMessage = response.data.data.message;
                            alert("请求出错" + status);
                        }
                    });
                }
            },
        }
    }


</script>
