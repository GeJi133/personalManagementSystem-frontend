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
        UpdateLanguage({commit},emoloyee){
            return new Promise((resolve,reject)=>{
                updateLanguage(emoloyee).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        DeleteLanguage({commit},id){
            return new Promise((resolve,reject)=>{
                deleteLanguage(id).then(response=>{
                    commit('CHANGE')
                    console.log("responde",response)
                    resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        AddLanguage({commit},id,language){
            return new Promise((resolve,reject)=>{
                addLanguage(id,language).then(response=>{
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
