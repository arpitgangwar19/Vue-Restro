
<template>
  <div class="affrestrocontainer">
      <Header/>

        <h2>Add Restro</h2>
      <form class="addForm">
        <input type="text" class="addFormInput" name="name" placeholder="Enter name of hotel" v-model="resturant.name"/>
        <input type="text" class="addFormInput" name="name" placeholder="Enter name of country" v-model="resturant.neighborhood"/>
        <input type="text" class="addFormInput" name="name" placeholder="Enter name of Address" v-model="resturant.address"/>
        <input type="text"  class="addFormInput" name="name" placeholder="Enter name of cuzine" v-model="resturant.cuisine_type"/>
      <button class="addrestro"  type="button" v-on:click="addRestro">Add</button>
      </form>

  </div>
</template>
<script>
// import axios from "axios";
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: "AddRest",
  components:{
      Header
  },
  data() {
   return {
   resturant : {
       name:"",
      neighborhood: "",
      address:"",
      cuisine_type:""
     }
   }
  },
  methods: {
   async addRestro(){
     let posts = await axios.post("http://localhost:3000/restaurants", {
        name: this.resturant.name,
        neighborhood: this.resturant.neighborhood,
        address: this.resturant.address,
        cuisine_type: this.resturant.cuisine_type,
      });
      if (posts.status == 201) {
        this.$router.push({ name: "Home" });
        console.log(posts);
      }
   }
  },

  mounted() {
    // let posts = axios.get("http://localhost:3000/user");

    let cache = localStorage.getItem("username");
    if (!cache) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
<style>
  .addForm
  {
    height: 50%;
    width: 30%;
    margin: auto;
    /* background-color: aqua; */
  }
.addFormInput{
    display: block;
height: 30%;
width: 56%;
padding: 1.5%;
margin: auto;
  margin-top: auto;
margin-top: 7%;
  }
  .addrestro{

    display: block;
height: 30%;
width: 56%;
padding: 1.5%;
margin: auto;
  margin-top: auto;
margin-top: 7%;

  }

  .affrestrocontainer{
    /* background-image: url("../assets/3.jpg");
    background-repeat: no-repeat;
    background-size: cover; */
  }
</style>