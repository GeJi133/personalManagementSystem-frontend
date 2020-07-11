<template>
    <div>
      <h3>部门调动管理</h3>
      <b-col lg="3" sm="6" xs="12" style="display: inline-block">
        <div class="pb-xlg h-100">
          <div>
            <b-button size="sm" class="auth-btn mb-3 btn-success"  v-b-modal.modal-1>部门调动申请</b-button>

            <b-modal id="modal-1"  title="调动申请表" style="margin-left: 40%">

              <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
              <p class="widget-auth-info">
                部门调动
              </p>
              <form class="mt" @submit.prevent="submit" >
                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                  {{errorMessage}}
                </b-alert>
                <div class="form-group">
                  <p>职工编号：</p>
                  <input class="form-control no-border" ref="email" required type="text" name="email" placeholder="编号"/>
                </div>
                <div class="form-group">
                  <p>姓名：</p>
                  <input class="form-control no-border" ref="password" required type="text" name="password" placeholder="你的名字"/>
                </div> <div class="form-group">
                <p>性别：</p>
                <input class="form-control no-border" ref="password" required type="text" name="password" placeholder="你的性别"/>
              </div>
                <div class="form-group">
                  <p>原隶属部门：</p>
                  <select class="form-control no-border">
                    <option>行政部</option>
                    <option>财务部</option>
                    <option>营销部</option>
                    <option>人力资源部</option>

                  </select>
                </div>
                <div class="form-group">
                  <p>申请转换的部门：</p>
                  <select class="form-control no-border">
                    <option>行政部</option>
                    <option>财务部</option>
                    <option>营销部</option>
                    <option>人力资源部</option>
                  </select>
                </div>
                <div class="form-group">
                  <p>申请理由：</p>
                  <textarea  class="form-control no-border" style="height: 100px" placeholder="不得少于200字"></textarea>
                </div>
                <div class="form-group">
                  <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">submit</b-button>
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
          department:department.department
        };
      },
      methods: {
        viewJob(dno){
          console.log(dno);
          // alert("dhjakdhk");
          this.$router.push({
            path: "/app/viewJob",
            query: { message: "response.data.message" }
          });
        },
        handlOk(dno){
          bvModalEvt.preventDefault();
          this.manage(dno);
        },
        // eslint-disable-next-line no-unused-vars
        manage(dno){
          this.$nextTick()
        },
        addJob(dno){

        },
        deleteDepartment(dno){

        },
        showMsgBoxOne() {
          this.boxOne = ''
          this.$bvModal.msgBoxOk('Action completed')
            .then(value => {

            })
            .catch(err => {
              // An error occurred
            })
        },

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

<style scoped>

</style>
