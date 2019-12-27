<template>
  <div>
    <div v-bind:class="[show ? blurClass: '', backClass]">
      <h1>Transition Demo</h1>
    </div>
    <button @click="show = !show">Toggle</button>

    <transition name="fade">
      <div v-if="show">
        <h1>{{demo}}</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo: "Transition Me",
      show: false,
      backCLass: "bk",
      blurClass: "blur"
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bk {
  transition: all 0.5 ease-out;
}

.blur {
  filter: blur(2px);
  opacity: 0.4;
}
</style>