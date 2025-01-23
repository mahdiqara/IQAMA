<script>

import login from '../LogInPage.vue';
import Creat from '../CreateAcount.vue';



export default {
  components: {
    login,
    Creat
  },
  data() {
    return {
      showLogin: false,
      showCreateAccount: false,  // This will control the visibility of the Create Account modal
    };
  },
  methods: {
    toggleLogin(event) {
      event.stopPropagation();
      this.showLogin = !this.showLogin;
    },
    closeLogin() {
      this.showLogin = false;
    },
    toggleCreateAccount() {
      this.showCreateAccount = !this.showCreateAccount;  // Toggles the Create Account modal
    },
  }
};

</script>


<template>
    <div class="header">
      <div class="title">
        <span class="titletxt">
          <span class="cap">I</span>QAMA AND <span class="cap">E</span>MTYAZ
        </span>
      </div>
      <div class="right">
        <div class="catagory">
          <a href="/Contactus" class="textcont">Contact us</a>
          <a href="/about" class="textcont">About the site</a>
          <a href="" class="textcont">Create Exam</a>
          <a href="/" class="textcont">Home</a>
        </div>
        <div class="account">
          <button class="loogin" @click="toggleLogin">Login</button>
          <button class="signup" @click="toggleCreateAccount">Create Account</button>
        </div>
      </div>
    </div>
  
    <!-- Login Modal -->
    <div class="loginpage" v-if="showLogin" @click.stop>
      <login />
      <div class="xcont" @click="closeLogin">
        <img class="x" src="./x.svg" alt="Close" />
      </div>
    </div>
  
    <!-- Create Account Modal -->
    <div class="creatacount" v-if="showCreateAccount" @click.stop>
      <Creat />
      <div class="xcont">
        <img class="x" src="./x.svg" alt="" @click="toggleCreateAccount" />
      </div>
    </div>
  </template>
  
  <style scoped>

  .creatacount{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 50000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(78, 101, 123, 0.364);
  }
  .xcont{
      height: 50rem; /* 800px */
      width: 6.25rem; /* 100px */
      padding-left: 1.25rem; /* 20px */
      z-index: 9000009;
  }
  .x{
      width: 5rem; /* 80px */
      background-color: #8e8e8e4d;
      border-radius: 50%;
      border: 0.125rem; /* 2px */
      border-color: #000;
      border-style: solid;
      cursor: pointer;
      opacity: 0.7;
  }
  .loginpage{
    width: 100%;
    height: 100%;
    background-color: rgba(78, 101, 123, 0.364);
    position: fixed;
    z-index: 900000;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem; /* 20px */
  }
  
  button{
    cursor: pointer;
  }
  .signup{
    width: 11.25rem; /* 180px */
    height: 2.5rem; /* 40px */
    border-radius: 6.25rem; /* 100px */
    background: var(--Schemes-Primary, rgba(255, 249, 255, 1));
    border: none;
    box-shadow: 0px 0.125rem 0.0625rem 0px rgba(0, 0, 0, 1); /* 0px 2px 1px */
    color: #000;
    font-size: 1.125rem; /* 18px */
    font-weight: 500;
  }
  .header{
    width: calc(100% - 5rem); /* calc(100% - 80px) */
    height: 5rem; /* 80px */
    position: fixed;
    top: 0;
    left: 2.5rem; /* 40px */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.625rem; /* 10px */
    padding-right: 0.625rem; /* 10px */
    z-index: 9999;
  }
  .titletxt{
    width: 50.75rem; /* 812px */
    height: 2.25rem; /* 36px */
    gap: 0px;
    border: 0.025rem 0px 0px 0px; /* 0.4px */
    opacity: 0px;
    color: #4D99E0;
    font-family: Marcellus SC;
    font-size: 1.5625rem; /* 25px */
    font-weight: 400;
    line-height: 2.25rem; /* 36px */
    text-align: left;
    text-decoration-skip-ink: none;
    word-spacing: 0.1875rem; /* 3px */
  }
  .cap{
    font-size: 2rem; /* 32px */
  }
  .right{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .catagory{
    width: 49.8125rem; /* 797px */
    height: 2.75rem; /* 44px */
    gap: 3.75rem; /* 60px */
    border-radius: 0.625rem; /* 10px */
    background: #4D99E0;
    padding-left: 0.9375rem; /* 15px */
    padding-right: 0.4375rem; /* 7px */
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0.125rem 0.0625rem rgba(0, 0, 0, 1); /* 0px 2px 1px */
    border: none;
  }
  .account{
    padding-left: 3.125rem; /* 50px */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 22.375rem; /* 358px */
  }
  .textcont{
    font-size: 1.25rem; /* 20px */
    font-weight: 510;
    text-align: left;
    text-shadow: 0px 0.125rem 0.0625rem rgb(0, 0, 0); /* 0px 2px 1px */
    text-transform: uppercase;
    -webkit-text-stroke: 0.03125rem rgb(0, 0, 0); /* 0.5px */
    -webkit-text-fill-color: #ffffff;
    width: 11.1640625rem; /* 179.25px */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .textcont:hover {
    -webkit-text-fill-color: #6c5eff;
  }
  .loogin{
    width: 5.5rem; /* 88px */
    height: 2.5rem; /* 40px */
    border-radius: 6.25rem; /* 100px */
    background: rgba(77, 153, 224, 1);
    border: none;
    box-shadow: 0px 0.125rem 0.0625rem 0px rgba(0, 0, 0, 1); /* 0px 2px 1px */
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem; /* 18px */
    font-weight: 500;
  }
  
  </style>
  