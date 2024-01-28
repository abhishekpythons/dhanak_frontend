<template>
  <navBar />
  <commingSoon />
  <div class="flex items-center justify-center">
    <dhanakLoader />
  </div>
  
  <div>
    <div class="subHeading">
      <a href="/"><button >Events</button></a>
    </div>
    
    <div class="events">
      <EventsCard />
    </div>
  </div>
  <div>
    <div class="subHeading">
      <a href="/"><button >Mentors</button></a>
    </div>
    <div class="events">
      
    </div>
  </div>
  
  <fooTer />
</template>

<script setup>
// import BackGround from './components/BackGround.vue'
  import EventsCard from './components/EventsCard.vue'
  import NavBar from './components/NavBar.vue'
  // import eventsHeading from './components/eventsHeading.vue'
  // import mentorsHeaing from './components/mentorsHeading.vue'
  import FooTer from './components/FooTer.vue'
  import dhanakLoader from './components/dhanakLoader.vue'
  import commingSoon from './components/comingSoon.vue'
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:ghostwhite;
  /* background-image: url(./components/assets/layered-waves-haikei.svg); */
  
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

.subHeading{
  
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .subHeading a{
    
    color: rgb(219, 138, 17);
    font-size: 48px;
     font-family:"Kamikaze3DGradient";
  }
</style>
