import request from '@/util/request'



export function addStaffmaster(id,name,sex,department,career,position,jobs,language,family) {
  return request({
    url:'/handles/newEmployee/',
    method:'post',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:{id,name,sex,department,career,position,jobs,language,family}
  })
}

export function getStaffmaster(id,name,sex,department,career,position,jobs,language,family,email,starttime,endtime) {
  return request({
    url: '/information/id/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'},
    data:{id,name,sex,department,career,position,jobs,language,family,email,starttime,endtime}
  })
}

export function getStaffmasters() {
  return request({
    url: '/information/id/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'
    },
  })
}
export function updateStaffmaster(id,name,sex,department,career,position,jobs,language,family,starttime,endtime) {
  console.log("请求成功");
  return request({
    url: '/information/id/',
    method: 'patch',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data: {id,name,sex,department,career,position,jobs,language,family,starttime,endtime},
  })
}


