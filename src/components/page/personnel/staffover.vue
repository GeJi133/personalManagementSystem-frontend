<template>
  <div class="page">
    <h1 class="page-title">员工离职管理</h1>

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
                <th>所属部门</th>
                <th>离职时间</th>
                <th>离职理由</th>
                <th>申请状态</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="staffover in staffovers"
                :key="staffover.leavingId"
              >
                <td>
                  <a href="#" @click="viewstaffover(staffover.leavingId)">{{staffover.leavingId}}</a>
                </td>
                <td>
                  <a href="#" @click="viewstaffover(staffover.id)">{{staffover.id}}</a>
                </td>
                <td>
                  <a href="#" @click="viewstaffover(staffover.department)">{{staffover.department}}</a>
                </td>
                <td>
                  <a href="#" @click="viewstaffover(staffover.leavingTime)">{{staffover.leavingTime}}</a>
                </td>
                <td>
                  <a href="#" @click="viewstaffover(staffover.leavingReason)">{{staffover.leavingReason}}</a>
                </td>
                <td>
                  <a href="#" @click="viewstaffover(staffover.status)">{{staffover.status}}</a>
                </td>
                <td>
                  <p>
                    <b-button
                      variant="default" class="mr-xs " size="sm"
                      @click="Agreestaffover"
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
        name: "staffover",
      components: {
        Widget, BigStat,highcharts: Chart
      },
      data() {
        return {
          //mock
          staffovers:{},
          data:{leavingId:"leavingId",id:"id",department:"department",leavingTime:"leavingTime",leavingReason:"leavingReason",statue:"status"}
        };
      },
      methods:{
        viewstaffover(leavingId,id,department,leavingTime,leavingReason,status){
          this.loading=true;
          this.$store.dispatch("GetStaffover",{leavingId,id,department,leavingTime,leavingReason,status}).then(response => {
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 204) {
              let staffovers = response.data.data;
              console.log("请求成功");
              // alert("dhjakdhk");
              this.$router.push({
                path: "/manage/staffover",
                query: { department: staffovers }
              });
            } else {

              alert("请求出错");
            }
          });
        },
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetStaffovers").then(response => {
            console.log("这里之情了");
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
        Agreestaffover(leavingId,id,department,leavingTime,leavingReason) {
          this.loading=true;
          this.$store.dispatch("UpdateStaffover",{leavingId,id,department,leavingTime,leavingReason}).then(response =>{
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
