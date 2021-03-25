// @ts-ignore
/* eslint-disable */

declare namespace cms {
  type ApiResult<T> = {
    code?: number;
    data?: T;
    message?: string;
    success?: boolean;
    time?: string;
  };

  type BaseEnum = {
    code?: number;
    desc?: string;
  };

  type Link = {
    href?: string;
    templated?: boolean;
  };

  type LoginParam = {
    /** 验证码 */
    code?: string;
    /** 密码 */
    password?: string;
    /** 账号 */
    username?: string;
    /** 验证码Token */
    verifyToken?: string;
  };

  type LoginSysUserTokenVo = {
    loginSysUserVo?: LoginSysUserVo;
    /** token */
    token?: string;
  };

  type LoginSysUserVo = {
    /** 部门id */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 性别，0：女，1：男，默认1 */
    gender?: number;
    /** 头像 */
    head?: string;
    /** 主键 */
    id?: number;
    /** 昵称 */
    nickname?: string;
    /** 权限编码列表 */
    permissionCodes?: string[];
    /** 角色编码 */
    roleCode?: string;
    /** 角色id */
    roleId?: number;
    /** 角色名称 */
    roleName?: string;
    /** 状态，0：禁用，1：启用，2：锁定 */
    state?: number;
    /** 用户名 */
    username?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type ResetPasswordParam = {
    /** 新密码 */
    confirmPassword?: string;
    /** 新密码 */
    newPassword?: string;
    /** 用户id */
    userId?: string;
  };

  type SysDepartment = {
    /** 创建人用户id */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除，0：未删除，1：已删除 */
    deleted?: boolean;
    /** 主键 */
    id?: number;
    /** 部门名称 */
    name?: string;
    /** 父id */
    parentId?: number;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 修改人用户id */
    updateBy?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 版本 */
    version?: number;
  };

  type SysDepartmentPageParam = {
    /** 搜索字符串 */
    keyword?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
  };

  type SysDepartmentQueryVo = {
    /** 创建时间 */
    createTime?: string;
    /** 主键 */
    id?: string;
    /** 部门名称 */
    name?: string;
    /** 父id */
    parentId?: string;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 版本 */
    version?: number;
  };

  type SysDepartmentTreeVo = {
    children?: SysDepartmentTreeVo[];
    /** 创建时间 */
    createTime?: string;
    /** 主键 */
    id?: string;
    /** 部门名称 */
    name?: string;
    /** 父id */
    parentId?: string;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 版本 */
    version?: number;
  };

  type SysLoginLog = {
    /** 区域 */
    area?: string;
    /** 浏览器名称 */
    browserName?: string;
    /** 浏览器版本 */
    browserVersion?: string;
    /** 响应码 */
    code?: number;
    /** 创建时间 */
    createTime?: string;
    /** 移动端设备型号 */
    deviceModel?: string;
    /** 移动端设备名称 */
    deviceName?: string;
    /** 浏览器引擎名称 */
    engineName?: string;
    /** 浏览器引擎版本 */
    engineVersion?: string;
    /** 失败消息记录 */
    exceptionMessage?: string;
    /** 主键 */
    id?: number;
    /** IP */
    ip?: string;
    /** 是否是手机,0:否,1:是 */
    mobile?: boolean;
    /** 运营商 */
    operator?: string;
    /** 系统名称 */
    osName?: string;
    /** 平台名称 */
    platformName?: string;
    /** 备注 */
    remark?: string;
    /** 请求ID */
    requestId?: string;
    /** 是否成功 true:成功/false:失败 */
    success?: boolean;
    /** tokenMd5值 */
    token?: string;
    /** 1:登录，2：登出 */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 浏览器名称 */
    userAgent?: string;
    /** 用户名称 */
    username?: string;
  };

  type SysLoginLogPageParam = {
    /** 搜索字符串 */
    keyword?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
  };

  type SysOperationLog = {
    /** 区域 */
    area?: string;
    /** 浏览器名称 */
    browserName?: string;
    /** 浏览器版本 */
    browserVersion?: string;
    /** 类名 */
    className?: string;
    /** 响应结果状态码 */
    code?: number;
    /** 内容类型 */
    contentType?: string;
    /** 创建时间 */
    createTime?: string;
    /** 移动端设备型号 */
    deviceModel?: string;
    /** 移动端设备名称 */
    deviceName?: string;
    /** 浏览器引擎名称 */
    engineName?: string;
    /** 浏览器引擎版本 */
    engineVersion?: string;
    /** 异常信息 */
    exceptionMessage?: string;
    /** 异常类名称 */
    exceptionName?: string;
    /** 主键 */
    id?: number;
    /** IP */
    ip?: string;
    /** 响应结果消息 */
    message?: string;
    /** 方法名称 */
    methodName?: string;
    /** 是否是手机,0:否,1:是 */
    mobile?: boolean;
    /** 模块名称 */
    module?: string;
    /** 日志名称 */
    name?: string;
    /** 运营商 */
    operator?: string;
    /** 系统名称 */
    osName?: string;
    /** 请求参数 */
    param?: string;
    /** 全路径 */
    path?: string;
    /** 平台名称 */
    platformName?: string;
    /** 备注 */
    remark?: string;
    /** 是否是JSON请求映射参数 */
    requestBody?: boolean;
    /** 请求ID */
    requestId?: string;
    /** 请求方式，GET/POST */
    requestMethod?: string;
    /** 0:失败,1:成功 */
    success?: boolean;
    /** tokenMd5值 */
    token?: string;
    /** 0:其它,1:新增,2:修改,3:删除,4:详情查询,5:所有列表,6:分页列表,7:其它查询,8:上传文件 */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 用户ID */
    userId?: number;
    /** 用户名称 */
    userName?: string;
  };

  type SysOperationLogPageParam = {
    /** 搜索字符串 */
    keyword?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
  };

  type SysPermission = {
    /** 唯一编码 */
    code?: string;
    /** 创建人用户id */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除，0：未删除，1：已删除 */
    deleted?: boolean;
    /** 图标 */
    icon?: string;
    /** 主键 */
    id?: number;
    /** 层级，1：第一级，2：第二级，N：第N级 */
    level?: number;
    /** 权限名称 */
    name?: string;
    /** 父id */
    parentId?: number;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 类型，1：菜单，2：按钮 */
    type?: number;
    /** 修改人用户id */
    updateBy?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 路径 */
    url?: string;
    /** 版本 */
    version?: number;
  };

  type SysPermissionPageParam = {
    /** 搜索字符串 */
    keyword?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
  };

  type SysPermissionQueryVo = {
    /** 唯一编码 */
    code?: string;
    /** 创建时间 */
    createTime?: string;
    /** 图标 */
    icon?: string;
    /** 主键 */
    id?: string;
    /** 层级，1：第一级，2：第二级，N：第N级 */
    level?: number;
    /** 权限名称 */
    name?: string;
    /** 父id */
    parentId?: string;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 类型，1：菜单，2：按钮 */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 路径 */
    url?: string;
    /** 版本 */
    version?: number;
  };

  type SysPermissionTreeVo = {
    /** 子节点集合 */
    children?: SysPermissionTreeVo[];
    /** 唯一编码 */
    code?: string;
    /** 创建时间 */
    createTime?: string;
    /** 图标 */
    icon?: string;
    /** 主键 */
    id?: string;
    /** 层级，1：第一级，2：第二级，N：第N级 */
    level?: number;
    /** 权限名称 */
    name?: string;
    /** 父id */
    parentId?: string;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态，0：禁用，1：启用 */
    state?: number;
    /** 类型，1：菜单，2：按钮 */
    type?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 路径 */
    url?: string;
    /** 版本 */
    version?: number;
  };

  type SysRole = {
    /** 角色唯一编码 */
    code?: string;
    /** 创建人用户id */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除，0：未删除，1：已删除 */
    deleted?: boolean;
    /** 主键 */
    id?: number;
    /** 角色名称 */
    name?: string;
    /** 备注 */
    remark?: string;
    /** 角色状态，0：禁用，1：启用 */
    state?: number;
    /** 角色类型 */
    type?: number;
    /** 修改人用户id */
    updateBy?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 版本 */
    version?: number;
  };

  type SysRolePageParam = {
    /** 角色编码 */
    code?: string;
    /** 搜索字符串 */
    keyword?: string;
    /** 角色名称 */
    name?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
    /** 角色状态，0：禁用，1：启用 */
    state?: number;
  };

  type SysUser = {
    /** 创建人用户id */
    createBy?: number;
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除，0：未删除，1：已删除 */
    deleted?: boolean;
    /** 部门id */
    departmentId?: number;
    /** 性别，0：女，1：男，默认1 */
    gender?: number;
    /** 头像 */
    head?: string;
    /** 主键 */
    id?: number;
    /** 昵称 */
    nickname?: string;
    /** 密码 */
    password?: string;
    /** 手机号码 */
    phone?: string;
    /** 备注 */
    remark?: string;
    /** 角色id */
    roleId?: number;
    /** 盐值 */
    salt?: string;
    /** 状态，0：禁用，1：启用，2：锁定 */
    state?: number;
    /** 修改人用户id */
    updateBy?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 用户名 */
    username?: string;
    /** 版本 */
    version?: number;
  };

  type SysUserPageParam = {
    /** 创建时间结束 */
    createTimeEnd?: string;
    /** 创建时间开始 */
    createTimeStart?: string;
    /** 部门id */
    departmentId?: string;
    /** 搜索字符串 */
    keyword?: string;
    /** 昵称 */
    nickname?: string;
    /** 页码,默认为1 */
    pageIndex?: number;
    /** 页大小,默认为10 */
    pageSize?: number;
    /** 排序 */
    pageSorts?: OrderItem[];
    /** 角色id */
    roleId?: string;
    /** 状态，0：禁用，1：启用，2：锁定 */
    state?: number;
    /** 用户名 */
    username?: string;
  };

  type SysUserQueryVo = {
    /** 创建时间 */
    createTime?: string;
    /** 逻辑删除，0：未删除，1：已删除 */
    deleted?: number;
    /** 部门id */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 性别，0：女，1：男，默认1 */
    gender?: number;
    /** 头像 */
    head?: string;
    /** 主键 */
    id?: string;
    /** 昵称 */
    nickname?: string;
    /** 手机号码 */
    phone?: string;
    /** remark */
    remark?: string;
    /** 角色id */
    roleId?: string;
    /** 角色名称 */
    roleName?: string;
    /** 状态，0：禁用，1：启用，2：锁定 */
    state?: number;
    /** 修改时间 */
    updateTime?: string;
    /** 用户名 */
    username?: string;
    /** 版本 */
    version?: number;
  };

  type UpdatePasswordParam = {
    /** 新密码 */
    confirmPassword?: string;
    /** 新密码 */
    newPassword?: string;
    /** 原密码 */
    oldPassword?: string;
    /** 用户id */
    userId?: string;
  };

  type UpdateSysRolePermissionParam = {
    /** 权限ID集合 */
    permissionIds?: number[];
    /** 角色ID */
    roleId?: number;
  };

  type UploadHeadParam = {
    /** 头像路径 */
    head?: string;
    /** 用户ID */
    id?: number;
  };

  type Paging<T> = {
    /** 页码 */
    pageIndex?: number;
    /** 页大小 */
    pageSize?: number;
    /** 数据列表 */
    records?: T[];
    /** 总行数 */
    total?: number;
  };

  type EnumVo<T> = {
    baseEnum?: T;
    code?: number;
    desc?: string;
  };
}
