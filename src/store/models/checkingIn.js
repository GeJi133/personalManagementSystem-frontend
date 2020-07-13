import {getCheckingIn} from '@/api/evaluation'
import {getCheckingIns} from '@/api/evaluation'
import {updateCheckingIn} from '@/api/evaluation'


const checkingIn={
    actions:{
        GetCheckingIn({commit},id){
            return new Promise((resolve,reject)=>{
                getCheckingIn(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetCheckingIns({commit}){
            return new Promise((resolve,reject)=>{
                getCheckingIns().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateCheckingIn({commit},attendtime,leavetime,id){
            return new Promise((resolve,reject)=>{
                updateCheckingIn(attendtime,leavetime,id).then(response=>{
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
export default checkingIn
