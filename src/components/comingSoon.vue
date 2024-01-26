<!-- ComingSoon.vue -->
<template>
    <div style="margin-top: 2em;">
        <h1 style="font-size: 28px; color:rgb(161, 161, 6);">
            March 16 to 18th
        </h1>
      <h1>Coming Soon!</h1>
      <div id="countdown">{{ countdownText }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        countdownText: "",
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
  
          this.countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          this.countdownText = "EXPIRED";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your component-specific styles go here */
  #countdown {
    font-size: 2em;
    margin-top: 20px;
    color:#EC9420;
    font-family:"Kamikaze3DGradient";
  }
  h1{
    font-size: 36px;
    color:rgb(255, 0, 0);
    font-family:"Kamikaze3DGradient";
  }
  </style>
  