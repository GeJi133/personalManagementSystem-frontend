<template>
    <div class="page">
        <h1 class="page-title">职业生涯</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>职业生涯列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >
                    <b-col offset="10" lg="8" xs="12">
                    <b-col md="4" v-b-modal="`modal-3`" lg="3" xs="12" class="icon-list-item" >
                        <span class="glyphicon glyphicon-plus-sign" />
                        <h8 class="fw-semi-bold">新增职业生涯信息</h8>
                    </b-col>
                    <b-modal @ok="handleOk" :id="`modal-3`"  title="新增">
                        <p class="widget-auth-info">
                            请输入新增信息：
                        </p>
                        <form class="mt" ref="form">
                            <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                {{errorMessage}}
                            </b-alert>
                            <div class="form-group">
                                <input class="form-control no-border"
                                       @change="checkId()"
                                       v-model="addCareer.id"
                                       placeholder="工号" />
                            </div>
                            <div class="form-group">
                                <input class="form-control no-border"
                                       v-model="addCareer.career"
                                       placeholder="职业生涯" />
                            </div>
                        </form>
                    </b-modal>
                    </b-col>

                    <div class="table-responsive">
                        <table class="table table-striped table-lg mb-0 requests-table">
                            <thead>
                            <tr class="text-muted">
                                <th>工号</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>E-mail</th>
                                <th>职业生涯</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="employee in employees"
                                    :key="employee.id"
                            >
                                <td><a href="#" @click="viewCareer(employee.id)">{{employee.id}}</a></td>
                                <td><a href="#" @click="viewCareer(employee.id)">{{employee.name}}</a></td>
                                <td><a href="#" @click="viewCareer(employee.id)">{{employee.sex}}</a></td>
                                <td><a href="#" @click="viewCareer(employee.id)">{{employee.email}}</a></td>
                                <td><a href="#" @click="viewCareer(employee.id)">{{employee.career}}</a></td>
                                <td>
                                    <b-button  variant="default" class="mr-xs" size="sm"
                                            v-b-modal="`model-2${employee.id}`">
                                        修改
                                    </b-button>

                                    <b-modal @ok="handleOk1(employee)" :id="`model-2${employee.id}`"  title="修改">
                                        <p class="widget-auth-info">
                                            工号{{employee.id}}：
                                        </p>
                                        <form class="mt" ref="form">
<!--                                            <div class="form-group">-->
<!--                                                <input class="form-control no-border"-->
<!--                                                       @change="checkId1()"-->
<!--                                                       v-model="editCareer.id"-->
<!--                                                       placeholder="工号" />-->
<!--                                            </div>-->
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="employee.career"
                                                       placeholder="职业生涯" />
                                            </div>
                                        </form>
                                    </b-modal>

                                    <b-button  variant="default" class="mr-xs" size="sm"
                                            v-b-modal="`model-1${employee.id}`">
                                        删除
                                    </b-button>

                                    <b-modal
                                            @ok="handelOk2(employee.id)"
                                            :id="`model-1${employee.id}`"
                                            title="提示"
                                    >
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
    //import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';
    //import { Chart } from  'highcharts-vue';
    import mock from '@/components/page/personInfo/mock';

    export default {
        name: "career",
        components: {
            //Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock,
                employees:[],
                careers:[],
                addCareer:{},
                editCareer:{},
            };
        },

        mounted() {
            this.flush();
        },

        methods:{
            viewCareer(id) {
                console.log();
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetCareer",id).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        let department = response.data.data[0];
                        console.log("career", career);
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/career",
                            query: { career: career }
                        });
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },

            handleOk(){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("AddCareer", this.addCareer)
                    .then(response => {
                        console.log("这里执行了");
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

            handleOk1(employee){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("UpdateCareer", employee)
                    .then(response => {
                        console.log("这里执行了");
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

            flush() {
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetCareers").then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        this.employees = response.data.data;
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },

            checkId() {
                let id=this.addCareer.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetCareer", id).then(response => {
                    console.log("这里执行了");
                    status = response.data.code;

                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 200) {
                        if (response.data.data.length == 0) {
                            this.errorMessage = "该员工不存在";
                            alert("工号不可用");
                        }
                        else {
                            this.errorMessage = "该员工存在";
                        }
                    }
                });
            },

            checkId1() {
                let id=this.editCareer.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetCareer", id).then(response => {
                    console.log("这里执行了");
                    status = response.data.code;

                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 200) {
                        if (response.data.data.length == 0) {
                            this.errorMessage = "该员工不存在";
                            alert("工号不可用");
                        }
                        else {
                            this.errorMessage = "该员工存在";
                        }
                    }
                });
            },

            handelOk2(employeeId) {
                console.log(employeeId);
                this.loading = true;
                console.log("deleteq");
                this.$store.dispatch("DeleteCareer", employeeId).then(response => {
                    console.log("这里之情了");
                    status = response.data.status;
                    this.loading = false;
                    console.log(response.data.code);
                    // console.log(response.data.data);

                    if (status == 200) {
                        alert("删除成功");
                        this.flush();
                    } else {
                        alert("删除失败");
                    }
                });
            }
        }
    }
</script>

<style>
</style>
