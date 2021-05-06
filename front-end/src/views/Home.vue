<template>
<div class="main-container">
	<div class="heading">
    <div class="heading-text">
      <span style="color:#FFB546">C</span>
      <span style="color:#FF7E46">r</span>
      <span style="color:#47AE8F">e</span>
      <span style="color:#88DCB3">a</span>
      <span style="color:#FFB546">t</span>
      <span style="color:#FF7E46">i</span>
      <span style="color:#47AE8F">o</span>
      <span style="color:#88DCB3">n</span>
      <span style="color:#FFB546"> O</span>
      <span style="color:#FF7E46">v</span>
      <span style="color:#47AE8F">e</span>
      <span style="color:#88DCB3">r</span>
      <span style="color:#FFB546"> C</span>
      <span style="color:#FF7E46">o</span>
      <span style="color:#47AE8F">n</span>
      <span style="color:#88DCB3">s</span>
      <span style="color:#FFB546">u</span>
      <span style="color:#FF7E46">m</span>
      <span style="color:#47AE8F">p</span>
      <span style="color:#88DCB3">t</span>
      <span style="color:#FFB546">i</span>
      <span style="color:#FF7E46">o</span>
      <span style="color:#47AE8F">n</span>
    </div>
    <div class="input-container">
      <div class="input">
        <input id="email-input" type="text" class="email-input" placeholder="Enter your email" v-model="email">
        <button id="email-submit" type="submit" value="Submit" class="email-submit" @click.prevent="submitEmail()">Submit</button>
      </div>
    </div>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Thank you! Your email has been added to our list.</p>
    </b-alert>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      dismissSecs: 3,
      dismissCountDown: 0,
    }
  },
  methods: {
    async submitEmail() {
      try {
        await axios.post('/api/users', {
          email: this.email
        });
        this.dismissCountDown = this.dismissSecs
        this.email = ""
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.diagonal-box {
  height: 80vh;
  background-color: #FFEED7;
  transform: skewY(-11deg);
} 
.content { 	
	max-width: 50em;
  margin: 0 auto; 
  transform: skewY(11deg);
}

.main-container {
  height: 91.5vh;
  background-color: #FFEED7;
}
.heading {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
}
.heading-text {
  color: #FFB546;
  padding-top: 150px;
  padding-bottom: 15px;
  font-size: 60px;
  font-weight: 600;
  border-bottom: 5px solid #FF7E46;
}
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.input {
  margin: 40px;
  background-color: white;
  width: 700px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.email-input {
  border: none;
  font-size: 16px;
  color: black;
  height: 100%;
  width: 100%;
  padding: 6px 10px;
}
.email-submit {
  all: unset;
  cursor: pointer;
  width: 100px;
  height: 44px;
  background-color: #FF7E46;
  color: white;
  font-weight: 600;
}

@media only screen and (max-width: 600px) {
  .heading {
    padding: 0 35px 0 35px;
  }
  .heading-text {
    font-size: 40px;
  }
  .input {
    width: 300px;
    margin: 30px;
  }
}
</style>