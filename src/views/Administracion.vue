<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Administrando la Lista de Opiniones</h1>
    <div v-if="opiniones == 0" class="alert alert-danger" role="alert">
      No existen opiniones por administrar.
    </div>
    <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Persona</th>
                    <th>Juego</th>
                    <th>Opinión</th>
                </tr>
            </thead>
            <tbody v-for="(opinion, index) in opiniones" :key="index">
                <tr>
                    <td>{{index + 1}}</td>
                    <td>{{opinion.nombre}}</td>
                    <td>{{games[index].name}}</td>
                    <td>{{opinion.message}}</td>
                    <router-link :to="``"><button class="btn btn-danger" @click="opiniones.splice(index,1)">Eliminar</button></router-link>
                    <router-link :to="`/edicion/${index}`"><button class="btn btn-info text-white">Editar</button></router-link>
                </tr>                
            </tbody>
        </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Administracion",
  //props: ["games"],
  data: function () {
    return {
      flag: 1,
    };
  },

  computed: {
    //...mapGetters(["message"]),
    ...mapState(["opiniones", "games"]),
  },
  methods: {
    editToOp(i) {
      this.$router.push(`/op/${i}`);
    },
  },
};
</script>

<style scoped>
.list {
  background: white;
}
th {
  text-align: center;
}
</style>
