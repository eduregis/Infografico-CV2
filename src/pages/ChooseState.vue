<template>
  <div class="layout-container">
    <img class="region-title" src="../assets/textos/escolha-um-estado.png" />
    <img v-if="selectedState.name == ''" class="region-information" src="../assets/textos/vocesabia.png" />
    <div v-else class="region-information">
      <div class="isotype-info-container">
        <img v-if="yearIndex == 0" :src="selectedState.img2007" class="isotype-info">
        <img v-else-if="yearIndex == 1" :src="selectedState.img2008" class="isotype-info">
        <img v-else-if="yearIndex == 2" :src="selectedState.img2009" class="isotype-info">
        <img v-else-if="yearIndex == 3" :src="selectedState.img2010" class="isotype-info">
        <img v-else-if="yearIndex == 4" :src="selectedState.img2011" class="isotype-info">
        <img v-else-if="yearIndex == 5" :src="selectedState.img2012" class="isotype-info">
        <img v-else-if="yearIndex == 6" :src="selectedState.img2013" class="isotype-info">
        <img v-else-if="yearIndex == 7" :src="selectedState.img2014" class="isotype-info">
        <img v-else-if="yearIndex == 8" :src="selectedState.img2015" class="isotype-info">
        <img v-else-if="yearIndex == 9" :src="selectedState.img2016" class="isotype-info">
        <img v-else-if="yearIndex == 10" :src="selectedState.img2017" class="isotype-info">
      </div>
      <div class="slider-container">
        <div @mouseover="prevButtonState = 1" @mouseleave="prevButtonState = 0" @click="prevYear()" class="prev-button">
          <img v-if="yearIndex == 0" src="../assets/btn-fluxo/voltar-disabled.png" />
          <img v-else-if="prevButtonState == 0" src="../assets/btn-fluxo/voltar.png" class="able-button"/>
          <img v-else-if="prevButtonState == 1" src="../assets/btn-fluxo/voltar-hover.png" class="able-button"/>
          <img v-else src="../assets/btn-fluxo/voltar-click.png" class="able-button"/>
        </div>
        <h2 class="year-number">{{ years[yearIndex] }}</h2>
        <div @mouseover="nextButtonState = 1" @mouseleave="nextButtonState = 0" @click="nextYear()" class="next-button">
          <img v-if="yearIndex == 10" src="../assets/btn-fluxo/avancar-disabled.png" />
          <img v-else-if="nextButtonState == 0" src="../assets/btn-fluxo/avancar.png" class="able-button" />
          <img v-else-if="nextButtonState == 1" src="../assets/btn-fluxo/avancar-hover.png" class="able-button"/>
          <img v-else src="../assets/btn-fluxo/avancar-click.png" class="able-button"/>
        </div>
      </div>
    </div>
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
        <div v-for="(state, position) in states" :key="position" class="map" :class="[state.name, isSelectedState(state) ? 'map-selected' : '']" @click="chooseState(state)"></div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevButtonState: 0,
      nextButtonState: 0,
      buttonState: 0,
      yearIndex: 10,
      selectedState: {
        name: '',
              img2007: '',
              img2008: '',
              img2009: '',
              img2010: '',
              img2011: '',
              img2012: '',
              img2013: '',
              img2014: '',
              img2015: '',
              img2016: '',
              img2017: ''
      },
      years: [
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017'
      ],
      states: [
            {
              name: 'maranhao',
              img2007: require('@/assets/estados/maranhao/2007.png'),
              img2008: require('@/assets/estados/maranhao/2008.png'),
              img2009: require('@/assets/estados/maranhao/2009.png'),
              img2010: require('@/assets/estados/maranhao/2010.png'),
              img2011: require('@/assets/estados/maranhao/2011.png'),
              img2012: require('@/assets/estados/maranhao/2012.png'),
              img2013: require('@/assets/estados/maranhao/2013.png'),
              img2014: require('@/assets/estados/maranhao/2014.png'),
              img2015: require('@/assets/estados/maranhao/2015.png'),
              img2016: require('@/assets/estados/maranhao/2016.png'),
              img2017: require('@/assets/estados/maranhao/2017.png')
            },
            {
              name: 'piaui',
              img2007: require('@/assets/estados/piaui/2007.png'),
              img2008: require('@/assets/estados/piaui/2008.png'),
              img2009: require('@/assets/estados/piaui/2009.png'),
              img2010: require('@/assets/estados/piaui/2010.png'),
              img2011: require('@/assets/estados/piaui/2011.png'),
              img2012: require('@/assets/estados/piaui/2012.png'),
              img2013: require('@/assets/estados/piaui/2013.png'),
              img2014: require('@/assets/estados/piaui/2014.png'),
              img2015: require('@/assets/estados/piaui/2015.png'),
              img2016: require('@/assets/estados/piaui/2016.png'),
              img2017: require('@/assets/estados/piaui/2017.png')
            },
            {
              name: 'ceara',
              img2007: require('@/assets/estados/ceara/2007.png'),
              img2008: require('@/assets/estados/ceara/2008.png'),
              img2009: require('@/assets/estados/ceara/2009.png'),
              img2010: require('@/assets/estados/ceara/2010.png'),
              img2011: require('@/assets/estados/ceara/2011.png'),
              img2012: require('@/assets/estados/ceara/2012.png'),
              img2013: require('@/assets/estados/ceara/2013.png'),
              img2014: require('@/assets/estados/ceara/2014.png'),
              img2015: require('@/assets/estados/ceara/2015.png'),
              img2016: require('@/assets/estados/ceara/2016.png'),
              img2017: require('@/assets/estados/ceara/2017.png')
            },
            {
              name: 'rioGrandeDoNorte',
              img2007: require('@/assets/estados/riograndedonorte/2007.png'),
              img2008: require('@/assets/estados/riograndedonorte/2008.png'),
              img2009: require('@/assets/estados/riograndedonorte/2009.png'),
              img2010: require('@/assets/estados/riograndedonorte/2010.png'),
              img2011: require('@/assets/estados/riograndedonorte/2011.png'),
              img2012: require('@/assets/estados/riograndedonorte/2012.png'),
              img2013: require('@/assets/estados/riograndedonorte/2013.png'),
              img2014: require('@/assets/estados/riograndedonorte/2014.png'),
              img2015: require('@/assets/estados/riograndedonorte/2015.png'),
              img2016: require('@/assets/estados/riograndedonorte/2016.png'),
              img2017: require('@/assets/estados/riograndedonorte/2017.png')
            },
            {
              name: 'paraiba',
              img2007: require('@/assets/estados/paraiba/2007.png'),
              img2008: require('@/assets/estados/paraiba/2008.png'),
              img2009: require('@/assets/estados/paraiba/2009.png'),
              img2010: require('@/assets/estados/paraiba/2010.png'),
              img2011: require('@/assets/estados/paraiba/2011.png'),
              img2012: require('@/assets/estados/paraiba/2012.png'),
              img2013: require('@/assets/estados/paraiba/2013.png'),
              img2014: require('@/assets/estados/paraiba/2014.png'),
              img2015: require('@/assets/estados/paraiba/2015.png'),
              img2016: require('@/assets/estados/paraiba/2016.png'),
              img2017: require('@/assets/estados/paraiba/2017.png')
            },
            {
              name: 'pernambuco',
              img2007: require('@/assets/estados/pernambuco/2007.png'),
              img2008: require('@/assets/estados/pernambuco/2008.png'),
              img2009: require('@/assets/estados/pernambuco/2009.png'),
              img2010: require('@/assets/estados/pernambuco/2010.png'),
              img2011: require('@/assets/estados/pernambuco/2011.png'),
              img2012: require('@/assets/estados/pernambuco/2012.png'),
              img2013: require('@/assets/estados/pernambuco/2013.png'),
              img2014: require('@/assets/estados/pernambuco/2014.png'),
              img2015: require('@/assets/estados/pernambuco/2015.png'),
              img2016: require('@/assets/estados/pernambuco/2016.png'),
              img2017: require('@/assets/estados/pernambuco/2017.png')
            },
            {
              name: 'alagoas',
              img2007: require('@/assets/estados/alagoas/2007.png'),
              img2008: require('@/assets/estados/alagoas/2008.png'),
              img2009: require('@/assets/estados/alagoas/2009.png'),
              img2010: require('@/assets/estados/alagoas/2010.png'),
              img2011: require('@/assets/estados/alagoas/2011.png'),
              img2012: require('@/assets/estados/alagoas/2012.png'),
              img2013: require('@/assets/estados/alagoas/2013.png'),
              img2014: require('@/assets/estados/alagoas/2014.png'),
              img2015: require('@/assets/estados/alagoas/2015.png'),
              img2016: require('@/assets/estados/alagoas/2016.png'),
              img2017: require('@/assets/estados/alagoas/2017.png')
            },
            {
              name: 'sergipe',
              img2007: require('@/assets/estados/sergipe/2007.png'),
              img2008: require('@/assets/estados/sergipe/2008.png'),
              img2009: require('@/assets/estados/sergipe/2009.png'),
              img2010: require('@/assets/estados/sergipe/2010.png'),
              img2011: require('@/assets/estados/sergipe/2011.png'),
              img2012: require('@/assets/estados/sergipe/2012.png'),
              img2013: require('@/assets/estados/sergipe/2013.png'),
              img2014: require('@/assets/estados/sergipe/2014.png'),
              img2015: require('@/assets/estados/sergipe/2015.png'),
              img2016: require('@/assets/estados/sergipe/2016.png'),
              img2017: require('@/assets/estados/sergipe/2017.png')
            },
            {
              name: 'bahia',
              img2007: require('@/assets/estados/bahia/2007.png'),
              img2008: require('@/assets/estados/bahia/2008.png'),
              img2009: require('@/assets/estados/bahia/2009.png'),
              img2010: require('@/assets/estados/bahia/2010.png'),
              img2011: require('@/assets/estados/bahia/2011.png'),
              img2012: require('@/assets/estados/bahia/2012.png'),
              img2013: require('@/assets/estados/bahia/2013.png'),
              img2014: require('@/assets/estados/bahia/2014.png'),
              img2015: require('@/assets/estados/bahia/2015.png'),
              img2016: require('@/assets/estados/bahia/2016.png'),
              img2017: require('@/assets/estados/bahia/2017.png')
            },
          ]
    }
  },
  methods: {
    chooseState(state){
      this.selectedState = state;
    },
    isSelectedState(state){
      if(state == this.selectedState){
        return true
      } else {
        return false
      }
    },
    prevYear(){
      if(this.yearIndex != 0){
        this.yearIndex--
      }
    },
    nextYear(){
      if(this.yearIndex != 10){
        this.yearIndex++
      }
    }
  }
}
</script>

<style scoped>
@import '../styles/coordinates.css';
@font-face {
  font-family: 'MyWebFont';
  src: url('MartianB-Regular.woff') format('woff'), /* Pretty Modern Browsers */
}
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
.slider-container {
  position: relative;
  top: 260px;
}
.prev-button{
  position: absolute;
  left: 130px;
  transform: scale(0.5);  
}
.year-number{
  position: absolute;
  font-family: 'MyWebFont', Fallback, sans-serif;
  top: -3px;
  color: #2D132C;
  left: 193px;
}
.next-button{
  position: absolute;
  left: 250px;
  transform: scale(0.5);  
}
.able-button {
  cursor: pointer;
}
.isotype-info-container{
  position: relative;
  top: -100px;
}
.isotype-info{
  position: absolute;
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
