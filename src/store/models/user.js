import {login} from '@/api/user'
import {getEmailById} from "../../api/user";
import {sendEmail} from "../../api/user";
import {resetPasswordByEmail} from "../../api/user";

const user= {
    actions: {
        Login({commit}, loginForm) {
            return new Promise((resolve, reject) => {
                login(loginForm).then(response => {
                    commit('CHANGE')
                    console.log("responde", response)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetEmailById({commit},id){
            return new Promise((resolve, reject) => {
                getEmailById(id).then(response => {
                    commit('CHANGE')
                    console.log("responde", response)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        SendEmail({commit},id){
            return new Promise((resolve, reject) => {
                sendEmail(id).then(response => {
                    commit('CHANGE')
                    console.log("responde", response)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        ResetPassword({commit},resetForm){

            console.log("进入reset");
            return new Promise((resolve, reject) => {
                resetPasswordByEmail(resetForm).then(response => {
                    commit('CHANGE')
                    console.log("responde", response)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
}
export default user
