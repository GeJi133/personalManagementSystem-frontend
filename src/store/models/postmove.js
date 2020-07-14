import {getPostmove} from "../../api/postmove";
import {updatePostmove} from "../../api/postmove";

import {addPostmove} from "../../api/postmove";
import {getPostmoves} from "../../api/postmove";

const postmove ={
  action:{
    GetPostmove({commit},transferId,id,transferReason,transferTime,jobBefore,jobAfter,status){
      return new Promise((resolve,reject)=>{
       getPostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status).then(response=>{
          commit('CHANGE')
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    GetPostmoves({commit}){
      return new Promise((resolve,reject)=>{
        getPostmoves().then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    UpdatePostmove({commit},transferId,id,transferReason,transferTime,jobBefore,jobAfter,status){
      return new Promise((resolve,reject)=>{
        updatePostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status).then(response=>{
          commit('CHANGE')
          console.log("responde",response)
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    AddPostmove({commit},transferId,id,transferReason,transferTime,jobBefore,jobAfter,status){
      return new Promise((resolve,reject)=>{
        addPostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status).then(response=>{
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

export default postmove
