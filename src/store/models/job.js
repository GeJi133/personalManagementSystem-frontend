import {getDepartment} from '@/api/department'
import {getDepartments} from '@/api/department'
import {updateDepartment} from '@/api/department'
import {deleteDepartment} from '@/api/department'
import {addDepartment} from '@/api/department'

const job ={
    actions:{
        GetDepartment({commit},dno){
            return new Promise((resolve,reject)=>{
                getDepartment(dno).then(response=>{
                    commit('CHANGE')
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetDepartments({commit}){
            return new Promise((resolve,reject)=>{
                getDepartments().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateDepartment({commit},department){
            return new Promise((resolve,reject)=>{
                updateDepartment(department).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddDepartment({commit},department){
            return new Promise((resolve,reject)=>{
                addDepartment(department).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteDepartment({commit},dno){
            return new Promise((resolve,reject)=>{
                deleteDepartment(dno).then(response=>{
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
export default job
