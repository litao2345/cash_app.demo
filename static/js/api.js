/**
 * [api 开店火收银多端统一 API]
 */
var api = function ()
{};

/**
 * [WebBridge Web端入口]
 * @param {[String]} type  [调用方法]
 * @param {[String]} datas [传参]
 * @return {[]} []
 */
api.prototype.WebBridge = function (type, datas)
{
	datas = JSON.parse(datas);

	switch (type)
	{
		case 'error':
			this.Error(datas);
			break;

		default:
			break;
	}
};

/**
 * [Error 错误]
 * @param {[Object]} datas [传参]
 * @return {[]} []
 */
api.prototype.Error = function (datas)
{
	console.log(datas);
};