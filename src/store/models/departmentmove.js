import {getDepartmentmove} from "../../api/departmentmove";
import {addDepartmentmove} from "../../api/departmentmove";
import {getDepartmentmoves} from "../../api/departmentmove";
import {updateDepartmentmove} from "../../api/departmentmove";




const departmentmove={
  actions:{
    GetDepartmentmove({commit},transferId,id,transferReason,transferTime,departmentBefore,departmentAfter){
      return new Promise((resolve,reject)=>{
        getDepartmentmove(transferId,id,transferReason,transferTime,departmentBefore,departmentAfter).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetDepartmentmoves({commit}){
      return new Promise((resolve,reject)=>{
        getDepartmentmoves().then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdateDepartmentmove({commit},transferId,id,transferReason,transferTime,departmentBefore,departmentAfter){
      return new Promise((resolve,reject)=>{
        updateDepartmentmove(transferId,id,transferReason,transferTime,departmentBefore,departmentAfter).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddDepartmentmove({commit},transferId,id,transferReason,transferTime,departmentBefore,departmentAfter){
      return new Promise((resolve,reject)=>{
        addDepartmentmove(transferId,id,transferReason,transferTime,departmentBefore,departmentAfter).then(response=>{
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
export default departmentmove
