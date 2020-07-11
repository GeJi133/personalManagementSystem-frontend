import {getJob} from '@/api/job'
import {getJobs} from '@/api/job'
import {updateJob} from '@/api/job'
import {deleteJob} from '@/api/job'

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
        GetJobs({commit},dno){
            return new Promise((resolve,reject)=>{
                getJobs(dno).then(response=>{
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
    }
}
export default department
