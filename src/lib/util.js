/**
 * [jsonp jsonp数据请求]
 * @param {[String]} url   [路径]
 * @param {[Object]} datas [传参]
 * @param {[Object]} $this [Vue对象]
 * @return {[Promise]} promise [回调对象]
 */
const jsonp = (url, datas, $this) => {
  if (url.indexOf('http://') === -1) {
    if (!datas.account && !datas.password) {
      datas.a = $this.ACCOUNT
      datas.p = $this.PASSWORD
      datas.company_id = $this.COMPANYID
    }

    url = $this.jsonpUrl + url
  } else {
    datas.a = $this.ACCOUNT
    datas.p = $this.PASSWORD
  }

  const promise = new Promise((resolve, reject) => {
    $this.$http.jsonp(url, {params: datas}).then((rt) => {
      if (rt.body.code === 0) {
        resolve(rt.body.data)
      } else if (rt.body.code === 503) {
        localStorage.removeItem(this.Release + 'ACCOUNT')
        localStorage.removeItem(this.Release + 'PASSWORD')
        localStorage.removeItem(this.Release + 'COMPANYID')

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

export {jsonp}
