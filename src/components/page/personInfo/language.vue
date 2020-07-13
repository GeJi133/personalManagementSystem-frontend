<template>
    <div class="page">
        <h1 class="page-title">外语能力</h1>

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
                            <h8 class="fw-semi-bold">新增外语能力信息</h8>
                        </b-col>
                        <b-modal @ok="handleOk(language)" :id="`modal-3`"  title="新增">
                            <p class="widget-auth-info">
                                请输入新增信息：
                            </p>
                            <form class="mt" >
                                <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                    {{errorMessage}}
                                </b-alert>
                                <div class="form-group">
                                    <input class="form-control no-border" ref="id" required type="text" name="id" placeholder="工号" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control no-border" ref="language" required type="text" name="language" placeholder="外语能力" />
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
                                    v-for="employee in mock.table"
                                    :key="employee.id"
                            >
                                <td>{{employee.id}}</td>
                                <td>{{employee.name}}</td>
                                <td>{{employee.sex}}</td>
                                <td>{{employee.email}}</td>
                                <td>{{employee.language}}</td>
                                <td>
                                    <button type="button" class="btn btn-success" v-b-modal.modal-2>
                                        修改
                                    </button>
                                    <button type="button" class="btn btn-warning">
                                        删除
                                    </button>
                                </td>
                            </tr>

                            <b-modal @ok="handleOk(language)" id="modal-2"  title="修改">
                                <p class="widget-auth-info">
                                    请输入修改信息：
                                </p>
                                <form class="mt" @submit.prevent="login">
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="language" required type="text" name="language" placeholder="外语能力" />
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
    import mock from '@/components/page/personInfo/mock';

    export default {
        name: "language",
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
