<template>
  <div>
    <h3>岗位调动管理</h3>
    <b-col lg="3" sm="6" xs="12" style="display: inline-block">
      <div class="pb-xlg h-100">
        <div>
          <b-button size="sm" class="auth-btn mb-3 btn-success"  v-b-modal="`modal-1`">岗位调动申请</b-button>

          <b-modal id="modal-1"  title="岗位调动申请表" style="margin-left: 40%"  @ok="handleOk2">

            <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
            <form class="mt" ref="form">
              <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
              <div class="form-group">
                <p class="widget-auth-info">编号：</p>
                <input
                  @change="checkDno()"
                  class="form-control no-border"
                  v-model="addPostmove.transferId"
                  placeholder="员工编号"
                />
              </div>
              <div class="form-group">
                <p class="widget-auth-info">员工号：</p>
                <input
                  @change="checkDno()"
                  class="form-control no-border"
                  v-model="addPostmove.id"
                  placeholder="员工编号"
                />
              </div>
              <!--       -->
              <div class="form-group">
                <p class="widget-auth-info">申请理由：</p>
                <input
                  class="form-control no-border"
                  v-model="addPostmove.transferReason"
                  placeholder="姓名"
                />
              </div>

              <div class="form-group">
                <p class="widget-auth-info">申请时间</p>
                <input
                  class="form-control no-border"
                  v-model="addPostmove.transferTime"
                  placeholder="性别"
                />
              </div>
              <div class="form-group">
                <p class="widget-auth-info">原岗位：</p>
                <input
                  class="form-control no-border"
                  v-model="addPostmove.jobBefore"
                  placeholder="原岗位"
                />
              </div>
              <div class="form-group">
                <p class="widget-auth-info">申请岗位：</p>
                <input
                  class="form-control no-border"
                  v-model="addPostmove.jobAfter"
                  placeholder="申请岗位"
                />
              </div>
              <div class="form-group">
                <p class="widget-auth-info">申请状态</p>
                <input
                  class="form-control no-border"
                  value="0"
                  v-model="addPostmove.status"
                  readonly
                />
              </div>


            </form>

            <!--            </Widget>-->

          </b-modal>
        </div>
      </div>
    </b-col>
    <h3 style="margin-left: 30%">岗位简介</h3>
    <b-row>
      <b-col xs="12" lg="8">

        <Widget
          title="<h6>  </h6>"
          close collapse settings customHeader
        >
          <b-row>
            <b-col lg="5" xs="12">
              <h5 class="m-t-1">行政部</h5>
              <p>部门简介：There are few position options available for notifications. You can click any of
                them
                to change notifications position:</p>
              <strong>行政专员：</strong>
              <p>There are few position options available for notifications. You can click any of
                them
                to change notifications position:</p>
              <strong>行政主管：</strong>
              <p>There are few position options available for notifications. You can click any of
                them
                to change notifications position:</p>
            </b-col>

            <b-col lg="6" xs="12">
              <h5 class="m-t-1"></h5>
              <p>Different types of notifications for lots of use cases. Custom classes are also
                supported.</p>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row><b-row>
    <b-col xs="12" lg="8">

      <Widget
        title="<h6>  </h6>"
        close collapse settings customHeader
      >
        <b-row>
          <b-col lg="5" xs="12">
            <h5 class="m-t-1">人力资源部</h5>
            <p>部门简介：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>人力专员：</strong>
            <p>There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>人力主管：</strong>
            <p>部门要求：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
          </b-col>

          <b-col lg="6" xs="12">
            <h5 class="m-t-1">Notification Types</h5>
            <p>Different types of notifications for lots of use cases. Custom classes are also
              supported.</p>
          </b-col>
        </b-row>
      </Widget>
    </b-col>
  </b-row><b-row>
    <b-col xs="12" lg="8">

      <Widget
        title="<h6>  </h6>"
        close collapse settings customHeader
      >
        <b-row>
          <b-col lg="5" xs="12">
            <h5 class="m-t-1">财务部</h5>
            <p>部门简介：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>财务专员：</strong>
            <p>There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>财务主管：</strong>
            <p>There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
          </b-col>

          <b-col lg="6" xs="12">
            <h5 class="m-t-1">Notification Types</h5>
            <p>Different types of notifications for lots of use cases. Custom classes are also
              supported.</p>
          </b-col>
        </b-row>
      </Widget>
    </b-col>
  </b-row><b-row>
    <b-col xs="12" lg="8">

      <Widget
        title="<h6>  </h6>"
        close collapse settings customHeader
      >
        <b-row>
          <b-col lg="5" xs="12">
            <h5 class="m-t-1">营销部</h5>
            <p>部门简介：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>营销专员：</strong>
            <p>部门要求：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
            <strong>营销主管：</strong>
            <p>部门要求：There are few position options available for notifications. You can click any of
              them
              to change notifications position:</p>
          </b-col>

          <b-col lg="6" xs="12">
            <h5 class="m-t-1">Notification Types</h5>
            <p>Different types of notifications for lots of use cases. Custom classes are also
              supported.</p>
          </b-col>
        </b-row>
      </Widget>
    </b-col>
  </b-row>
  </div>
