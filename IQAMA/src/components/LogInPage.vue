<script setup>
import { ref } from "vue";
import eyeOpen from "../assets/eye-open.svg";
import eyeClosed from "../assets/eye.svg";

const showPassword = ref(false);
const password = ref('');
const isPasswordValid = ref(false);

const validatePassword = () => {
  isPasswordValid.value = password.value.length >= 8;
};
const showForgetPasswordPage = () => {
  showLoginPage.value = false;
  showForgetPassword.value = true;
};
const hideForgetPasswordPage = () => {
  showLoginPage.value = true;
  showForgetPassword.value = false;
};
const showLoginPage = ref(true);
const showForgetPassword = ref(false);
</script>

<template>
  <div class="forgetpassword" v-if="showForgetPassword">
    <div class="emailreset">
    <span>Email</span>
    <input type="email" placeholder="Enter Your Email Here...">
</div>
<div class="buttons">
    <button class="cancel" @click="hideForgetPasswordPage">Cancel</button>

    <button class="reset">
        Reset Password
    </button>
</div>
  </div>
  <div class="loginpageblue" v-if="showLoginPage">
    <div class="loginicon">
        <span class="logintxt"> Login</span>
      </div>
      
      <div class="email">
        <span> Email</span>
        <div class="enteremail">
          <input placeholder="Enter here..." required type="email" class="inputemail" />
          <img src="../assets/person.svg" />
        </div>
      </div>
      
      <div class="password">
        <span> Password</span>
        <div class="enterpassword">
          <img
            class="eye"
            :src="showPassword ? eyeOpen : eyeClosed"
            alt="Toggle Password Visibility"
            @click="showPassword = !showPassword"
            style="cursor: pointer;"
          />
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Enter here..."
            required
            class="inputemail"
            @input="validatePassword"
          />
          <img class="key" src="../assets/key.svg" />
        </div>
      </div>
      
      <button class="enter">Enter</button>
      <div class="donthave">
        <span>Don't have an account? Create one.</span>
        <span @click="showForgetPasswordPage">Forgot your password?</span>
    </div>
    </div>
  
</template>
<style scoped>
.buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.reset {
  width: 9.25rem;
  height: 2.5rem;
  background-color: rgb(0, 0, 0);
  border: none;
  border-radius: 0.625rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
}

.cancel {
  width: 4.8125rem;
  height: 2.5rem;
  background-color: white;
  border: none;
  border-radius: 0.625rem;
  font-family: Tajawal;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
}

.emailreset input {
  width: 100%;
  height: 2.5rem;
  border-radius: 0.625rem;
  border: #000;
  border-style: solid;
  padding-left: 0.9375rem;
  font-size: 1rem;
}

.emailreset span {
  font-family: Tajawal;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000;
}

.emailreset {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 36.625rem;
}

.forgetpassword {
  width: 39.625rem;
  height: 10.875rem;
  background-color: rgba(77, 153, 224, 1);
  box-shadow: 0.3125rem 0.4375rem 0.125rem 0px rgba(0, 0, 0, 1);
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.donthave span:hover {
  color: rgb(86, 56, 255);
}

.donthave span {
  max-width: 16.75rem;
  font-family: Tajawal;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: white;
  text-shadow: 0.0px 0.25rem 0.01px #000, 0.30625rem 0.0625rem 0.01px #000, 0.13125rem -0.2875rem 0.01px #000, -0.25rem -0.1875rem 0.01px #000, -0.2375rem 0.20625rem 0.01px #000, 0.15rem 0.275rem 0.01px #000, 0.3rem -0.0875rem 0.01px #000, -0.01875rem -0.3125rem 0.01px #000, -0.30625rem -0.05rem 0.01px #000, -0.1125rem 0.29375rem 0.01px #000, 0.2625rem 0.16875rem 0.01px #000, 0.225rem -0.21875rem 0.01px #000, -0.16875rem -0.2625rem 0.01px #000, -0.29375rem 0.1125rem 0.01px #000, 0.04375rem 0.30625rem 0.01px #000, 0.3125rem 0.025rem 0.01px #000, 0.0875rem -0.3rem 0.01px #000, -0.275rem -0.15rem 0.01px #000, -0.20625rem 0.2375rem 0.01px #000, 0.18125rem 0.25rem 0.01px #000, 0.28125rem -0.13125rem 0.01px #000, -0.06875rem -0.30625rem 0.01px #000, -0.3125rem -0.00625rem 0.01px #000, -0.06875rem 0.30625rem 0.01px #000, 0.28125rem 0.13125rem 0.01px #000, 0.1875rem -0.25rem 0.01px #000, -0.20625rem -0.2375rem 0.01px #000, -0.275rem 0.15rem 0.01px #000, 0.0875rem 0.3rem 0.01px #000, 0.3125rem -0.01875rem 0.01px #000, 0.05rem -0.30625rem 0.01px #000, -0.2875rem -0.1125rem 0.01px #000, -0.175rem 0.2625rem 0.01px #000, 0.21875rem 0.225rem 0.01px #000, 0.26875rem -0.1625rem 0.01px #000, -0.10625rem -0.29375rem 0.01px #000, -0.3125rem 0.04375rem 0.01px #000, -0.025rem 0.3125rem 0.01px #000, 0.3rem 0.09375rem 0.01px #000, 0.15rem -0.275rem 0.01px #000, -0.23125rem -0.20625rem 0.01px #000, -0.25625rem 0.18125rem 0.01px #000, 0.21875rem 0.1375rem 0.01px #000;
  cursor: pointer;
}

.donthave {
  padding-top: 1.25rem;
  width: 100%;
  height: 3.4375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.enter {
  color: white;
  width: 13rem;
  height: 5.3125rem;
  background-color: black;
  border-radius: 0.625rem;
  font-family: Tajawal;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}.eye {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.eye:hover {
  opacity: 0.7;
}
.enterpassword {
  width: 37.5rem;
  height: 5.1875rem;
  display: flex;
  justify-content: end;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  gap: 0.5625rem;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: 0.125rem solid black;
  border-radius: 0.625rem;
}
.inputemail:focus {
  box-shadow: none;
  outline: none;
}
.inputemail::placeholder {
  text-align: right;
  color: rgba(100, 100, 100, 1);
  font-family: Tajawal;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.inputemail {
  background: none;
  border: none;
  width: 31.25rem;
  height: 3.75rem;
  font-size: 1.5625rem;
  outline: none;
}
.enteremail {
  width: 37.5rem;
  height: 5.1875rem;
  display: flex;
  justify-content: end;
  padding-right: 1.25rem;
  gap: 0.5625rem;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: 0.125rem solid black;
  border-radius: 0.625rem;
}
.email span {
  font-family: Tajawal;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(0, 0, 0, 1);
}
.password span {
  font-family: Tajawal;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(0, 0, 0, 1);
}
.password {
  height: 14.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.4375rem;
}
.email {
  height: 14.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6.0625rem;
  width: 100%;
  gap: 1.4375rem;
}
.logintxt {
  font-family: Tajawal;
  font-size: 3.625rem;
  font-weight: 500;
  line-height: 4.35rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: black;
}
.loginicon {
  width: 35rem;
  height: 10.5625rem;
  background-color: white;
  border: 0.125rem solid black;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginpageblue {
  width: 40rem;
  height: 49.0625rem;
  background-color: rgba(77, 153, 224, 1);
  padding-top: 1.25rem;
  box-shadow: 0.3125rem 0.4375rem 0.125rem 0px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.125rem;
  border-radius: 0.625rem;
}




</style>