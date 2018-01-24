/**
 * [api 开店火收银多端统一 API]
 */
var api = function () {}

/**
 * [WebBridge Web端入口]
 * @param {[String]} types [调用方法]
 * @param {[String]} datas [传参]
 * @return {[]} []
 */
api.prototype.WebBridge = function (types, datas) {
  datas = JSON.parse(datas)
  this[types](datas)
}

/**
 * [ClientEnveriment 客户端信息环境]
 * @param {[Object]} datas [传参]
 * @return {[]} []
 */
api.prototype.ClientEnveriment = function (datas) {
  kdh.Client_Datas = datas
}

/**
 * [NetworkCheck 检测网络状态]
 * @param {[Object]} datas [传参]
 * @return {[]} []
 */
api.prototype.NetworkCheck = function (datas) {
  kdh.Net_Status = parseInt(datas.state)
}

/**
 * [Error 错误]
 * @param {[Object]} datas [传参]
 * @return {[]} []
 */
api.prototype.Error = function (datas) {
  console.log(datas)
}
