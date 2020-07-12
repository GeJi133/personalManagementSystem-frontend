import {getLanguage} from '@/api/personInfo'
import {getLanguages} from '@/api/personInfo'
import {updateLanguage} from '@/api/personInfo'
import {deleteLanguage} from '@/api/personInfo'
import {addLanguage} from '@/api/personInfo'

const language={
    actions:{
        GetLanguage({commit},id){
            return new Promise((resolve,reject)=>{
                getLanguage(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        GetLanguages({commit}){
            return new Promise((resolve,reject)=>{
                getLanguages().then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        UpdateLanguage({commit},employee){
            return new Promise((resolve,reject)=>{
                updateLanguage(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteLanguage({commit},employee){
            return new Promise((resolve,reject)=>{
                deleteLanguage(employee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddLanguage({commit},employee){
            return new Promise((resolve,reject)=>{
                addLanguage(employee).then(response=>{
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
export default language
