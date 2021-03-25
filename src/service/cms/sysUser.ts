// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加系统用户 POST /api/cms/sysUser/add */
export async function addSysUserUsingPOST(body?: cms.SysUser, options?: { [key: string]: any }) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysUser/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 删除系统用户 POST /api/cms/sysUser/delete/${param0} */
export async function deleteSysUserUsingPOST(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<boolean>>(`/api/cms/sysUser/delete/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 系统用户分页列表 POST /api/cms/sysUser/getPageList */
export async function getSysUserPageListUsingPOST(
  body?: cms.SysUserPageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysUserQueryVo>>>('/api/cms/sysUser/getPageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 系统用户详情 GET /api/cms/sysUser/info/${param0} */
export async function getSysUserUsingGET1(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<cms.SysUserQueryVo>>(`/api/cms/sysUser/info/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 管理员重置用户密码 POST /api/cms/sysUser/resetPassword */
export async function resetPasswordUsingPOST(
  body?: cms.ResetPasswordParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysUser/resetPassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改系统用户 POST /api/cms/sysUser/update */
export async function updateSysUserUsingPOST(body?: cms.SysUser, options?: { [key: string]: any }) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysUser/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改密码 POST /api/cms/sysUser/updatePassword */
export async function updatePasswordUsingPOST(
  body?: cms.UpdatePasswordParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysUser/updatePassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改头像 POST /api/cms/sysUser/uploadHead */
export async function uploadHeadUsingPOST(
  body?: cms.UploadHeadParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysUser/uploadHead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}
