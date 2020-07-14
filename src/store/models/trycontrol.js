import {getTrycontrol} from "../../api/trycontrol";
import {getTrycontrols} from "../../api/trycontrol";
import {updateTrycontrol} from "../../api/trycontrol";
import {addTrycontrol} from "../../api/trycontrol";




const trycontrol={
  action:{
    GetTrycontrol({commit},transferId,id,transferReason,transferTime,jobBefore,jobAfter,status){
      return new Promise((resolve,reject)=>{
        getTrycontrol(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetTrycontrols({commit}){
      return new Promise((resolve,reject)=>{
        getTrycontrols().then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdateTrycontrol({commit},transferId,id,transferReason,transferDate,status){
      return new Promise((resolve,reject)=>{
        updateTrycontrol(transferId,id,transferReason,transferDate,status).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddTrycontrol({commit},transferId,id,transferReason,status){
      return new Promise((resolve,reject)=>{
        addTrycontrol(transferId,id,transferReason,status).then(response=>{
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

export default trycontrol
