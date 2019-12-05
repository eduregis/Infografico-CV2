<template>
<div class="call-to-action-container">
  <img class="call-to-action-bkg" src="../assets/telas/tela-inicial-01.png"/>
  <router-link :to="{ name: 'ChooseState' }"> 
    <div @mouseover="buttonState = 1" @mouseleave="buttonState = 0" @click="buttonState = 2" class="call-to-action-button">
      <img v-if="buttonState == 0" src="../assets/btn-inicio/iniciar.png" />
      <img v-else-if="buttonState == 1" src="../assets/btn-inicio/iniciar-hover.png" />
      <img v-else src="../assets/btn-inicio/iniciar-click.png" />
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      buttonState: 0
    }
  }  
}

</script>

<style scoped>
.call-to-action-container {
  position: relative;  
}

.call-to-action-bkg{
  position: absolute;
  z-index: 1;
}

.call-to-action-button{
  position: absolute;
  z-index: 2;
  left: 748px;
  top: 445px;
}


</style>
