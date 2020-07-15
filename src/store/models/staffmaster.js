import {addStaffmaster} from "../../api/staffmaster";
import {getStaffmaster} from "../../api/staffmaster";
import {getStaffmasters} from "../../api/staffmaster";
import {updateStaffmaster} from "../../api/staffmaster";


const staffmaster={
  actions:{
    GetStaffmaster({commit},id,name,sex,department,career,position,jobs,language,family,starttime,endtime){
      return new Promise((resolve,reject)=>{
        getStaffmaster(id,name,sex,department,career,position,jobs,language,family,starttime,endtime).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetStaffmasters({commit}){
      return new Promise((resolve,reject)=>{
        getStaffmasters().then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdateStaffmaster({commit},id,name,sex,department,career,position,jobs,language,family,starttime,endtime){
      return new Promise((resolve,reject)=>{
        updateStaffmaster(id,name,sex,department,career,position,jobs,language,family,starttime,endtime).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddStaffmaster({commit},id,name,sex,department,career,position,jobs,language,family){
      return new Promise((resolve,reject)=>{
        addStaffmaster(id,name,sex,department,career,position,jobs,language,family).then(response=>{
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


export default staffmaster
