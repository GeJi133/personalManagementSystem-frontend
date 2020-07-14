import request from '@/util/request'



export function addDepartmentmove(transferId,id,transferReason,transferTime,departmentBefore,departmentAfter) {
  return request({
    url:'/applications/departmentTransfers/',
    method:'post',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data:{transferId,id,transferReason,transferTime,departmentBefore,departmentAfter}
  })
}

export function getDepartmentmove(transferId) {
  return request({
    url: '/applications/departmentTransfers/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'},
    data:{transferId}
  })
}

export function getDepartmentmoves() {
  return request({
    url: '/applications/departmentTransfers/',
    method: 'get',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON'
    },
  })
}
export function updateDepartmentmove(transferId,id,transferReason,transferTime,departmentBefore,departmentAfter) {
  console.log("请求成功");
  return request({
    url: '/handles/transformations/departments/',
    method: 'patch',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data: {transferId,id,transferReason,transferTime,departmentBefore,departmentAfter},
  })
}


