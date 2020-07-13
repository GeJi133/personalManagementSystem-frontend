<template>
  <div class="page">
    <h1 class="page-title">部门管理</h1>
    <b-row>
      <b-col xs="12">
        <b-row></b-row>
        <Widget
                title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
                customHeader
                settings
                close
        >
          <p>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-xs" size="sm" @click="exportToExcel" >导出excel</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="查询条件" right>
                <b-dropdown-item @click="changeToMonth">本月</b-dropdown-item>
                <b-dropdown-item @click="changeToYear">本年</b-dropdown-item>
                <b-dropdown-divider />

              </b-dropdown>
            </div>
          </div>

          <div class="table-resposive">
            <table class="table">
              <thead>
              <tr class="text-muted">
                <th>离职编号</th>
                <th>离职员工</th>
                <th>离职部门</th>
                <th>离职时间</th>
                <th>离职原因</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="leaving in leavingList" :key="leaving.leavingId">
                <td>{{leaving.leavingId}}</td>
                <td>{{leaving.id}}</td>
                <td>{{leaving.department}}</td>
                <td>{{leaving.leavingTime}}</td>
                <td>{{transfer.leavingReason}}</td>
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
  import Widget from "@/components/Widget/Widget";

  export default {
    name: "transfer",
    components: {
      // Widget,
      // highcharts: Chart
    },
    data() {
      return {
        leavingList: [],
        date:"m",
        Date:{
          startDate:"",
          endDate:""
        }
      };
    },
    mounted() {
      this.flush();
    },

    methods: {
      changeToMonth(){
        this.date='m',
                alert("changeToMonth")
        this.flush()
      },
      changeToYear(){
        this.date='y',
                this.flush()
        alert("changeto year")
      },
      flush(){
        if(this.date=="m"){
          this.flushByMonth()
        }
        else{
          this.flushByYear()
        }
      },

      viewDepartment(departmentId) {
        console.log(departmentId);
        this.loading = true;
        console.log("执行了这个请求");
        this.$store.dispatch("GetDepartment", departmentId).then(response => {
          console.log("这里之情了");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);
          if (status == 200) {
            let department = response.data.data[0];
            console.log("department", department);
            // alert("dhjakdhk");
            this.$router.push({
              path: "/manage/viewDepartment",
              query: { department: department }
            });
          } else {
            console.log("请求出错");
            alert("请求出错");
          }
        });
      },
      exportToExcel() {
        //excel数据导出
        require.ensure([], () => {
          const { export_json_to_excel } = require("@/assets/js/Export2Excel");
          const tHeader = ["离职编号", "离职员工", "部门", "离职时间", "离职原因"];
          const filterVal = [
            "leavingId",
            "id",
            "department",
            "leavingTime",
            "leavingReason",
          ];
          const list = this.leavingList;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, "离职月表");
        });
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]));
      },

      flushByMonth() {
        this.loading = true;

        var nowDate = new Date();
        let date = {
          year: nowDate.getFullYear(),
          month: nowDate.getMonth()+1,
          date:nowDate.getDate()
        }
        console.log(date);
        let startDate = date.year + '-0' + date.month + '-00';
        let endDate = date.year + '-' + '0'+date.month + '-' + date.date;
        console.log(startDate,'  ',endDate);
        let dateTime={
          startDate:startDate,
          endDate:endDate
        }

        this.$store.dispatch("GetLeavingsByTime",dateTime).then(response => {
          console.log("这里之情了");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);

          if (status == 200) {
            this.leavingList = response.data.data;
          } else {
            console.log("请求出错");
            alert("请求出错");
          }
        });
      },
      flushByYear() {
        this.loading = true;

        var nowDate = new Date();
        let date = {
          year: nowDate.getFullYear(),
          month: nowDate.getMonth()+1,
          date:nowDate.getDate()
        }
        console.log(date);
        let startDate = date.year + '-00-00';
        let endDate = date.year + '-' + '0'+date.month + '-' + date.date;
        console.log(startDate,'  ',endDate);
        let dateTime={
          startDate:startDate,
          endDate:endDate
        }

        this.$store.dispatch("GetLeavingsByTime",dateTime).then(response => {
          console.log("lalallala");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);

          if (status == 200) {
            console.log("lalallala");
            this.leavingList = response.data.data;
          } else {
            console.log("请求出错");
            alert("请求出错");
          }

        });
      }
    }
    // computed: {
    //
    // }
  };
</script>

<style>
</style>
