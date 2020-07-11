<template>
    <div class="page">
        <h1 class="page-title">部门管理</h1>
        <b-row>
            <a @click="click()">djskfdjlfd</a>
            <b-col xs="12">
                <b-row></b-row>
                <Widget
                        title="<h5>Support <span class='fw-semi-bold'>部门列表</span></h5>"
                        bodyClass="widget-table-overflow"
                        customHeader
                >
                    <b-col offset="10" lg="8" xs="12">

                        <b-col md="4" v-b-modal="`model-20`" lg="3" xs="12" class="icon-list-item"><span class="glyphicon glyphicon-plus-sign " /><h8 class="fw-semi-bold ">添加岗位</h8> </b-col>
                        <b-modal @ok="handleOk1" :id="`model-20`"  title="添加部门">
                            <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->

                                                        <form class="mt" ref="form" >
                                                                                                        <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                                                                                                            {{errorMessage}}

                                                                                                        </b-alert>
                                                            <div class="form-group">
                                                                <p class="widget-auth-info">
                                                                    部门编号：
                                                                </p>
                                                                <input @change="checkDno(dno)" class="form-control no-border" v-model="addDepartment.dno"  placeholder="部门名" />
                                                            </div>
<!--       -->
                                                            <div class="form-group">
                                                                <p class="widget-auth-info">
                                                                    部门名称：
                                                                </p>
                                                                <input class="form-control no-border" v-model="addDepartment.department"  placeholder="部门名" />
                                                            </div>

                                                            <div class="form-group">
                                                                <p class="widget-auth-info">
                                                                    部门业务：
                                                                </p>
                                                                <input class="form-control no-border" v-model="addDepartment.business"  placeholder="部门业务" />
                                                            </div>

                                                            <div class="form-group">
                                                                <div>
                                                                    <p class="widget-auth-info">
                                                                        部门经理：
                                                                    </p>
                                                                    <b-form-select class="form-control no-border"  v-model="addDepartment.manager" :options="options"></b-form-select>
                                                                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                                                                </div>
                                                            </div>

                                                        </form>
                        </b-modal>
                    </b-col>



                    <div class="table-responsive">

                        <table class="table table-striped table-lg mb-0 requests-table">
                            <thead>
                            <tr class="text-muted">
                                <th>部门号</th>
                                <th>部门名</th>
                                <th>部门经理</th>
                                <th>部门业务</th>

                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                    v-for="department in departments"
                                    :key="department.dno"

                            >
                                <td ><a href="#" @click="viewDepartment(department.dno)">{{department.dno}}</a> </td>
                                <td><a href="#" @click="viewDepartment(department.dno)">{{department.department}}</a></td>
                                <td><a href="#" >{{department.manager}}</a></td>
                                <td>{{department.business}}</td>


                                <td style="width: 80px">

                                    <p>

                                            <b-button  variant="default" class="mr-xs" size="sm" v-b-modal="`model-2${department.dno}`">修改</b-button></p>
                                    <b-modal @ok="handleOk(department)" :id="`model-2${department.dno}`"  title="修改部门信息">
                                        <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                                        部门编号：
                                        <p class="widget-auth" v-model="editDepartment.dno">
                                            {{department.dno}}
                                        </p>
                                        <form class="mt" ref="form" @submit.stop.prevent="manage(this.jobInfo.jno)">
<!--                                            <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">-->
<!--                                                {{errorMessage}}-->

