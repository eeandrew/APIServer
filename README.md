# APIServer
Mock Rest API Sever based on Meteor. No CROS Restrictions!

#### 用法
1. 安装meteor
```
curl https://install.meteor.com/ | sh
```

2. 启动
```
cd APIServer
meteor -p 8000
```
```
H5 TO Navive Protocol

lu://task/?{pluginName}={params}
pluginName: 插件名称,如navp
params:
{
  ------------------pluginName : "NavigationBarController.class",
  cmd : "updateNavgationBarContent",
  args : {
            lBtn : {
               color:'#FFFFF',
               txt:'返回',
               icon:'back-arrow',
               callback : 'onBackButtonClicked'
            },
            rBtn : {
              ...
              同leftButton
            },
            title : {
              color : '#FFFFFF',
              txt : '稳赢安e+',
              callback : 'onTitleButtonClicked'
              icon : 'location',
              type : 'text', // normal: 单行文字，subTitle:带小标题 tab: 选项卡切换等...
            }
            
    }
  
}
```
