/**
 * [_ 前置方法库 API]
 */
var _ = {
  /**
   * [tofix 格式化价格]
   * @param {[String]} price [价格]
   * @return {[String]} [返回价格]
   */
  tofix: function (price) {
    var rt = parseFloat(parseFloat(price).toFixed(2))
    if (isNaN(rt)) return 0
    else return rt
  },

  /**
   * [size 格式化单行字符串]
   * @param {[String]} str  [字符串]
   * @param {[Int]}    max  [显示长度]
   * @param {[Int]}    type [显示方式]
   * @return {[String]} [返回字符串]
   */
  size: function (str, max, type) {
    str = str.toString()
    var s = str.replace(/[^\x00-\xff]/g, '__')

    var strlen = s.length
    if (strlen > max) return str.substr(0, max)

    var arr = []
    var len = max - strlen
    for (var i = 0; i < len; i++) arr.push('')

    if (type === 1) return arr.join(' ') + str
    else return str + arr.join(' ')
  }
}

/**
 * [app 公共方法库 API]
 */
var app = function () {}

/**
 * [Tips 提交打印格式]
 * @param {[Object]} datas [打印数据]
 * @param {[Object]} pays  [支付信息]
 * @return {[]} []
 */
app.prototype.Tips = function (datas, pays) {
  var arr = []
  arr.push('')
  arr.push(_.size(Global.shopname, 18, 1))
  arr.push('流水号：' + datas.table_order_id)
  arr.push('餐　桌：' + datas.table_name)
  arr.push('=============================')
  arr.push('名称     单价   数量  金额  ')

  _.each(datas.goods, function (v){
    arr.push(v.name)

    var item = []
    item.push(_.size(' ', 10))
    item.push(_.size(v.price, 8))
    item.push(_.size(v.cnt, 7))
    item.push(v.total_price)

    arr.push(item.join(''))

    if (v.tag_name.length > 0) arr.push(_.size(' ', 10) + v.tag_name)
  })

  arr.push('')
  arr.push('合计：' + datas.total)
  arr.push('服务人员：' + Global.waiter)

  if (pays === null)
  {
    arr.push('下单时间：' + datas.table_order_time)
    arr.push('划菜单')
    arr.push('祝您用餐愉快')
  }
  else
  {
    arr.push('订单号：' + datas.order_no)
    arr.push('付款单')
    arr.push('=============================')
    arr.push('已支付')
    arr.push('支付方式：' + pays.type)
    arr.push('支付金额：' + pays.total + '元')
  }

  arr.push('')
  arr.push('')
  arr.push('')
  arr.push('')
  arr.push('')

  kdh.ClientBridge('printer', arr.join('\n'))
}

/**
 * [WeightDisCount 称重商品折扣计算]
 * @param {[Int]}   gid   [商品ID]
 * @param {[Float]} price [总价]
 * @return {[Float]} [优惠金额]
 */
app.prototype.WeightDisCount = function (gid, price) {
  if (gid <= 0) return 0

  if (typeof(Global) != 'undefined' && Global.goods_activity && Global.goods_activity.length) {
    var total = _.tofix(price)
    if (total <= 0) return 0

    for (var i = 0; i < Global.goods_activity.length; i++) {
      var activity   = Global.goods_activity[i].discount_program
      var goods_list = Global.goods_activity[i].goods
      var find_goods = false

      // 检查活动是否过期
      var time = parseInt(new Date().getTime() / 1000)
      if (parseInt(Global.goods_activity[i].end_time) < time) return 0

      for (var k in goods_list) {
        var goods = goods_list[k]
        if (parseInt(gid) == parseInt(goods.gid)) {
          find_goods = true
          break
        }
      }

      if (!find_goods) return 0

      // 满元
      if (activity.fav == 2) {
        for (var j = activity.list.cond.length - 1; j >= 0; j--) {
          var cond = activity.list.cond[j]

          // 满足条件，结算优惠金额
          if (total >= cond) {
            if (activity.fav_type == 1) {
              // 打折
              var discount = _.tofix(activity.list.val[j]) * 0.1
              return _.tofix(total - _.tofix(total * discount))
            } else if (activity.fav_type == 2) {
              // 减钱
              var money = _.tofix(activity.list.val[j])
              return money
            }
          }
        }
      }
    }
  }

  return 0
}

