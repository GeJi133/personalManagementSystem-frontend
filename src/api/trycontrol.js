import request from '@/util/request'



export function addTrycontrol(transferId,id,transferReason,status) {
  return request({
    url:'/applications/positionTransfers/',
    method:'post',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:{transferId,id,transferReason,status}
  })
}

export function getTrycontrol(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
  return request({
    url: '/applications/positionTransfers/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'},
    data:{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}
  })
}

export function getTrycontrols() {
  return request({
    url: '/applications/positionTransfers/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
}
export function updateTrycontrol(transferId,id,transferReason,transferDate,status) {
  console.log("请求成功");
  return request({
    url: '/handles/transformations/position/',
    method: 'patch',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data: {transferId,id,transferReason,transferDate,status},
  })
}


