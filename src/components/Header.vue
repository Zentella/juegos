<template>
  <div
    class="header d-flex flex-column justify-content-center text-white text-center"
  >
    <h1>{{ title }}</h1>
    <hr class="w-75 mx-auto" />
  </div>
</template>

<style scoped>

h1 {
  font-size: 50px;
  color: black;
}

h6 {
  font-size: 20px;
  color: black;
}
</style>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>
