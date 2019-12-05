<template>
  <div class="layout-container"> 
    <div @mouseover="prevButtonState = 1" @mouseleave="prevButtonState = 0" @click="prevQuestion()" class="prev-button">
      <img v-if="prevButtonState == 0" src="../assets/btn-fluxo/voltar.png" />
      <img v-else-if="prevButtonState == 1" src="../assets/btn-fluxo/voltar-hover.png" />
      <img v-else src="../assets/btn-fluxo/voltar-click.png" />
    </div>       
    <!-- Primeira Pergunta -->
    <div v-if="carouselIndex == 1">
      <img class="title-section-1" src="../assets/textos/voce-se-considera-mulher.png" />
      <div @mouseover="firstChoiceState = 1" @mouseleave="firstChoiceState = 0" @click="firstChoice()" class="first-choice-button">
        <img v-if="firstChoiceState == 0" src="../assets/btn-genero/sim.png" />
        <img v-else-if="firstChoiceState == 1" src="../assets/btn-genero/sim-hover.png" />
        <img v-else src="../assets/btn-genero/sim-click.png" />
      </div>
      <div @mouseover="secondChoiceState = 1" @mouseleave="secondChoiceState = 0" @click="secondChoice()" class="second-choice-button">
        <img v-if="secondChoiceState == 0" src="../assets/btn-genero/nao.png" />
        <img v-else-if="secondChoiceState == 1" src="../assets/btn-genero/nao-hover.png" />
        <img v-else src="../assets/btn-genero/nao-click.png" />
      </div>
    </div>
    <!-- Segunda Pergunta -->
    <div v-if="carouselIndex == 2">
      <img class="title-section-2" src="../assets/textos/qual-sua-etnia.png" />
      <div @mouseover="firstChoiceState = 1" @mouseleave="firstChoiceState = 0" @click="firstChoice()" class="first-choice-button">
        <img v-if="firstChoiceState == 0" src="../assets/btn-etnia/negra.png" />
        <img v-else-if="firstChoiceState == 1" src="../assets/btn-etnia/negra-hover.png" />
        <img v-else src="../assets/btn-etnia/negra-click.png" />
      </div>
      <div @mouseover="secondChoiceState = 1" @mouseleave="secondChoiceState = 0" @click="secondChoice()" class="second-choice-button">
        <img v-if="secondChoiceState == 0" src="../assets/btn-etnia/outro.png" />
        <img v-else-if="secondChoiceState == 1" src="../assets/btn-etnia/outro-hover.png" />
        <img v-else src="../assets/btn-etnia/outro-click.png" />
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
      firstChoiceState: 0,
      secondChoiceState: 0,
      // respostas
      isWoman: null,
      isBlack: null
    }
  },
  methods: {
    firstChoice(){
      if(this.carouselIndex == 1){
        this.isWoman = true;
      }
      if(this.carouselIndex == 2){
        this.isBlack = true;
      }
      this.firstChoiceState = 2;
      this.carouselIndex++;
    },
    secondChoice(){
      if(this.carouselIndex == 1){
        this.isWoman = false;
        this.carouselIndex = 1.5;
      }else {
        this.carouselIndex++;
      }
      if(this.carousel == 2){
        this.isBlack = false;
      }
      this.firstChoiceState = 2;
      
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
.title-section-1 {
  position: absolute;
  top: 70px;
  left: 221px;
}
.title-section-2 {
  position: absolute;
  width: 442px;
  top: 70px;
  left: 439px;
}
.first-choice-button {
  position: absolute;
  top: 236px;
  left: 190px;
}
.second-choice-button {
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
