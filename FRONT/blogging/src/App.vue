<template>
  <section>
    <header>
      <router-link :to="{ name: 'Home' }"><img class="logo-header" src="" alt=""> </router-link> 
     <div class="custom-shape-divider-bottom-1636089532">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
    </header>

    <div id="nav">
      <router-link :to="{ name: 'PostList' }">Feed</router-link> |
      <router-link :to="{ name: 'PostCreate' }">Create Post</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> 
      <router-link v-if="!user"  :to="{ name: 'Register' }">Sign Up</router-link> |
      <router-link v-if="!user" :to="{ name: 'Login' }">Login</router-link>
      <div  id="logged" v-else> <a  @click="logOut">Log Out</a> </div>
    </div>
    <router-view @loggedin="userLogin" :user="user" />
    
  </section>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.userLogin();
  },
  methods: {
    async logOut() {
      const repsonse = await fetch("http://localhost:3000/users/logout", {
        credentials: "include",
      });
      const data = await response.json();
      this.user = window.localStorage.removeItem("username");
      this.user = null;
    },
    userLogin() {
      if (window.localStorage.getItem("username")) {
        this.user = window.localStorage.getItem("username");
      }
    },
  },
};
</script>


<style>
#logged {
  display: inline-block;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  overflow-x: hidden;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

header {
  z-index: 999;
  background-color: #740214;
  padding: 2em;
  width: 100%;
  top:0;
  position: fixed;
  border-bottom: thin solid #ffffff;
}

header h4 {
  color: white;
  font-family: 'Arial';
  font-weight:bolder;
  text-decoration: none;
}

header a {
   text-decoration: none;
}

header span {
  font-size: 0.75em;
}

#nav {
  z-index: 999;
  width: 100%;
  border-top: thin solid #ffffff;
  padding: 1em;
  background-color: #740214;
  color: white;
  position: fixed;
  bottom: 0;
  font-family: 'Arial';
  display: flex;
  justify-content: space-around;
  
}

#nav a {
  font-size: 0.75em;
  text-decoration: none;
  color: rgb(201, 105, 105);
  padding-top: 0.255em;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

img {
  width: 2em;
  z-index: 2000;
}

p {
  color: black;
}

a {
text-decoration: none!important;
}

a:hover {
  font-weight: 900;
  font-style: italic;
}

.custom-shape-divider-bottom-1636089532 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1636089532 svg {
    position: relative;
    display: block;
    width: calc(165% + 1.3px);
    height: 139px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1636089532 .shape-fill {
    fill: #FFFFFF;
}




</style>
