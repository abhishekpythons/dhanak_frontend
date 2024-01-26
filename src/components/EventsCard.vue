<template>

    <div class="flex" style="justify-content: space-around;">
      <div class=" container row " >
        <div class=" event-card md:w-1/3 lg:w-1/4 xl:w-1/4 mt-4" v-for="event in events" :key="event.id" :event="event">
          <div class=" bg-white p-4 rounded-md shadow-md overflow-hidden transition-transform hover:scale-105">
            <!-- <img :src="event.imageUrl" :alt="event.name" class="w-full h-40 object-cover mb-4"> -->
            <img :src="event.imageUrl" class="w-full h-40 object-cover mb-4">
            <!-- <img src="./assets/IMG_20230316_210509633~3.jpg"> -->
            <h3 class="text-lg font-semibold mb-2">{{ event.name }}</h3>
            <p class="text-gray-600">{{ event.details }}</p>
            
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
        { id: 1, name: "Event 1", imageUrl: "./images/IMG_20230316_210509633~3.jpg", details: "Event details for Event 1." },
        { id: 2, name: "Event 2", imageUrl: "./images/IMG_20230317_185245889~4.jpg", details: "Event details for Event 2." },
        { id: 3, name: "Event 3", imageUrl: "./images/IMG_20230317_185245889~4.jpg", details: "Event details for Event 3." },
        { id: 4, name: "Event 4", imageUrl: "./images/IMG_20230316_210509633~3.jpg", details: "Event details for Event 4." },
        // Add more events as needed
      ],
    };
  },
};

</script>

<style scoped>
.event-card {
  transition: transform 0.2s;
}
</style>
