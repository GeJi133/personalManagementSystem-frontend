<template>


    <div class="page" >
      <div class="pb-xlg h-100" style="margin-left: 40%">

        <Widget  class="widget-auth " title="<h3 class='mt-0'>员工基本信息</h3>" customHeader >
          <p class="widget-auth-info">

          </p>
          <form class="mt" v-for="staffmaster in staffmasters" :key="staffmaster.id" >

            <div class="form-group">
              <p>职工编号：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.id)">{{staffmaster.id}}</a>
            </div>
            <div class="form-group">
              <p>姓名：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.name)">{{staffmaster.name}}</a>
            </div> <div class="form-group">
            <p>性别：</p>
            <a href="#" @click="ViewStaffmaster(staffmaster.sex)">{{staffmaster.sex}}</a>
          </div>
            <div class="form-group">
              <p>隶属部门：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.department)">{{staffmaster.department}}</a>
            </div>
            <div class="form-group">
              <p>任职经历：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.career)">{{staffmaster.career}}</a>
            </div>
            <div class="form-group">
              <p>员工属性：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.position)">{{staffmaster.position}}</a>
            </div>
            <div class="form-group">
              <p>在职岗位：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.jobs)"></a>
            </div>
            <div class="form-group">
              <p>英语程度：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.language)">{{staffmaster.language}}</a>
            </div>
            <div class="form-group">
              <p>家庭状况：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.family)">{{staffmaster.family}}</a>
            </div>
            <div class="form-group">
              <p>邮件：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.email)">{{staffmaster.email}}</a>
            </div>
            <div class="form-group">
              <p>任职时间：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.starttime)">{{staffmaster.starttime}}</a>
            </div>
            <div class="form-group">
              <p>退休时间：</p>
              <a href="#" @click="ViewStaffmaster(staffmaster.endtime)">{{staffmaster.endtime}}</a>
            </div>
          </form>
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
          <div class="form-group">
            <p>转正：</p>
            <button @click="Positive" class="form-control btn-success">转正申请</button>
          </div>
          <div class="form-group">
            <p>修改个人信息：</p>
            <button class="form-control btn-success" @click="Modperson">修改</button>

          </div>


        </Widget>
      </div>

    </div>

</template>
<script>
  export default {
    name:'performance',
    methods:{
     ViewStaffmaster(id,name,sex,department,career,position,jobs,language,family,email,starttime,endtime){
       this.loading=true;
       this.$store.dispatch("GetStaffmaster",{id,name,sex,department,career,position,jobs,language,family,email,starttime,endtime}).then(response => {
         status = response.data.code;
         this.loading = false;
         console.log(response.data.code);

         if (status == 200) {
           let staffmaster = response.data.data[0];
           console.log("department", staffmaster);
           // alert("dhjakdhk");
           this.$router.push({
             path: "/staff/performance",
             query: { department: staffmaster }
           });
         } else {

           alert("请求出错");
         }
       });

     },
     goDepartment(){
       this.$router.push("/staff/salary")
     },
      goPost(){
       this.$router.push("/staff/movepost")
      },
      Leave(){
       this.$router.push("/staff/leavestaff")
      },
      Positive(){
       this.$router.push("/staff/positivestaff")
      },
      Modperson(){
       this.$router.push("/staff/updatestaff")
      }
    }
  }
</script>
