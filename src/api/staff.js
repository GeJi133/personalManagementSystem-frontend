/* eslint-disable */
import request from '@/utils/request'

import Qs from 'qs'
export function getStaff(staffId) {
    return request({
        url: '/staff/' + staffId,
        method: 'get',
        // headers: {
            // 'token': localStorage.getItem('token'),
            // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}
