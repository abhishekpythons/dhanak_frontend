<template>
  <div class=" flex items-center justify-center">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <!-- Event Cards -->
      <div v-for="(event, index) in events" :key="index" class="event-card bg-white rounded-lg overflow-hidden shadow-lg mx-2 my-4">
        <img :src="event.image" :alt="`Event ${index + 1}`" class="w-full h-40 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
          <p class="text-gray-700">{{ event.description }}</p>
        </div>
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
          image: 'https://placekitten.com/300/200',
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
  transition: transform 0.3s;
}

.event-card:hover {
  transform: scale(1.05);
}
</style>
