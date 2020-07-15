<template>
  <div class="page" >
    <div class="pb-xlg h-100" style="margin-left: 40%">

      <Widget  class="widget-auth " title="<h3 class='mt-0'>实习生转正申请</h3>" customHeader >
        <p class="widget-auth-info">

        </p>
        <form class="mt" ref="form" @submit="handleOk5">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
          <div class="form-group">
            <p class="widget-auth-info">编号：</p>
            <input
              @change="checktransferid()"
              class="form-control no-border"
              v-model="addpositive.transferId"
              placeholder="编号"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">员工号：</p>
            <input
              @change="checkDno()"
              class="form-control no-border"
              v-model="addpositive.id"
              placeholder="员工号"
            />
          </div>
          <!--       -->
          <div class="form-group">
            <p class="widget-auth-info">转正理由：</p>
            <input
              class="form-control no-border"
              v-model="addpositive.transferReason"
              placeholder="转正理由"
            />
          </div>
          <div class="form-group">
            <p class="widget-auth-info">申请状态：</p>
            <input
              class="form-control no-border"
              v-model="addpositive.status"
              readonly
              value="0"
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
        name: "positivestaff",
      data() {
          return {
            addpositive:[],
            trycontrols:{},
            data:{transferId:"transferId",
              id:"id",
              transferReason:"transferReason",
              status:"status"},
          }
      },
      methods:{
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetTrycontrol").then(response => {
            console.log("这里执行了");
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 204) {
              this.trycontrols = response.data.data;
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
            .dispatch("AddTrycontrol", this.addpositive)
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
        checktransferid() {
          let transferid=this.addpositive.id;
          console.log("请求成功");

          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetStaffmove", transferid).then(response => {
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
