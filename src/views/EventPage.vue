<template>
    <div>
      <header class="p-4">
        <router-link to="/events" class="back-title">Back to Events</router-link>
      </header>
      <div class="container mx-auto mt-8">
        <div class="max-w-2xl mx-auto">
          <p style="color: white;">Received prop: {{ eventID }}</p>
          <img :src="apiData.image" alt="event.title" class="w-full h-64 object-cover rounded mb-4">
          <h2 style="color: white;" class="text-3xl font-semibold mb-2">{{ apiData.name }}</h2>
          <p style="color: white;" class="text-gray-600">{{ apiData.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
  props: ['eventID'],
  data() {
      return {
        apiData: [],
      };
    },
    mounted() {
      axios.get('https://backend.abhishekverma.me/api/event/'+1+'?format=json', {
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
  /* Add any additional styles here */
  .back-title{
    font-size: 48px;
    font-family: 'Kamikaze3DGradient';
    color: rgb(219, 138, 17);
  }
  </style>
  