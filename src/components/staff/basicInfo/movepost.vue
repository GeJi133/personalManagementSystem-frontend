<template>
    <div>
      <h3>部门调动管理</h3>
      <b-col lg="3" sm="6" xs="12" style="display: inline-block">
        <div class="pb-xlg h-100">
          <div>
            <b-button size="sm" class="auth-btn mb-3 btn-success"   v-b-modal="`modal-1`">部门调动申请</b-button>

            <b-modal id="modal-1"  title="调动申请表" style="margin-left: 40%" @ok="handleOk3">

              <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
              <p class="widget-auth-info">
                部门调动
              </p>
              <form class="mt" ref="form">
                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
                <div class="form-group">
                  <p class="widget-auth-info">编号：</p>
                  <input
                    @change="checktransferid()"
                    class="form-control no-border"
                    v-model="addDepartmentmove.transferId"
                    placeholder="编号"
                  />
                </div>
                <div class="form-group">
                  <p class="widget-auth-info">员工号：</p>
                  <input
                    @change="checkDno()"
                    class="form-control no-border"
                    v-model="addDepartmentmove.id"
                    placeholder="员工号"
                  />
                </div>
                <!--       -->
                <div class="form-group">
                  <p class="widget-auth-info">申请理由：</p>
                  <input
                    class="form-control no-border"
                    v-model="addDepartmentmove.transferReason"
                    placeholder="申请理由"
                  />
                </div>
                <div class="form-group">
                  <p class="widget-auth-info">申请时间：</p>
                  <input
                    class="form-control no-border"
                    v-model="addDepartmentmove.transferTime"
                    placeholder="申请理由"
                  />
                </div>
                <div class="form-group">
                  <p class="widget-auth-info">原部门：</p>
                  <input
                    class="form-control no-border"
                    v-model="addDepartmentmove.departmentBefore"
                    placeholder="原部门"
                  />
                </div>
                <div class="form-group">
                  <p class="widget-auth-info">申请部门：</p>
                  <input
                    class="form-control no-border"
                    v-model="addDepartmentmove.departmentAfter"
                    placeholder="申请部门"
                  />
                </div>
              </form>

              <!--            </Widget>-->

            </b-modal>
          </div>
        </div>
      </b-col>
     <h3 style="margin-left: 50%">四大部门简介</h3>
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
                <h5 class="m-t-1">部门经理：</h5>
                <p>部门要求：There are few position options available for notifications. You can click any of
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
                <h5 class="m-t-1">部门经理：</h5>
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
                <h5 class="m-t-1">部门经理:</h5>
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
                <h5 class="m-t-1">营销部</h5>
                <p>部门简介：There are few position options available for notifications. You can click any of
                  them
                  to change notifications position:</p>
                <h5 class="m-t-1">部门经理</h5>
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
    import Sparklines from '@/components/Sparklines/Sparklines';

    export default {
        name: "movepost",
      components: {
        Widget, BigStat,highcharts: Chart,echart: ECharts,Sparklines
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
          addDepartmentmove:{},
          data:{transferId:"transferId",
            id:"id",
            transferReason:"transferReason",
            transferTime:"transferTime",
            departmentBefore:"jobBefore",
            departmentAfter:"jobAfter"
          },
        };
      },
      methods: {
        flush() {
          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetDepartmentmove").then(response => {
            console.log("这里执行了");
            status = response.data.code;
            this.loading = false;
            console.log(response.data.code);

            if (status == 200) {
              this.departmentmoves = response.data.data;
            } else {
              // eslint-disable-next-line no-console
              console.log("请求出错");
              alert("请求出错");
            }
          });
        },
        handleOk3() {
          console.log("zhieshoa");
          // this.loading=true;
          console.log("执行了这个请求");
          this.$store
            .dispatch("AddDepartmentmove", this.addDepartmentmove)
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
          let departmentmoveid=this.addDepartmentmove.id;
          console.log(departmentmoveid);

          this.loading = true;
          console.log("执行了这个请求");
          this.$store.dispatch("GetDepartment", departmentmoveid).then(response => {
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

<style scoped>

</style>
