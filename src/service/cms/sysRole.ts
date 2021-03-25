// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加系统角色 POST /api/cms/sysRole/add */
export async function addSysRoleUsingPOST(body?: cms.SysRole, options?: { [key: string]: any }) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysRole/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 删除系统角色 POST /api/cms/sysRole/delete/${param0} */
export async function deleteSysRoleUsingPOST(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<boolean>>(`/api/cms/sysRole/delete/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 系统角色列表 POST /api/cms/sysRole/getList */
export async function getRoleListUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysRole>>>('/api/cms/sysRole/getList', {
    method: 'POST',
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 系统角色分页列表 POST /api/cms/sysRole/getPageList */
export async function getSysRolePageListUsingPOST(
  body?: cms.SysRolePageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysRole>>>('/api/cms/sysRole/getPageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 系统角色详情 GET /api/cms/sysRole/info/${param0} */
export async function getSysRoleUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<cms.SysRole>>(`/api/cms/sysRole/info/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改系统角色 POST /api/cms/sysRole/update */
export async function updateSysRoleUsingPOST(body?: cms.SysRole, options?: { [key: string]: any }) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysRole/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改系统角色权限 POST /api/cms/sysRole/updateSysRolePermission */
export async function updateSysRolePermissionUsingPOST(
  body?: cms.UpdateSysRolePermissionParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysRole/updateSysRolePermission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}
