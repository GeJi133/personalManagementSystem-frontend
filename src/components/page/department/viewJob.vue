<template>
    <div class="page">
        <h1 class="page-title">部门详情</h1>
        <b-row>
            <b-col xs="12" lg="8">

                <Widget
                        title="<h6>  </h6>"
                        close collapse settings customHeader
                >
                    <b-row>
                        <b-col lg="5" xs="12">
                            <h5 class="m-t-1">岗位名</h5>
                            <p>岗位简介：There are few position options available for notifications. You can click any of
                                them
                                to change notifications position:</p>

                            <h5 class="m-t-1">岗位经理</h5>
                            <p>部门简介：There are few position options available for notifications. You can click any of
                                them
                                to change notifications position:</p>
                        </b-col>
                        <b-col lg="6" xs="12">
                            <h5 class="m-t-1">Notification Types</h5>
                            <p>Different types of notifications for lots of use cases. Custom classes are also
                                supported.</p>
                            <p><b-button variant="info" id="show-info-message" v-b-modal.modal-1>Info
                                Message</b-button></p>
                            <b-modal id="modal-1"  title="修改岗位信息">
                                <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                                <p class="widget-auth-info">
                                    修改岗位基本信息.
                                </p>
                                <form class="mt" ref="form" @submit.stop.prevent="manage(this.jobInfo.jno)">
                                    <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                        {{errorMessage}}
                                    </b-alert>
                                    <div class="form-group">
                                        <input class="form-control no-border"  placeholder="部门名" />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control no-border"  placeholder="岗位描述" />
                                    </div>

                                    <p class="widget-auth-info">or sign in with</p>
                                    <div class="social-buttons">
                                    </div>
                                </form>
                                <p class="widget-auth-info">
                                    Don't have an account? Sign up now!
                                </p>
                                <router-link class="d-block text-center" to="login">Create an Account</router-link>
                                <!--            </Widget>-->

                            </b-modal>
                            <p><b-button variant="danger" id="show-error-message" @click="addErrorNotification">Error
                                Message</b-button></p>
                            <p><b-button
                                    variant="success" id="show-success-message" @click="addSuccessNotification"
                            >Success Message</b-button></p>
                        </b-col>

                    </b-row>
                </Widget>

            </b-col>
            <b-col lg="4" sm="6" xs="12">
                <div class="pb-xlg h-100">
                    <Widget class="h-100 mb-0" title="人数需求" close>
                        <div class="d-flex justify-content-between align-items-center mb-lg">
                            <h2>4,332</h2>
                            <i class="la la-arrow-right text-primary la-lg rotate-315" />
                        </div>
                        <div class="d-flex flex-wrap justify-content-between">
                            <div class="mt">
                                <h6>+830</h6><p class="text-muted mb-0 mr"><small>入职</small></p>
                            </div>
                            <div class="mt">
                                <h6>0.5%</h6><p class="text-muted mb-0"><small>离职</small></p>
                            </div>
                            <div class="mt">
                                <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>比率</small></p>
                            </div>
                        </div>
                    </Widget>
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <Widget
                        title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
                        customHeader settings close
                >
                    <div class="table-resposive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th class="hidden-sm-down">员工编号</th>
                                <th>员工姓名</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="staff in personList" :key="staff.id">
                                <td><a href="#" @click="viewStaff(staff.id)">{{staff.id}}</a></td>
                                <td>
                                    <a href="#" @click="viewStaff(staff.id)">{{staff.name}}</a>
                                </td>


                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="clearfix">
                        <div class="float-right">
                            <b-button variant="default" class="mr-xs" size="sm">Send to...</b-button>
                            <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                                <b-dropdown-item>Clear</b-dropdown-item>
                                <b-dropdown-item>Move ...</b-dropdown-item>
                                <b-dropdown-item>Something else here</b-dropdown-item>
                                <b-dropdown-divider />
                                <b-dropdown-item>Separated link</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <p>Basic table with styled content</p>
                    </div>
                </Widget>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    import ECharts from 'vue-echarts/components/ECharts';
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

    import { Chart } from  'highcharts-vue';
    import {chartData} from './department';
    import { liveChart} from "../../../pages/Charts/mock";

    export default {
        name: 'viewDepartment',
        components: {
            Widget, BigStat,highcharts: Chart,echart: ECharts,Sparklines
        },
        data() {
            return {
                errorMessage: "",
                cd: chartData,
                jobInfo:{
                    jno:'1',
                    dno:'22',
                    description:"这是一个**部门",
                    job:"kdsl"
                },
                ld: liveChart,
                initEchartsOptions: {
                    renderer: 'canvas'
                },
                jobList:chartData.jobList,
                personList:[
                    {
                        id:'1',
                        name:'hdsfkj'
                    },
                    {
                        id:'1',
                        name:'hdsfkj'
                    },
                    {
                        id:'1',
                        name:'hdsfkj'
                    },
                ]
            };
        },
        methods: {
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
    };
</script>

<style>

</style>
