import request from '@/util/request'

import Qs from 'qs'

export function getLeaving() {
    return request({
        url: '/reports/leaving',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}
export function getTransfer() {
    return request({
        url: '/reports/leaving',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

// export function getTransfer() {
//     return request({
//         url: '/reports/leaving',
//         method: 'get',
//         // headers: {
//         // 'token': localStorage.getItem('token'),
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//         // },
//     })
// }
// export function getTransfer() {
//     return request({
//         url: '/reports/leaving',
//         method: 'get',
//         // headers: {
//         // 'token': localStorage.getItem('token'),
//         // 'Content-Type': 'application/x-www-form-urlencoded'
//         // },
//     })

