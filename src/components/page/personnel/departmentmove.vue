<template>
  <div class="page">
    <h1 class="page-title">部门调动管理</h1>

    <b-row>
      <b-col xs="12">
        <Widget
          bodyClass="widget-table-overflow"
          customHeader
          title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
        >
          <div class="table-responsive">
            <table class="table table-striped table-lg mb-0 requests-table">
              <thead>
              <tr class="text-muted">
                <th>编号</th>
                <th>员工号</th>
                <th>申请理由</th>
                <th>原部门</th>
                <th>申请部门</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="departmentmove in departmentmoves"
                :key="departmentmove.transferId"
              >
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.transferId)">{{departmentmove.transferId}}</a>
                </td>
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.id)">{{departmentmove.id}}</a>
                </td>
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.transferReason)">{{departmentmove.transferReason}}</a>
                </td>
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.transferTime)">{{departmentmove.transferTime}}</a>
                </td>
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.departmentBefore)">{{departmentmove.departmentBefore}}</a>
                </td>
                <td>
                  <a href="#" @click="viewDepartmentmove(departmentmove.departmentAfter)">{{departmentmove.departmentAfter}}</a>
                </td>
                <td>
                  <p>
                    <b-button
                      variant="default" class="mr-xs" size="sm"
                      @click="Agreedepartmentmove"
                    >同意</b-button>
                  </p>

                </td>
              </tr>


              </tbody>
            </table>

          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Widget from '@/components/Widget/Widget';
  import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';
  import { Chart } from  'highcharts-vue';
  import mock from '@/components/page/personInfo/mock';
    export default {
        name: "departmentmove",
      components: {
        //Widget, BigStat,highcharts: Chart
      },
      data() {
        return {
          departmentmoves:[],
          //mock
          data:{transferId:"transferId",
            id:"id",
            transferReason:"transferReason",
            transferTime:"transferTime",
            departmentBefore:"jobBefore",
            departmentAfter:"jobAfter"
            },

        };

      },
      mounted() {
          this.flush();
      },
      methods:{
        viewDepartmentmove(){
          console.log("运行了")
          this.loading=true;
          this.$store.dispatch("GetDepartmentmove",).then(response => {
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 200) {
              let departmentmove = response.data.data[0];
              console.log("department", department);
              // alert("dhjakdhk");
              this.$router.push({
                path: "/manage/departmentmove",
                query: { department: departmentmove }
              });
            } else {

              alert("请求出错");
            }
          });
        },
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetDepartmentmoves").then(response => {
            console.log("这里之情了");
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 200) {
              this.postmoves = response.data.data;
            } else {
              // eslint-disable-next-line no-console
              console.log("请求出错");
              alert("请求出错");
            }
          });
        },
        Agreedepartmentmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter) {
          this.loading=true;
          this.$store.dispatch("UpdateDepartmentmove",transferId,id,transferReason,transferTime,jobBefore,jobAfter).then(response =>{
            status=response.data.code;
            this.loading=false;
            if(status==204){
              this.flush();
            }else {
              alert("请求出错");
            }
          })

        },
      }
    }
</script>

<style scoped>

</style>
