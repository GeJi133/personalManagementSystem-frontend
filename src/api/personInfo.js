import request from '@/util/request'

//职业生涯
export function getCareer(id) {
    return request({
        url: '/employee/career/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getCareers() {
    return request({
        url: '/employee/career/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateCareer(career,id) {
    console.log("成功添加");
    return request({
        url:'/employee/career/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            career,
            id
        }
    })
}

export function addCareer(id,career) {
    console.log("add");
    return request({
        url: '/employee/career/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:{
            id,
            career
        }
    })
}

export function deleteCareer(id) {
    return request({
        url: '/employee/career/',
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:id
    })
}


//家庭情况
export function getFamily(id) {
    return request({
        url: '/employee/family/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getFamilys() {
    return request({
        url: '/employee/family/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateFamily(family, id) {
    console.log("成功添加");
    return request({
        url:'/employee/family/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            family,
            id,
        }
    })
}

export function addFamily(id,family) {
    console.log("add");
    return request({
        url: '/employee/family/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:{
            id,
            family
        }
    })
}

export function deleteFamily(id) {
    return request({
        url: '/employee/family/'+id,
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:id
    })
}

//语言能力
export function getLanguage(id) {
    return request({
        url: '/employee/language/' + id+'?type=id',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function getLanguages() {
    return request({
        url: '/employee/language/',
        method: 'get',
        // headers: {
        // 'token': localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded'
        // },
    })
}

export function updateLanguage(language,id) {
    console.log("成功添加");
    return request({
        url:'/employee/language/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            language,
            id,
        }
    })
}

export function addLanguage(id,language) {
    console.log("add");
    return request({
        url: '/employee/language/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:{
            id,
            language
        }
    })
}

export function deleteLanguage(id) {
    return request({
        url: '/employee/language/'+ id,
        method: 'delete',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:id
    })
}
