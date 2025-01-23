<script setup>
import { ref } from "vue";
import eyeOpen from "../assets/eye-open.svg";
import eyeClosed from "../assets/eye.svg";

// States for first password field
const showPassword = ref(false);
const password = ref("");

// States for confirm password field
const showConfirmPassword = ref(false);
const confirmPassword = ref("");

// Function to validate passwords (can be extended as needed)
const validatePasswords = () => {
  return password.value === confirmPassword.value && password.value.length >= 8;
};
</script>
<template>
<div class="createaccount">
<div class="creatname">
  <div class="createwhite">
    <span>Create Account</span>
  </div>
</div>
<div class="accountline">
  <div class="half">
    <span> Email</span>
        <div class="enteremail">
          <input placeholder="Enter here..." required type="email" class="inputemail" />
          <img src="../assets/person.svg" />
        </div>

  </div>
  <div class="half">
    <span> First Name</span>
        <div class="enteremail">
          <input placeholder="Enter here..." required type="text" class="inputemail" />
          <img src="../assets/person.svg" />
        </div>

  </div>
</div>
<div class="accountline">
  <div class="half">
    <span>Password </span>
        <div class="enteremail">
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
          />           <img src="../assets/key.svg" />
        </div>

  </div>
  <div class="half">
    <span> Last Name</span>
        <div class="enteremail">
          <input placeholder="Enter here..." required type="text" class="inputemail" />
          <img src="../assets/person.svg" />
        </div>

  </div>
</div>
<div class="accountline">
  <div class="half">
    <span> Confirm Password</span>
        <div class="enteremail">
          <img
            class="eye"
            :src="showConfirmPassword ? eyeOpen : eyeClosed"
            alt="Toggle Password Visibility"
            @click="showConfirmPassword = !showConfirmPassword"
            style="cursor: pointer;"
          />

          <input
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Enter here..."
            required
            class="inputemail"
          />        <img src="../assets/key.svg" />
        </div>

  </div>
  <div class="half">
    <span> Gender </span>
        <div class="enteremail">
          <img src="../assets/arrowdown.svg" alt="">
          <select  required class="inputemail" v-model="selectedOption">
            <option value="option1">Female</option>
      <option value="option2">Male</option>
    </select>

          <img src="../assets/person.svg" />
        </div>

  </div>
</div>
<div class="terms">
<div class="agree">
<input class="checkbox" type="checkbox">
<span>Agree on <a href="/termsofservice" target="_blank" rel="noopener noreferrer">terms and Conditions</a></span>
</div>
<button class="Createbutton">
  Create
</button>
</div>
</div>