/**
 * [GoodsDisCount 商品折扣计算]
 * @param {[Int]}   gid   [商品ID]
 * @param {[Float]} price [单价]
 * @param {[Int]}   sum   [数量]
 * @return {[Float]} [优惠金额]
 */
app.prototype.GoodsDisCount = function (gid, price, sum) {
  if (gid <= 0) return 0

  if (typeof(Global) != 'undefined' && Global.goods_activity && Global.goods_activity.length) {
    var total = _.tofix(_.tofix(price) * sum)
    if (total <= 0) return 0

    // 目前不允许多个活动同时存在，否则只计算第一个活动优惠方案
    for (var i = 0; i < Global.goods_activity.length; i++) {
      var activity   = Global.goods_activity[i].discount_program
      var goods_list = Global.goods_activity[i].goods
      var find_goods = false

      // 检查活动是否过期
      var time = parseInt(new Date().getTime() / 1000)
      if (parseInt(Global.goods_activity[i].end_time) < time) return 0

      for (var k in goods_list) {
        var goods = goods_list[k]
        if (parseInt(gid) == parseInt(goods.gid)) {
          find_goods = true
          break
        }
      }

      if (!find_goods) return 0

      if (activity.fav == 1) {
        // 满件
        for (var j = activity.list.cond.length - 1; j >= 0; j--) {
          var cond = activity.list.cond[j]

          // 满足条件，结算优惠金额
          if (sum >= cond) {
            if (activity.fav_type == 1) {
              // 打折
              var discount = _.tofix(activity.list.val[j]) * 0.1
              return _.tofix(total - _.tofix(total * discount))
            } else if (activity.fav_type == 2) {
              // 减钱
              var rt = _.tofix(activity.list.val[j])
              return rt
            }
          }
        }
      } else if (activity.fav == 2) {
        // 满元
        for (var j = activity.list.cond.length - 1; j >= 0; j--) {
          var cond = activity.list.cond[j]

          // 满足条件，结算优惠金额
          if (total >= cond) {
            if (activity.fav_type == 1) {
              // 打折
              var discount = _.tofix(activity.list.val[j]) * 0.1
              return _.tofix(total - _.tofix(total * discount))
            } else if (activity.fav_type == 2) {
              // 减钱
              var rt = _.tofix(activity.list.val[j])
              return rt
            }
          }
        }
      }
    }
  }

  return 0
}

/**
 * [DisCount 整单折扣计算]
 * @param {[Array]} goods [商品列表]
 * @param {[Int]}   sum   [数量]
 * @return {[Float]} [优惠金额]
 */
app.prototype.DisCount = function (goods, sum) {
  if (typeof(GLOBAL) != 'undefined' && GLOBAL.activity && GLOBAL.activity.length) {
    var total = 0.0
    for (var i = 0; i < goods.length; i++) {
      total = _.tofix(total + _.tofix(goods[i].price))
    }

    for (var i = 0; i < GLOBAL.activity.length; i++) {
      var activity = GLOBAL.activity[i].discount_program

      if (activity.fav == 1) {
        // 满件
        for (var j = activity.list.cond.length - 1; j >= 0; j--) {
          var cond = activity.list.cond[j]

          // 满足条件，结算优惠金额
          if (sum >= cond) {
            if (activity.fav_type == 1) {
              // 打折
              var discount = _.tofix(activity.list.val[j]) * 0.1
              return _.tofix(total - _.tofix(total * discount))
            } else if (activity.fav_type == 2) {
              // 减钱
              var money = _.tofix(activity.list.val[j])
              return money
            }
          }
        }
      } else if (activity.fav == 2) {
        // 满元
        for (var j = activity.list.cond.length - 1; j >= 0; j--) {
          var cond = activity.list.cond[j]

          // 满足条件，结算优惠金额
          if (total >= cond) {
            if (activity.fav_type == 1) {
              // 打折
              var discount = _.tofix(activity.list.val[j]) * 0.1
              return _.tofix(total - _.tofix(total * discount))
            } else if (activity.fav_type == 2) {
              // 减钱
              var money = _.tofix(activity.list.val[j])
              return money
            }
          }
        }
      }
    }
  }

  return 0
}
