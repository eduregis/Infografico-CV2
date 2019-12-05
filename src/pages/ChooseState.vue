<template>
  <div class="layout-container">
    <img class="region-title" src="../assets/textos/escolha-um-estado.png" />
    <img class="region-information" src="../assets/textos/vocesabia.png" />
    <img class="footer-bar" src="../assets/barras/barra-teste.png" />
    <router-link :to="{ name: 'Test' }">
      <div @mouseover="buttonState = 1" @mouseleave="buttonState = 0" @click="buttonState = 2" class="test-button">
        <img v-if="buttonState == 0" src="../assets/barras/btn-teste.png" />
        <img v-else-if="buttonState == 1" src="../assets/barras/btn-teste-hover.png" />
        <img v-else src="../assets/barras/btn-teste-click.png" />
      </div>
    </router-link>
    <div class="region-container">
      <div class="map-container">
        <div v-for="(state, position) in states" :key="position" class="map" :class="state.name"></div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      buttonState: 0,
      states: [
            {
              name: 'maranhao'
            },
            {
              name: 'piaui'
            },
            {
              name: 'ceara'
            },
            {
              name: 'rioGrandeDoNorte'
            },
            {
              name: 'paraiba'
            },
            {
              name: 'pernambuco'
            },
            {
              name: 'alagoas'
            },
            {
              name: 'sergipe'
            },
            {
              name: 'bahia'
            },
          ]
    }
  }
}
</script>

<style scoped>
@import '../styles/coordinates.css';
.layout-container{
  position: relative;
}
.region-title{
  position: absolute;
  width: 500px;
  left: 385px;
  top: 70px;
}
.region-information{
  position: absolute;
  top: 259px;
  left: 670px;
  width: 400px;
}
.footer-bar{
  position: absolute;
  top: 647px;
}
.test-button{
  position: absolute;
  z-index: 2;
  left: 925px;
  top: 654px;
}
.region-container{
  position: absolute;
}
</style>
