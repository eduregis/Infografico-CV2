<template>
  <div class="screen-container">
    <div class="info-container">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',    
}
</script>

<style>
  @import 'styles/slide.css';
    html, body{
        background-color: #444444;
        width: 100%;
        height:100%;   
        margin: 0;     
    }
    .screen-container {
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .info-container {
        margin: auto;
        width: 1280px;
        height: 720px;
        align-self: center;
        background-color: #fff;
        box-shadow:0px 0px 30px black;
        overflow: hidden;
    }
</style>
