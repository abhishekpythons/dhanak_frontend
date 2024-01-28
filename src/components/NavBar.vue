<template>
  <!-- <div class="logo">
    <div class="shape">
      <img id="myClickableHeading" src="./assets/dhanak_logo.png"> 
    </div>
  </div> -->
  <!-- <div class="sm:grid-cols-1">
    <nav class="navbar">
        <div class="navbar-left">
          <a href="#events">Events</a>
          <a href="#sponsors">Sponsors</a>
        </div>
        
        
      <div class="navbar-right">
        <a href="#signup">Sign Up</a>
        <a href="#login">Log In</a>
      </div>
    </nav>
    </div> -->
  <nav class="p-1" style=" position: relative; top: 0px; width:100%;">
        <div class="container mx-auto flex items-center ">

            <!-- Navigation Links -->
            <div class="hidden md:flex items-center justify-evenly mt-12" style=" height: 12vh; width:100%;">
              <a class="navbarLink" href="#events">  Events</a>
              <a class="navbarLink" href="#sponsors">Sponsors</a>
              <a href="">
                <img height="140vh" width="130vh" src="./assets/dhanak_logo.png">
              </a>
              
              <a  class="navbarLink" href="#signup">SignUp</a>
              <a class="navbarLink" href="#login">LogIn</a>       
            </div>

            <!-- Hamburger Menu for Small Screens -->
            <div class="md:hidden flex items-center justify-around" 
                style=" width:100%; margin-top: 10px;">
                <div style="width: 36px; height: 32px;">
                </div>
                
                <a style="z-index: 0; !important">
                  <img id="myClickableHeading" height="130vh" width="120vh" src="./assets/dhanak_logo.png">
                </a>
                <button id="mobile-menu-btn" style="z-index: 3;" @click="toggleMobileMenu();"
                    class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                    <svg class="h-8 w-9" fill="none" stroke="currentColor" viewBox="0 0 30 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                  
                
            </div>
        </div>
    </nav>

    <!-- Mobile Menu (Hidden by default) -->
    <div id="mobile-menu" v-show="isMobileMenuVisible"
        class="md:hidden text-white left-20 right-0 transform transition-transform ease-in-out duration-300"
        style="position: fixed; top: 0; height:100%; z-index: 2; background-color: rgb(16, 15, 15);">
        <div class="mt-20"> 
          <a href="#" class="block py-2 text-lg tracking-wide antialiased font-semibold" style=" color:#1C9C8C; ">Events</a>
          <a href="#" class="block py-2 text-lg tracking-wide antialiased font-semibold" style=" color: #1C9C8C; ">Sponsor</a>
          <a href="#" class="block py-2 text-lg tracking-wide antialiased font-semibold" style=" color: #1C9C8C;">Sign up</a>
          <a href="#" class="block py-2 text-lg tracking-wide antialiased font-semibold" style=" color: #1C9C8C; ">Log in</a>
        </div>
        
    </div>
</template>

<script>
  export default {
  data() {
    return {
      isMobileMenuVisible: false,
    };
  },

  methods: {
    toggleMobileMenu() {
      this.isMobileMenuVisible = !this.isMobileMenuVisible;
    },
  },
};
</script>



<style scoped>
.main{
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
    .logo{
      z-index: 1;
      display: flex;
      justify-content: center;
      justify-items: center;
    }
    /* .navbar {
      position: relative;
      z-index: 1;
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 5vh; */
    /* backgroun-color: rgba(255, 255, 255, 0.185); */
    
    /* background-image: url(./assets/5.jpg); */
    /* background-size: cover; */
    /* box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); */
  /* } */
  /* .navbar-left{
    height: 50%;
    padding: 0px;
    margin: 0px;
  }
  .navbar-right{
    height: 50%;
    padding: 0px;
    margin: 0px;
  } */
  
  /* .navbar h1 {
    font-size: 36px;
    margin: 10px;
    color: #333;
  } */
  
  .navbarLink {
    color: #DC3C34;
    text-decoration: none;
    margin:60px;
    font-size: 3vh;
    transition: color 0.3s ease;
    font-weight: bold;
  }
  
  .navbarLink:hover {
    color: #EC9420;
  }



 
  
  .shape{
    z-index: 2;
    position: relative;
    display: flex;
    justify-items: center;
    justify-content:space-evenly;
    padding: 10px;
    /* height: 160px; */
    /* width: 220px; */
    height: 25vh;
    width: 36vh;
  }

  @font-face {
      font-family: 'Kamikaze3DGradient';
      src: url('./fonts/Kamikaze3DGradient.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

  .mobileLogo{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>