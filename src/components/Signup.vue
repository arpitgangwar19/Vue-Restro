<style >
.contain {
  display: block;

  margin: auto;
}
.signUpbox {
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
.signUpButton {
  height: 10%;
  width: 8%;
  margin: auto;

  margin-top: 2%;
}
.signUpBack{
   height: 100%;
  background-image: url("../assets/2.jpg");
  background-repeat: no-repeat;
  background-size: cover, contain;
  position: absolute;
  width: 100%;
}
</style>
<template>
  <div class="signUpBack">
    <h1>Signup</h1>

    <div class="contain">
      <input
        type="text"
        class="signUpbox"
        placeholder="Username"
        v-model="username"
      />
      <input type="text" class="signUpbox" placeholder="Name" v-model="uname" />
      <input type="text" class="signUpbox" placeholder="Last Name" v-model="lname" />
      <input
        type="password"
        class="signUpbox"
        placeholder="****"
        v-model="password"
      />

      <input
        type="submit"
        v-on:click="signUP"
        class="signUpButton"
        value="Sign Up"
      />
      <p><router-link to="/login">Login</router-link></p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      uname: "",
      username: "",
      lname: "",
      password: "",
    };
  },
  methods: {
    async signUP() {
      let posts = await axios.post("http://localhost:3000/user", {
        user: this.uname,
        username: this.username,
        lastname: this.lname,
        password: this.password,
      });
      if (posts.status == 201) {
        this.$router.push({ name: "Home" });
        console.log(posts);
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