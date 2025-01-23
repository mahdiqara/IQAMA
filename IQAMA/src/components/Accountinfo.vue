<script>
export default {
  data() {
    return {
      showSavedMessage: false, // Tracks whether the saved message should be shown
    };
  },
  methods: {
    saveChanges() {
      this.showSavedMessage = true; // Show the "saved" message
      setTimeout(() => {
        this.showSavedMessage = false; // Hide the "saved" message after 3 seconds
      }, 3000); // 3000ms = 3 seconds
    },
  },
};
</script>

<template>
  <div class="mid">
    <div class="inputs">
      <div class="allinputs">
        <div class="input">
          <span>Email</span>
          <input type="email" />
        </div>
        <div class="input">
          <span>Confirm Email</span>
          <input type="email" />
        </div>
        <div class="input">
          <span>Old Password</span>
          <input type="password" />
        </div>
        <div class="input">
          <span>New Password</span>
          <input type="password" />
        </div>
      </div>
      <div class="buttons">
        <button class="save" @click="saveChanges">
          Save
        </button>
        <button class="exit">
          Exit Without Saving
        </button>
      </div>
    </div>
    <div class="saved" v-if="showSavedMessage">
      <span>The Changes have been saved</span>
    </div>
  </div>
</template>

<style scoped>
.saved {
  background-color: rgba(191, 220, 249, 1);
  width: 15.25rem; /* 244px */
  height: 2.375rem; /* 38px */
  border-radius: 1.25rem; /* 20px */
  position: absolute;
  bottom: 12rem; /* 192px */
  left: 36.875rem; /* 590px */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem; /* 16px */
}
.mid {
  height: 64.25rem; /* 1028px */
  width: 89.75rem; /* 1436px */
  border-radius: 1.25rem; /* 20px */
  box-shadow: 0.34375rem 0.4375rem 0.25rem 0px rgba(0, 0, 0, 1); /* 5.5px 7px 4px */
  background: rgba(255, 255, 255, 1);
  padding-top: 3.125rem; /* 50px */
  padding-left: 1.5625rem; /* 25px */
  position: relative;
}
.buttons {
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */
}
.exit {
  width: 10.5625rem; /* 169px */
  background-color: #000;
  color: white;
  height: 2.5rem; /* 40px */
  border: none;
  border-radius: 0.625rem; /* 10px */
  cursor: pointer;
  box-shadow: 0.0625rem 0.125rem 0.125rem 0px rgba(112, 178, 241, 1); /* 1px 2px 2px */
}
.save {
  width: 3.8125rem; /* 61px */
  height: 2.5rem; /* 40px */
  background-color: rgba(112, 178, 241, 1);
  border: none;
  border-radius: 0.625rem; /* 10px */
  color: white;
  cursor: pointer;
  box-shadow: 0.0625rem 0.125rem 0.25rem 0px rgba(0, 0, 0, 1); /* 1px 2px 4px */
}
.input span {
  width: 19.8125rem; /* 317px */
  padding-left: 0.75rem; /* 12px */
}
input {
  width: 19.8125rem; /* 317px */
  height: 3.625rem; /* 58px */
  border-radius: 1.25rem; /* 20px */
  border: 0.0625rem solid; /* 1px */
  background-color: rgba(202, 202, 202, 1);
  font-size: 1.25rem; /* 20px */
  padding-left: 0.625rem; /* 10px */
}
.input {
  display: flex;
  flex-direction: column;
  width: 19.8125rem; /* 317px */
  gap: 0.5rem; /* 8px */
}
.allinputs {
  height: 15.625rem; /* 250px */
  width: 44.0625rem; /* 705px */
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

