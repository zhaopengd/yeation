<template>
  <div class="header-slot-wrap">
    <div class="header-slot-left">
      <i class="iconfont icon-shouye"></i>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
.header-slot-wrap
  position fixed
  top 0
  left 0
  width 100%
  height 88px
  padding 0 8px
  box-sizing border-box
  font-size 42px
  display flex
  align-items center
  justify-content space-between
  background-color #fafafa
  .header-slot-left
    margin-left 24px
    i 
      font-size 51px
      line-height 75px

</style>
