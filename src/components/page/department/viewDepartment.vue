<template>
    <div class="page">
        <h1 class="page-title">部门详情</h1>
        <b-row>
            <b-col xs="12" lg="8">

        <Widget
                title="<h6>  </h6>"
                close collapse settings customHeader
        >
            <b-row>
                <b-col lg="3" xs="12">
                    <h5 class="m-t-1">部门名</h5>
                    <p>部门简介：There are few position options available for notifications. You can click any of
                        them
                        to change notifications position:</p>
                    <div class="location-selector">
                        <div
                                class="bit top left" @click="toggleLocation('top-left')"
                        />
                        <div
                                class="bit top right" @click="toggleLocation('top-right')"
                        />
                        <div
                                class="bit top" @click="toggleLocation('top-center')"
                        />
                        <div
                                class="bit bottom left" @click="toggleLocation('bottom-left')"
                        />
                        <div
                                class="bit bottom right" @click="toggleLocation('bottom-right')"
                        />
                        <div
                                class="bit bottom" @click="toggleLocation('bottom-center')"
                        />
                    </div>
                </b-col>
                <b-col lg="4" xs="12">
                    <h5 class="m-t-1">Notification Types</h5>
                    <p>Different types of notifications for lots of use cases. Custom classes are also
                        supported.</p>
                    <p><b-button variant="info" id="show-info-message" @click="addInfoNotification">Info
                        Message</b-button></p>
                    <p><b-button variant="danger" id="show-error-message" @click="addErrorNotification">Error
                        Message</b-button></p>
                    <p><b-button
                            variant="success" id="show-success-message" @click="addSuccessNotification"
                    >Success Message</b-button></p>
                </b-col>
            </b-row>
        </Widget>
            </b-col>
        <b-col xs="12" lg="4">
            <Widget
                    title="<h5>Highcharts <span class='fw-semi-bold'>Live Chart</span></h5>"
                    close collapse customHeader
            >
                <highcharts :options="ld" ref="highchart"></highcharts>
            </Widget>
        </b-col> </b-row>

    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    import ECharts from 'vue-echarts/components/ECharts';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/chart/themeRiver';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';

    import Highcharts from 'highcharts';
    import exporting from 'highcharts/modules/exporting';
    import exportData from 'highcharts/modules/export-data';

    exporting(Highcharts);
    exportData(Highcharts);
    import Sparklines from '@/components/Sparklines/Sparklines'

    import { Chart } from  'highcharts-vue';
    import mock from '@/pages/Charts/mock';
    import {chartData, liveChart} from "../../../pages/Charts/mock";

    export default {
        name: 'viewDepartment',
        components: {
            Widget, BigStat,highcharts: Chart,echart: ECharts,Sparklines
        },
        data() {
            return {
                cd: chartData,
                ld: liveChart,
                initEchartsOptions: {
                    renderer: 'canvas'
                },
                mock
            };
        },
        methods: {
            // getRandomData() {
            //     const arr = [];
            //
            //     for (let i = 0; i < 25; i += 1) {
            //         arr.push(Math.random().toFixed(1) * 10);
            //     }
            //
            //     return arr;
            // },
            // getRevenueData() {
            //     const data = [];
            //     const seriesCount = 3;
            //     const accessories = ['SMX', 'Direct', 'Networks'];
            //
            //     for (let i = 0; i < seriesCount; i += 1) {
            //         data.push({
            //             label: accessories[i],
            //             data: Math.floor(Math.random() * 100) + 1,
            //         });
            //     }
            //
            //     return data;
            // }
        },
        computed: {
            // donut() {
            //     let revenueData = this.getRevenueData();
            //     let {danger, info, primary} = this.appConfig.colors;
            //     let series = [
            //         {
            //             name: 'Revenue',
            //             data: revenueData.map(s => {
            //                 return {
            //                     name: s.label,
            //                     y: s.data
            //                 }
            //             })
            //         }
            //     ];
            //     return {
            //         chart: {
            //             type: 'pie',
            //             height: 120
            //         },
            //         credits: {
            //             enabled: false
            //         },
            //         title: false,
            //         plotOptions: {
            //             pie: {
            //                 dataLabels: {
            //                     enabled: false
            //                 },
            //                 borderColor: null,
            //                 showInLegend: true,
            //                 innerSize: 60,
            //                 size: 100,
            //                 states: {
            //                     hover: {
            //                         halo: {
            //                             size: 1
            //                         }
            //                     }
            //                 }
            //             }
            //         },
            //         colors: [danger, info, primary],
            //         legend: {
            //             align: 'right',
            //             verticalAlign: 'middle',
            //             layout: 'vertical',
            //             itemStyle: {
            //                 color: '#495057',
            //                 fontWeight: 100,
            //                 fontFamily: 'Montserrat'
            //             },
            //             itemMarginBottom: 5,
            //             symbolRadius: 0
            //         },
            //         exporting: {
            //             enabled: false
            //         },
            //         series
            //     };
            // }
        }
    };
</script>

<style>

</style>
