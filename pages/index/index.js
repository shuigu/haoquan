//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    proxyName: app.proxyInfo.proxy_name
  },
  onLoad: function () {
  },
  onShareAppMessage(){
    return {
      title: '自定义转发标题',
      path: 'pages/index/index?proxy_id=2',
    }
  }
})
