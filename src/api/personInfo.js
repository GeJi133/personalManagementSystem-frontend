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

export function updateCareer(employee) {
    console.log("成功添加");
    return request({
        url:'/employee/career/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            career:employee.caree,
            id:employee.id
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
    console.log("id:",id)
    return request({
        url: '/employee/career/'+id,
        method: 'delete',
        // headers: {
        //     // 'token': localStorage.getItem('token'),
        //     'Content-Type': 'application/JSON' },
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

export function updateFamily(employee) {
    console.log("成功添加");
    return request({
        url:'/employee/family/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            family:employee.family,
            id:employee.id,
        }
    })
}

export function addFamily(employee) {
    console.log("add");
    return request({
        url: '/employee/family/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:{
            family:employee.family,
            id:employee.id,
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

export function updateLanguage(employee) {
    console.log("成功更新了");
    return request({
        url:'/employee/language/',
        method:'put',
        header:{
            'Content-Type': 'application/JSON'
        },
        data:{
            language:employee.language,
            id:employee.id,
        }
    })
}

export function addLanguage(employee) {
    console.log("add");
    return request({
        url: '/employee/language/',
        method: 'post',
        headers: {
            // 'token': localStorage.getItem('token'),
            'Content-Type': 'application/JSON' },
        data:{
            language:employee.language,
            id:employee.id,
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
