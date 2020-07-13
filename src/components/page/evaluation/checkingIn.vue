<template>
    <div class="page">
        <h1 class="page-title">考勤情况</h1>

        <b-row>
            <b-col xs="12">
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>Requests</span></h5>"
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
                                <th>考勤情况</th>
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
                                <td>{{employee.date}}</td>
                                <td>
                                    <button type="button" class="btn btn-success"
                                            v-b-modal="`model-1${employee.id}`">
                                        修改
                                    </button>

                                    <b-modal @ok="handleOk(id)" :id="`model-1${employee.id}`"  title="修改">
                                        <p class="widget-auth-info">
                                            请输入修改信息：
                                        </p>
                                        <form class="mt" ref="form">
                                            <div class="form-group">
                                                <input class="form-control no-border"
                                                       v-model="editCheckingIn.checkingIn"
                                                       placeholder="考勤" />
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
        name: "checkingIn",
        components: {
           // Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock,
                editCheckingIn:{},

            };
        },

        mounted() {
            this.flush();
        },

        methods:{
            handleOk(){
                console.log("执行了这个请求");
                this.$store
                    .dispatch("UpdateCheckingIn", id)
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
