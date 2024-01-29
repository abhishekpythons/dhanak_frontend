<!-- ComingSoon.vue -->
<template>
    <div style="margin-top: 1em;" class="grid justify-center items-center">
        <h1 style="font-size: 3rem; color:#EC9420;">
            16 to 18th
        </h1>
        <h1 style="font-size: 3rem; color:#EC9420;">
          March 
        </h1>
        <dhanakLoader />
    </div>
    
    <div style="margin-top: 30px; display: grid; width: 100%; justify-content: center; align-items: center;">
      <div style=" box-shadow: 0px 0px 40px #1C9C8C ; padding-left: 1rem; padding-right: 1rem; border-radius: 25px; border: solid 1px #a1e6de ;">
      <div class="countDownStyle mt-4" style=" padding-top: 10px; letter-spacing: 0.05em; font-size: 2rem;">
        15th March, 2024
      </div>
      
      <div class="countDownStyle flex justify-center items-center" style="width: 100%;
        font-size: 38px;
        letter-spacing: 0.05em;">
          <div class="  " id="countdown">{{ countdownDays }}</div>
      </div>
      <div class="countDownStyle flex justify-center items-center" style=" width: 100%;
        font-size: 4em;
        letter-spacing: 0.1em;
        ">
        <div class=" countDownStyle" id="countdown">{{ countdownHours }} </div>
          <div class=" countDownStyle"  id="countdown">{{ countdownMinutes }} </div>
          <div class="countDownStyle" id="countdown">{{ countdownSeconds }} </div>
      </div>
      </div>
    </div>
    
  </template>
  

<script setup>
    import dhanakLoader from './dhanakLoader.vue'
</script>
  <script>
  
  export default {
    data() {
      return {
        countdownDays: "",
        countdownHours: "",
        countdownMinutes: "",
        countdownSeconds: "",
        countDownDate: new Date("Mar 16, 2024 00:00:00").getTime(),
      };
    },
    mounted() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    },
    methods: {
      updateCountdown() {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;
  
        if (distance >= 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
          this.countdownDays = `${days} Days`;
          this.countdownHours = ` ${hours}`;
          this.countdownMinutes = `:${minutes}`;
          this.countdownSeconds = `:${seconds}`;
        } else {
          this.countdownText = "EXPIRED";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
      font-family: 'ShareTechMono';
      src: url('./fonts/ShareTechMono-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  /* Your component-specific styles go here */
  h1{
    font-size: 36px;
    color:#EC9420;
    font-family:"Kamikaze3DGradient";
    
  }

  .countDownStyle{
    font-family:'ShareTechMono' , monospace;
    color: #a1e6de;
    text-align: center;
    color: #a1e6de;
    margin:0px;
    text-shadow: 0 0 20px #a1e6de, 0 0 20px rgba(10, 175, 230, 0.5);

  }
 
</style>
  