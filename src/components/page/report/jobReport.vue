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
                <th>调度编号</th>
                <th>调度编号</th>
                <th>调度原因</th>
                <th>调度时间</th>
                <th>原部门</th>
                <th>现部门</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="transfer in transferList" :key="transfer.transferId">
                <td>{{transfer.transferId}}</td>
                <td>{{transfer.id}}</td>
                <td>{{transfer.transferReason}}</td>
                <td>{{transfer.transferTime}}</td>
                <td>{{transfer.departmentBefore}}</td>
                <td>{{transfer.departmentAfter}}</td>
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
        transferList: [],
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
                alert("shaucin")
        this.flush()
      },
      changeToYear(){
        this.date='m',
                this.flush()
        alert("shaucin")
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
          const tHeader = ["调度编号", "员工号", "调度原因", "调度时间", "原部门","现部门"];
          const filterVal = [
            "transferId",
            "id",
            "transferReason",
            "transferTime",
            "departmentBefore",
            "departmentAfter"
          ];
          const list = this.transferList;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, "职位调度月表");
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

        this.$store.dispatch("GetTransfersByTime",dateTime).then(response => {
          console.log("这里之情了");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);

          if (status == 200) {
            this.transferList = response.data.data;
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

        this.$store.dispatch("GetTransfersByTime",dateTime).then(response => {
          console.log("lalallala");
          status = response.data.code;
          this.loading = false;
          console.log(response.data.code);

          if (status == 200) {
            console.log("lalallala");
            this.transferList = response.data.data;
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
