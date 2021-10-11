<template>
  <div>
     <div class="container mt-5">
    <h1 class="text-center mb-4">Lista de Opiniones</h1>
    <div v-if="opiniones == 0" class="alert alert-danger" role="alert">
      No existen opiniones por mostrar.
    </div>

    <div v-else>
      <div v-for="(opinion, i) in opiniones" :key="i">
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  :data-target="`#collapseId${i}`"
                  aria-expanded="true"
                  :aria-controls="`collapseId${i}`"
                >
                  Opinion creada por: {{ opinion.nombre }}. Para el juego:
                  {{ opinion.name }}
                </button>
              </h2>
            </div>

            <div
              :id="`collapseId${i}`"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <strong>Opinión: </strong>{{ opinion.message }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!--
    <div v-for="(opinion, i) in opiniones" :key="i">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                class="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                :data-target="`#collapseId${i}`"
                aria-expanded="true"
                :aria-controls="`collapseId${i}`"
              >
                Opinion creada por: {{ opinion.nombre }}. Para el juego:
                {{ games[i].name }}
              </button>
            </h2>
          </div>

          <div
            :id="`collapseId${i}`"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <strong>Opinión: </strong>{{ opinion.message }}
            </div>
          </div>
          
        </div>
      </div>
    </div>-->
<!--
    <div
      class="accordion"
      id="accordionExample"
      v-for="(opinion, i) in opiniones"
      :key="i"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Opinion creada por: {{ opinion.nombre }}. Para el juego:
            {{ games[i].name }}
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Opinión: </strong>{{ opinion.message }}
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex"

export default {
  name: "Opiniones",
  data: function () {
    return {}
  },
  computed: {
    ...mapState(["opiniones", "games"]),
  },
  props: {
    game: [],
  }
};
</script>