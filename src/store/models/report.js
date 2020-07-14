import {getLeaving} from '@/api/report'
import {getTransfer} from '@/api/report'
import {getDepartmentTransferByTime} from "../../api/report";
import {getLeavingByTime} from "../../api/report";

const report ={
    actions: {
        GetDimission({commit}){
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
        GetDepartmentTransfersByTime({commit},date){
            return new Promise((resolve,reject)=>{
                getDepartmentTransferByTime(date).then(response=>{
                    commit('CHANGE');
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },

        GetLeavingsByTime({commit},date){
            return new Promise((resolve,reject)=>{
                getLeavingByTime(date).then(response=>{
                    commit('CHANGE');
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },

        GetTransfers({commit}){
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
