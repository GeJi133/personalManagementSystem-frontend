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
                                    v-for="row in mock.table"
                                    :key="row.id"
                            >
                                <td>{{row.name}}</td>
                                <td>{{row.email}}</td>
                                <td>{{row.product}}</td>
                                <td>{{row.price}}</td>
                                <td>{{row.date}}</td>
                                <td>
                                    <button type="button" class="btn btn-success" v-b-modal.modal-2>
                                        修改
                                    </button>
                                    <button type="button" class="btn btn-warning">
                                        删除
                                    </button>
                                </td>
                            </tr>

                            <b-modal @ok="handleOk(checkingIn)" id="modal-2"  title="修改">
                                <p class="widget-auth-info">
                                    请输入修改信息：
                                </p>
                                <form class="mt" @submit.prevent="login">
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="checkingIn" required type="text" name="checkingIn" placeholder="考勤" />
                                    </div>
                                </form>
                            </b-modal>

                            <tr>
                                <td></td>
                                <td></td>
                                <div style="text-align:center">
                                    <button type="button" class="btn btn-info" v-b-modal.modal-3>
                                        新增
                                    </button>
                                </div>
                            </tr>

                            <b-modal @ok="handleOk(checkingIn)" id="modal-3"  title="新增">
                                <p class="widget-auth-info">
                                    请输入新增信息：
                                </p>
                                <form class="mt" @submit.prevent="login">
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="id" required type="text" name="id" placeholder="工号" />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="checkingIn" required type="text" name="checkingIn" placeholder="考勤" />
                                    </div>
                                </form>
                            </b-modal>

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
            Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock
            };
        },
    }
</script>

<style scoped>

</style>
