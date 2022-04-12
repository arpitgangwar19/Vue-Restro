<template>
  <div class="headcontainer">
    <router-link class="tabs" to="/">Home</router-link>
    <router-link class="tabs" to="/add">Add Restaurant</router-link>
    <a class="tabs"  v-on:click="logout">Logout</a>

    <div class="welcomeDiv">Hello  {{username}}</div>
  </div>
  <!-- <a href=""></a> -->
</template>

<script>
export default {
  name: "Header",
  props: ['username'],
  methods: {
    logout() {
      localStorage.removeItem("username");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.welcomeDiv {
  float: right;
  float: right;
  text-align: center;
  margin: 1%;
  padding: 1px;
  color: yellow;
  font-weight: bold;
}
.headcontainer {
  background-color: rgb(155, 154, 154);
  height: 5%;
  overflow: hidden;
}
.tabs {
  float: left;
  text-decoration: none;
  color: #232121;
  text-align: center;
  margin: 1%;
  padding: 1px;
}
.tabs:hover {
  /* margin: 2%;
  float: left; */
  /* background: white; */
  color: rgb(243, 243, 243);
}
</style>
