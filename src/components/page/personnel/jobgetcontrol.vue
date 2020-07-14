<template>
  <div class="page" >
    <div class="pb-xlg h-100" style="margin-left: 40%">

      <Widget  class="widget-auth " title="<h3 class='mt-0'>添加新入职员工</h3>" customHeader >
        <form class="mt" ref="form" @submit="handleOk5">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
          <div class="form-group">
            <input
              @change="checkleavingid()"
              class="form-control no-border"
              v-model="addjobget.id"
              placeholder="员工号"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.name"
              placeholder="姓名"
            />
          </div>
          <!--       -->
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.sex"
              placeholder="性别"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.department"
              placeholder="所在部门"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.career"
              placeholder="任职经历"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.position"
              placeholder="员工属性"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.jobs"
              placeholder="在职岗位"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.language"
              placeholder="英语程度"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              v-model="addjobget.family"
              placeholder="家庭状况"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control  btn-success"
              type="submit"
              value="添加员工"
            />
          </div>


        </form>

      </Widget>
    </div>

  </div>
</template>

<script>
  export default {
    name: "jobgetcontrol",
    data() {
      return {
        addjobget:{},
        addleaving:[],
        staffmasters:{},
        data:{id:"id",name:"name",sex:"sex",department:"department",career:"career",position:"position",jobs:"jobs",language:"language",family:"family"}
      }
    },
    methods: {
      flush() {
        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetStaffmaster").then(response => {
          console.log("这里执行了");
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
      handleOk5() {
        console.log("zhieshoa");
        // this.loading=true;
        console.log("执行了这个请求");
        this.$store
          .dispatch("AddStaffmaster", this.addjobget)
          .then(response => {
            console.log("这里之情了");
            console.log(response);
            status = response.data.code;
            // this.loading=false;
            console.log(response.data.code);
            if (status == 204) {
              this.flush();
              alert("添加成功");
            } else {
              console.log("请求出错");
              alert("请求出错");
            }
          });
      },
      checkleavingid() {
        let staffmasterid=this.addjobget.id;
        console.log("请求成功");

        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetStaffmaster", staffmasterid).then(response => {
          console.log("这里之情了");
          status = response.data.code;

          this.loading = false;
          console.log(response.data.code);
          console.log(response.data.data);

          if (status == 200) {
            if (response.data.data.length == 0) {
              this.errorMessage = "员工编号编号可用";
              alert("员工编号可用");
            }
            else {
              this.errorMessage = "编号重复";
            }
          }
        });
      },
    }
  }
</script>

<style scoped>

</style>
