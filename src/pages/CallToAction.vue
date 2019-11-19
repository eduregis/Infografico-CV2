<template>
<div class="inline-container">
  <div class="map-container">
    <div v-for="(state, position) in states" :key="position" class="map" :class="state.name"></div>
  </div>    
  Call To Action  
  <router-link :to="{ name: 'Page1' }">    
    <button>Page1</button>
  </router-link> 
  <router-link :to="{ name: 'Page2' }">    
    <button>Page2</button>
  </router-link> 
</div>
</template>

<script>
export default {
  data() {
    return {
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
.inline-container{
  display: flex;
}
.map-container{
  width: 480px;
  height: 720px;
  position: relative;
  
}
.map {
  position: absolute;
  background-color:rgb(233, 127, 127);
  width: 480px;
  height: 720px;
  transition: transform 0.2s; 
}
.map:hover {
  transform: scale(1.05);
  background-color:brown;
}
.maranhao {
clip-path: polygon(96px 137px,57px 209px,36px 221px,59px 231px,62px 292px,86px 307px,72px 331px,106px 381px,101px 339px,110px 316px,162px 268px,196px 264px,194px 190px,218px 166px,230px 145px,183px 132px,163px 138px,145px 113px,104px 95px);
}

.piaui{
clip-path: polygon(221px 167px,199px 190px,200px 267px,164px 273px,115px 317px,105px 340px,110px 384px,130px 401px,164px 397px,178px 374px,185px 348px,207px 363px,269px 318px,282px 273px,263px 258px,258px 187px,250px 172px,252px 150px,234px 144px);
}

.ceara {
clip-path: polygon(254px 171px,264px 187px,267px 258px,287px 275px,279px 292px,299px 289px,323px 303px,332px 295px,333px 264px,376px 208px,320px 163px,290px 145px,255px 152px);
}

.rioGrandeDoNorte {
clip-path: polygon(370px 250px,371px 270px,397px 277px,407px 260px,452px 266px,434px 220px,403px 221px,377px 211px,338px 262px);
}

.paraiba{
clip-path: polygon(367px 256px,366px 275px,401px 280px,409px 264px,449px 266px,454px 292px,399px 306px,396px 318px,379px 319px,382px 294px,367px 288px,354px 306px,334px 299px,338px 267px);
}

.pernambuco{
clip-path: polygon(400px 308px,398px 321px,377px 321px,376px 298px,366px 295px,355px 310px,333px 301px,324px 307px,299px 292px,277px 295px,274px 319px,252px 335px,272px 358px,293px 346px,299px 333px,312px 329px,349px 354px,360px 340px,390px 353px,445px 338px,453px 317px,454px 295px);
}

.alagoas{
clip-path: polygon(392px 355px,359px 341px,351px 356px,364px 367px,388px 373px,402px 396px,443px 341px);
}

.sergipe{
clip-path: polygon(364px 369px,387px 377px,399px 394px,384px 407px,374px 426px,355px 421px,346px 396px,357px 392px,350px 360px);
}

.bahia{
clip-path: polygon(127px 404px,166px 403px,182px 379px,188px 354px,206px 368px,250px 335px,273px 362px,297px 347px,301px 335px,311px 332px,347px 357px,353px 390px,342px 394px,353px 425px,372px 430px,347px 469px,338px 471px,328px 481px,324px 529px,328px 567px,318px 593px,317px 637px,277px 618px,276px 590px,295px 571px,284px 556px,257px 554px,186px 525px,179px 511px,153px 510px,109px 536px,90px 406px,110px 387px);
}

</style>
