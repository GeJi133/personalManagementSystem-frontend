import request from '@/util/request'

//职业生涯
export function getCareer(id) {
    return request({
        url: '/career/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getCareers() {
    return request({
        url: '/career/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateCareer(employee) {
    console.log("成功添加");
    return request({
        url:'/career/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:employee,
    })
}

export function addCareer(employee) {
    console.log("add");
    return request({
        url: '/career/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}

export function deleteCareer(employee) {
    return request({
        url: '/career/',
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}


//家庭情况
export function getFamily(id) {
    return request({
        url: '/family/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getFamilys() {
    return request({
        url: '/family/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateFamily(employee) {
    console.log("成功添加");
    return request({
        url:'/family/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:family,
    })
}

export function addFamily(employee) {
    console.log("add");
    return request({
        url: '/family/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}

export function deleteFamily(employee) {
    return request({
        url: '/family/',
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}

//语言能力
export function getLanguage(id) {
    return request({
        url: '/language/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getLanguages() {
    return request({
        url: '/language/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateLanguage(employee) {
    console.log("成功添加");
    return request({
        url:'/language/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:family,
    })
}

export function addLanguage(employee) {
    console.log("add");
    return request({
        url: '/language/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}

export function deleteLanguage(employee) {
    return request({
        url: '/language/',
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:employee
    })
}
