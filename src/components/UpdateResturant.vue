<style >

</style>
<template>
  <div class="empty">
    Hello addd
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "UpdateRest",
  data() {

  },
  methods: {
   
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