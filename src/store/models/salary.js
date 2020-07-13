import {getSalary} from '@/api/evaluation'
import {getSalarys} from '@/api/evaluation'
import {updateSalary} from '@/api/evaluation'


const salary={
    actions:{
        GetSalary({commit},id){
            return new Promise((resolve,reject)=>{
                getSalary(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetSalarys({commit}){
            return new Promise((resolve,reject)=>{
                getSalarys().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateSalary({commit},employee){
            return new Promise((resolve,reject)=>{
                updateSalary(employee).then(response=>{
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
export default salary
