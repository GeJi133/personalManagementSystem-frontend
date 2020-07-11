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
                                <th>部门名</th>
                                <th>部门经理</th>
                                <th>部门业务</th>
                                <th></th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="department in mock.departmentList"
                                    :key="department.dno"
                            >
                                <td ><a href="#" @click="viewDepartment(department.dno)">{{department.dno}}</a> </td>
                                <td><a href="#" @click="viewDepartment(department.dno)">{{department.department}}</a></td>
                                <td><a href="#" >{{department.manage}}</a></td>
                                <td>{{department.business}}</td>

                                <td>
                                    <b-button variant="info" id="show-info-message" @click="addInfoNotification">Info
                                        Message</b-button>
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
    import mock from './departmentList';

    export default {
        name: 'viewDepartment',
        components: {
            Widget, BigStat,highcharts: Chart
        },
        data() {
            return {
                mock
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
            },
            getRandomData() {
                const arr = [];

                for (let i = 0; i < 25; i += 1) {
                    arr.push(Math.random().toFixed(1) * 10);
                }

                return arr;
            },
            getRevenueData() {
                const data = [];
                const seriesCount = 3;
                const accessories = ['SMX', 'Direct', 'Networks'];

                for (let i = 0; i < seriesCount; i += 1) {
                    data.push({
                        label: accessories[i],
                        data: Math.floor(Math.random() * 100) + 1,
                    });
                }

                return data;
            }
        },
        computed: {
            donut() {
                let revenueData = this.getRevenueData();
                let {danger, info, primary} = this.appConfig.colors;
                let series = [
                    {
                        name: 'Revenue',
                        data: revenueData.map(s => {
                            return {
                                name: s.label,
                                y: s.data
                            }
                        })
                    }
                ];
                return {
                    chart: {
                        type: 'pie',
                        height: 120
                    },
                    credits: {
                        enabled: false
                    },
                    title: false,
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: false
                            },
                            borderColor: null,
                            showInLegend: true,
                            innerSize: 60,
                            size: 100,
                            states: {
                                hover: {
                                    halo: {
                                        size: 1
                                    }
                                }
                            }
                        }
                    },
                    colors: [danger, info, primary],
                    legend: {
                        align: 'right',
                        verticalAlign: 'middle',
                        layout: 'vertical',
                        itemStyle: {
                            color: '#495057',
                            fontWeight: 100,
                            fontFamily: 'Montserrat'
                        },
                        itemMarginBottom: 5,
                        symbolRadius: 0
                    },
                    exporting: {
                        enabled: false
                    },
                    series
                };
            }
        }
    };
</script>

<style>

</style>
