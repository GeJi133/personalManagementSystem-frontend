<template>
    <div class="page">
        <h1 class="page-title">家庭成员及社会关系</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>家庭情况</span></h5>"
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
                                    v-for="employee in employees"
                                    :key="employee.id"
                            >
                                <td><a href="#" @click="viewFamily(employee.id)">{{employee.id}}</a></td>
                                <td><a href="#" @click="viewFamily(employee.id)">{{employee.name}}</a></td>
                                <td><a href="#" @click="viewFamily(employee.id)">{{employee.sex}}</a></td>
                                <td><a href="#" @click="viewFamily(employee.id)">{{employee.email}}</a></td>
                                <td><a href="#" @click="viewFamily(employee.id)">{{employee.family}}</a></td>
                                <td>
                                    <b-button variant="default" class="mr-xs" size="sm"
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
<!--                                                       v-model="editFamily.id"-->
<!--                                                       placeholder="工号" />-->
<!--                                            </div>-->
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="employee.family"
                                                       placeholder="家庭情况及社会关系" />
                                            </div>
                                        </form>
                                    </b-modal>

                                    <b-button variant="default" class="mr-xs" size="sm"
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
                employees:[],

            };
        },
        mounted() {
            this.flush();
        },
        methods:{

            viewFamily(id) {
                console.log();
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetFamily",id).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        let department = response.data.data[0];
                        console.log("family", family);
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/family",
                            query: { department: department }
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
                    .dispatch("AddFamily", this.addFamily)
                    .then(response => {
                        console.log("这里执行了");
                        console.log(response);
                        status = response.data.status;
                        // this.loading=false;
                        console.log(response.data.code);
                        if (status == 200) {
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
                    .dispatch("UpdateFamily", employee)
                    .then(response => {
                        console.log("这里执行了");
                        console.log(response);
                        status = response.data.status;
                        // this.loading=false;
                        console.log(response.data.status);
                        if (status == 200) {
                            this.flush();
                            alert("请求成功");
                        } else {
                            console.log("请求出错");
                            alert("更新出错");
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
                        this.employees = response.data.data;
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
            checkId1() {
                let id=this.editFamily.id;
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

            handelOk2(id) {
                console.log(id);
                this.loading = true;
                console.log("执行了这个请求delete");
                this.$store.dispatch("DeleteFamily",id).then(response => {
                    console.log("这里之情了");
                    status = response.data.status;
                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

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

<style scoped>

</style>
