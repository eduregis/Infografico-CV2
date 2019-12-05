<template>
  <div class="layout-container">    
    <div @mouseover="prevButtonState = 1" @mouseleave="prevButtonState = 0" @click="prevQuestion()" class="prev-button">
      <img v-if="prevButtonState == 0" src="../assets/btn-fluxo/voltar.png" />
      <img v-else-if="prevButtonState == 1" src="../assets/btn-fluxo/voltar-hover.png" />
      <img v-else src="../assets/btn-fluxo/voltar-click.png" />
    </div>
    <!-- Primeira Pergunta -->
    <div v-if="carouselIndex == 1">
      <img class="title-section" src="../assets/textos/voce-se-considera-mulher.png" />
      <div @mouseover="buttonGenderState1 = 1" @mouseleave="buttonGenderState1 = 0" @click="genderYes()" class="gender-yes-button">
        <img v-if="buttonGenderState1 == 0" src="../assets/btn-genero/sim.png" />
        <img v-else-if="buttonGenderState1 == 1" src="../assets/btn-genero/sim-hover.png" />
        <img v-else src="../assets/btn-genero/sim-click.png" />
      </div>
      <div @mouseover="buttonGenderState2 = 1" @mouseleave="buttonGenderState2 = 0" @click="genderNo()" class="gender-no-button">
        <img v-if="buttonGenderState2 == 0" src="../assets/btn-genero/nao.png" />
        <img v-else-if="buttonGenderState2 == 1" src="../assets/btn-genero/nao-hover.png" />
        <img v-else src="../assets/btn-genero/nao-click.png" />
      </div>
    </div>
    <div @mouseover="nextButtonState = 1" @mouseleave="nextButtonState = 0" @click="nextQuestion()" class="next-button">
      <img v-if="nextButtonState == 0" src="../assets/btn-fluxo/avancar.png" />
      <img v-else-if="nextButtonState == 1" src="../assets/btn-fluxo/avancar-hover.png" />
      <img v-else src="../assets/btn-fluxo/avancar-click.png" />
    </div>
    <div class="carousel">
      <img v-if="carouselIndex == 1" src="../assets/carrossel/1.png" />
      <img v-else-if="carouselIndex == 2" src="../assets/carrossel/2.png" />
      <img v-else-if="carouselIndex == 3" src="../assets/carrossel/3.png" />
      <img v-else-if="carouselIndex == 4" src="../assets/carrossel/4.png" />
      <img v-else-if="carouselIndex == 5" src="../assets/carrossel/5.png" />
      <img v-else src="../assets/carrossel/1-5.png" />
    </div>
    <!-- Barra de rodapé -->
    <img class="footer-bar" src="../assets/barras/barra-geral.png" />
    <router-link :to="{ name: 'ChooseState' }">
      <div @mouseover="buttonState = 1" @mouseleave="buttonState = 0" @click="buttonState = 2" class="test-button">
        <img v-if="buttonState == 0" src="../assets/barras/btn-mapa.png" />
        <img v-else-if="buttonState == 1" src="../assets/barras/btn-mapa-hover.png" />
        <img v-else src="../assets/barras/btn-mapa-click.png" />
      </div>
    </router-link>
    <!-- <div class="region-container">
      <div class="map-container">
        <div v-for="(state, position) in states" :key="position" class="map" :class="state.name"></div>
      </div>  
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      //valores de máquina de estados
      buttonState: 0,
      carouselIndex: 1,
      prevButtonState: 0,
      nextButtonState: 0,
      buttonGenderState1: 0,
      buttonGenderState2: 0,
      // respostas
      isWoman: false
    }
  },
  methods: {
    genderYes(){
      this.isWoman= true;
      this.buttonGenderState1 = 2;
      this.carouselIndex = 2;
    },
    genderNo(){
      this.isWoman= false;
      this.buttonGenderState1 = 2;
      this.carouselIndex = 1.5;
    },
    prevQuestion(){
      if(this.carouselIndex == 1.5 || this.carouselIndex == 1){
        this.carouselIndex = 1;
      } else {
        this.carouselIndex--;
      }
      this.prevButtonState = 2
    },
    nextQuestion(){
      if(this.carouselIndex == 1.5){
        this.carouselIndex = 2;
      } else {
        if(this.carouselIndex < 5)
          this.carouselIndex++;
      }
      this.nextButtonState = 2
    }
  }
}
</script>

<style scoped>
.layout-container{
  position: relative;
}
.carousel {
  position: absolute;
  top: 610px;

left: 590px;}
.footer-bar{
  position: absolute;
  top: 647px;
}
.title-section {
  position: absolute;
  top: 70px;
  left: 221px;
}
.gender-yes-button {
  position: absolute;
  top: 236px;
  left: 190px;
}
.gender-no-button {
  position: absolute;
  top: 236px;
  left: 666px;
}
.prev-button {
  position: absolute;
  top: 362px;
  left: 121px;
}
.next-button {
  position: absolute;
  top: 362px;
  left: 1101px;
}
.test-button{
  position: absolute;
  z-index: 2;
  left: 925px;
  top: 654px;
}
</style>
