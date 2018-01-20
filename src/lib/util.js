/**
 * [util 公共方法类]
 */
const util = {
  /**
   * [jsonp 网络请求]
   * @param {[String]} url   [接口]
   * @param {[Object]} datas [传参]
   * @param {[Object]} that  [Vue全局对象]
   * @return {[Promise]} [实例化异步返回]
   */
  jsonp: (url, datas, that) => {
    if (!datas.account && !datas.password) {
      const $log = JSON.parse(sessionStorage.getItem('log'))
      Object.assign(datas, $log)
    }

    const promise = new Promise((resolve, reject) => {
      url = window.Url + 'api/' + url
      that.$http.jsonp(url, {params: datas})
      .then((rt) => {
        if (rt.body.code === 0) {
          resolve(rt.body.data)
        } else {
          that.lod = false
          that.$notify.error({
            title: '出错了',
            message: rt.body.msg,
            position: 'top-right',
            offset: 100
          })

          reject(rt.body)
        }
      }, (xhr, type, errorThrown) => {
        that.lod = false
        that.$message({
          type: 'error',
          message: '网络异常，请在连接正常后重试',
          showClose: true
        })

        reject(type)
      })
    })

    return promise
  },
  /**
   * [sync 数据同步]
   * @param {[String]}   url   [接口]
   * @param {[Object]}   datas [传参]
   * @param {[Function]} http  [网络请求]
   * @return {[Promise]} [实例化异步返回]
   */
  sync: (url, datas, http) => {
    const $log = JSON.parse(sessionStorage.getItem('log'))
    Object.assign(datas, $log)

    const promise = new Promise((resolve, reject) => {
      url = window.Url + 'api/' + url
      http.jsonp(url, {params: datas})
      .then((rt) => {
        if (rt.body.code === 0) {
          resolve(rt.body.data)
        } else {
          reject(rt.body)
        }
      }, (xhr, type, errorThrown) => {
        reject(type)
      })
    })

    return promise
  }
}

const _jsonp = util.jsonp
const _sync = util.sync

export {
  _jsonp,
  _sync
}
