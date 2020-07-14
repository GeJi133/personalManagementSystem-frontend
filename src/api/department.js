import request from '@/util/request'

import Qs from 'qs'
export function getDepartment(dno) {
    return request({
        url: '/departments/' + dno+'?type=dno',
        method: 'get',

    })
}

export function getDepartments() {
    return request({
        url: '/departments/',
        method: 'get',
        headers: {
        'token': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}

export function getDepartmentsByJnoKey(key) {
    return request({
        url: 'departments/'+key+'?type=department',
        method: 'get',
        headers: {
        'token': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}
export function getDepartmentsByDeKey(key) {
    console.log("keylal",key)
    return request({
        url: 'departments/'+key+'?type=business',
        method: 'get',
        headers: {
        'token': localStorage.getItem('token'),
        'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}

export function updateDepartment(department) {
    console.log("department",department);
    return request({
        url: '/departments/',
        method: 'put',
        headers: {
            'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:department
    })
}

export function addDepartment(department) {
    console.log("add了");
    return request({
        url: '/departments/',
        method: 'post',
        headers: {
            'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:department
    })
}
export function deleteDepartment(dno) {
    return request({
        url: '/departments/',
        method: 'delete',
        headers: {
            'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:dno
    })
}
