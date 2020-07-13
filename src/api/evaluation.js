import request from '@/util/request'

//考勤
export function getChinkingIn(id) {
    return request({
        url: '/clock/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getChinkingIns() {
    return request({
        url: '/clock/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateChinkingIn(attendtime,leavetime,id) {
    console.log("成功添加");
    return request({
        url:'/clock/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            attendtime,
            leavetime,
            id
        }
    })
}


//工资结算
export function getSalary(id) {
    return request({
        url: '/salary/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getSalarys() {
    return request({
        url: '/salary/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateSalary(basicsalary,insurance,awardmoney,finedmoney,id) {
    console.log("成功添加");
    return request({
        url:'/salary/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            basicsalary,
            insurance,
            awardmoney,
            finedmoney,
            id
        }
    })
}
