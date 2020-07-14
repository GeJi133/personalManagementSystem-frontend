<template>
  <div class="page">
    <h1 class="page-title">试用期管理</h1>

    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
          bodyClass="widget-table-overflow"
          customHeader
        >
          <div class="table-responsive">
            <table class="table table-striped table-lg mb-0 requests-table">
              <thead>
              <tr class="text-muted">
                <th>编号</th>
                <th>员工号</th>
                <th>申请原因</th>
                <th>申请时间</th>
                <th>原岗位</th>
                <th>申请岗位</th>
                <th>申请状态</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="trycontrol in trycontrols"
                :key="trycontrol.transferId"
              >
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.transferId)">{{trycontrol.transferId}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.id)">{{trycontrol.id}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.transferReason)">{{trycontrol.transferReason}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.transferTime)">{{trycontrol.transferTime}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.jobBefore)">{{trycontrol.jobBefore}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.jobAfter)">{{trycontrol.jobAfter}}</a>
                </td>
                <td>
                  <a href="#" @click="viewtrycontrol(trycontrol.status)">{{trycontrol.status}}</a>
                </td>
                <td>
                  <p>
                    <b-button
                      variant="default" class="mr-xs " size="sm"
                      @click="Agreetrycontrol"
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
  import {Chart} from "highcharts-vue";

  import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';
  import Widget from '@/components/Widget/Widget';
  import mock from '@/components/page/personInfo/mock';
    export default {
        name: "trycontrol",
      components: {
        Widget, BigStat,highcharts: Chart
      },
      data() {
        return {
          //moc
          // k
          trycontrols:[],

          data:{transferId:"transferId",
            id:"id",
            transferReason:"transferReason",
            transferTime:"transferTime",
            jobBefore:"jobBefore",
            jobAfter:"jobAfter",
            status:"status"},
        };
      },
      methods:{
        viewtrycontrol(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status){
          this.loading=true;
          this.$store.dispatch("GetTrycontrol",{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}).then(response => {
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 200) {
              let trycontrol = response.data.data[0];
              console.log("department", trycontrol);
              // alert("dhjakdhk");
              this.$router.push({
                path: "trycontrol",
                query: { department: trycontrol }
              });
            } else {

              alert("请求出错");
            }
          });
        },
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetTrycontrols").then(response => {
            console.log("这里之情了");
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
        Agreetrycontrol(transferId,id,transferReason,transferTime,status) {
          this.loading=true;
          this.$store.dispatch("UpdateTrycontrol",{transferId,id,transferReason,transferTime,status}).then(response =>{
            status=response.data.code;
            this.loading=false;
            if(status==204){
              this.status="1";
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
