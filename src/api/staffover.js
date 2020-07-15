import request from '@/util/request'



export function addStaffover(leavingId,id,department,leavingTime,leavingReason) {
  return request({
    url:'/applications/leavings/',
    method:'post',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:{leavingId,id,department,leavingTime,leavingReason}
  })
}

export function getStaffover(leavingId,id,department,leavingTime,leavingReason,status) {
  return request({
    url: '/applications/leavings/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'},
    data:{leavingId,id,department,leavingTime,leavingReason,status}
  })
}

export function getStaffovers() {
  return request({
    url: '/applications/leavings/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'
    },
  })
}
export function updateStaffover(leavingId,id,department,leavingTime,leavingReason) {
  console.log("请求成功");
  return request({
    url: '/handles/leavings/',
    method: 'patch',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data: {leavingId,id,department,leavingTime,leavingReason},
  })
}


