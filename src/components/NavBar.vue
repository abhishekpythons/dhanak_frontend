<template>
  <nav class="p-1" style=" position: relative; top: 0px; width:100%;">
        <div class="container mx-auto flex items-center ">
            <!-- Navigation Links -->
            <div class="hidden md:flex items-center justify-around mt-12" style=" height: 12vh; width:100%;">
              <!-- <a class="navbarLink" href="#sponsors">Sponsors</a> -->
              <router-link class="navbarLink" to="/">Home</router-link>
              <router-link class="navbarLink" to="/about">About</router-link>
              <router-link class="navbarLink" to="/events">Events</router-link>
              <router-link class="navbarLink" to="/">
                <img height="140vh" width="130vh" src="./assets/dhanak_logo.png">
              </router-link>
              <router-link class="navbarLink" to="/signup">SignUp</router-link>
              <router-link class="navbarLink" to="/login">LogIn</router-link>
              <router-link class="navbarLink" to="/merchandise">Merch</router-link>     
            </div>

            <!-- Hamburger Menu for Small Screens -->
            <div class="md:hidden flex items-center justify-around" 
                style=" width:100%; margin-top: 2rem;">
                <div style="width: 36px; height: 32px;">
                </div>
                  <router-link @click="toggleMobileMenu();" to="/" style="z-index: 3; !important">
                    <img height="130vh" width="120vh" src="./assets/dhanak_logo.png">
                  </router-link>
                  <button id="mobile-menu-btn" style=" z-index: 3;"
                    class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
                    <input id="checkbox" type="checkbox" v-model="isMobileMenuVisible" @click="toggleMobileMenu();">
                      <label class="toggle" for="checkbox">
                          <div id="bar1" class="bars"></div>
                          <div id="bar2" class="bars"></div>
                          <div id="bar3" class="bars"></div>
                      </label>
                  </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu (Hidden by default) -->
    <div v-show="isMobileMenuVisible"
        class=" md:hidden w-full left-0 right-0 grid items-center justify-center"
        style=" position: absolute; top:0; height:100%; z-index: 2; background-color: rgb(0, 0, 0);">
        <div class="grid">
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/">Home</router-link>
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/about">About</router-link>
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/events">Events</router-link>
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/signup">SignUp</router-link>
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/login">LogIn</router-link>
          <router-link @click="toggleMobileMenu();" class="mt-4 mobileNavbarLink" to="/merchandise">Merchandise</router-link>   
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
  }
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
   
  #checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 5px;
  background-color: #EC9420;
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked + .toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
  .mobileNavbarLink {
    /* */
    width: 15rem;
    font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  font-family: 'forgotten-futurist-bd';
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(255, 255, 255);
  font-weight: 800;
  box-shadow: 0px 0px 60px #1C9C8C;
  }

  .navbarLink{
    color: #DC3C34;
    text-decoration: none;
    margin-bottom: 1.2rem;
    font-family: 'forgotten-futurist-bd';
  font-size: 1.7rem;
  font-weight: 500;
    transition: color 0.3s ease;
    font-weight: bold; 
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
  @font-face {
      font-family: 'forgotten-futurist-bd';
      src: url('./fonts/forgotten-futurist-bd.otf') format('truetype');
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