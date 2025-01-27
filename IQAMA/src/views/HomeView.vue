<script setup>
import { ref } from 'vue';

import PakageOne from '../components/pakageone.vue';
import PakageTwo from '../components/pakagetwo.vue';
import PakageThree from '../components/pakagethree.vue';
import PakageFour from '../components/pakagefour.vue';
import PakageFive from '../components/pakagefive.vue';
import FAQ from '../components/faq.vue';
import Creat from '../components/CreateAcount.vue';

const showCreateAccount = ref(false); 

const toggleCreateAccount = () => {
  showCreateAccount.value = !showCreateAccount.value;
};
</script>

<template>
  <div class="container">
    <div class="creatacount" v-if="showCreateAccount">

      <Creat/>
      <div class="xcont">
        <img class="x" src="../components/icons/x.svg" alt="" @click="toggleCreateAccount" />
      </div>
    </div>

    <div class="bodyimg">
      <div class="scopeimg">
        <img class="image" src="../assets/homeimg.svg" alt="" />
        <div class="text">
          <span class="txtone">Residency and Internship Question Bank</span>
          <span class="txttwo">Prepare for your medical exams with ease</span>
          <button style="cursor: pointer;" @click="toggleCreateAccount">Join now</button>
        </div>
        <div class="important">
          <span>Important note:</span>
          <span>This site is constantly being worked on and a lot of content will be added over time.</span>
        </div>
      </div>
      <div class="hosbitalimg">
        <img class="hosimg" src="../assets/hospital.svg" alt=""/>
        <div class="pakages">
          <p class="wide">A wide range of local and international questions and exams</p>
          <div class="pakagelineone">
            <PakageOne />
            <PakageTwo />
            <PakageThree />
          </div>
          <div class="pakagelinetwo">
            <PakageFour />
            <PakageFive />
          </div>
        </div>
      </div>
      <div class="lastimg">
        <img class="last" src="../assets/doctorsimg.svg" alt=""/>
        <div class="faq">
          <FAQ />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.calco {
  position: fixed;
  z-index: 10000;
  left: 30%;
}

.xcont {
  height: 50rem;
  width: 6.25rem;
  padding-left: 1.25rem;
  z-index: 9000009;
}

.x {
  width: 5rem;
  background-color: #8e8e8e4d;
  border-radius: 50%;
  border: 0.125rem;
  border-color: #000;
  border-style: solid;
  cursor: pointer;
  opacity: 0.7;
}

.creatacount {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(78, 101, 123, 0.364);
}

.faq {
  width: 100%;
  height: auto;
  position: absolute;
  top: 17.3125rem;
  padding-left: 1.875rem;
  padding-right: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pakagelinetwo {
  display: flex;
  height: 31.25rem;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.pakagelineone {
  height: 31.25rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
}

.pakages {
  
  width: 92.375rem;
  height: 84.25rem;
  position: absolute;
  top: 19.625rem;
  left: 11.8125rem;
  padding-top: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.wide {
  width: 72.6875rem;
  height: 4.25rem;
  border-radius: 1.25rem;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(77, 153, 224, 1);
  font-family: Tajawal;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  -webkit-text-stroke: 0.01875rem rgb(0, 0, 0);
  text-shadow: 0rem 0.125rem 0.0625rem rgb(0, 0, 0);
  padding-top: 0.3125rem;
  box-shadow: 0rem 0.125rem 0.0625rem rgba(0, 0, 0, 1);
}

.last {
  width: 100%;
  object-fit: cover;
  height: 83.875rem;
}

.hosimg {
  width: 100%;
  object-fit: cover;
  height: 122.5625rem;
}

.lastimg {
  width: 100%;
  position: relative;
}

.hosbitalimg {
  width: 100%;
  height: 122.5625rem;
  gap: 0.625rem;
  position: relative;
}

.container {
  padding-left: 1rem;
  padding-right: 1rem;

  width: 99w;
  margin: 0 auto;
  height: 304.5625rem;
}

.scopeimg {
  width: 100%;
  position: relative;
}

.image {
  width: 100%;
  height: 67.1875rem;
  object-fit: cover;
}

.important {
  width: 100%;
  margin-top: -0.5rem;
  height: 20.5rem;
  gap: 0.625rem;
  background: rgba(204, 185, 38, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.important span {
  font-family: Tajawal;
  font-size: 3.625rem;
  font-weight: 500;
  line-height: 4.35rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: black;
}

.txtone {
  font-family: Tajawal;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 3rem;
  text-align: left;
  color: rgba(77, 153, 224, 1);
  -webkit-text-stroke: 0.03125rem rgb(0, 0, 0);
  text-shadow: 0rem 0.125rem 0.0625rem rgb(0, 0, 0);
}

.txttwo {
  font-family: Tajawal;
  font-size: 1.6875rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: left;
  color: rgba(77, 153, 224, 1);
  -webkit-text-stroke: 0.00625rem rgb(0, 0, 0);
  text-shadow: 0rem 0.125rem 0.0625rem rgb(0, 0, 0);
}

.scopeimg button {
  width: 10.9375rem;
  height: 2.5rem;
  gap: 0.5rem;
  border-radius: 6.25rem;
  background: rgba(77, 153, 224, 1);
  box-shadow: 0.125rem 0.1875rem 0.0625rem 0rem rgba(0, 0, 0, 1);
  border: none;
  color: white;
  font-family: Tajawal;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
}

.scopeimg .text {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 62.5rem;
  height: 8.4375rem;
  position: absolute;
  top: 24.375rem;
  left: 41.875rem;
  transform: translateX(-50%);
  justify-content: space-between;
}

.bodyimg {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
  .scopeimg .text {
    top: 15rem;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
  }

  .txtone {
    font-size: 2rem;
  }

  .txttwo {
    font-size: 1.25rem;
  }

  .scopeimg button {
    width: 8rem;
    height: 2rem;
    font-size: 0.875rem;
  }

  .important span {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .pakages {
    width: 100%;
    padding: 1rem;
    gap: 1rem;
  }

  .pakagelineone,
  .pakagelinetwo {
    flex-direction: column;
    align-items: stretch;
  }

  .wide {
    font-size: 1.5rem;
    line-height: 2rem;
    width: 100%;
  }
}

/* التوافق مع الشاشات المتوسطة */
@media (max-width: 1024px) {
  .scopeimg .text {
    top: 20rem;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .txtone {
    font-size: 2.25rem;
  }

  .txttwo {
    font-size: 1.5rem;
  }

  .pakagelineone,
  .pakagelinetwo {
    gap: 1rem;
  }
}

/* تصحيحات عامة */
.bodyimg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.hosbitalimg,
.lastimg {
  width: 100%;
  height: auto;
}

.hosimg,
.last {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.creatacount {
  padding: 1rem;
  overflow: auto;
}

.x {
  width: 3rem;
  height: 3rem;
}

.faq {
  padding: 1rem;
  height: auto;
  max-height: 50vh;
  overflow-y: auto;
}
</style>

