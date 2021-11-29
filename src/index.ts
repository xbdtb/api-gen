/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import type { OperationObject } from 'openapi3-ts';
import fetch from 'node-fetch';
import converter from 'swagger2openapi';
import { ServiceGenerator } from './serviceGenerator';
import { mockGenerator } from './mockGenerator';
import Log from './log';

const getImportStatement = (requestLibPath: string) => {
  if (requestLibPath && requestLibPath.startsWith('import')) {
    return requestLibPath;
  }
  if (requestLibPath) {
    return `import request from '${requestLibPath}'`;
  }
  return `import { request } from "umi"`;
};

export type GenerateServiceProps = {
  requestLibPath?: string;
  requestImportStatement?: string;
  /**
   * api 的前缀
   */
  apiPrefix?:
    | string
    | ((params: {
        path: string;
        method: string;
        namespace: string;
        functionName: string;
        autoExclude?: boolean;
      }) => string);
  /**
   * 生成的文件夹的路径
   */
  serversPath?: string;
  /**
   * openAPI 3.0 的地址
   */
  schemaPath?: string;
  /**
   * 项目名称
   */
  projectName?: string;

  hook?: {
    /** 自定义函数名称 */
    customFunctionName?: (data: OperationObject) => string;
    /** 自定义类名 */
    customClassName?: (tagName: string) => string;
  };
  namespace?: string;

  mockFolder?: string;
};

const converterSwaggerToOpenApi = (swagger: any) => {
  if (!swagger.swagger) {
    return swagger;
  }
  return new Promise((resolve, reject) => {
    converter.convertObj(swagger, {}, (err, options) => {
      Log(['💺 将 Swagger 转化为 openAPI']);
      if (err) {
        reject(err);
        return;
      }
      resolve(options.openapi);
    });
  });
};

export const getSchema = async (schemaPath: string) => {
  if (schemaPath.startsWith('http')) {
    const response = await fetch(schemaPath);
    let text = await response.text();
    text = text.replace(/«/g, '<');
    text = text.replace(/»/g, '>');
    return JSON.parse(text);
  }
  let schema = require(schemaPath);
  schema = schema.replace(/«/g, '<');
  schema = schema.replace(/»/g, '>');
  return schema;
};

const getOpenAPIConfig = async (schemaPath: string) => {
  const schema = await getSchema(schemaPath);
  const openAPI = await converterSwaggerToOpenApi(schema);
  if (!schema) {
    return null;
  }
  return openAPI;
};

// 从 appName 生成 service 数据
export const generateService = async ({
  requestLibPath,
  schemaPath,
  mockFolder,
  ...rest
}: GenerateServiceProps, includeServices: any = [], excludeServices: any = [], customTypes: any = {}) => {
  const openAPI = await getOpenAPIConfig(schemaPath);
  const requestImportStatement = getImportStatement(requestLibPath);
  const serviceGenerator = new ServiceGenerator(
    {
      // namespace: 'API',
      requestImportStatement,
      ...rest,
    },
    openAPI,
  );
  serviceGenerator.genFile(includeServices, excludeServices, customTypes);

  if (mockFolder) {
    await mockGenerator({
      openAPI,
      mockFolder: mockFolder || './mocks/',
    });
  }
};

export async function generateByConfig(config) {
  const keys = Object.keys(config);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const { requestLibPath, serversPath, schemaPath, mockFolder, includeServices, excludeServices, customTypes } = config[key];
    // eslint-disable-next-line no-await-in-loop
    await generateService({ requestLibPath, serversPath, schemaPath, projectName: key, namespace: key, mockFolder}, includeServices, excludeServices, customTypes);
  }
}
