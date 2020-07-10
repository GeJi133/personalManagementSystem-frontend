<template>
    <div class="page">
        <h1 class="page-title">部门管理</h1>
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
                                <th>部门号</th>
                                <th>调动类型</th>
                                <th>调度员工</th>
                                <th>调度时间</th>
                                <th>调度原因</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr >
                                <td rowspan="4"><a href="#"  >report.dno</a> </td>
                                <td rowspan="2"><a href="#"  >离职</a> </td>
                                <td ><a href="#"  >leaving.leavingId</a> </td>
                                <td ><a href="#"  >leaving.leavinftime</a> </td>
                                <td ><a href="#" >leaving.leavinfreason</a> </td>

                                <td :rowspan="2"><a href="#"  >离职</a> </td>


                                <td ><a href="#" >{{entry.leavingId</a> </td>
                                <td ><a href="#"  >{{entry.leavinftime</a> </td>
                                <td ><a href="#"  >{{entry.leavinfreason</a> </td>

                            </tr>
                            <!--                            <tr v-for="report in reportList">-->
                            <!--                                <td :rowspan="report.leavingStaff.length+report.entryStadff.length"><a href="#" @click="viewDepartment(report.dno)" >{{report.dno}}</a> </td>-->
                            <!--                                <td :rowspan="report.leavingStaff.length"><a href="#" @click="viewDepartment(report.dno)" >离职</a> </td>-->
                            <!--                                <span v-for="leaving in report.leavingStaff">-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{leaving.leavingId}}</a> </td>-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{leaving.leavinftime}}</a> </td>-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{leaving.leavinfreason}}</a> </td>-->
                            <!--</span>-->
                            <!--                                <td :rowspan="report.entryStadff.length"><a href="#" @click="viewDepartment(report.dno)" >离职</a> </td>-->

                            <!--                                <span v-for="entry in report.entryStaff">-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{entry.leavingId}}</a> </td>-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{entry.leavinftime}}</a> </td>-->
                            <!--                                <td ><a href="#" @click="viewDepartment(report.dno)" >{{entry.leavinfreason}}</a> </td>-->
                            <!--</span>-->
                            <!--                            </tr>-->
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
    import mock from './mock';

    export default {
        name: 'departmentReport',
        components: {
            Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                reportList:mock.departmentReportList
            };
        },
        methods: {
            viewDepartment(departmentId){
                console.log(departmentId);
                // alert("dhjakdhk");
                this.$router.push({
                    path: "/app/viewDepartment",
                    query: { message: "response.data.message" }
                });
            }
        },
        computed: {

        }
    };
</script>

<style>

</style>
