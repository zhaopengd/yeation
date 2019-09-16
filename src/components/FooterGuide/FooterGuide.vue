<template>
  <footer id="tabBar-wrap">
    <ul class="m-tabBar">
      <li class="item" :class="{active: $route.path === '/home'}" @click="goTo('/home')">
        <i
          class="u-icon"
          :class=" $route.path === '/home' ? 'icon-home-tabBar-active' : 'icon-home-tabBar'"
        ></i>
        <span class="text">首页</span>
      </li>
      <li class="item" @click="goTo('/category')">
        <i
          class="u-icon"
          :class=" $route.path === '/category' ? 'icon-category-tabBar-active' : 'icon-category-tabBar'"
        ></i>
        <span class="text">分类</span>
      </li>
      <li class="item" @click="goTo('/things')">
        <i
          class="u-icon"
          :class=" $route.path === '/things' ? 'icon-things-tabBar-active' : 'icon-things-tabBar'"
        ></i>
        <span class="text">识物</span>
      </li>
      <li class="item" @click="goTo('/shopcar')">
        <i
          class="u-icon"
          :class=" $route.path === '/shopcar' ? 'icon-shocar-tabBar-active' : 'icon-shocar-tabBar'"
        ></i>
        <span class="text">购物车</span>
      </li>
      <li class="item" @click="goTo('/personal')">
        <i
          class="u-icon"
          :class=" $route.path === '/personal' ? 'icon-Personal-tabBar-active' : 'icon-Personal-tabBar'"
        ></i>
        <span class="text">个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterGuide',
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
/* 底部导航 */
#tabBar-wrap
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  background-color $footerBgc
  border-top 0.75px solid $borderBgc
  z-index 222
  .m-tabBar
    width 100%
    height 100%
    display flex
    align-items center
    .item
      width 100%
      flex 1
      text-align center
      &.active
        color #b4282d
      .u-icon
        display inline-block
        margin-bottom 15px
        width 40px
        height 40px
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png')
        background-repeat no-repeat
        background-size 40px 490px
      .icon-home-tabBar
        background-position 0 -250px
      .icon-home-tabBar-active
        background-position 0 -200px
      .icon-category-tabBar
        background-position 0 -150px
      .icon-category-tabBar-active
        background-position 0 -100px
      .icon-things-tabBar
        background-position 0 -350px
      .icon-things-tabBar-active
        background-position 0 -300px
      .icon-shocar-tabBar
        background-position 0 -50px
      .icon-shocar-tabBar-active
        background-position 0 0
      .icon-Personal-tabBar
        background-position 0 -450px
      .icon-Personal-tabBar-active
        background-position 0 -400px
      .text
        display block
        font-size 24px
        margin-top -15px
</style>
