// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 系统登录日志分页列表 POST /api/cms/sysLoginLog/getPageList */
export async function getSysLoginLogPageListUsingPOST(
  body?: cms.SysLoginLogPageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysLoginLog>>>('/api/cms/sysLoginLog/getPageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    responseType: '*/*',
    ...(options || {}),
  });
}
