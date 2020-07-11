<template>


    <div class="page" >
      <div class="pb-xlg h-100" style="margin-left: 40%">

        <Widget  class="widget-auth " title="<h3 class='mt-0'>员工基本信息</h3>" customHeader >
          <p class="widget-auth-info">

          </p>
          <form class="mt" @submit.prevent="submit" >
            <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
              {{errorMessage}}
            </b-alert>
            <div class="form-group">
              <p>职工编号：</p>
              <input class="form-control no-border" ref="email" required type="text" name="email" value="820183008" readonly/>
            </div>
            <div class="form-group">
              <p>姓名：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="马鑫" readonly/>
            </div> <div class="form-group">
            <p>性别：</p>
            <input class="form-control no-border" ref="password" required type="text" name="password" value="男" readonly/>
          </div>
            <div class="form-group">
              <p>隶属部门：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="人力资源部" readonly/>
            </div>
            <div class="form-group">
              <p>在职岗位：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="人力专员" readonly/>
            </div>
            <div class="form-group">
              <p>上岗日期：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="2020.2.3" readonly/>
            </div>
            <div class="form-group">
              <p>任职时长：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="两年" readonly/>
            </div>
            <div class="form-group">
              <p>进本工资：</p>
              <input class="form-control no-border" ref="password" required type="text" name="password" value="5000" readonly/>
            </div>
            <hr style="height: 2px">
            <div class="form-group">
              <p>岗位调换：</p>
              <button @click="goDepartment" class="form-control btn-success">调岗申请</button>
            </div>
            <div class="form-group">
              <p>部门调换：</p>
              <button @click="goPost" class="form-control btn-success">调部申请</button>
            </div>
            <div class="form-group">
              <p>离职：</p>
              <button @click="Leave" class="form-control btn-success">离职申请</button>
            </div>

          </form>

        </Widget>
      </div>

    </div>

</template>
<script>
  export default {
    name:'performance',
    methods:{
      goDepartment() {
        this.$router.push("/staff/salary");
      },
      goPost(){
        this.$router.push("/staff/movepost")
      },
      Leave(){
        this.$router.push("/staff/leavestaff")
      },
    }
  }
</script>
