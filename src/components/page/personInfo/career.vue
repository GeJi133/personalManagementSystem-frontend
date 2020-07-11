<template>
    <div class="page">
        <h1 class="page-title">职业生涯</h1>

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
                                <th>职业生涯</th>
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
                                    <button type="button" class="btn btn-warning" >
                                        删除
                                    </button>
                                </td>
                            </tr>

                            <b-modal @ok="handleOk(career)" id="modal-2"  title="修改">
                                <p class="widget-auth-info">
                                    请输入修改信息：
                                </p>
                                <form class="mt" @submit.prevent="login">
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="career" required type="text" name="career" placeholder="职业生涯" />
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

                            <b-modal @ok="handleOk(career)" id="modal-3"  title="新增">
                                <p class="widget-auth-info">
                                    请输入新增信息：
                                </p>
                                <form class="mt" @submit.prevent="login">
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="id" required type="text" name="id" placeholder="工号" />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control no-border" ref="career" required type="text" name="career" placeholder="职业生涯" />
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
        name: "career",
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
