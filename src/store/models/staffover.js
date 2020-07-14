import {getStaffover} from "../../api/staffover";
import {getStaffovers} from "../../api/staffover";
import {addStaffover} from "../../api/staffover";
import {updateStaffover} from "../../api/staffover";



const staffover={
  action:{
    GetStaffover({commit},leavingId,id,department,leavingTime,leavingReason,status){
      return new Promise((resolve,reject)=>{
        getStaffover(leavingId,id,department,leavingTime,leavingReason,status).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetStaffovers({commit}){
      return new Promise((resolve,reject)=>{
        getStaffovers().then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdateStaffover({commit},leavingId,id,department,leavingTime,leavingReason){
      return new Promise((resolve,reject)=>{
        updateStaffover(leavingId,id,department,leavingTime,leavingReason).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddStaffover({commit},leavingId,id,department,leavingTime,leavingReason){
      return new Promise((resolve,reject)=>{
        addStaffover(leavingId,id,department,leavingTime,leavingReason).then(response=>{
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


export default staffover
