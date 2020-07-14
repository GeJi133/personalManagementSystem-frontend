import {getJob} from '@/api/job'
import {getJobs} from '@/api/job'
import {updateJob} from '@/api/job'
import {deleteJob} from '@/api/job'
import {addJob} from '@/api/job'
import  {getJobsByDno} from "@/api/job";
import {getDepartmentsByJnoKey}  from "@/api/department";
import {getDepartmentsByDeKey}  from "@/api/department";
import {getJobByDeKey} from "../../api/job";

const department ={
    actions:{
        GetJob({commit},jno){
            return new Promise((resolve,reject)=>{
                getJob(jno).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetJobs({commit}){
            return new Promise((resolve,reject)=>{
                getJobs().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetJobByDeKey({commit},key){
            return new Promise((resolve,reject)=>{
                getJobByDeKey(key).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetDepartmentsByDeKey({commit},key){
            return new Promise((resolve,reject)=>{
                getDepartmentsByDeKey(key).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetDepartmentsByJnoKey({commit},key){
            return new Promise((resolve,reject)=>{
                getDepartmentsByJnoKey(key).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetJobsByDno({commit},dno){
            return new Promise((resolve,reject)=>{
                getJobsByDno(dno).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateJob({commit},job){
            return new Promise((resolve,reject)=>{
                updateJob(job).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteJob({commit},jno){
            return new Promise((resolve,reject)=>{
                deleteJob(jno).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddJob({commit},jno){
            return new Promise((resolve,reject)=>{
                addJob(jno).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
    }
}
export default department