</template>
<script>
  import Widget from '@/components/Widget/Widget';
  import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';
  import {Chart} from "highcharts-vue";
  import ECharts from "vue-echarts";
  import {department} from "../../page/department/department";
  import {liveChart} from "../../../pages/Charts/mock";
  import 'echarts/lib/chart/line';
  import 'echarts/lib/chart/themeRiver';
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/legend';

  import Highcharts from 'highcharts';
  import exporting from 'highcharts/modules/exporting';
  import exportData from 'highcharts/modules/export-data';

  exporting(Highcharts);
  exportData(Highcharts);
  import Sparklines from '@/components/Sparklines/Sparklines'
  export default {
    name:'salary',
    components: {
      //Widget, BigStat,highcharts: Chart,echart: ECharts,Sparklines
    },
    data() {
      return {
        cd: department,
        ld: liveChart,
        initEchartsOptions: {
          renderer: 'canvas'
        },
        jobList:department.jobList,
        department:department.department,
        addPostmove:{},
        data:{transferId:"transferId",
          id:"id",
          transferReason:"transferReason",
          transferTime:"transferTime",
          jobBefore:"jobBefore",
          jobAfter:"jobAfter",
          status:"status"},
      };
    },
    methods: {
      flush() {
        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetPostmoves").then(response => {
          console.log("这里执行了");
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
      checkDno() {
        let postmoveid=this.addPostmove.id;
        console.log(postmoveid);

        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetDepartment", postmoveid).then(response => {
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
      handleOk2(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
        this.loading=true;
        this.$store.dispatch("AddPostmove",{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}).then(response=>{
          status = response.data.code;
          if (status == 204) {
            this.flush();
            alert("请求成功");
          } else {
            console.log("请求出错");
            alert("请求出错");
          }
        })
      }
      // showMsgBoxOne() {
      //   this.boxOne = ''
      //   this.$bvModal.msgBoxOk('Action completed')
      //     .then(value => {
      //
      //     })
      //     .catch(err => {
      //       // An error occurred
      //     })
      // },

      // getRandomData() {
      //     const arr = [];
      //
      //     for (let i = 0; i < 25; i += 1) {
      //         arr.push(Math.random().toFixed(1) * 10);
      //     }
      //
      //     return arr;
      // },
      // getRevenueData() {
      //     const data = [];
      //     const seriesCount = 3;
      //     const accessories = ['SMX', 'Direct', 'Networks'];
      //
      //     for (let i = 0; i < seriesCount; i += 1) {
      //         data.push({
      //             label: accessories[i],
      //             data: Math.floor(Math.random() * 100) + 1,
      //         });
      //     }
      //
      //     return data;
      // }
    },
    computed: {
      // donut() {
      //     let revenueData = this.getRevenueData();
      //     let {danger, info, primary} = this.appConfig.colors;
      //     let series = [
      //         {
      //             name: 'Revenue',
      //             data: revenueData.map(s => {
      //                 return {
      //                     name: s.label,
      //                     y: s.data
      //                 }
      //             })
      //         }
      //     ];
      //     return {
      //         chart: {
      //             type: 'pie',
      //             height: 120
      //         },
      //         credits: {
      //             enabled: false
      //         },
      //         title: false,
      //         plotOptions: {
      //             pie: {
      //                 dataLabels: {
      //                     enabled: false
      //                 },
      //                 borderColor: null,
      //                 showInLegend: true,
      //                 innerSize: 60,
      //                 size: 100,
      //                 states: {
      //                     hover: {
      //                         halo: {
      //                             size: 1
      //                         }
      //                     }
      //                 }
      //             }
      //         },
      //         colors: [danger, info, primary],
      //         legend: {
      //             align: 'right',
      //             verticalAlign: 'middle',
      //             layout: 'vertical',
      //             itemStyle: {
      //                 color: '#495057',
      //                 fontWeight: 100,
      //                 fontFamily: 'Montserrat'
      //             },
      //             itemMarginBottom: 5,
      //             symbolRadius: 0
      //         },
      //         exporting: {
      //             enabled: false
      //         },
      //         series
      //     };
      // }
    }
  }
</script>
