<template>
  <div class="personal_shop">
    <div class="personal_shop_title">私人订制</div>
    <div class="personal_shop_swiper_box">
      <div class="swiper-container-cus">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
            <div class="personalShop-item" v-for="(good ,index) in personalShop" :key="index">
              <img class="primaryPic" :src="good.primaryPicUrl" :alt="good.name" />
              <div class="text">
                <span class="name">{{good.name}}</span>
                <span class="price">¥{{good.retailPrice}}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
                        <!-- 分页器 -->
        <div class="cus-swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'

export default {
  name: 'SceneLight',
  computed: {
    ...mapState(['homeData']),
    personalShopArr() {
      let arr3 = []
      if (this.homeData.personalShop) {
        this.homeData.personalShop.reduce((arr, shop) => {
          arr.push(shop)
          if (arr.length === 3) {
            arr3.push(arr)
            arr = []
          }
          return arr
        }, [])
      }
      return arr3
    }
  },
  watch: {
    personalShopArr(newArr) {
      this.$nextTick(() => {
        if (
          !this.pShopSwiper &&
          this.homeData &&
          newArr.length * newArr[0].length === this.homeData.personalShop.length
        ) {
          this.pShopSwiper = new Swiper(
            '.swiper-container-cus',
            {
              loop: true,
              pagination: {
                el: '.cus-swiper-pagination',
                clickable: true
              }
            }
          )
        }
      })
    }
  },
  async mounted() {
    await this.$store.dispatch('getHomeData')
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.personal_shop
  margin-bottom 80px
  .cus-swiper-pagination 
    width 100%
    left 0
    bottom 10px
    text-align center
    .swiper-pagination-bullet
      width 12px
      height 12px
      margin 0 4px
      border-radius 50%
    .swiper-pagination-bullet-active
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png)
  .personal_shop_title
    width 100%
    height 100px
    line-height 100px
    font-size 32px
    padding 0 30px
    background #fff
    overflow hidden
  .personal_shop_swiper_box
    .swiper-container-cus
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
