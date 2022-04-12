<style >
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 89%;
margin: 5%;
margin-top: 2%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hideButton{
  float: right;
    margin-right: 92px;
    margin-top: 4%;
}
</style>
<template>
<div class="">
  <Header/>


       <h1>List of Restro</h1>
        <div id="demo">
  <button class="hideButton" v-on:click="show = !show">
    Hide
  </button>
  <transition name="bounce">
    <p v-if="show">
        <table id="customers" style="">
                <tr>
                <th>id</th>
                <th>Name</th>
                <th>Neighborhood</th>
                <th>Address</th>
                <th>Cuisine</th>
              </tr>
              <tr v-for="item in resturants"  :key="item.id">
              <td>{{item.id}}</td>
              <td>{{item.name}}</td>
              <td>{{item.neighborhood}}</td>
              <td>{{item.address}}</td>
              <td>{{item.cuisine_type}}</td>
              </tr>
            </table>
    </p>
  </transition>
</div>
  
       

        
            
            
            </div>
</template>
<script>
import axios from "axios";
import Header from './Header.vue'
export default {
  name: "Home",
   el: '#demo',
   
 
  data(){ 
    return {cust:"",
    resturants:[],
    show: true,
     
    };
  },

  components: {Header},

   async mounted() {
   
   let cache = localStorage.getItem("username");
    if (!cache) {
      this.$router.push({ name: "Login" });
    }
     if(cache)
     {
        this.cust= JSON.parse(cache).username;
     let result = await axios.get("http://localhost:3000/restaurants");
    console.log(result);
    this.resturants=result.data;
      // console.log("faksdhfkla"+this.resturants);
    
     }
  },
   

};
</script>