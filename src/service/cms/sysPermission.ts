// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加系统权限 POST /api/cms/sysPermission/add */
export async function addSysPermissionUsingPOST(
  body?: cms.SysPermission,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysPermission/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 删除系统权限 POST /api/cms/sysPermission/delete/${param0} */
export async function deleteSysPermissionUsingPOST(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<boolean>>(`/api/cms/sysPermission/delete/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 获取所有菜单列表 POST /api/cms/sysPermission/getAllMenuList */
export async function getAllMenuListUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysPermission>>>('/api/cms/sysPermission/getAllMenuList', {
    method: 'POST',
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 获取获取菜单树形列表 POST /api/cms/sysPermission/getAllMenuTree */
export async function getAllMenuTreeUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysPermissionTreeVo>>>(
    '/api/cms/sysPermission/getAllMenuTree',
    {
      method: 'POST',
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 根据用户id获取菜单列表 POST /api/cms/sysPermission/getMenuListByUserId/${param0} */
export async function getMenuListByUserIdUsingPOST(
  params: {
    // path
    /** userId */
    userId: number;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<cms.ApiResult<Array<cms.SysPermission>>>(
    `/api/cms/sysPermission/getMenuListByUserId/${param0}`,
    {
      method: 'POST',
      params: { ...params },
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 根据用户id获取菜单树形列表 POST /api/cms/sysPermission/getMenuTreeByUserId/${param0} */
export async function getMenuTreeByUserIdUsingPOST(
  params: {
    // path
    /** userId */
    userId: number;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<cms.ApiResult<Array<cms.SysPermissionTreeVo>>>(
    `/api/cms/sysPermission/getMenuTreeByUserId/${param0}`,
    {
      method: 'POST',
      params: { ...params },
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 获取所有导航菜单(一级/二级菜单) POST /api/cms/sysPermission/getNavMenuTree */
export async function getNavMenuTreeUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysPermissionTreeVo>>>(
    '/api/cms/sysPermission/getNavMenuTree',
    {
      method: 'POST',
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 系统权限分页列表 POST /api/cms/sysPermission/getPageList */
export async function getSysPermissionPageListUsingPOST(
  body?: cms.SysPermissionPageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysPermissionQueryVo>>>(
    '/api/cms/sysPermission/getPageList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 根据用户id获取该用户所有权限编码 GET /api/cms/sysPermission/getPermissionCodesByUserId/${param0} */
export async function getPermissionCodesByUserIdUsingGET(
  params: {
    // path
    /** userId */
    userId: number;
  },
  options?: { [key: string]: any },
) {
  const { userId: param0 } = params;
  return request<cms.ApiResult<Array<string>>>(
    `/api/cms/sysPermission/getPermissionCodesByUserId/${param0}`,
    {
      method: 'GET',
      params: { ...params },
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 根据角色id获取该对应的所有三级权限ID GET /api/cms/sysPermission/getThreeLevelPermissionIdsByRoleId/${param0} */
export async function getPermissionIdsByRoleIdUsingGET(
  params: {
    // path
    /** roleId */
    roleId: number;
  },
  options?: { [key: string]: any },
) {
  const { roleId: param0 } = params;
  return request<cms.ApiResult<Array<number>>>(
    `/api/cms/sysPermission/getThreeLevelPermissionIdsByRoleId/${param0}`,
    {
      method: 'GET',
      params: { ...params },
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 系统权限详情 GET /api/cms/sysPermission/info/${param0} */
export async function getSysPermissionUsingGET(
  params: {
    // path
    /** id */
    id: string;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<cms.SysPermissionQueryVo>>(`/api/cms/sysPermission/info/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改系统权限 POST /api/cms/sysPermission/update */
export async function updateSysPermissionUsingPOST(
  body?: cms.SysPermission,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysPermission/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}
