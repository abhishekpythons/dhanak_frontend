<template>
  <NavBar />
  <br> <br> <br>
  <div>
    <eventsHeading />
    <div class="events">
      <EventsCard />
    </div>
  </div>
  <div>
    <mentorsHeaing />
    <div class="events">
      
    </div>
  </div>
  
  <FooTer />
</template>

<script setup>
// import BackGround from './components/BackGround.vue'
  import EventsCard from './components/EventsCard.vue'
  import NavBar from './components/NavBar.vue'
//import eventsHeading from './components/eventsHeading.vue'
//import mentorsHeaing from './components/mentorsHeading.vue'
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
  /* background-color: #0a0231; */
  background-image: url(./components/assets/layered-waves-haikei.svg);
  
  background-size:cover;
  color: #2c3e50;
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
</style>
