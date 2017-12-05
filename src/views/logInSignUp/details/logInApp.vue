<template>
  <div class="content">
    <div class="title">Create your Stack Overflow account. It's free and only takes a minute.</div>
    <ul class="info-list">
      <li>
        <label for="Email">Email</label><br/>
        <input type="text" id="Email" placeholder="you@example.org">
      </li>
      <li>
        <label for="password">Password</label><br/>
        <input type="text" id="password" placeholder="********">
      </li>
      <li class="forgot">
        <a href="">forgot?</a>
      </li>
      <li class="">
        <a href="" class="more-login-options">more login options</a>
        <a href="" class="log-in-btn fr">Log in</a>
      </li>
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
  import Lib from 'assets/js/Lib';
  export default {
    components: {
  
  
  
    },
  
    data() {
  
      return {
  
  
  
      }
  
    },
  
    methods: {
  
  
  
  
  
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
    margin:  0  auto;
    border: 1px solid #E4E6E8;
  }
  .switch {
    text-align: center;
    line-height: 25px;
    width: 300px;
    padding: 20px; 
    margin:  20px  auto 0;
    border: 1px solid #E4E6E8;
  }
  .sign-up,.log-in-on-talent,.more-login-options {
    color:#0077CC;
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
  input:hover{
    border: #ADD8E6 1px solid;
  }
  .forgot {
    text-align: right;
    font-size: 11px;
    margin-top: -8px;
    margin-bottom: 10px;
  }
  .forgot a{
    color:#9FA6AD;
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
</style>
