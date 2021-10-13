<template>
  <div class="container mt-5">
    <div>
        <h1 class="text-center mb-4">Editando la opinión de: {{opiniones[entrada].name}}</h1>
      <label for="exampleFormControlInput1" class="form-label" style="float: left"
        >Nombre</label
      >
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        v-model="opiniones[entrada].nombre"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label" style="float: left"
        >Opiniones</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="opiniones[entrada].message"
      ></textarea>
    </div>
    <router-link :to="`/administracion`"><button class="btn btn-primary text-white">Regresar</button></router-link>
    <button
                    type="button"
                    class="btn btn-info"
                    @click="messageSave"
                  >
                    Guardar
                  </button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Edicion",
  props: ["index"],
  data: function () {
    return {
        entrada : parseInt(this.$route.params.entrada)
    };
  },
  computed: {
    ...mapGetters(["getOp"]),
    ...mapState(["opiniones", "games"]),
    
  },
  methods: {
      ...mapActions(["editToOp"]),
    messageSave() {
      let datas = {        
        message: this.message,
        nombre: this.nombre,
        //name: this.game.name,
        //id_game: this.game.id,

      }; 
        this.editToOp(datas)
        /*this.clearForm()*/
    }
      
  },
}
</script>

<style scoped>
button {
  margin-left: 80px;
}
</style>