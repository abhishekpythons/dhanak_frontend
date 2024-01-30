<template>
  <NavBar />
  <router-view/>
  <FooTer />
</template>

<script setup>
  import NavBar from './components/NavBar.vue'
  import FooTer from './components/FooTer.vue'
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color:ghostwhite; */
  /* background-image: url(./components/assets/layered-waves-haikei.svg); */
  --color: rgba(114, 114, 114, 0.3);
  background-color: #000000;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}
#background{
  position: absolute;
  z-index:-1;
}
.events{
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  margin: 20px;
}

.subHeading{
  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .subHeading a{
    margin-top: 2rem;
    color: rgb(219, 138, 17);
    font-size: 48px;
     font-family:"Kamikaze3DGradient";
  }
  
</style>
