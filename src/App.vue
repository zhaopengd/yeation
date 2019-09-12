<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide>
    <HeaderNav></HeaderNav>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import HeaderNav from './components/HeaderNav/HeaderNav'
export default {
  // 全局注册组件
  components: {
      FooterGuide,
      HeaderNav
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped></style>
