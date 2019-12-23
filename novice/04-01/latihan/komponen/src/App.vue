<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Gilang :pesan="msg" />
    <ujang :number="nomor" judul="Dummy Title" />
  </div>
</template>

<script>
import Gilang from "./components/HelloWorld.vue";
import ujang from "./components/SamplePar.vue";

export default {
  name: "app",
  components: {
    ujang,
    Gilang
  },
  data() {
    return {
      msg: "https://google.com",
      nomor: 434882390
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
