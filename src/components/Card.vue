<template>
  <div class="card w-100">
    <!---->
    <img
      class="card-img-top"
      :src="game.background_image"
    /><!--foto game de forma dinamica-->
    <div class="card-body">
      <h4 class="card-title text-capitalize text-left">{{ game.name }}</h4>
      <!--nombre game de forma dinamica-->
      <hr />
      <p class="card-text text-left">
        <b>Rating: {{ game.rating }}</b>
      </p>
      <hr />
      <p class="card-text text-left">
        <b>Released: {{ game.released }}</b>
      </p>
      <hr />
      <p class="card-text text-left">
        <b>Updated: {{ game.updated }}</b>
      </p>
    </div>
    <hr />
    <div class="card-body">
      <div class="d-flex justify-content-around">
        <button
          class="btn btn-primary text-white"
          data-toggle="modal"
          :data-target="`#myModal${game.id}`"
        >
          Opinar
        </button>
        <div class="container">
          <!--Modal-->
          <div class="modal fade" :id="`myModal${game.id}`" role="dialog">            
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">
                    Escribe tu opinión para el juego: {{ game.name }}
                  </h4>
                  <button
                    type="button"
                    class="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                  ></button
                  ><!-- X -->
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label"
                      style="float: left"
                      >Nombre:</label
                    >
                    <!-- input -->
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      v-model="nombre"
                      placeholder="Evan You"
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      class="form-label"
                      style="float: left"
                      >Opiniones</label
                    >
                    <!-- textarea -->
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="message"
                      placeholder="Tu opinión debe ir aquí..."
                    ></textarea>
                  </div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <router-link to="/">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click.prevent="messageSave"
                  >
                    Guardar
                  </button></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>
<script>

import Administracion from "@/views/Administracion";
import Opiniones from "@/views/Opiniones";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Card",
  computed: {
    ...mapGetters(["opiniones"]),
    ...mapState(["opiniones", "games"]),
  },
  components: {
    Administracion,
    Opiniones,
  },
  props: ["game"],
  props: {
    game: [],
  },
  data: function () {
    return {
      message: "",
      nombre: "",
      name: "",
      id: "",
      flag: 1
    }
  },
  methods: {
    ...mapActions(["addToOp"]),
    messageSave() {
      let datas = {        
        message: this.message,
        nombre: this.nombre,
        name: this.game.name,
        id_game: this.game.id,
      }
      console.log('game.id ',this.game.id)
      console.log('game.name ',this.game.name)

        this.addToOp(datas)
    },
  },
}
</script>

<style scoped>
button {
  margin-left: 80px;
}
</style>