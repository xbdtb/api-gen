// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 添加部门 POST /api/cms/sysDepartment/add */
export async function addSysDepartmentUsingPOST(
  body?: cms.SysDepartment,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysDepartment/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 删除部门 POST /api/cms/sysDepartment/delete/${param0} */
export async function deleteSysDepartmentUsingPOST(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<boolean>>(`/api/cms/sysDepartment/delete/${param0}`, {
    method: 'POST',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 获取所有部门的树形列表 POST /api/cms/sysDepartment/getAllDepartmentList */
export async function getAllDepartmentListUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysDepartment>>>(
    '/api/cms/sysDepartment/getAllDepartmentList',
    {
      method: 'POST',
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 获取所有部门的树形列表 POST /api/cms/sysDepartment/getDepartmentTree */
export async function getDepartmentTreeUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysDepartmentTreeVo>>>(
    '/api/cms/sysDepartment/getDepartmentTree',
    {
      method: 'POST',
      responseType: '*/*',
      ...(options || {}),
    },
  );
}

/** 部门列表 POST /api/cms/sysDepartment/getList */
export async function getSysDepartmentListUsingPOST(options?: { [key: string]: any }) {
  return request<cms.ApiResult<Array<cms.SysDepartment>>>('/api/cms/sysDepartment/getList', {
    method: 'POST',
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 部门分页列表 POST /api/cms/sysDepartment/getPageList */
export async function getSysDepartmentPageListUsingPOST(
  body?: cms.SysDepartmentPageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysDepartmentQueryVo>>>(
    '/api/cms/sysDepartment/getPageList',
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

/** 部门详情 GET /api/cms/sysDepartment/info/${param0} */
export async function getSysDepartmentUsingGET(
  params: {
    // path
    /** id */
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { id: param0 } = params;
  return request<cms.ApiResult<cms.SysDepartmentQueryVo>>(`/api/cms/sysDepartment/info/${param0}`, {
    method: 'GET',
    params: { ...params },
    responseType: '*/*',
    ...(options || {}),
  });
}

/** 修改部门 POST /api/cms/sysDepartment/update */
export async function updateSysDepartmentUsingPOST(
  body?: cms.SysDepartment,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<boolean>>('/api/cms/sysDepartment/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}
