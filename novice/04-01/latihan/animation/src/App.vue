<template>
  <div>
    <div @click="show=!show">
      <h1>{{title}}</h1>
    </div>
    <transition>
      <h2 v-if="show">{{description}}</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Big News!",
      show: false,
      description: "This is description text"
    };
  }
};
</script>

<style>
.v-enter-active {
  animation: bounceIn 2s;
}

.v-leave-active {
  animation: bounceIn 2s reverse;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }

  60% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: 1;
    opacity: 1;
  }
}
</style>