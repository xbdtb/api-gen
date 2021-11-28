const serversPath = './services/generated';

const customTypes = {
  ApiResult: {
    typeName: 'ApiResult<T = any>',
    type: 'Record<string, any>',
    props: [
      {
        type: 'number',
        format: 'int32',
        name: 'code',
        desc: '',
        required: false,
      },
      {
        type: 'T',
        name: 'data',
        desc: '',
        required: false,
      },
      {
        type: 'string',
        name: 'message',
        desc: '',
        required: false,
      },
      {
        type: 'boolean',
        name: 'success',
        desc: '',
        required: false,
      },
      {
        type: 'string',
        format: 'date-time',
        name: 'time',
        desc: '',
        required: false,
      },
    ],
  },
  Paging: {
    typeName: 'Paging<T = any>',
    type: 'Record<string, any>',
    props: [
      {
        type: 'number',
        description: '页码',
        format: 'int64',
        name: 'pageIndex',
        desc: '页码',
        required: false,
      },
      {
        type: 'number',
        description: '页大小',
        format: 'int64',
        name: 'pageSize',
        desc: '页大小',
        required: false,
      },
      {
        type: 'T[]',
        description: '数据列表',
        items: {
          $ref: '#/components/schemas/SysDepartmentQueryVo',
        },
        name: 'records',
        desc: '数据列表',
        required: false,
      },
      {
        type: 'number',
        description: '总行数',
        format: 'int64',
        name: 'total',
        desc: '总行数',
        required: false,
      },
    ],
  },
  EnumVo: {
    typeName: 'EnumVo<T = any>',
    type: 'Record<string, any>',
    props: [
      {
        $ref: '#/components/schemas/BaseEnum',
        name: 'baseEnum',
        type: 'T',
        desc: '',
        required: false,
      },
      {
        type: 'number',
        format: 'int32',
        name: 'code',
        desc: '',
        required: false,
      },
      {
        type: 'string',
        name: 'desc',
        desc: '',
        required: false,
      },
    ],
  },
};

module.exports = {
  // api: {
  //   schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json',
  //   serversPath,
  // },
  // venus: {
  //   schemaPath: 'http://localhost:8890/api/venus/v3/api-docs',
  //   serversPath,
  //   customTypes,
  // },
  cms: {
    schemaPath: 'http://localhost:8889/api/cms/v3/api-docs',
    serversPath,
    customTypes,
  },
};
