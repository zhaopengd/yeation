<template>
  <div class="user_nav">
    <ul >
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
      <li >
        <a href="javascript:">
          <img src="./shopCatgorys/01.png" alt="nav.text" />
          <p>居家</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'UserNav',
 
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'
.user_nav
  ul
    display flex
    flex-wrap wrap
    margin-bottom 40px
    li
      width 110px
      height 156px
      margin 10px 20px 0
      a
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        img
          width 110px
          height 110px
        p
          font-size 24px
          line-height 36px
          color #333
</style>
