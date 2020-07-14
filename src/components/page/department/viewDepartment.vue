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
                    <h5 class="m-t-1">{{department.department}}</h5>
                    <p>部门简介：{{department.business}}</p>
                    <h5 class="m-t-1">部门经理</h5>
                    <p>{{department.manager}}</p>
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
<!--        <b-col xs="12" lg="4">-->
<!--            <Widget-->
<!--                    title="<h5>Highcharts <span class='fw-semi-bold'>Live Chart</span></h5>"-->
<!--                    close collapse customHeader-->
<!--            >-->
<!--                <highcharts :options="ld" ref="highchart"></highcharts>-->
<!--            </Widget>-->
<!--        </b-col>-->
        </b-row>
        <b-row>

            <b-col xs="12">
                <b-row></b-row>
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>部门列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >
                    <b-col offset="10" lg="8" xs="12">
                        <b-col md="4" v-b-modal="`model-92`" lg="3" xs="12" class="icon-list-item">
                            <span class="glyphicon glyphicon-plus-sign" />
                            <h8 class="fw-semi-bold">添加岗位</h8>
                        </b-col>
                        <b-modal @ok="handleOk1" :id="`model-92`" title="添加岗位">
                            <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->

                            <form class="mt" ref="form">
                                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">{{errorMessage}}</b-alert>
                                <div class="form-group">
                                    <p class="widget-auth-info">岗位编号：</p>
                                    <input
                                            @change="checkJno()"
                                            class="form-control no-border"
                                            v-model="addJob.jno"
                                            placeholder="部门名"
                                    />
                                </div>
                                <!--       -->
                                <div class="form-group">
                                    <p class="widget-auth-info">岗位名称：</p>
                                    <input
                                            class="form-control no-border"
                                            v-model="addJob.job"
                                            placeholder="部门名"
                                    />
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p class="widget-auth-info">所属部门：</p>
                                        <b-form-select
                                                class="form-control no-border"
                                                v-model="addJob.dno"
                                                :options="departmentOptions"
                                        ></b-form-select>
                                        <div class="mt-3">
                                            Selected:
                                            <strong>{{ selected }}</strong>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <p class="widget-auth-info">部门业务：</p>
                                    <input
                                            class="form-control no-border"
                                            v-model="addJob.description"
                                            placeholder="部门业务"
                                    />
                                </div>


                            </form>
                        </b-modal>
                    </b-col>

                    <div class="table-responsive">
                        <table class="table table-striped table-lg mb-0 requests-table">
                            <thead>
                            <tr class="text-muted">
                                <th>岗位编号</th>
                                <th>岗位名称</th>
                                <!--                                <th>部门经理</th>-->
                                <th>岗位业务</th>
                                <th>岗位所属部门</th>

                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="job in jobList" :key="job.jno">
                                <td>
                                    <a href="#" @click="viewJob(job.jno)">{{job.jno}}</a>
                                </td>
                                <td>
                                    <a href="#" @click="viewJOb(job.jno)">{{job.job}}</a>
                                </td>
                                <!--                                <td>-->

                                <!--                                    <a v-if="department.manager" href="#">{{department.manager}}</a>-->
                                <!--                                    <a v-else >暂未设置</a>-->
                                <!--                                </td>-->
                                <td>{{job.description}}</td>
                                <td>{{job.dno}}</td>



                                <td style="width: 80px">
                                    <p>
                                        <b-button
                                                variant="default" class="mr-xs" size="sm"
                                                v-b-modal="`model-2${job.jno}`"
                                        >修改</b-button>
                                    </p>
                                    <b-modal @ok="handleOk(job)" :id="`model-2${job.jno}`" title="修改部门信息">
                                        <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                                        岗位编号：
                                        <p class="widget-auth" v-model="job.dno">{{job.dno}}</p>
                                        <form class="mt" ref="form" >
                                            <!--                                            <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">-->
                                            <!--                                                {{errorMessage}}-->

                                            <!--                                            </b-alert>-->
                                            <div class="form-group">
                                                <p class="widget-auth-info">岗位名称：</p>
                                                <input
                                                        class="form-control no-border"
                                                        v-model="job.job"
                                                        placeholder="部门名"
                                                />
                                            </div>

                                            <div class="form-group">
                                                <p class="widget-auth-info">岗位业务：</p>
                                                <input
                                                        class="form-control no-border"
                                                        v-model="job.description"
                                                        placeholder="部门业务"
                                                />
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <p class="widget-auth-info">所在部门：</p>
                                                    <b-form-select
                                                            class="form-control no-border"
                                                            v-model="job.dno"
                                                            :options="departmentOptions"
                                                    ></b-form-select>
                                                    <div class="mt-3">
                                                        Selected:
                                                        <strong>{{ selected }}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </b-modal>
                                </td>
                                <td>
                                    <p>
                                        <b-button
                                                variant="default" class="mr-xs" size="sm"
                                                v-b-modal="`model-3${job.jno}`"
                                        >删除</b-button>
                                    </p>
                                    <b-modal
                                            @ok="deleteJob(job.jno)"
                                            :id="`model-3${job.jno}`"
                                            title="提示"
                                    >
                                        <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                                        <p class="widget-auth-info">确定要删除吗？</p>
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
    // import Widget from '@/components/Widget/Widget';
    //
    // import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';
    //
    // import ECharts from 'vue-echarts/components/ECharts';
    // import 'echarts/lib/chart/line';
    // import 'echarts/lib/chart/themeRiver';
    // import 'echarts/lib/component/tooltip';
    // import 'echarts/lib/component/legend';

    // import Highcharts from 'highcharts';
    // import exporting from 'highcharts/modules/exporting';
    // import exportData from 'highcharts/modules/export-data';

    // exporting(Highcharts);
    // exportData(Highcharts);
    // import Sparklines from '@/components/Sparklines/Sparklines'
    //
    // import { Chart } from  'highcharts-vue';
    //
    // import {department} from './department';
    // import { liveChart} from "../../../pages/Charts/mock";

    export default {
        name: 'viewDepartment',
        components: {
            // Widget, BigStat,highcharts: Chart,echart: ECharts,Sparklines
        },


        data() {
            return {
                // cd: department,
                // ld: liveChart,
                // initEchartsOptions: {
                //     renderer: 'canvas'
                // },
                // jobList:department.jobList,
                department:[],
                jobList:[],
                selected: null,
                options: [
                    { value: "kk", text: "kk" },
                    { value: "a", text: "ll" }
                ],
                editJob: {},
                addJob: {},
                departmentOptions:[

                ],
                errorMessage: ""

            };
        },
        created(){
            this.department=this.$route.query.department;
            console.log(this.department);
            // this.department=this.department.findIndex(0);
            console.log("departmenr",this.department);
            this.flush();
        },
        methods: {
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
            viewJob(jno) {
                console.log(jno);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetJob", jno).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        let job = response.data.data[0];
                        console.log("department", job);
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/viewJob",
                            query: { job: job }
                        });
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },
            getDepartmentList(){
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetDepartments").then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        var departments = response.data.data;


                        for (var i=0;i<departments.length;i++)
                        {
                            console.log(departments[i].dno)
                            console.log(departments[i].dno)
                            var option={
                                value:departments[i].dno,
                                text:departments[i].department
                            }
                            this.departmentOptions.push(option);

                        }
                        console.log("options",this.departmentOptions)
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },

            handleOk(job) {
                console.log("zhieshoa");
                // this.loading=true;
                console.log("执行了这个请求");
                this.$store
                    .dispatch("UpdateJob", job)
                    .then(response => {
                        console.log("这里之情了");
                        console.log(response);
                        status = response.data.code;

                        // this.loading=false;
                        console.log(response.data.code);
                        if (status == 204) {
                            this.flush();
                            alert("请求成功");
                        } else {
                            console.log("请求出错");
                            alert("请求出错");
                        }
                    });
            },
            handleOk1() {
                console.log("zhieshoa");
                // this.loading=true;
                console.log("执行了这个请求");
                this.$store
                    .dispatch("AddJob", this.addJob)
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
            checkJno() {
                let departmentId=this.addJob.dno;
                console.log(departmentId);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetJob", this.addJob.jno).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;

                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 200) {
                        if (response.data.data.length == 0) {
                            this.errorMessage = "岗位编号可用";

                        }
                        else {
                            this.errorMessage = "编号重复";
                        }
                    }
                });
            },
            deleteJob(jno) {
                console.log(jno);
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("DeleteJob", jno).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 204) {
                        alert("删除成功");
                        this.flush();
                    } else {
                        alert("删除失败");
                    }
                });
            },

            flush(){
                this.loading=true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetJobsByDno",this.department.dno).then(response=>{
                    console.log("dedaodshinage岗位")

                    status=response.data.code;
                    this.loading=false;
                    console.log(response.data.code);

                    if(status==200){
                        this.jobList=response.data.data;
                    }

                    else{
                        console.log("请求出错");
                        alert("请求出错");
                    }
                })

            }

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
