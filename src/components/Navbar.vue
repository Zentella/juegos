<template>
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">      
        <a class="logo navbar-brand" href="#"><i class="fa fa-headphones"> {{title}} </i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li><router-link to="/">
              <span class="navbar-brand mb-0 h1"><i class="fa fa-home"> Home </i></span></router-link>
            </li>
            <li><router-link to="/opiniones">
              <span class="navbar-brand mb-0 h1"><i class="fa fa-comments"> Opiniones</i></span></router-link>
            </li>
            <li><router-link to="/administracion">
              <span class="navbar-brand mb-0 h1"><i class="fa fa-users"> Administración</i></span></router-link>
            </li>
          </ul>
        </div>
        </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
//import utils from "@/utils/functions";
//const { formatNumber } = utils;
export default {
  name: "Navbar",

  data:() => ({
    title:'Games Opinion'
  })
  /*props: {
    msg: String,
  },
  computed: {
    ...mapGetters([ "total"]),
  },
  methods:{
    formatNumber
  }*/
};
</script>


<style scoped>
i, li {
  color: white;
}
ul {
  margin-left: 50%;
}
</style>
