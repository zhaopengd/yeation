<template>
  <div class="personal_shop">
    <div class="personal_shop_title">私人订制</div>
    <div class="personal_shop_swiper_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="personalShop-item">
            <img src="../Scene/recommended/01.png" alt="">
              <div class="text">
                <span class="name"></span>
                <span class="price"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.personal_shop
  margin-bottom 80px
  .personal_shop_title
    width 100%
    height 100px
    line-height 100px
    font-size 32px
    padding 0 30px
    background #fff
    overflow hidden
  .personal_shop_swiper_box
    .swiper-container
      overflow inherit
      .swiper-pagination
        transform translateY(45px)
      .personalShop-item
        float left
        width 210px
        padding 0 !important
        margin-left 20px
        .primaryPic
          background-color #f5f5f5
          margin-bottom 12px
          width 216px
          height 216px
        >div
          margin-top 0
          margin-bottom 10px
          font-size 24px
          overflow visible
          white-space normal
          line-height 36px
          .name
            width 216px
            color #333
            margin-top 0
            margin-bottom 10px
            font-size 24px
            line-height 36px
            white-space normal
          .price
            font-size 22.5px
            color #b4282d
</style>
