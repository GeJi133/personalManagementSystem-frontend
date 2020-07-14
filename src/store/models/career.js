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
        DeleteCareer({commit},id){
            console.log("进这还是");
            return new Promise((resolve,reject)=>{
                deleteCareer(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddCareer({commit},id,career){
            return new Promise((resolve,reject)=>{
                addCareer(id,career).then(response=>{
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
