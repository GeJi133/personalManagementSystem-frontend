<template>
    <div class="page">
        <h1 class="page-title">家庭成员及社会关系</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >
                    <b-col offset="10" lg="8" xs="12">
                        <b-col md="4" v-b-modal="`modal-3`" lg="3" xs="12" class="icon-list-item" >
                            <span class="glyphicon glyphicon-plus-sign" />
                            <h8 class="fw-semi-bold">新增家庭情况信息</h8>
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
                                    <input cclass="form-control no-border"
                                           @change="checkId()"
                                           v-model="addFamily.id"
                                           placeholder="工号" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border"
                                           v-model="addFamily.family"
                                           placeholder="家庭情况及社会关系" />
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
                                <th>家庭成员及社会关系</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="employee in mock.employee"
                                    :key="employee.id"
                            >
                                <td>{{employee.id}}</td>
                                <td>{{employee.name}}</td>
                                <td>{{employee.sex}}</td>
                                <td>{{employee.email}}</td>
                                <td>{{employee.family}}</td>
                                <td>
                                    <button type="button" class="btn btn-success"
                                            v-b-modal="`model-2${employee.id}`">
                                        修改
                                    </button>

                                    <b-modal @ok="handleOk(family)" :id="`model-2${employee.id}`"  title="修改">
                                        <p class="widget-auth-info">
                                            请输入修改信息：
                                        </p>
                                        <form class="mt" ref="form">
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editFamily.family"
                                                       placeholder="家庭情况及社会关系" />
                                            </div>
                                        </form>
                                    </b-modal>

                                    <button type="button" class="btn btn-warning"
                                            v-b-modal="`model-1${employee.id}`">
                                        删除
                                    </button>

                                    <b-modal
                                            @ok="deleteLanguage(employee.id)"
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
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    import { Chart } from  'highcharts-vue';
    import mock from '@/components/page/personInfo/mock';

    export default {
        name: "family",
        components: {
            //Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock,
                familys:[],
                addFamily:{},
                editFamily:{},

            };
        },
        mounted() {
            this.flush();
        },
        methods:{
            handleOk(){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("AddFamily", this.addFamily)
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

            handleOk1(){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("UpdateFamily", employee)
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
                this.$store.dispatch("GetFamilys").then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        this.careers = response.data.data;
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },

            checkId() {
                let id=this.addFamily.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetFamily", id).then(response => {
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

            deleteLanguage() {
                console.log(id);
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("DeleteLanguage", id).then(response => {
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
    }
</script>

<style scoped>

</style>
