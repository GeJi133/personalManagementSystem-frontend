/* eslint-disable */
import request from '@/util/request'

import Qs from 'qs'
export function login(loginForm) {
    var data = Qs.stringify({"username":loginForm.username,"password":loginForm.password});
    console.log(data);
    return request({
        url: '/accounts/login' ,
        method: 'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'},
        data:data
    })
}
export function getEmailById(id) {

    return request({
        url: '/email/'+ id,
        method: 'get',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'},

    })
}

export function resetPasswordByEmail(resetForm) {
    console.log("resteForm",resetForm);
    return request({
        url: '/email/updatePassword',
        method: 'put',
        headers: {
            'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:resetForm
    })
}
export function sendEmail(id) {
    return request({
        url: '/email/sendEmail/'+id ,
        method: 'get',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded'},
    })
}
