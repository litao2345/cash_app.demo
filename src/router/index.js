import Vue from 'vue'

import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Signout from '@/views/Signout.vue'
import Failed from '@/views/404.vue'

import Shopping from '@/views/Shopping'
import Orders from '@/views/Orders'

import Message from '@/views/Message'
import MessageUser from '@/views/Message/user'
import MessageCode from '@/views/Message/code'
import MessageTakeout from '@/views/Message/takeout'

import Clear from '@/views/Clear'

import Members from '@/views/Members'
import MembersManage from '@/views/Members/manage'
import MembersNewmembers from '@/views/Members/newmembers'

import Printer from '@/views/Printer'
import Sync from '@/views/Sync'

import Settings from '@/views/Settings'
import SettingsBase from '@/views/Settings/base.vue'
import SettingsBasic from '@/views/Settings/basic.vue'
import SettingsBack from '@/views/Settings/back.vue'
import SettingsTips from '@/views/Settings/tips.vue'
import SettingsRecord from '@/views/Settings/record.vue'
import SettingsPrint from '@/views/Settings/print.vue'
import SettingsCategory from '@/views/Settings/category.vue'
import SettingsOther from '@/views/Settings/other.vue'
import SettingsShop from '@/views/Settings/shop.vue'
import SettingsSystem from '@/views/Settings/system.vue'
import SettingsUs from '@/views/Settings/us.vue'

Vue.use(Router)

export default new Router({
  routes: [
    /**
     * [Home 主视图]
     */
    {
      name: '主视图',
      path: '/',
      component: Home,
      redirect: {
        path: '/shopping'
      },
      children: [
        {
          name: '点　　餐',
          path: '/shopping',
          component: Shopping
        },

        {
          name: '订　　单',
          path: '/orders',
          component: Orders
        },

        {
          name: '消息中心',
          path: '/message',
          component: Message,
          redirect: {
            path: '/message/user'
          },
          children: [
            {
              name: '客户消息',
              path: '/message/user',
              component: MessageUser
            },
            {
              name: '二维码点餐',
              path: '/message/code',
              component: MessageCode
            },
            {
              name: '外带消息',
              path: '/message/takeout',
              component: MessageTakeout
            }
          ],
          hidden: true
        },

        {
          name: '商品沽清',
          path: '/clear',
          component: Clear,
          hidden: true
        },

        {
          name: '会　　员',
          path: '/members',
          component: Members,
          redirect: {
            path: '/members/manage'
          },
          children: [
            {
              name: '会员管理',
              path: '/members/manage',
              component: MembersManage
            },
            {
              name: '新建会员',
              path: '/members/newmembers',
              component: MembersNewmembers
            }
          ]
        },

        {
          name: '设置状态',
          path: '/printer',
          component: Printer
        },

        {
          name: '数据同步',
          path: '/sync',
          component: Sync
        },

        {
          name: '系统设置',
          path: '/settings',
          component: Settings,
          redirect: {
            path: '/settings/base'
          },
          children: [
            {
              name: '常规设置',
              path: '/settings/base',
              component: SettingsBase
            },
            {
              name: '配置普通打印机',
              path: '/settings/basic',
              component: SettingsBasic
            },
            {
              name: '配置后厨打印机',
              path: '/settings/back',
              component: SettingsBack
            },
            {
              name: '配置标签打印机',
              path: '/settings/tips',
              component: SettingsTips
            },
            {
              name: '配置交班小票打印设置',
              path: '/settings/record',
              component: SettingsRecord
            },
            {
              name: '配置打印格式',
              path: '/settings/print',
              component: SettingsPrint
            },
            {
              name: '后厨分类打印',
              path: '/settings/category',
              component: SettingsCategory
            },
            {
              name: '其它设备',
              path: '/settings/other',
              component: SettingsOther
            },
            {
              name: '门店选择',
              path: '/settings/shop',
              component: SettingsShop
            },
            {
              name: '系统更新',
              path: '/settings/system',
              component: SettingsSystem
            },
            {
              name: '关于我们',
              path: '/settings/us',
              component: SettingsUs
            }
          ]
        },

        {
          name: '交　　班',
          path: '/signout',
          component: Signout
        },

        {
          name: '404',
          path: '/404',
          component: Failed,
          hidden: true
        }
      ]
    },

    /**
     * [Login 登录]
     */
    {
      name: '登录',
      path: '/login',
      component: Login
    },

    /**
     * [Others 其它]
     */
    {
      name: '其它',
      path: '*',
      redirect: {
        path: '/404'
      }
    }
  ]
})
