<template>
    <div class="page">
        <h1 class="page-title">工资结算</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>工资表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >

                    <div class="table-responsive">
                        <table class="table table-striped table-lg mb-0 requests-table">
                            <thead>
                            <tr class="text-muted">
                                <th>工号</th>
                                <th>姓名</th>
                                <th>性别</th>
                                <th>E-mail</th>
                                <th>基本工资</th>
                                <th>五险一金</th>
                                <th>奖金</th>
                                <th>罚金</th>
                                <th>最终工资</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="employee in employees"
                                    :key="employee.id"
                            >
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.id}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.name}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.sex}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.email}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.basicsalary}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.insurance}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.awardmoney}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.finedmoney}}</a></td>
                                <td><a href="#" @click="viewSalary(employee.id)">{{employee.finalsalary}}</a></td>
                                <td>
                                    <button type="button" class="btn btn-success"
                                            v-b-modal="`model-1${employee.id}`">
                                        修改
                                    </button>

                                    <b-modal @ok="handleOk(employee)" :id="`model-1${employee.id}`"  title="修改">
                                        <p class="widget-auth-info">
                                            请输入修改信息：
                                        </p>
                                        <form class="mt" ref="form">
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editSalary.basicsalary"
                                                       placeholder="基本工资" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editSalary.insurance"
                                                       placeholder="五险一金" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editSalary.awardmoney"
                                                       placeholder="奖金" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editSalary.finedmoney"
                                                       placeholder="罚金" />
                                            </div>
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       @change="checkId()"
                                                       v-model="editSalary.id"
                                                       placeholder="工号" />
                                            </div>
                                        </form>
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
    import mock from '@/components/page/evaluation/mock';

    export default {
        name: "salary",
        components: {
            //Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock,
                salarys:[],
                editSalary:{},
                employees:[],

            };
        },

        mounted() {
            this.flush();
        },

        methods:{

            flush() {
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetSalarys").then(response => {
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
                let id=this.editSalary.id;
                console.log(id);

                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetSalary", id).then(response => {
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

            viewSalary(id) {
                console.log();
                this.loading = true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetSalary",id).then(response => {
                    console.log("这里之情了");
                    status = response.data.code;
                    this.loading = false;
                    console.log(response.data.code);

                    if (status == 200) {
                        let department = response.data.data[0];
                        console.log("salary", salary);
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/salary",
                            query: { salary: salary }
                        });
                    } else {
                        console.log("请求出错");
                        alert("请求出错");
                    }
                });
            },
            handleOk(employee){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("UpdateSalary",employee )
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
        }
    }
</script>

<style scoped>

</style>
