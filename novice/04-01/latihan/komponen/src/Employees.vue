<template>
  <ul>
    <li v-for="employee in employees" :key="employee">{{employee}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      employees: ["Gilang", "Fajar", "Fuad"]
    };
  }
};
</script>>

<style>
</style>