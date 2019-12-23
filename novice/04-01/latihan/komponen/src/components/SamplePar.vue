<template>
  <div class="sample-paragraph">
    <h3>{{ judul }}</h3>
    <p>{{number}}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor enim ab repellendus fugiat totam maiores eum unde nesciunt saepe reiciendis, dignissimos doloribus quisquam? Modi, porro tempore? Autem molestias dolor doloribus.</p>
  </div>
</template>

<script>
export default {
  name: "LoremText",
  props: {
    judul: String,
    number: Number
  }
};
</script>

<style>
.sample-paragraph {
  background-color: blueviolet;
  padding: 20px;
}

.sample-paragraph p {
  color: #fff;
}

.sample-paragraph h3 {
  color: #fff;
}
</style>