<template>
    <div class="page">
        <h1 class="page-title">家庭成员及社会关系</h1>


    </div>
</template>

<script>
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    import { Chart } from  'highcharts-vue';
    import mock from '@/pages/Dashboard/mock';

    export default {
        name: "family",
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
