<template>
  <div class="home-wrap">
    <Swiper />
    <Service />
    <UserNav />
    <div class="bossMan">
      <img
        src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png"
        alt="bossMan"
      />
    </div>
    <Scene/>
    <Custom/>
  </div>
</template>

<script>
import Swiper from './Swiper/Swiper'
import Service from './Service/Service'
import UserNav from './UserNav/UserNav'
import Scene from './Scene/Scene'
import Custom from './Custom/Custom'
export default {
  components: {
    Swiper,
    Service,
    UserNav,
    Scene,
    Custom
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import "../../common/stylus/mixins.styl"
  /* 设置HOME下所有子组件的公共样式 */
.home-wrap  
    padding-top 150px
    padding-bottom 98px
    .bossMan
      height 160px
      margin-bottom 40px
      background-color #fff
      img
        height 100%
</style>
