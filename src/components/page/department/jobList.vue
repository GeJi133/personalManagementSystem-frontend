<template>
    <div class="page">
        <h1 class="page-title">岗位管理</h1>
        <b-row>

            <b-col xs="12">
                <b-row></b-row>
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>部门列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >
                    <div class="float-left">
                        <b-nav>
                            <b-form class="d-sm-down-none ml-5" inline>
                                <b-form-group>
                                    <b-input-group class="input-group-no-border">
                                        <template v-slot:prepend>
                                            <b-input-group-text @click="search"  ><i class="la la-search"/></b-input-group-text>
                                        </template>
                                        <input
                                                class="form-control no-border"
                                                v-model="keyWord"
                                                placeholder="部门业务"
                                        />
                                    </b-input-group>
                                </b-form-group>
                            </b-form>
                        </b-nav>
                    </div>


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
                            <td>
                                <h3 v-if="jobList.length==0">暂时无数据</h3>
                            </td>
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
    import Widget from "@/components/Widget/Widget";

    import { Chart } from "highcharts-vue";
    import mock from "./departmentList";

    export default {
        name: "jobllIST",
        components: {
            // Widget,
            // highcharts: Chart
        },
        data() {
            return {
                // mock,
                jobList: [],
                value: "fdsjk",
                selected: null,
                options: [
                    { value: "kk", text: "kk" },
                    { value: "a", text: "ll" }
                ],
                editJob: {},
                addJob: {},
                departmentOptions:[

                ],
                errorMessage: "",
                keyWord:"关键字"
            };
        },
        mounted() {
            this.flush();
            this.getDepartmentList();
        },

        methods: {
            search(){
                this.loading = true;
                console.log("执行了搜索",this.keyWord);
                // this.$store.dispatch("GetDepartmentsByJnoKey",this.keyWord).then(response => {
                //   console.log("这里之情了");
                //   status = response.data.code;
                //   this.loading = false;
                //   console.log(response.data.code);
                //
                //   if (status == 200) {
                //     this.departments = response.data.data;
                //   } else {
                //     console.log("请求出错");
                //     alert("请求出错");
                //   }
                // });

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetJobByDeKey",this.keyWord).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        this.jobList =response.data.data;
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
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

            flush() {
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetJobs").then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.code);

                    if (status == 200) {
                        this.jobList = response.data.data;
                        console.log("jobList",this.jobList);
                            console.log("jobList",this.jobList[0].jno)
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
            }
        }
        // computed: {
        //
        // }
    };
</script>

<style>
</style>
