<template>
  <div class="page">
    <h1 class="page-title">试用期管理</h1>
    <b-row>
      <b-col xs="12">
        <Widget
          title="<h5>Support <span class='fw-semi-bold'>试用期管理表</span></h5>"
          bodyClass="widget-table-overflow"
          customHeader
        >
          <div class="table-responsive">
            <table class="table table-striped table-lg mb-0 requests-table">
              <thead>
              <tr class="text-muted">
                <th>试用期编号</th>
                <th>姓名</th>
                <th>所属部门</th>
                <th>所属岗位</th>
                <th>招生时间</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr
                v-for="department in mock.departmentList"
                :key="department.dno"
              >
                <td ><a href="#" >{{department.dno}}</a> </td>
                <td><a href="#" >{{department.department}}</a></td>
                <td><a href="#" >{{department.manage}}</a></td>
                <td>{{department.business}}</td>
                <td>{{department.time}}</td>

                <td>
                  <b-button class="btn btn-success">修改</b-button>

                  <b-button class="btn btn-danger">删除</b-button>
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
    import {Chart} from "highcharts-vue";
    import mock from './confimationcontrol';
    import Widget from '@/components/Widget/Widget';

    import BigStat from '@/pages/Dashboard/components/BigStat/BigStat';

    export default {
        name: "confimationcontrol",
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
