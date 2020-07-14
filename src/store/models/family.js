import {getFamily} from '@/api/personInfo'
import {getFamilys} from '@/api/personInfo'
import {updateFamily} from '@/api/personInfo'
import {deleteFamily} from '@/api/personInfo'
import {addFamily} from '@/api/personInfo'

const family={
    actions:{
        GetFamily({commit},id){
            return new Promise((resolve,reject)=>{
                getFamily(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetFamilys({commit}){
            return new Promise((resolve,reject)=>{
                getFamilys().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateFamily({commit},employee){
            return new Promise((resolve,reject)=>{
                updateFamily(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteFamily({commit},id){
            return new Promise((resolve,reject)=>{
                deleteFamily(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddFamily({commit},employee){
            return new Promise((resolve,reject)=>{
                addFamily(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        }
    }
}
export default family
