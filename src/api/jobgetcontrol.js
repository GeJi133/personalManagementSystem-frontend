import request from '@/util/request'


export function addJobgetcontrol(jobgetcontrol) {
  return request({
    url:'/jobgetcontrols/',
    method:'post',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:jobgetcontrol
  })
}

export function getJobgetcontrol(dno) {
  return request({
    url: '/jobgetcontrols/' + dno+'?type=dno',
    method: 'get',
    // headers: {
    // 'token': localStorage.getItem('token'),
    // 'Content-Type': 'application/x-www-form-urlencoded'
    // },
  })
}

export function getJobgetcontrols() {
  return request({
    url: '/jobgetcontrols/',
    method: 'get',
    // headers: {
    // 'token': localStorage.getItem('token'),
    // 'Content-Type': 'application/x-www-form-urlencoded'
    // },
  })
}
export function updateJobgetcontrol(jobgetcontrol) {
  console.log("jobgetcontrol",jobgetcontrol);
  return request({
    url: '/jobgetcontrols/',
    method: 'put',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:jobgetcontrol,
  })
}

export function deleteJobgetcontrol(dno) {
  return request({
    url: '/jobgetcontrols/',
    method: 'delete',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:dno
  })
}
