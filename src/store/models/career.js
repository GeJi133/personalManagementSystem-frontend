import {getCareer} from '@/api/personInfo'
import {getCareers} from '@/api/personInfo'
import {updateCareer} from '@/api/personInfo'
import {deleteCareer} from '@/api/personInfo'
import {addCareer} from '@/api/personInfo'

const career={
    actions:{
        GetCareer({commit},id){
            return new Promise((resolve,reject)=>{
                getCareer(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetCareers({commit}){
            return new Promise((resolve,reject)=>{
                getCareers().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateCareer({commit},employee){
            return new Promise((resolve,reject)=>{
                updateCareer(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteCareer({commit},employee){
            return new Promise((resolve,reject)=>{
                deleteCareer(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddCareer({commit},employee){
            return new Promise((resolve,reject)=>{
                addCareer(employee).then(response=>{
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
export default career
