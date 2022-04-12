<style >
.contain {
  display: block;

  margin: auto;
}
.box {
display: block;
padding: 0.5%;
margin: auto;
  margin-top: auto;
margin-top: auto;
margin-top: 2%;
width: 17%;
height: 4%;
opacity: 0.8;
border-radius: 7px;
}
.login-back {
    height: 100%;
    background-image: url("../assets/3.jpg");
    background-repeat: no-repeat;
    background-size: cover, contain;
    position: absolute;
    width: 100%;
}
.subButton {
  height: 5%;
width: 17%;
margin: auto;
  margin-top: auto;
margin-top: 2%;
opacity: 0.5;
}
</style>
<template>
  <div
    class="login-back">
    <h1 style="color: #e5dedeed;">Login</h1>

    <input type="text" class="box" placeholder="Username" v-model="username" />
    <input type="password" class="box" placeholder="****" v-model="password" />

    <input type="submit" v-on:click="login" class="subButton" value="Login" />
    <p><router-link to="/Signup">Signup</router-link></p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      //    console.log(this.username);

      let result = await axios.get(
        `http://localhost:3000/user?username=${this.username}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        //    console.log(JSON.stringify(result.data[0].data[1]));
        localStorage.setItem("username", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      } else {
        this.$router.push({ name: "Signup" });
      }
    },
  },

  mounted() {
    // let posts = axios.get("http://localhost:3000/user");
    let cache = localStorage.getItem("username");

    if (cache) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>