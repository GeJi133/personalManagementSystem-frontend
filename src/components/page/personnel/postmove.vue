<template>
  <div class="page">
    <h1 class="page-title">岗位调动管理</h1>
    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>Support <span class='fw-semi-bold'>部门调动管理</span></h5>"
          bodyClass="widget-table-overflow"
          customHeader
        >
          <div class="table-responsive">
            <table class="table table-striped table-lg mb-0 requests-table">
              <thead>
              <tr class="text-muted">
                <th>编号</th>
                <th>员工号</th>
                <th>换岗理由</th>
                <th>申请时间</th>
                <th>原岗位</th>
                <th>申请岗位</th>
                <th>申请状态</th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="postmove in postmoves"
                :key="postmove.transferId"
              >
                <td>
                  <a href="#" @click="viewPostmove(postmove.transferId)">{{postmove.transferId}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.id)">{{postmove.id}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.transferReason)">{{postmove.transferReason}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.transferTime)">{{postmove.transferTime}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.jobBefore)">{{postmove.jobBefore}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.jobAfter)">{{postmove.jobAfter}}</a>
                </td>
                <td>
                  <a href="#" @click="viewPostmove(postmove.status)">{{postmove.status}}</a>
                </td>
                <td>
                  <p>
                    <b-button
                      variant="default" class="mr-xs" size="sm"
                      @click="AgreePostmove"
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
  import movepost from "../../staff/basicInfo/movepost";
    export default {
        name: "postmove",
      components: {
        //Widget, BigStat,highcharts: Chart
      },
      data() {

        return {
          //mock
          postmoves:[],
          data:{transferId:"transferId",
            id:"id",
            transferReason:"transferReason",
            transferTime:"transferTime",
            jobBefore:"jobBefore",
            jobAfter:"jobAfter",
            status:"status"},

        };
      },
      mounted() {
          this.flush()
      },
      methods :{
         viewPostmove(transferId){
           this.loading=true;
           this.$store.dispatch("GetPostmove",transferId).then(response => {
             status = response.data.code;
             this.loading = false;
             console.log(response.data.code);

             if (status == 200) {
               let postmove = response.data.data;
               console.log("department", postmove);
               // alert("dhjakdhk");
               this.$router.push({
                 path: "/manage/postmove",
                 query: { department: postmove }
               });
             } else {

               alert("请求出错");
             }
           });
        },
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetPostmoves").then(response => {
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
        AgreePostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
           this.loading=true;
           this.$store.dispatch("UpdatePostmove",{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}).then(response =>{
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
