import {getLeaving} from '@/api/report'
import {getTransfer} from '@/api/report'
const report ={
    actions: {
        GetLeaving({commit}){
            return new Promise((resolve,reject)=>{
                getLeaving().then(response=>{
                    commit('CHANGE');
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },

        GetTransfer({commit}){
            return new Promise((resolve,reject)=>{
                getTransfer().then(response=>{
                    commit('CHANGE');
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
    }
}
export default report
