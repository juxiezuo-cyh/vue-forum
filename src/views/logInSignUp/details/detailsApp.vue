<template>
  <div id="app">
    <c-header></c-header>
    <div class="nav">
      <router-link to='/logIn' @click.native="logIn">登录</router-link>
      <router-link to='/signUp'>注册</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import CHeader from 'components/CHeader'
export default {
  data() {
    return {
      
    }
  },
  components: {
    CHeader
  },
  methods: {
    logIn(e){
      // console.log(e)
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>
  #app {
    width: 1070px;
    margin: 61px auto 0;
    padding: 25px 15px;
  }
  .nav a.router-link-active{
    color: #535A60;
    border-top: #F69C55 solid 2px;
    border-bottom: #fff solid 1px;
    border-left: 1px solid #E4E6E8;
    border-right: 1px solid #E4E6E8;
  }
  .nav a {
    font-size: 12px;
    line-height: 39px;
    width: 60px;
    text-align: center;
    display: inline-block;
    color: #848D95;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-bottom: transparent solid 0px;
    border-top: transparent solid 2px;
  }
  .nav {
    border-bottom: 1px solid #E4E6E8;
    height: 41px;
    margin-bottom: 30px;
  }
</style>
