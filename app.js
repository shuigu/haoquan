//app.js
const proxy = require("/utils/proxy.js")
const Tag = "app.js"

App({
  onLaunch: function (options) {
    console.log(Tag, " options ", options)
    let query = options.query
    this.queryDeal(query)
  },
  queryDeal(query){
    let proxyID = query.proxy_id
    this.proxyInfo = proxy.getProxyInfo(proxyID)    
    console.log(Tag," ",this.proxyInfo)
  },
  globalData: {
    proxyInfo:null,
  }
})