<template>
  <div class="phone_login_box">
    <div class="top_logo">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease" />
    </div>

    <label class="input_phone">
      <div class="login_tips">
        <p>{{phone_tips}}</p>
        <p>{{code_tips}}</p>
      </div>
      <input type="text" placeholder="请输入手机号" v-model="user.phone" />
    </label>

    <label class="input_code">
      <input type="text" placeholder="请输入手机验证码" v-model="user.code" />
      <div class="get_phone_code">获取验证码</div>
    </label>
    <div class="login_help">
      <span>遇到问题?</span>
      <span>使用密码验证登录</span>
    </div>
    <div class="login_btn active" @click="toLogin">登录</div>
    <div class="back_btn" @click="$router.replace('/personal')">其他登录方式</div>
    <div class="register_btn">注册账号 &gt;</div>
  </div>
</template>

<script>
export default {}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.phone_login_box
  background-color #fff
  .top_logo
    width 100%
    height 133px
    margin 56px 0 135px 0
    img
      width 192px
      height 64px
      margin 0 auto
  .input_phone
    position relative
    .login_tips
      position absolute
      left 50%
      top -100%
      width 50%
      transform translateX(-50%)
      color $themeColor
      font-size 28px
  .input_phone, .input_code
    display block
    width 675px
    height 90px
    margin 30px auto
    input
      display block
      width 100%
      height 100%
      outline none
      border 0 none
      border-bottom 1px solid #bdbdbd
      font-size 30px
      line-height 45px
  .input_code
    position relative
    .get_phone_code
      position absolute
      right 0
      bottom 0
      width 173px
      height 56px
      line-height 56px
      text-align center
      font-size 28px
      border 1px solid #333
      border-radius 10px
  .login_help
    font-size 28px
    line-height 45px
    margin-bottom 64px
    display flex
    justify-content space-between
    align-items center
  .login_btn, .back_btn
    width 677px
    height 96px
    margin-top 32px
    color $themeColor
    font-size 28px
    display flex
    justify-content center
    align-items center
    border 1px solid $themeColor
    &.active
      color #fff
      background-color $themeColor
  .register_btn
    margin-top 32px
    font-size 28px
    line-height 40px
    color #333
    text-align center
</style>
