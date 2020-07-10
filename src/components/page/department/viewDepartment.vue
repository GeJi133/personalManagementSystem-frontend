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
                    <h5 class="m-t-1">部门名</h5>
                    <p>部门简介：There are few position options available for notifications. You can click any of
                        them
                        to change notifications position:</p>
                    <h5 class="m-t-1">部门经理</h5>
                    <p>部门简介：There are few position options available for notifications. You can click any of
                        them
                        to change notifications position:</p>
                </b-col>

                <b-col lg="6" xs="12">
                    <h5 class="m-t-1">Notification Types</h5>
                    <p>Different types of notifications for lots of use cases. Custom classes are also
                        supported.</p>
                    <div>
                        <b-button size="sm"    class="auth-btn mb-3 blue-button"  v-b-modal.modal-1>添加岗位</b-button>

                        <b-modal id="modal-1"  title="添加新部门">
                            <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                            <p class="widget-auth-info">
                                修改部门基本信息.
                            </p>
                            <form class="mt" ref="form" @submit.stop.prevent="manage(this.department.dno)">
                                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                    {{errorMessage}}
                                </b-alert>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.department" placeholder="部门名" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.description" placeholder="部门名" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.manage" placeholder="经理" />
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
                    </div>
                    <div>
                        <b-button size="sm"    class="auth-btn mb-3 green-button"  v-b-modal.modal-2>修改信息</b-button>

                        <b-modal id="modal-2"title="修改部门信息">

                            <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                            <p class="widget-auth-info">
                                修改部门基本信息.
                            </p>
                            <form class="mt" ref="form" @submit.stop.prevent="manage(this.department.dno)">
                                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                    {{errorMessage}}
                                </b-alert>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.department" placeholder="部门名" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.description" placeholder="部门名" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border" v-model="department.manage" placeholder="经理" />
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
                    </div>
                    <b-button class="light-blue-button" @click="showMsgBoxOne">删除岗位</b-button>
                </b-col>
            </b-row>
        </Widget>
            </b-col>
        <b-col xs="12" lg="4">
            <Widget
                    title="<h5>Highcharts <span class='fw-semi-bold'>Live Chart</span></h5>"
                    close collapse customHeader
            >
                <highcharts :options="ld" ref="highchart"></highcharts>
            </Widget>
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
                                <th class="hidden-sm-down">岗位编号</th>
                                <th>所属部门</th>
                                <th>job</th>
                                <th class="hidden-sm-down">描述</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="job in jobList" :key="job.jno">
                                <td><a href="#" @click="viewJob(job.dno)">{{job.dno}}</a></td>
                                <td>
                                    <a href="#" @click="viewJob(job.dno)">{{job.dno}}</a>
                                </td>
                                <td class="text-semi-muted">
                                    {{job.job}}
                                </td>
                                <td>
                                    <p class="mb-0">
                                        <small>
                                            <span class="fw-semi-bold" >描述:</span>
                                            <span class="text-muted">&nbsp; {{job.description}}</span>
                                        </small>
                                    </p>
                                    <p>
                                        <small>
                                            <span class="fw-semi-bold">Dimensions:</span>
                                            <span class="text-muted">&nbsp; ll</span>
                                        </small>
                                    </p>
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

    import {department} from './department';
    import { liveChart} from "../../../pages/Charts/mock";

    export default {
        name: 'viewDepartment',
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
                    path: "/manage/viewJob",
                    query: { message: "response.data.message" }
                });
            },
            handlOk(dno){
                bvModalEvt.preventDefault();
                this.manage(dno);
            },
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
    };
</script>

<style>

</style>
