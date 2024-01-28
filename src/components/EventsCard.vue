<template>
  <div class=" flex items-center justify-center">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mx-2 my-4">
      <!-- Event Cards -->
      <div v-for="(event, index) in events" :key="index" class="event-card overflow-hidden mx-2 my-4">
        <div class="eventImage">
          <img src="./assets/dhanak_event.jpg" :alt="`Event ${index + 1}`" style="border-radius: 5%;" >
        </div>
        
        <!-- <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
          <p class="text-gray-700">{{ event.description }}</p>
        </div> -->
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          title: 'Event 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in metus vehicula, id fringilla justo gravida.',
          image: 'https://placekitten.com/301/200',
        },
        {
          title: 'Event 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in metus vehicula, id fringilla justo gravida.',
          image: 'https://placekitten.com/301/200',
        },
        {
          title: 'Event 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in metus vehicula, id fringilla justo gravida.',
          image: 'https://placekitten.com/301/200',
        },
        {
          title: 'Event 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in metus vehicula, id fringilla justo gravida.',
          image: 'https://placekitten.com/301/200',
        },
        {
          title: 'Event 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in metus vehicula, id fringilla justo gravida.',
          image: 'https://placekitten.com/301/200',
        },
        // Add more events as needed
      ],
    };
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
  box-shadow:  5px 5px 7px #5a5a5a,
             -5px -5px 7px #ffffff;
}
.eventImage{
  position: relative;
  width: 70%;
  
}
</style>
