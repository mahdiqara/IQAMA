<template>
  <div id="container">
    <div id="the-calculator">
      <div id="the-display">
        <form name="calculator">
          <span id="total">{{ display }}</span>
        </form>
      </div>
      <div id="the-buttons">
        <div class="button-row clearfix">
          <button @click="resetCalc" id="calc_clear" value="C/E">C/E</button>
          <button @click="backspace" id="calc_back" value="←"><img src="../assets/deletarrow.svg" alt=""></button>
          <button @click="neg" id="calc_neg" value="-/+">-/+</button>
          <button @click="setOperator('/')" class="calc_op" value="/">÷</button>
        </div>
        <div class="button-row clearfix">
          <button v-for="i in ['7', '8', '9']" :key="i" @click="addNumber(i)" class="calc_int" :value="i">{{ i }}</button>
          <button @click="setOperator('*')" class="calc_op" value="*">×</button>
        </div>
        <div class="button-row clearfix">
          <button v-for="i in ['4', '5', '6']" :key="i" @click="addNumber(i)" class="calc_int" :value="i">{{ i }}</button>
          <button @click="setOperator('-')" class="calc_op" value="-">-</button>
        </div>
        <div class="button-row clearfix">
          <button v-for="i in ['1', '2', '3']" :key="i" @click="addNumber(i)" class="calc_int" :value="i">{{ i }}</button>
          <button @click="setOperator('+')" class="calc_op" value="+">+</button>
        </div>
        <div class="button-row clearfix">
          <button @click="addNumber('0')" id="calc_zero" class="calc_int" value="0">0</button>
          <button @click="addDecimal" id="calc_decimal" value=".">.</button>
          <button @click="submitCalc" id="calc_eval" value="=">=</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 0,
      operator: null,
      display: "0",
      isA: true,
      firstInput: true,
      submission: false,
    };
  },
  methods: {
    addNumber(value) {
      if (this.submission) this.resetCalc();
      if (this.firstInput) {
        this.display = value;
        this.firstInput = false;
      } else {
        this.display += value;
      }
      this.isA ? (this.a = this.display) : (this.b = this.display);
    },
    addDecimal() {
      if (this.display.includes(".")) return;
      this.addNumber(".");
    },
    setOperator(op) {
      if (!this.firstInput && this.operator) this.calculate();
      this.operator = op;
      this.isA = false;
      this.firstInput = true;
    },
    submitCalc() {
      if (this.operator && !this.firstInput) this.calculate();
      this.submission = true;
    },
    calculate() {
      let result;
      const a = parseFloat(this.a);
      const b = parseFloat(this.b);
      switch (this.operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Error";
          break;
        case "^":
          result = Math.pow(a, b);
          break;
        default:
          result = this.display;
      }
      this.display = result.toString();
      this.resetCalcState(result);
    },
    resetCalc() {
      this.a = 0;
      this.b = 0;
      this.operator = null;
      this.display = "0";
      this.isA = true;
      this.firstInput = true;
      this.submission = false;
    },
    resetCalcState(value) {
      this.a = value;
      this.b = 0;
      this.operator = null;
      this.isA = true;
      this.firstInput = true;
    },
    backspace() {
      if (this.display.length > 1) {
        this.display = this.display.slice(0, -1);
      } else {
        this.display = "0";
      }
      this.isA ? (this.a = this.display) : (this.b = this.display);
    },
    neg() {
      this.display = (parseFloat(this.display) * -1).toString();
      this.isA ? (this.a = this.display) : (this.b = this.display);
    },
    sqrt() {
      const value = Math.sqrt(parseFloat(this.display));
      this.display = value.toString();
      this.resetCalcState(value);
    },
    square() {
      const value = Math.pow(parseFloat(this.display), 2);
      this.display = value.toString();
      this.resetCalcState(value);
    },
    denom() {
      const value = 1 / parseFloat(this.display);
      this.display = value.toString();
      this.resetCalcState(value);
    },
  },
};
</script>

<style scoped>
#calc_neg {
  background: rgba(112, 178, 241, 1);
  width: 3.875rem; /* 62px */
  height: 3.725rem; /* 59.6px */
  border-radius: 1rem; /* 16px */
  color: white;
}

* {
  box-sizing: border-box;
}

#container {
  width: 38.75rem; /* 620px */
  margin: 0 auto;
  font-family: 'Helvetica Neue LT Pro', 'Helvetica', sans-serif;
}

#the-calculator {
  font-size: 1.5rem; /* 24px */
  display: block;
  width: 20.5rem; /* 328px */
  float: left;
  margin: 0;
  padding: 1.25rem; /* 20px */
  padding-top: 1.5625rem; /* 25px */
  background-color: rgba(23, 24, 26, 1);
  border-radius: 1rem; /* 16px */
}

#the-calculator #the-display #total {
  width: 98%;
  margin: 0 auto 0.5rem; /* 8px */
  display: block;
  border-radius: 0.25rem; /* 4px */
  font-size: 2.5rem; /* 40px */
  color: white;
  text-align: left;
  overflow-x: scroll;
}

#the-calculator #the-buttons {
  width: 100%;
}

#the-calculator #the-buttons .button-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem; /* 8px */
}

#the-calculator #the-buttons button {
  font-size: 1rem; /* 16px */
  display: inline-block;
  position: relative;
  border: none;
  cursor: pointer;
  text-shadow: none;
}

#calc_clear, #calc_back {
  width: 3.875rem; /* 62px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(97, 97, 97, 1);
}

.calc_int {
  width: 3.875rem; /* 62px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(48, 49, 54, 1);
  color: rgba(112, 178, 241, 1);
}

.calc_op {
  width: 3.875rem; /* 62px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(112, 178, 241, 1);
  color: white;
}

#calc_zero {
  width: 5.625rem; /* 90px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(112, 178, 241, 1);
  color: white;
}

#calc_decimal {
  width: 5.625rem; /* 90px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(48, 49, 54, 1);
  color: rgba(112, 178, 241, 1);
}

#calc_eval {
  width: 5.625rem; /* 90px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  color: rgba(112, 178, 241, 1);
}

#extra-buttons button {
  width: 3.875rem; /* 62px */
  height: 3.75rem; /* 60px */
  border-radius: 1rem; /* 16px */
  background-color: rgba(97, 97, 97, 1);
}
</style>
