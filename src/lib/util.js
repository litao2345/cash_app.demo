/**
 * [jsonp jsonp数据请求]
 * @param {[String]} url   [路径]
 * @param {[Object]} datas [传参]
 * @param {[Object]} $this [Vue对象]
 * @return {[Promise]} promise [回调对象]
 */
const jsonp = (url, datas, $this) => {
  if (!datas.account && !datas.password) {
    datas.a = $this.ACCOUNT
    datas.p = $this.PASSWORD
    datas.shop_id = $this.SHOPID
  }

  const promise = new Promise((resolve, reject) => {
    url = 'http://' + Release + 'cash.goonjin.com/api/' + url
    $this.$http.jsonp(url, {params: datas}).then((rt) => {
      if (rt.body.code === 0) {
        resolve(rt.body.data)
      } else if (rt.body.code === 503) {
        localStorage.removeItem(Release + 'ACCOUNT')
        localStorage.removeItem(Release + 'PASSWORD')

        location.reload()
      } else {
        $this.err = true
        $this.errmsg = rt.body.msg
        reject(rt.body.msg)
      }
    }, (xhr, type, errorThrown) => {
      $this.err = true
      $this.errmsg = '网络异常，请在连接正常后重试'
      reject(type)
    })
  })

  return promise
}

export {
  jsonp
}
