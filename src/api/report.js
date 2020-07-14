import request from '@/util/request'

import Qs from 'qs'


export function getLeavingsByTime(data) {
    return request({
        url: '/reports/leavings/month',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
        params:{
            year:year,
            month:month
        }
    })
}

export function getLeavingByMonth(year,month) {
    return request({
        url: '/reports/leavings/month',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
        params:{
            year:year,
            month:month
        }
    })
}
export function getDepartmentTransferByTime(date) {
    return request({
        url: '/reports/departmentTransfers/time',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
        params:{
            startData:date.startDate,
            endData:date.endDate
        }
    })
}
export function getLeavingByTime(date) {
    return request({
        url: '/reports/leavings/time',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
        params:{
            startData:date.startDate,
            endData:date.endDate
        }
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

