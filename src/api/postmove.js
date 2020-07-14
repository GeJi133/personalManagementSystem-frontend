import request from '@/util/request'



export function addPostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
   return request({
     url:'/applications/jobTransfers/',
     method:'post',
     headers: {
       // 'token': localStorage.getItem('token'),
       'Content-Type': 'application/JSON' },
     data:{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}
   })
}

export function getPostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
  return request({
    url: '/applications/jobTransfers/',
    method: 'get',
     headers: {
    // 'token': localStorage.getItem('token'),
    'Content-Type': 'application/x-www-form-urlencoded'},
    data:{transferId,id,transferReason,transferTime,jobBefore,jobAfter,status}
  })
}

export function getPostmoves() {
  return request({
    url: '/applications/jobTransfers/',
    method: 'get',
    headers: {
    // 'token': localStorage.getItem('token'),
    'Content-Type': 'application/JSON'
   },
  })
}
export function updatePostmove(transferId,id,transferReason,transferTime,jobBefore,jobAfter,status) {
  console.log("请求成功");
  return request({
    url: '/handles/transformations/jobs/',
    method: 'patch',
    headers: {
      // 'token': localStorage.getItem('token'),
      'Content-Type': 'application/JSON' },
    data: {transferId,id,transferReason,transferTime,jobBefore,jobAfter,status},
  })
}