<!--                                            </b-alert>-->
                                            <div class="form-group">
                                                <p class="widget-auth-info">
                                                    部门名称：
                                                </p>
                                                <input class="form-control no-border" v-model="department.department"  placeholder="部门名" />
                                            </div>

                                            <div class="form-group">
                                                <p class="widget-auth-info">
                                                    部门业务：
                                                </p>
                                                <input class="form-control no-border" v-model="department.business"  placeholder="部门业务" />
                                            </div>

                                            <div class="form-group">
                                                <div>
                                                    <p class="widget-auth-info">
                                                        部门经理：
                                                    </p>
                                                    <b-form-select class="form-control no-border"  v-model="department.manager" :options="options"></b-form-select>
                                                    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                                                </div>
                                            </div>

                                        </form>
                                    </b-modal>
                                </td>
                                <td >
                                    <p><b-button variant="default" class="mr-xs" size="sm" v-b-modal="`model-3${department.dno}`">删除</b-button></p>
                                    <b-modal @ok="deleteDepartment(department.dno)" :id="`model-3${department.dno}`"  title="提示">
                                        <!--            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>-->
                                        <p class="widget-auth-info">
                                            确定要删除吗？
                                        </p>
                                    </b-modal>
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


    import { Chart } from  'highcharts-vue';
    import mock from './departmentList';

    export default {
        name: 'viewDepartment',
        components: {
            Widget,highcharts: Chart
        },
        data() {
            return {
                mock,
                departments:[],
                value:"fdsjk",
                selected: null,
                options: [
                    { value: "kk", text: 'kk' },
                    { value: 'a', text: 'll' },
                ],
                editDepartment:{},
                addDepartment:{},
                errorMessage:""
            };
        },
        mounted(){
            this.flush();
        },

        methods: {
            viewDepartment(departmentId){
                console.log(departmentId);

                this.loading=true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetDepartment",departmentId).then(response=>{
                    console.log("这里之情了")
                    status=response.data.code;
                    this.loading=false;
                    console.log(response.data.code);

                    if(status==200){
                        let department=response.data.data[0];
                        console.log("department",department)
                        // alert("dhjakdhk");
                        this.$router.push({
                            path: "/manage/viewDepartment",
                            query: { "department":department}
                        });
                    }
                    else{
                        console.log("请求出错");
                        alert("请求出错");
                    }
                })
            },

        flush(){
            this.loading=true;
            console.log("执行了这个请求");
            this.$store.dispatch("GetDepartments").then(response=>{
                console.log("这里之情了")
                status=response.data.code;
                this.loading=false;
                console.log(response.data.code);

                if(status==200){
                    this.departments=response.data.data;
                }

                else{
                    console.log("请求出错");
                    alert("请求出错");
                }
            })
        },
            changeEditDepartment(department){
                this.editDepartment=department;
            },
            handleOk(department) {
                console.log("zhieshoa");
                    // this.loading=true;
                    console.log("执行了这个请求");
                    this.$store.dispatch("UpdateDepartment",department).then(response=>{
                        console.log("这里之情了")
                        console.log(response)
                        status=response.data.code;
                        // this.loading=false;
                        console.log(response.data.code);
                        if(status==204){
                            this.flush();
                            alert("请求成功");

                        }

                        else{
                            console.log("请求出错");
                            alert("请求出错");
                        }
                    })
            },
            handleOk1() {
                console.log("zhieshoa");
                // this.loading=true;
                console.log("执行了这个请求");
                this.$store.dispatch("AddDepartment",this.addDepartment).then(response=>{
                    console.log("这里之情了")
                    console.log(response)
                    status=response.data.code;
                    // this.loading=false;
                    console.log(response.data.code);
                    if(status==204){
                        this.flush();
                        alert("添加成功");
                    }
                    else{
                        console.log("请求出错");
                        alert("请求出错");
                    }
                })
            },
            checkDno(departmentId){
                console.log(departmentId);

                this.loading=true;
                console.log("执行了这个请求");
                this.$store.dispatch("GetDepartment",departmentId).then(response=>{
                    console.log("这里之情了")
                    status=response.data.code;
                    this.loading=false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if(status==200){
                        if(response.data.data.length==0){
                            this.errorMessage="部门编号可用";
                        }
                    }
                    else{
                        this.errorMessage="编号重复";
                    }
                })
            },
            deleteDepartment(departmentId){
                console.log(departmentId);

                this.loading=true;
                console.log("执行了这个请求");
                this.$store.dispatch("DeleteDepartment",departmentId).then(response=>{
                    console.log("这里之情了")
                    status=response.data.code;
                    this.loading=false;
                    console.log(response.data.code);
                    console.log(response.data.data);

                    if(status==204){
                            alert("删除成功");
                            this.flush();
                    }
                    else{
                        alert("删除失败");
                    }
                })

            }

    },
        // computed: {
        //
        // }
    };
</script>

<style>

</style>
