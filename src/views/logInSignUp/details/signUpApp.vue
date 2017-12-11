<template>
  <div class="content">
    <div class="title">Create your Stack Overflow account. It's free and only takes a minute.</div>
    <ul class="info-list">
      <li>
        <label for="Name">Display Name</label><br/>
        <input type="text" id="Name" placeholder="J. Doe" v-model="username">
      </li>
      <li>
        <label for="Email">Email</label><br/>
        <input type="text" id="Email" placeholder="you@example.org" v-model="email">
      </li>
      <li>
        <label for="password">Password</label><br/>
        <input type="password" id="password" placeholder="********" v-model="password">
      </li>
      <li class="">
        <a href="" class="more-login-options">more login options</a>
        <a href="javascript:void(0);" class="log-in-btn fr" @click="SignUp">Sign up</a>
      </li>
      <li class="registering">By registering, you agree to the privacy policy and terms of service.</li>
    </ul>
    <ul class="switch">
      <li>
        Don't have an account? <a href="" class="sign-up">Sign up</a>
      </li>
      <li>
        Are you an employer? <a href="" class="log-in-on-talent">Log in on Talent</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Lib from 'assets/js/Lib'
  import Api from 'assets/js/api'
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        tagUserName: true,
        tagEmail: true,
        tagPassWord: true
      }
    },
    methods: {
      checkValue(_v,type) {
        switch (type) {
          case "username":
            let v = /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/;
            if (!_v) {
              alert("真实姓名不能为空！");
              this.tagUserName = false;
            } else if (!v.test(_v)) {
              alert("真实姓名输入有误！");
              this.tagUserName = false;
            } else {
              this.tagUserName = true; //标志该输入框验证通过
            }
            break;
          case "email":
            let v1 =/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/;
            if (!_v) {
              alert("邮箱地址不能为空！");
              this.tagEmail = false;
              return
            } else if (!v1.test(_v)) {
              alert("邮箱地址有误！");
              this.tagEmail = false;
              return
            } else {
              this.tagEmail = true;
            }
            break;
          case "password":
          let v2 = /^[A-Za-z0-9_-]+$/;
            if (!_v) {
              alert("登录密码不能为空！");
              this.tagPassWord = false;
            }else if (!v2.test(_v)) {
              alert("登录密码格式为字母数字的组合！");
              this.tagPassWord = false;
              return
            } else {
              this.tagPassWord = true;
            }
            break;
        }
      },
      SignUp() {
        let userData = {
          'username': this.username,
          'email': this.email,
          'password': this.password
        }
        this.checkValue(userData.username,'username');
        this.checkValue(userData.email,'email');
        this.checkValue(userData.password,'password');
        let params = Object.assign({}, userData); //将userData复制到{}中。并且返回给params
        if (this.tagUserName && this.tagEmail && this.tagPassWord) {
          Api.userSignup(params).then(res => {
            if (res.code === 0) {
              window.location.href = '../../views/home/list.html'
            } else {
              alert(res.msg)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 20px;
    margin: 0 auto 20px;
    text-align: center;
  }
  .info-list {
    width: 280px;
    padding: 30px;
    margin: 0 auto;
    border: 1px solid #E4E6E8;
  }
  .switch {
    text-align: center;
    line-height: 25px;
    width: 300px;
    padding: 20px;
    margin: 20px auto 0;
    border: 1px solid #E4E6E8;
  }
  .sign-up,
  .log-in-on-talent,
  .more-login-options {
    color: #0077CC;
  }
  label {
    font-weight: bold;
    font-size: 13px;
    line-height: 20px;
  }
  input {
    width: 263px;
    line-height: 34px;
    font-size: 100%;
    padding: 8px;
    margin-bottom: 10px;
    height: 18px;
    border: 1px solid #e4e6e8;
    border-radius: 0;
    outline: none;
    cursor: auto !important;
  }
  input:hover {
    border: #ADD8E6 1px solid;
  }
  .log-in-btn {
    height: 32px;
    padding: 3px 40px;
    font-size: 13px;
    background: none;
    border-radius: 2px;
    box-shadow: none;
    color: #FFF;
    line-height: 32px;
    background-color: #0077CC;
  }
  .more-login-options {
    line-height: 32px;
  }
  .registering {
    padding-top: 20px;
    font-size: 12px;
    text-align: center;
    color: #6A737C;
  }
</style>
