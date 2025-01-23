<script setup>
import { ref } from 'vue';
import Headerlogedin from './components/icons/Headerlogedin.vue';
import Header from './components/icons/Header.vue'; 
import Footer from './components/footer.vue';

const isLoggedIn = ref(true);
</script>

<template>
  <div class="background">
    <Headerlogedin v-if="isLoggedIn" @logout="isLoggedIn = false" />
    <Header v-else />

    <Footer />
    <RouterView />
  </div>
</template>


<style scoped>

.background {
  font-family: "Tajawal", serif;
  font-weight: 500;
  font-style: normal;

  background-color: #4D99E0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

::-webkit-scrollbar {
  width: 0.375rem; /* Thin scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(77, 153, 224, 1); /* Scrollbar thumb color */
  border-radius: 0.625rem; /* Rounded corners */
}

::-webkit-scrollbar-track {
  background-color: transparent; /* Transparent track */
}

</style>
