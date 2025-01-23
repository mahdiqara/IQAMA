<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';

const cardholderName = ref('');
const cardNumber = ref('');
const billingAddress = ref('');
const cvv = ref('');
const expiryDate = ref('');
const showCardForm = ref(false);

// Array to hold card data
const cards = reactive([
  {
    name: 'Khalid',
    number: 'xxxx-xxxx-xxxx-6969',
    expiry: '08/29',
  },
]);

// Format expiry date
const formatExpiryDate = (event) => {
  let value = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
  if (value.length > 4) value = value.slice(0, 4); // Limit to 4 characters

  if (value.length >= 3) {
    const month = value.slice(0, 2);
    const year = value.slice(2, 4);
    if (parseInt(month, 10) > 12) {
      value = `12/${year}`; // Cap month to 12
    } else {
      value = `${month}/${year}`;
    }
  }
  expiryDate.value = value;
};

// Restrict to numbers only
const allowNumbersOnly = (event, maxLength, refValue) => {
  let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
  if (value.length > maxLength) value = value.slice(0, maxLength); // Limit length
  refValue.value = value; // Update value
};

// Submit card information
const handleSubmit = () => {
  if (cardNumber.value.length !== 16) {
    alert('Card number must be exactly 16 digits.');
    return;
  }

  if (cvv.value.length !== 3) {
    alert('CVV must be exactly 3 digits.');
    return;
  }

  if (!expiryDate.value.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
    alert('Invalid expiry date format.');
    return;
  }

  // Add card to the array
  cards.push({
    name: cardholderName.value || 'N/A',
    number: `xxxx-xxxx-xxxx-${cardNumber.value.slice(-4)}`,
  });

  // Hide form and reset inputs
  showCardForm.value = false;
  cardholderName.value = '';
  cardNumber.value = '';
  billingAddress.value = '';
  cvv.value = '';
  expiryDate.value = '';
};

// Hide card form when clicking outside
const handleOutsideClick = (event) => {
  if (!event.target.closest('.cardinfo') && !event.target.closest('.addcard')) {
    showCardForm.value = false;
  }
};

// Attach event listener
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

// Clean up event listener
onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<template>
  <div class="mid">
    <div class="cards">
      <div class="cardcont">
        <div v-for="(card, index) in cards" :key="index" class="cardone">
          <span class="Current">Current Card</span>
          <div class="input">
            <span>Cardholder Name</span>
            <div class="cardholeder">{{ card.name }}</div>
          </div>
          <div class="input">
            <span>Card Number</span>
            <div class="cardholeder">{{ card.number }}</div>
          </div>
        </div>
      </div>
      <div class="addcard" @click="showCardForm = !showCardForm">
        <img src="../assets/pluscard.svg" alt="" />
        <span>Add New Card</span>
        <div v-if="showCardForm" class="cardinfo" @click.stop>
          <div class="inputs">
            <span>Cardholder Name</span>
            <div class="cardholeders">
              <input type="text" v-model="cardholderName" placeholder="Name" />
            </div>
          </div>
          <div class="inputs">
            <span>Card Number</span>
            <div class="cardholeders">
              <input
                type="text"
                v-model="cardNumber"
                @input="(e) => allowNumbersOnly(e, 16, cardNumber)"
                maxlength="16"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
            </div>
          </div>
          <div class="inputs">
            <span>Billing Address</span>
            <div class="cardholeders">
              <input type="text" v-model="billingAddress" placeholder="Address" />
            </div>
          </div>
          <div class="inputs">
            <span>CVV</span>
            <div class="cardholeders">
              <input
                type="text"
                v-model="cvv"
                @input="(e) => allowNumbersOnly(e, 3, cvv)"
                maxlength="3"
                placeholder="XXX"
              />
            </div>
          </div>
          <div class="inputs">
            <span>Expiry Date</span>
            <div class="cardholeders">
              <input
                type="text"
                v-model="expiryDate"
                @input="formatExpiryDate"
                maxlength="5"
                placeholder="MM/YY"
              />
            </div>
          </div>
          <button class="Submit" @click="handleSubmit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inputs{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Submit{
    width: 272px;
    height: 40px;
    background: rgba(112, 178, 241, 1);
color: white;
border: none;
border-radius: 10px; 
cursor: pointer;
}

.inputs span{
   color: rgba(30, 30, 30, 1); 
   font-weight: 400 !important;
}

.cardholeders input{ 
width: 272px;
height: 34px;
background-color: white;
border: 1px solid rgba(217, 217, 217, 1);
border-radius: 10px;
font-size: 16px;

}
.cardinfo{
height: 576px;
    width: 320px;
    border: 3px solid rgba(112, 178, 241, 1);
    border-radius: 10px;
    position: absolute;
    background-color: white;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    
}
.exit{
width: 52px;
height: 40px;
background: rgba(0, 0, 0, 1);
box-shadow: 1px 2px 2px 0px rgba(112, 178, 241, 1);

}
.addcard span{
    color: #000;
    font-size: 25px;
    font-weight: 600;
}
.addcard{
    width: 320px;
    height: 291px;
    border: 3px solid rgba(185, 185, 185, 1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}
.Current{
    font-size: 23px;
    color: #000;
    font-weight: 600;
}
.cardholeder{
    width: 272px;
    height: 40px;
    border: 1px rgba(217, 217, 217, 1) solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    color:rgba(179, 179, 179, 1) ;
}
.cardone{
    width: 320px;
    height: 291px;
    border: 3px solid rgba(185, 185, 185, 1) ;
    border-radius: 10px;display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bolder;

}
.cardcont{
    display: flex;
gap:20px ;


}
.cards{
    display: flex;
    gap:20px ;

}
.mid {
  height: 1028px;
  width: 1436px;
  border-radius: 20px;
  box-shadow: 5.5px 7px 4px 0px rgba(0, 0, 0, 1);
  background: rgba(255, 255, 255, 1);
  padding: 25px;
  position: relative;
display: flex;
gap: 20px;
flex-direction: column;

}
</style>