</template>
<style scoped>
.eye {
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.eye:hover {
  opacity: 0.7;
}
.Createbutton{
  width: 208px;
  height: 85px;
  border: none;
  background-color: #000;
  border-radius: 10px;
  color: white;
  font-family: Tajawal;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
cursor: pointer;
}
.checkbox {
  appearance: none; 
  -webkit-appearance: none; 
  -moz-appearance: none; 
  background: none; 
  border: 2px solid #000; 
  width: 20px; 
  height: 20px;
  display: inline-block; 
  position: relative;
  cursor: pointer;
  border-radius: 5px;
}

.checkbox:checked {
  background-color: #000; 
}


.agree span a:hover{
  color: rgb(65, 112, 255);


}
.agree span a{
  font-family: Roboto;
font-size: 18px;
font-weight: 700;
letter-spacing: 0.10000000149011612px;
text-decoration-skip-ink: none;
text-shadow: 0.0px 4.0px 0.01px #000, 4.9px 1.0px 0.01px #000, 2.1px -4.6px 0.01px #000, -4.0px -3.0px 0.01px #000, -3.8px 3.3px 0.01px #000, 2.4px 4.4px 0.01px #000, 4.8px -1.4px 0.01px #000, -0.3px -5.0px 0.01px #000, -4.9px -0.8px 0.01px #000, -1.8px 4.7px 0.01px #000, 4.2px 2.7px 0.01px #000, 3.6px -3.5px 0.01px #000, -2.7px -4.2px 0.01px #000, -4.7px 1.8px 0.01px #000, 0.7px 4.9px 0.01px #000, 5.0px 0.4px 0.01px #000, 1.4px -4.8px 0.01px #000, -4.4px -2.4px 0.01px #000, -3.3px 3.8px 0.01px #000, 2.9px 4.0px 0.01px #000, 4.5px -2.1px 0.01px #000, -1.1px -4.9px 0.01px #000, -5.0px -0.1px 0.01px #000, -1.1px 4.9px 0.01px #000, 4.5px 2.1px 0.01px #000, 3.0px -4.0px 0.01px #000, -3.3px -3.8px 0.01px #000, -4.4px 2.4px 0.01px #000, 1.4px 4.8px 0.01px #000, 5.0px -0.3px 0.01px #000, 0.8px -4.9px 0.01px #000, -4.6px -1.8px 0.01px #000, -2.8px 4.2px 0.01px #000, 3.5px 3.6px 0.01px #000, 4.3px -2.6px 0.01px #000, -1.7px -4.7px 0.01px #000, -4.9px 0.7px 0.01px #000, -0.4px 5.0px 0.01px #000, 4.8px 1.5px 0.01px #000, 2.4px -4.4px 0.01px #000, -3.7px -3.3px 0.01px #000, -4.1px 2.9px 0.01px #000, 3.5px 2.3px 0.01px #000;color: white;
cursor: pointer;

}


.agree span{
  font-family: Roboto;
font-size: 18px;
font-weight: 700;
letter-spacing: 0.10000000149011612px;
text-decoration-skip-ink: none;
text-shadow: 0.0px 4.0px 0.01px rgba(0, 0, 0, 0.3), 4.9px 1.0px 0.01px rgba(0, 0, 0, 0.3), 2.1px -4.6px 0.01px rgba(0, 0, 0, 0.3), -4.0px -3.0px 0.01px rgba(0, 0, 0, 0.3), -3.8px 3.3px 0.01px rgba(0, 0, 0, 0.3), 2.4px 4.4px 0.01px rgba(0, 0, 0, 0.3), 4.8px -1.4px 0.01px rgba(0, 0, 0, 0.3), -0.3px -5.0px 0.01px rgba(0, 0, 0, 0.3), -4.9px -0.8px 0.01px rgba(0, 0, 0, 0.3), -1.8px 4.7px 0.01px rgba(0, 0, 0, 0.3), 4.2px 2.7px 0.01px rgba(0, 0, 0, 0.3), 3.6px -3.5px 0.01px rgba(0, 0, 0, 0.3), -2.7px -4.2px 0.01px rgba(0, 0, 0, 0.3), -4.7px 1.8px 0.01px rgba(0, 0, 0, 0.3), 0.7px 4.9px 0.01px rgba(0, 0, 0, 0.3), 5.0px 0.4px 0.01px rgba(0, 0, 0, 0.3), 1.4px -4.8px 0.01px rgba(0, 0, 0, 0.3), -4.4px -2.4px 0.01px rgba(0, 0, 0, 0.3), -3.3px 3.8px 0.01px rgba(0, 0, 0, 0.3), 2.9px 4.0px 0.01px rgba(0, 0, 0, 0.3), 4.5px -2.1px 0.01px rgba(0, 0, 0, 0.3), -1.1px -4.9px 0.01px rgba(0, 0, 0, 0.3), -5.0px -0.1px 0.01px rgba(0, 0, 0, 0.3), -1.1px 4.9px 0.01px rgba(0, 0, 0, 0.3), 4.5px 2.1px 0.01px rgba(0, 0, 0, 0.3), 3.0px -4.0px 0.01px rgba(0, 0, 0, 0.3), -3.3px -3.8px 0.01px rgba(0, 0, 0, 0.3), -4.4px 2.4px 0.01px rgba(0, 0, 0, 0.3), 1.4px 4.8px 0.01px rgba(0, 0, 0, 0.3), 5.0px -0.3px 0.01px rgba(0, 0, 0, 0.3), 0.8px -4.9px 0.01px rgba(0, 0, 0, 0.3), -4.6px -1.8px 0.01px rgba(0, 0, 0, 0.3), -2.8px 4.2px 0.01px rgba(0, 0, 0, 0.3), 3.5px 3.6px 0.01px rgba(0, 0, 0, 0.3), 4.3px -2.6px 0.01px rgba(0, 0, 0, 0.3), -1.7px -4.7px 0.01px rgba(0, 0, 0, 0.3), -4.9px 0.7px 0.01px rgba(0, 0, 0, 0.3), -0.4px 5.0px 0.01px rgba(0, 0, 0, 0.3), 4.8px 1.5px 0.01px rgba(0, 0, 0, 0.3), 2.4px -4.4px 0.01px rgba(0, 0, 0, 0.3), -3.7px -3.3px 0.01px rgba(0, 0, 0, 0.3), -4.1px 2.9px 0.01px rgba(0, 0, 0, 0.3), 3.5px 2.3px 0.01px rgba(0, 0, 0, 0.3);
color: white;

}
.agree{
  display: flex;
  align-items: center;
  gap: 10px;
}

.terms{
  padding-top: 15px;
  width: 720px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
select {
  -webkit-appearance: none; /* For Safari and Chrome */
  -moz-appearance: none;    /* For Firefox */
  appearance: none; 
}
.inputemail:focus{
  box-shadow: none;
  outline: none; 
}
.inputemail::placeholder{
  text-align: right;
  color:rgba(100, 100, 100, 1) ;
  font-family: Tajawal;
font-size: 20px;
font-weight: 500;
line-height: 24px;
text-underline-position: from-font;
text-decoration-skip-ink: none;

}
.inputemail{
  background:none;
  border: none;
  width: 500px;
  height: 60px;
  font-size: 25px;
  outline: none; 
}
.half span{
  font-family: Tajawal;
font-size: 20px;
font-weight: 400;
line-height: 24px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: rgba(0, 0, 0, 1);

}
.enteremail{
  width: 600px;
  height: 83px;
  display: flex;
  justify-content: end;
  padding-right: 20px;
  gap: 9px;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border: 2px;
  border-color: black;
  border-style: solid;
  border-radius: 10px;
  padding-left:20px ;
}
.half{
  height:130px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
 gap: 23px;


}
.half{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

}
.accountline{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 23px;
}
.createwhite span{
font-family: Tajawal;
font-size: 58px;
font-weight: 500;
line-height: 69.6px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #000;


}
.createwhite{
  width: 655px;
height: 197px;
gap: 10px;
border-radius: 10px ;
border: 2px ;
background-color: white;
border-color: black;

border-style: solid;
display: flex;
align-items: center;
justify-content: center;

}
.creatname{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.createaccount{
  width: 1273px;
height: 859px;
border-radius: 20px;
background-color:rgba(77, 153, 224, 1) ;
box-shadow: 5px 7px 2px 0px rgba(0, 0, 0, 1);

z-index: 500000;
display: flex;
flex-direction: column;
align-items: start;
padding-top: 56px;
padding-left: 20px;

}

</style>