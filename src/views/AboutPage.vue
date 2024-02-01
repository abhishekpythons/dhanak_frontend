<template>
    <header class="p-4">
        <h1>About US</h1>
      </header>
    <div class="container w-full mx-auto ">
        <div class="flex justify-center items-center">
            <div class="" style="width: 75%;">
        <h1 style="font-size: 62px; color: white;">Dhanak 2k24</h1>
        <!-- <img style="margin-top: 1rem;" src="../assets/dhanak.jpg" alt="dhanak"> -->
        <div calss="w-full">
            <p class="paragraph text-justify-evenly">
            Dhanak 2024 is the 13th edition of the annual cultural festival of the Indian Institute of Space Science and Technology. It is being organized from 16th March to 18th March 2024.
        </p>
        </div>
        
      </div>
        </div>
      <div>
        <h1 style="color: #DC3C34;">Gallery</h1>
        <div class="flex w-full mb-8 justify-around items-center">
            <div class="grid gap-8 mx-8 grid-cols-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <img
            src="https://placekitten.com/400/300"
            alt="Fest Image 1"
            class="h-52 object-cover rounded-lg"
          />
          <img
            src="https://placekitten.com/401/300"
            alt="Fest Image 2"
            class="h-52 object-cover rounded-lg"
          />
          <img
            src="https://placekitten.com/401/300"
            alt="Fest Image 2"
            class="h-52 object-cover rounded-lg"
          />
          <img
            src="https://placekitten.com/401/300"
            alt="Fest Image 2"
            class="h-52 object-cover rounded-lg"
          />
          <!-- Add more images as needed -->
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  /* Add your custom styles or override Tailwind styles here */
  h1{
        font-size: 48px;
        font-family: 'Kamikaze3DGradient';
        color: rgb(219, 138, 17);
    }
.paragraph{
    font-family:'forgotten-futurist-bd' ;
    color: #FFC95F;
    font-size: 2rem;

}
  </style>
  