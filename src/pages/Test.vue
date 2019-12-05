<template>
  <div class="layout-container"> 
    <div @mouseover="prevButtonState = 1" @mouseleave="prevButtonState = 0" @click="prevQuestion()" class="prev-button">
      <img v-if="carouselIndex == 1" src="../assets/btn-fluxo/voltar-disabled.png" />
      <img v-else-if="prevButtonState == 0" src="../assets/btn-fluxo/voltar.png" />
      <img v-else-if="prevButtonState == 1" src="../assets/btn-fluxo/voltar-hover.png" />
      <img v-else src="../assets/btn-fluxo/voltar-click.png" />
    </div>   
    {{ isWoman }} {{ isBlack }} {{ stateName }}
    <!-- Primeira Seção -->
    <div v-show="carouselIndex == 1">
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
    <!-- Seção Extra -->
    <div v-show="carouselIndex == 1.5">
      <img class="title-section-3" src="../assets/textos/quem-e-a-mulher-mais-proxima.png" />
      <div class="relation-container">
        <div v-for="(relation, position) in relations" 
             :key="position"
             @mouseover="relation.state = 1" 
             @mouseleave="relation.state = 0" 
             @click="chooseRelation(relation)" 
             class="relation"
             :class="relation.title">
             <h1 class="relation-title">{{ relation.name }}</h1>
          <img v-if="relation.state == 0" src="../assets/btn-mulher-proxima/mulher-proxima.png" />
          <img v-else-if="relation.state == 1" src="../assets/btn-mulher-proxima/mulher-proxima-hover.png" />
          <img v-else src="../assets/btn-mulher-proxima/mulher-proxima-click.png" />
        </div>
      </div>  
    </div>
    <!-- Segunda Seção -->
    <div v-show="carouselIndex == 2">
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
    <!-- Terceira Seção -->
    <div v-show="carouselIndex == 3">
      <img class="title-section-3" src="../assets/textos/qual-seu-estado.png" />
      <div class="question-map-container">
        <div v-for="(state, position) in states" :key="position" class="map" :class="state.name" @click="changeStateName(state)"></div>
      </div>  
    </div>
    <!-- Quarta Seção -->
    <div v-show="carouselIndex == 4">
      <img class="title-section-4" src="../assets/textos/resultado.png" />
      <img class="subtitle-section-4" src="../assets/textos/resultado-legenda.png" />
      <img class="resultado" src="../assets/cards/cards-seu-estado.png" />
    </div>
    <div @mouseover="nextButtonState = 1" @mouseleave="nextButtonState = 0" @click="nextQuestion()" class="next-button">
      <img v-if="!isNextAvailable()" src="../assets/btn-fluxo/avancar-disabled.png" />
      <img v-else-if="nextButtonState == 0" src="../assets/btn-fluxo/avancar.png" />
      <img v-else-if="nextButtonState == 1" src="../assets/btn-fluxo/avancar-hover.png" />
      <img v-else src="../assets/btn-fluxo/avancar-click.png" />
    </div>
    <!-- Carrossel -->
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
      isBlack: null,
      selectedRelation: '',
      stateName: '',
      relations: [
        {
          name: 'Mãe',
          title:'mae',
          state: 0,
        },
        {
          name: 'Namorada',
          title:'namorada',
          state: 0,
        },
        {
          name: 'Tia',
          title:'tia',
          state: 0,
        },
        {
          name: 'Irmã',
          title:'irma',
          state: 0,
        },
        {
          name: 'Esposa',
          title:'esposa',
          state: 0,
        },
        {
          name: 'Prima',
          title:'prima',
          state: 0,
        },
        {
          name: 'Avó',
          title:'avo',
          state: 0,
        },
        {
          name: 'Amiga',
          title:'amiga',
          state: 0,
        },
        {
          name: 'Sobrinha',
          title:'sobrinha',
          state: 0,
        }
      ],
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
      }
      if(this.carouselIndex == 2){
        this.isBlack = false;
        this.carouselIndex++
      }
      this.secondChoiceState = 2;
      
    },
    changeStateName(state){
      this.stateName = state.name
      this.carouselIndex++
    },
    chooseRelation(relation){
      relation.state = 2;
      this.selectedRelation = relation.name;
      this.carouselIndex = 2;
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
      if(this.isNextAvailable()){
        if(this.carouselIndex == 1.5){
          this.carouselIndex = 2;
        } else {
          if(this.carouselIndex < 5)
            this.carouselIndex++;
        }
        this.nextButtonState = 2
      }
    },
    isNextAvailable(){
      switch(this.carouselIndex){
        case 1:
          if(this.isWoman != null){
            return true
          }
          break;
        case 2:
          if(this.isBlack != null){
            return true
          }
          break;
        case 3:
          if(this.stateName != ''){
            return true
          }
          break;
        case 1.5:
          if(this.selectedRelation != ''){
            return true
          }
          break;
      }
      return false;
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
.relation-container {
  position: relative;
}
.relation {
  position: absolute;
  display: flex;
  justify-content: center;
}
.relation-title{
  position: absolute;
  z-index: 2;
  color: white;
  text-transform: uppercase;
}
.mae {
  top: 256px;
  left: 190px;
}
.namorada {
  top: 256px;
  left: 493px;
}
.tia {
  top: 256px;
  left:800px;
}
.irma {
  top: 347px;
  left: 190px;
}
.esposa {
  top: 347px;
  left: 493px;
}
.prima {
  top: 347px;
  left:800px;
}
.avo {
  top: 442px;
  left: 190px;
}
.amiga {
  top: 442px;
  left: 493px;
}
.sobrinha {
  top: 442px;
  left:800px;
}

.title-section-2 {
  position: absolute;
  width: 442px;
  top: 70px;
  left: 439px;
}
.title-section-3 {
  position: absolute;
  width: 482px;
  top: 70px;
  left: 439px;
}
.title-section-4 {
  position: absolute;
  top: 70px;
  left: 514px;
}
.subtitle-section-4 {
  position: absolute;
  top: 139px;
  left: 282px;
}
.resultado {
  position: absolute;
  top: 195px;
  left: 187px;
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
