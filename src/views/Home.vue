<template>
  <div class="home">
    <Header title="Lista de Juegos Disponibles"/>
    <div class="container">
      <div class="row py-5">
        <div class="col-12 col-sm-3 mb-4 game" v-for="(game, i) in games" :key="i">
          <Card :game="game" />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Card from "@/components/Card.vue"
import { mapState } from "vuex"

export default {
  name: "Home",
  components: {
    Header,
    Card,
  },

  computed: {
    ...mapState(["games"]),
  },
}
</script>

<style scoped>

i, li {
  color: white;
}
</style>