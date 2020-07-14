import {getJobgetcontrol} from "../../api/jobgetcontrol";
import {getJobgetcontrols} from "../../api/jobgetcontrol";
import {addJobgetcontrol} from "../../api/jobgetcontrol";
import {updateJobgetcontrol} from "../../api/jobgetcontrol";
import {deleteJobgetcontrol} from "../../api/jobgetcontrol";


const jopgetcontrol={
  action:{
    GetJobgetcontroll({commit},dno){
      return new Promise((resolve,reject)=>{
        getJobgetcontrol(dno).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetJobgetcontrols({commit},dno){
      return new Promise((resolve,reject)=>{
        getJobgetcontrols(dno).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdateJobgetcontrol({commit},department){
      return new Promise((resolve,reject)=>{
        updateJobgetcontrol(department).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddJobgetcontrol({commit},department){
      return new Promise((resolve,reject)=>{
        addJobgetcontrol(department).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    DeleteJobgetcontrol({commit},dno){
      return new Promise((resolve,reject)=>{
        deleteJobgetcontrol(dno).then(response=>{
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
export default jopgetcontrol
