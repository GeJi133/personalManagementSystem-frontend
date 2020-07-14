<template>
    <div class="page">
        <h1 class="page-title">外语能力</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>语言能力列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >

                    <b-col offset="10" lg="8" xs="12">
                        <b-col md="4" v-b-modal="`modal-3`" lg="3" xs="12" class="icon-list-item" >
                            <span class="glyphicon glyphicon-plus-sign" />
                            <h8 class="fw-semi-bold">新增外语能力信息</h8>
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
                                           v-model="addLanguage.id"
                                           placeholder="工号" />
                                </div>
                                <div class="form-group">
                                    <div>
                                        <p class="widget-auth-info">设置外语等级：</p>
                                        <b-form-select
                                                class="form-control no-border"
                                                v-model="addLanguage.language"

                                                :options="languageOptions"
                                        ></b-form-select>

                                    </div>
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
                                <th>外语能力</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="employee in employees"
                                    :key="employee.id"
                            >
                                <td><a href="#" @click="viewLanguage(employee.id)">{{employee.id}}</a></td>
                                <td><a href="#" @click="viewLanguage(employee.id)">{{employee.name}}</a></td>
                                <td><a href="#" @click="viewLanguage(employee.id)">{{employee.sex}}</a></td>
                                <td><a href="#" @click="viewLanguage(employee.id)">{{employee.email}}</a></td>
                                <td><a href="#" @click="viewLanguage(employee.id)">{{employee.language}}</a></td>
                                <td>
                                    <b-button  variant="default" class="mr-xs" size="sm"
                                            v-b-modal="`model-2${employee.id}`">
                                        修改
                                    </b-button>

                                    <b-modal @ok="handleOk1(employee)" :id="`model-2${employee.id}`"  title="修改">
                                        <p class="widget-auth-info">
                                           工号： {{employee.id}}：
                                        </p>

                                        <div class="form-group">
                                            <div>
                                                <p class="widget-auth-info">设置外语等级：</p>
                                                <b-form-select
                                                        class="form-control no-border"
                                                        v-model="employee.language"
                                                        :options="languageOptions"
                                                ></b-form-select>

                                            </div>
                                        </div>


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
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    import { Chart } from  'highcharts-vue';
    import mock from '@/components/page/personInfo/mock';

    export default {
        name: "language",
        components: {
            //Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock,
                languages:[],
                addLanguage:{},
                editLanguage:{},
                employees:[],
                languageOptions:[
                    {value: "CET4", text: "CET4"},
                    {value: "CET6", text: "CET6"},
                    {value: "TEM4", text: "TEM8"}
                ]
            };
        },

        mounted() {
            this.flush();
        },

        methods:{

            viewLanguage(id) {
                console.log();
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetLanguage",id).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        let department = response.data.data[0];
                        console.log("career", career);
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/language",
                            query: { language: language }
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
                    .dispatch("AddLanguage", this.addLanguage)
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
                    .dispatch("UpdateLanguage", employee)
                    .then(response => {
                        console.log("这里执行了");
                        console.log(response);
                        status = response.data.status;
                        // this.loading=false;
                        console.log(response.data.code);
                        if (status == 200) {
                            this.flush();
                            alert("更新成功");
                        } else {
                            console.log("请求出错");
                            alert("请求出错");
                        }
                    });
            },

            flush() {
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetLanguages").then(response => {
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
                let id=this.addLanguage.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetLanguage", id).then(response => {
                    console.log("这里执行了");
                    status = response.data.status;

                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 200) {
                        if (response.data.data.length == 0) {
                            this.errorMessage = "已有改员工信息";
                        }
                        else {
                            this.errorMessage = "该员工存在";
                        }
                    }
                });
            },
            checkId1() {
                let id=this.editLanguage.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetLanguage", id).then(response => {
                    console.log("这里执行了");
                    status = response.data.status;

                    this.loading = false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if (status == 200) {
                        if (response.data.data.length == 0) {
                            this.errorMessage = "该员工不存在";
                        }
                        else {
                            this.errorMessage = "该员工存在";
                        }
                    }
                });
            },

            handelOk2(id) {
                console.log("id",id);
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("DeleteLanguage", id).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
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
