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
                <span>
                    First Name
                </span>
                <input type="text">
            </div>
            <div class="input">
                <span>
                    Last name
                </span>
                <input type="text">
            </div>  <div class="input">
                <span>
                    Phone number
                </span>
                <input type="number">
            </div>  <div class="input">
                <span>
                    Date of birth
                </span>
                <input type="date">
            </div>
        </div>
        <div class="buttons">
            <button class="save" @click="saveChanges">
          Save
        </button>
            <button class="exit">
                Exit without Saving
            </button>
        </div>
    </div>
    <div class="saved" v-if="showSavedMessage">
      <span>The Changes have been saved</span>
    </div>
</div>

</template>
<style>
.saved {
  background-color: rgba(191, 220, 249, 1);
  width: 244px;
  height: 38px;
  border-radius: 20px;
  position: absolute;
  bottom: 192px;
  left: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
}
.buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.exit{
width: 169px;
background-color: #000;
color: white;
height:40px;
border: none;
border-radius: 10px;
cursor: pointer;
box-shadow: 1px 2px 2px 0px rgba(112, 178, 241, 1);

}
.save{
    width: 61px;
    height: 40px;
    background-color: rgba(112, 178, 241, 1);
    border: none;
    border-radius: 10px;
    color: white;
cursor: pointer;
box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 1);

}
.input span{
    width: 317px;
    padding-left: 12px;
}
input{
    width: 317px;
height: 58px;
border-radius: 20px;
border: 1px solid;
background-color: rgba(202, 202, 202, 1);
font-size: 20px;
padding-left: 10px;
}
.input{
    display: flex;
    flex-direction: column;
    width: 317px;
    gap: 8px;
}
.allinputs{
height: 250px;
width: 705px;
display: grid;
grid-template-columns:1fr 1fr ;
}
.mid{
height: 1028px;
width: 1436px;
border-radius: 20px ;
box-shadow: 5.5px 7px 4px 0px rgba(0, 0, 0, 1);
background: rgba(255, 255, 255, 1);
padding-top: 50px;
padding-left: 25px;
position: relative;

}
</style>