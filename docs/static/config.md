# config
## config（请求配置）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| OS_URL    |  APP请求远程服务器基地址  |  -   |
| NODE_URL    |   PC请求地址  |  这里使用了代理请求  |
| OS_FILEURL    |   图片上传地址  | -  |
| IMG_URL    |   图片链接地址  | -  |
| SOCKET_BASE_URL    |   webSocket请求地址  | 暂无用处  |

## 接口名
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| UserLogin    |  用户登录  |  -   |
| OrigLoad    |  加载组织信息  |  -   |
| UserReset    |  用户重置登录信息  |  -   |
| UserRegister    |  用户注册  |  -   |
| ReadDataById    |  通过SearchGuide查询对象集合  |  -   |
| ReadData    |  通过searchGuide查询对象  |  -   |
| ReadStatistic    |  通过SearchGuide查询对象集合  |  -   |
| ExecuteCommand    |  执行单条Command指令  |  -   |
| VerifyPhone    |  验证短信  |  -   |
| SendMessage    |  推送消息  |  -   |
| ApplyPayment    |  申请支付  |  -   |
| ApplyRefund    |  申请支付  |  -   |

## resetKinds（修改配置）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| MODIFY_USER_NAME    |  修改帐户  |  -   |
| MODIFY_PASS_WORD  |   修改密码  | -  |
| BINDING_PHONE_NUMBER    |   手机绑定  | -  |
| BINDING_AUTH_CODE  |   授信绑定  | -  |
| BINDING_IDENT_CODE  |   硬件绑定  | -  |
| RELIEVE_IDENT_PHONE  |   手机解绑  | -  |
| RELIEVE_AUTH_CODE  |   授信解绑  | -  |
| RELIEVE_IDENT_CODE  |   硬件绑定  | -  |

## authKinds（第三方登录）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| WECHAT    |  微信  |  -   |
| QQ  |   qq  | -  |

## authModes（设备）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| JSAPI    |  网站  |  -   |
| APP  |   app  | -  |
| NATIVE  |   暂未使用  | -  |

## pageCounts（请求数目）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| NON    |  请求0条数据  |  -   |
| ONE    |  请求1条数据  |  -   |
| NOR    |  请求100条数据  |  -   |
| MID    |  请求200条数据  |  -   |
| MOR    |  请求500条数据  |  -   |
| MAX    |  请求1000条数据  |  -   |
| LES    |  请求50条数据  |  -   |
| LIT    |  请求20条数据  |  -   |
| MIN    |  请求10条数据  |  -   |
| FEW    |  请求5条数据  |  -   |
| BIT    |  请求2条数据  |  -   |
| ALL    |  请求全部数据  |  -   |

## commandKinds（执行操作）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| UPDATE    |  执行`更新`操作  |  -   |
| INSERT    |  执行`插入`操作  |  -   |
| DROP    |  执行`注销`操作  |  -   |
| DELETE    |  执行`删除`操作  |  -   |
| COMMAND    |  `指令`  |  -   |

## commandModes
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| AUTOMATIC    |  自动  |  -   |
| CUSTOMIZE    |  定制  |  -   |

## loginModes
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| AUTO    |  自动  |  -   |
| QUICK    |  快速  |  -   |
| AUTH    |  授信  |  -   |
| PHONE    |  手机  |  -   |
| ACCOUNT    |  账号  |  -   |

## clientPlats
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| UNKNOW    |  未知  |  HTTP协议   |
| COMPUTER    |  电脑  |  TCP   |
| MOBILE    |  手机  |  HTTP   |
| TABLET    |  平板  |  HTTP   |
| WEBSITE    |  网站  |  HTTP   |

## clientSystems
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| UNKNOW    |  未知  |  -   |
| WINDOWS    |  windows系统  |  -   |
| IOS    |  iOS系统  |  -   |
| ANDROID    |  安卓系统  |  -   |

## sortTypes（排序）
| 参数名      |  描述   |   备注   |
| :--------: | :------: |  :------:  |
| ID    |  按id升序排序  |  -   |
| ID_DESC    |  按id降序排序  |  -   |
| UID    |  按UID升序排序  |  -   |
| UID_DESC    |  按UID降序排序  |  -   |
| FIRST    |  按FIRST升序排序  |  -   |
| FIRST_DESC    |  按FIRST降序排序  |  -   |
| LAST    |  按LAST升序排序  |  -   |
| LAST_DESC    |  按LAST降序排序  |  -   |
| ANY_KEY    |  按ANY_KEY升序排序  |  -   |
| ANY_KEY_DESC    |  按ANY_KEY降序排序  |  -   |