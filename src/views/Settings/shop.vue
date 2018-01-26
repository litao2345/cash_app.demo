<template>
  <div class="shop">
    <div class="deal">
      <el-button type="primary"
        @click="Save_Changes">保存</el-button>
    </div>
    <ul class="selected">
      <li :class="shop.id === item.id ? 'active' : ''"
        @click="Change_Selected(item)"
        v-for="item of items">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      items: [], // 店铺数据
      selected: {}, // 当前店铺
      shop: {} // 选择店铺
    }
  },
  computed: {
  },
  methods: {
    /**
     * [Init_Datas 初始化数据]
     * @return {[]} []
     */
    Init_Datas () {
      const $use = JSON.parse(sessionStorage.getItem('use'))
      this.items = $use.shops

      const $shop = JSON.parse(localStorage.getItem('shop'))
      this.selected = $shop
      Object.assign(this.shop, $shop) // 克隆
    },

    /**
     * [Change_Selected 更改选择]
     * @param {[Object]} item [店铺数据]
     * @return {[]} []
     */
    Change_Selected (item) {
      if (this.shop.id !== item.id) {
        this.shop = {
          id: item.id,
          name: item.name
        }
      }
    },

    /**
     * [Save_Changes 保存设置]
     * @return {[]} []
     */
    Save_Changes () {
      if (this.selected.id !== this.shop.id) {
        localStorage.setItem('shop', JSON.stringify(this.shop))

        this.$message({
          type: 'success',
          message: '设置保存成功，需要重新登录，即将前往',
          duration: 3000,
          center: true
        })

        setTimeout(() => {
          this.$router.push({path: '/login'})
        }, 3000)
      }
    }
  },
  created () {
    this.Init_Datas()
  },
  mounted () {
  }
}
</script>
