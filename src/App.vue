<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide>
    <HeaderSlot></HeaderSlot>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import HeaderSlot from './components/HeaderSlot/HeaderSlot'
export default {
  // 全局注册组件
  components: {
      FooterGuide,
      HeaderSlot
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped></style>
