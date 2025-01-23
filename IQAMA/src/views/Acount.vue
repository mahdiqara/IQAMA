<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import hospitalcomponent from '@/components/hospitalcomponent.vue';
import Personalinfo from '@/components/Personalinfo.vue';
import Accountinfo from '@/components/Accountinfo.vue';
import MyQuestions from '@/components/Myqusetions.vue';
import Paymentinfo from '@/components/paymentinfo.vue';

const selectedSection = ref('personal');  // Default section

const sections = [
  { key: 'personal', label: 'Personal information', component: Personalinfo },
  { key: 'account', label: 'Account information', component: Accountinfo },
  { key: 'questions', label: 'My Questions', component: MyQuestions },
  { key: 'payment', label: 'Payment information', component: Paymentinfo },
];

// Get the query parameter from the URL
const route = useRoute();
watchEffect(() => {
  if (route.query.section) {
    selectedSection.value = route.query.section;  // Set section to query param
  }
});
</script>

<template>
    <div class="container">
      <!-- Left Navigation Menu -->
      <div class="left">
        <div
          v-for="section in sections"
          :key="section.key"
          :class="['menu-item', section.key]"
          :style="{ backgroundColor: selectedSection === section.key ? 'rgba(193, 225, 255, 1)' : '' }"
          @click="selectedSection = section.key"
        >
          <span>{{ section.label }}</span>
        </div>
      </div>
  
      <!-- Content Section -->
      <div class="content">
        <component :is="sections.find(section => section.key === selectedSection)?.component" />
      </div>
  
      <!-- Right Section -->
      <div class="right">
        <hospitalcomponent />
      </div>
    </div>
</template>

<style scoped>.menu-item {
    width: 17.625rem;
    height: 25%;
    border-bottom: 0.0625rem solid;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .menu-item span {
    font-family: Tajawal;
    font-size: 1.6875rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: center;
    color: #000;
  }
  
  .exit {
    width: 3.25rem;
    height: 2.5rem;
    background-color: #000;
    color: white;
    border-radius: 0.625rem;
    cursor: pointer;
    box-shadow: 0.0625rem 0.125rem 0.125rem 0px rgba(112, 178, 241, 1);
  }
  
  .medicals a {
    color: white;
    width: 15.5rem;
    text-align: start;
    cursor: pointer;
  }
  
  .medicals {
    width: 15.5rem;
    height: 2.5rem;
    border: 0.0625rem solid rgba(217, 217, 217, 1);
    border-radius: 0.625rem;
    padding-left: 1rem;
    padding-top: 0.1875rem;
    font-size: 1.25rem;
    color: #000;
    display: flex;
    background-color: rgba(112, 178, 241, 1);
  }
  
  .medical {
    width: 15.5rem;
    height: 2.5rem;
    border: 0.0625rem solid rgba(217, 217, 217, 1);
    border-radius: 0.625rem;
    padding-left: 1rem;
    padding-top: 0.1875rem;
    font-size: 1.25rem;
    color: #000;
    display: flex;
    align-items: start;
  }
  
  .exam {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
  }
  
  .name {
    font-family: Tajawal;
    font-weight: 700;
    font-size: 1.4375rem;
    width: 15.525rem;
  }
  
  .package {
    width: 86.625rem;
    height: 7.375rem;
    border: 0.1875rem solid rgba(185, 185, 185, 1);
    border-radius: 0.625rem;
    padding: 1.5rem;
    display: flex;
    align-items: start;
    gap: 1.5rem;
  }
  
  .Payment,
  .Account,
  .Questions {
    width: 17.625rem;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .Account,
  .Questions {
    border-bottom: 0.0625rem solid;
  }
  .left span {
  font-family: Tajawal;
  font-size: 1.6875rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #000;
}

.personal {
  width: 17.625rem;
  height: 25%;
  border-bottom: 0.0625rem solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.mid {
  height: 64.25rem;
  width: 89.75rem;
  border-radius: 1.25rem;
  box-shadow: 0.34375rem 0.4375rem 0.25rem 0px rgba(0, 0, 0, 1);
  background: rgba(255, 255, 255, 1);
  padding-top: 3.125rem;
  padding-left: 1.5625rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.left {
  width: 17.625rem;
  height: 64.25rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0.34375rem 0.4375rem 0.25rem 0px rgba(0, 0, 0, 1);
}

.container {
  width: 100%;
  height: 83.125rem;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgba(112, 178, 241, 1);
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 5rem;
  gap: 1.5rem;
}


</style>