//import { get } from 'core-js/core/dict'
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl:
      "https://api.rawg.io/api/games?key=de2f321d86a545f29985c75231b6674a",
    games: [], //se define var games como array
    opiniones: [],
  },
  mutations: {
    GET_GAMES(state, games) {
      // comunicacion con state y payload del commit
      state.games = games; // se le asigna al state.games el valor de games q recibe la mutacion
    },
    ADD_TO_OP(state, op) {
      state.opiniones.push(op);
    },/*
    DEL_TO_OP(state, index){
      state.opiniones.splice(index, 1);
    },*/
    EDIT_TO_OP(state, editToOp){
      state.opiniones[editToOp.index]={
        message: editToOp.message, 
        nombre: editToOp.nombre, 
        name: editToOp.name, 
        id_game: editToOp.id_game
      }
    }
  },
  actions: {
    get_Games({ commit }) {
      const { data: games } = axios
        .get(
          `https://api.rawg.io/api/games?key=de2f321d86a545f29985c75231b6674a`
        )
        .then((res) => {
          let games = res.data.results;
          console.log("games[0].id ", games[0].id);
          console.log("games[0].name ", games[0].name);
          commit("GET_GAMES", games); // pasar este array a mutacion get_Games (payload)
          console.log("games ", games);
          console.log("games[0] ", games[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToOp:({commit}, op)=>{
      commit('ADD_TO_OP', op)
    },/*
    delToOp:({commit}, index)=>{
      commit('DEL_TO_OP', index)
    },*/
    editToOp: ({commit}, editToOp) => {
      commit('EDIT_TO_OP', editToOp)
    }
  },
  getters: {
    getOp: state => index => {
      return state.opiniones[index]
    },
    opiniones: (state) => {
      const opiniones = state.opiniones.map((p) => {//CA recorriendo el carrito para tener los productos dentro
        const games = state.games.find((game) => game.id == p.id);//encontrar obj q coincida
        return { ...game, cant: p.cant };// incluir cant
      });
      return opiniones;// retorna nvo array q es una mezcla del array de pizza y el de carrito
    },
  },
  modules: {},
});
