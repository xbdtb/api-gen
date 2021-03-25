// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 根据token获取系统登录用户信息 GET /api/cms/getSysUserInfo */
export async function getSysUserUsingGET(options?: { [key: string]: any }) {
  return request<cms.ApiResult<cms.LoginSysUserVo>>('/api/cms/getSysUserInfo', {
    method: 'GET',
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 登录 系统用户登录 POST /api/cms/login */
export async function loginUsingPOST(body?: cms.LoginParam, options?: { [key: string]: any }) {
  return request<cms.ApiResult<cms.LoginSysUserTokenVo>>('/api/cms/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** logout POST /api/cms/logout */
export async function logoutUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<string>>('/api/cms/logout', {
    method: 'POST',
    responseType: '*/*',
    ...(options || {}),
  });
}
