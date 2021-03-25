// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 系统操作日志分页列表 POST /api/cms/sysOperationLog/getPageList */
export async function getSysOperationLogPageListUsingPOST(
  body?: cms.SysOperationLogPageParam,
  options?: { [key: string]: any },
) {
  return request<cms.ApiResult<cms.Paging<cms.SysOperationLog>>>(
    '/api/cms/sysOperationLog/getPageList',
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
