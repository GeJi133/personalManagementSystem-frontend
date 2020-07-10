<template>
    <div class="page">
        <h1 class="page-title">部门管理</h1>
        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>部门列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >

                    <div class="table-responsive">
                        <table class="table table-striped table-lg mb-0 requests-table">
                            <thead>
                            <tr class="text-muted">
                                <th>部门号</th>
                                <th>部门名</th>
                                <th>部门经理</th>
                                <th>部门业务</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="department in mock.departmentList"
                                    :key="department.dno"
                            >
                                <td ><a href="#" @click="viewDepartment(department.dno)">{{department.dno}}</a> </td>
                                <td><a href="#" @click="viewDepartment(department.dno)">{{department.department}}</a></td>
                                <td><a href="#" >{{department.manage}}</a></td>
                                <td>{{department.business}}</td>

                                <td>
                                <p><b-button variant="info" id="show-info-message" v-b-modal="`model-1${department.dno}`">添加</b-button></p>
                                <b-modal :id="`model-1${department.dno}`"  title="添加">
                                    <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->

                                    <p class="widget-auth-info">
                                        添加基本信息.
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

                                    <router-link class="d-block text-center" to="login">添加</router-link>
                                    <!--            </Widget>-->

                                </b-modal>
                                </td>

                                <td style="width: 80px">

                                    <p><b-button variant="success" id="show-success-message" v-b-modal="`model-2${department.dno}`">修改</b-button></p>
                                    <b-modal :id="`model-2${department.dno}`"  title="修改岗位信息">
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
                                </td>
                                <td >
                                    <p><b-button variant="danger" id="show-error-message" v-b-modal="`model-3${department.dno}`">删除</b-button></p>
                                    <b-modal :id="`model-3${department.dno}`"  title="提示">
                                        <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->

                                        <p class="widget-auth-info">
                                            确定要删除吗？
                                        </p>

                                    </b-modal>
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


    import { Chart } from  'highcharts-vue';
    import mock from './departmentList';

    export default {
        name: 'viewDepartment',
        components: {
            Widget,highcharts: Chart
        },
        data() {
            return {
                mock
            };
        },
        methods: {
            viewDepartment(departmentId){
                console.log(departmentId);
                // alert("dhjakdhk");
                this.$router.push({
                    path: "/manage/viewDepartment",
                    query: { message: "response.data.message" }
                });
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
