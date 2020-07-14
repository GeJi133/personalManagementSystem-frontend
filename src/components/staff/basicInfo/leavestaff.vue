<template>
  <div class="page" >
    <div class="pb-xlg h-100" style="margin-left: 40%">

      <Widget  class="widget-auth " title="<h3 class='mt-0'>员工离职申请</h3>" customHeader >
        <form class="mt" ref="form" @submit="handleOk4">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
          <div class="form-group">
            <p class="widget-auth-info">离职编号：</p>
            <input
              @change="checkleavingid()"
              class="form-control no-border"
              v-model="addleaving.leavingId"
              placeholder="编号"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">员工号：</p>
            <input
              @change="checkDno()"
              class="form-control no-border"
              v-model="addleaving.id"
              placeholder="员工号"
            />
          </div>
          <!--       -->
          <div class="form-group">
            <p class="widget-auth-info">所在部门：</p>
            <input
              class="form-control no-border"
              v-model="addleaving.department"
              placeholder="所在部门"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">申请理由：</p>
            <input
              class="form-control no-border"
              v-model="addleaving.leavingReason"
              placeholder="申请理由"
            />
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
        name: "leavestaff",
      data() {
          return {
            addleaving:[],
          }
      },
      methods: {
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetStaffover").then(response => {
            console.log("这里执行了");
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 200) {
              this.staffovers = response.data.data;
            } else {
              // eslint-disable-next-line no-console
              console.log("请求出错");
              alert("请求出错");
            }
          });
        },
        handleOk4() {
          console.log("zhieshoa");
          // this.loading=true;
          console.log("执行了这个请求");
          this.$store
            .dispatch("AddStaffover", this.addleaving)
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
          let leavingid=this.addleaving.id;
          console.log("请求成功");

          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetStaffmove", leavingid).then(response => {
            console.log("这里之情了");
            status = response.data.code;

            this.loading = false;
            console.log(response.data.code);
            console.log(response.data.data);

            if (status == 204) {
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
