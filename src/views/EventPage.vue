<!-- src/views/EventDetailPage.vue -->
<template>
    <div>
      <header class="p-4">
        <router-link to="/events" class="back-title">Back to Events</router-link>
      </header>
      <div class="container mx-auto mt-8">
        <div class="max-w-2xl mx-auto">
          <img :src="event.image" :alt="event.title" class="w-full h-64 object-cover rounded mb-4">
          <h2 class="text-3xl font-semibold mb-2">{{ event.title }}</h2>
          <p class="text-gray-600">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        event: {},
      };
    },
    mounted() {
      const id = this.$route.params.id;
      this.fetchEventData(id);
    },
    methods: {
      async fetchEventData(id) {
        try {
          const response = await this.axios.get(`https://backend.abhishekverma.me/api/events/?format=json${id}`);
          this.event = response.data;
        } catch (error) {
          console.error('Error fetching event data:', error);
        }
      },
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
  