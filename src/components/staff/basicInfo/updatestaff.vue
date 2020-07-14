<template>
  <div class="page" >
    <div class="pb-xlg h-100" style="margin-left: 40%">

      <Widget  class="widget-auth " title="<h3 class='mt-0'>修改信息</h3>" customHeader >
        <form class="mt" ref="form" @submit="handleOk5">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
          <div class="form-group">
            <p class="widget-auth-info">员工号：</p>
            <input
              @change="checkleavingid()"
              class="form-control no-border"
              v-model="editstaff.id"
              placeholder="员工号"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">姓名：</p>
            <input
              @change="checkDno()"
              class="form-control no-border"
              v-model="editstaff.name"

            />
          </div>
          <!--       -->
          <div class="form-group">
            <p class="widget-auth-info">性别：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.sex"
              placeholder="所在部门"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">所在部门：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.department"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">任职经历：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.career"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">员工属性：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.position"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">在职岗位：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.jobs"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">英语程度：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.language"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">家庭状况：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.family"
              placeholder="申请理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">任职时间：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.starttime"
              placeholder="申请理由"/>
          </div>
          <div class="form-group">
            <p class="widget-auth-info">退休时间：</p>
            <input
              class="form-control no-border"
              v-model="editstaff.endtime"
              placeholder="申请理由"/>
          </div>
          <div class="form-group">
            <input
              class="form-control  btn-success"
              type="submit"
              value="申请"
            />
          </div>


        </form>

      </Widget>
    </div>

  </div>
</template>

<script>
  export default {
    name: "updatestaff",
    data() {
      return {
        editstaff:{},
      }
    },
    methods: {
      flush() {
        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetStaffmasters").then(response => {
          console.log("这里之情了");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);

          if (status == 200) {
            this.staffmasters = response.data.data;
          } else {
            // eslint-disable-next-line no-console
            console.log("请求出错");
            alert("请求出错");
          }
        });
      },
      handleOk(name,language,family){
        this.loading=true;
        this.$store.dispatch(" UpdateStaffmaster",{name,language,family}).then(response=>{
          status=response.date.code;
          if (status==204){
            this.flush();
          }else {
            alert("请求出错")
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
