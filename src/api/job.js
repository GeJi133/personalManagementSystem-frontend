import request from '@/util/request'

import Qs from 'qs'

export function getJob(jno) {
    return request({
        url: '/jobs/' + jno+'?type=jno',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getJobs(dno) {
    return request({
        url: '/jobs/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateJob(job) {
    return request({
        url: '/jobs/',
        method: 'put',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:job
    })
}

export function addJob(job) {
    console.log("job",job)
    return request({
        url: '/jobs/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:job
    })
}

export function deleteJob(jno) {

    return request({
        url: '/jobs/',
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:jno
    })
}

