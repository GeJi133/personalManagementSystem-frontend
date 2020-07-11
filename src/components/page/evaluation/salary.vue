<template>
    <div class="page">
        <h1 class="page-title">工资结算</h1>

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
                                <th>工资结算</th>
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
                                    <button type="button" class="btn btn-success">
                                        修改
                                    </button>
                                    <button type="button" class="btn btn-warning">
                                        删除
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <div style="text-align:center">
                                    <button type="button" class="btn btn-info">新增</button>
                                </div>
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
