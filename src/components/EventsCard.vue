<template>
  <div class=" flex items-center justify-center">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-2 my-4">
      <!-- Event Cards -->
      <div v-for="item in apiData" :key="item.id" class="event-card overflow-hidden mx-2 my-4">
        <div class="eventImage">
          <router-link to="/eventpage">
                <img :src="item.image" :alt="`Event ${index + 1}`" style="border-radius: 5%;" >
                <h1 class="event-name" >
                {{ item.name }}
                </h1>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  
  export default {
    data() {
      return {
        apiData: [],
      };
    },
    mounted() {
      // Make a GET request when the component is mounted
      axios.get('http://backend.abhishekverma.me/api/events/?format=json', {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => {
          // Handle the successful response
          this.apiData = response.data;
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error fetching data:', error);
        });
    },
  };
</script>

<style scoped>
/* Additional Custom Styles */
.event-card {
  display: grid;
  justify-items: center;
  align-items: center;
  
  border-radius: 7%;
  width: 18em;
  height: 20em;
  background-image: url(./assets/ipod.svg);
  background-size: cover;
  box-shadow: 0px 0px 40px #1C9C8C;
}
.event-name{
        color: white;
        font-family: 'forgotten-futurist-bd' ;
        font-size: 20px;
    }
.eventImage{
  position: relative;
  width: 70%;
  
}
</style>
