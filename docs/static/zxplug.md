# zxplug
> 使用插件，需在`对应的js`文件中加入以下代码
```javascript
import zxplug from '@/common/plug/zxplug'
Vue.use(zxplug)
```

## loading
```javascript
this.$loading({msg:'加载中...'})        // 打开loading
this.$loading.close()  // 关闭loading
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| msg    |  String | loading提示文字  |  ''   |
| mask    |  Boolean | 是否显示遮罩  |  true   |
| type    |  String | loading样式，可取值`scale`, `circle`  |  'circle'   |

## nothing
```javascript
this.$nothing()        // 显示nothing
this.$nothing.close()  // 关闭nothing
```
| 参数      |     类型 |   描述   |   默认值   |
| :--------: | :--------: | :------: |  :------:  |
| msg    |  String | 提示文字  |  ''   |