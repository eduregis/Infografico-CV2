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
.map-container{
  width: 480px;
  height: 480px;
  position: relative;
  top: 159px;
  left: 100px;
  -webkit-filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.75)) !important;  
}
.map {
  position: absolute;
  background-color:#801436;
  left: 50px;
  width: 480px;
  height: 480px;
  transition: transform 0.2s; 
}

.map:hover {
  transform: scale(1.05);
  background-color:brown;
}
.maranhao {
clip-path: polygon(61px 17px,59px 33px,54px 48px,48px 59px,40px 72px,35px 81px,30px 92px,25px 101px,20px 106px,9px 113px,6px 115px,13px 118px,26px 123px,26px 167px,32px 177px,37px 181px,45px 184px,46px 187px,43px 193px,37px 204px,37px 209px,43px 216px,64px 248px,63px 239px,61px 227px,61px 213px,63px 204px,67px 196px,76px 186px,109px 156px,116px 153px,138px 151px,139px 146px,139px 88px,159px 67px,167px 54px,167px 51px,135px 42px,125px 41px,118px 44px,112px 44px,103px 30px,92px 21px,76px 14px,65px 10px);
}

.piaui{
clip-path: polygon(168px 61px,162px 69px,142px 90px,144px 144px,143px 152px,134px 154px,113px 158px,88px 180px,67px 203px,65px 221px,68px 247px,82px 262px,99px 263px,112px 260px,120px 250px,127px 233px,130px 220px,137px 225px,148px 231px,171px 215px,197px 198px,203px 190px,205px 181px,211px 161px,210px 156px,205px 153px,198px 149px,195px 140px,193px 107px,190px 86px,185px 73px,186px 56px,172px 52px);
}

.ceara {
clip-path: polygon(188px 70px,193px 82px,196px 87px,198px 113px,199px 132px,201px 145px,215px 157px,216px 162px,213px 168px,211px 174px,219px 171px,231px 174px,240px 181px,247px 181px,252px 178px,252px 167px,254px 154px,264px 138px,280px 114px,287px 107px,287px 103px,252px 73px,242px 66px,218px 53px,189px 58px);
}

.rioGrandeDoNorte {
clip-path: polygon(279px 125px,272px 133px,262px 147px,278px 142px,286px 141px,287px 148px,287px 155px,290px 159px,305px 160px,311px 157px,313px 149px,317px 148px,324px 148px,336px 150px,352px 152px,350px 147px,345px 131px,341px 119px,337px 116px,320px 116px,301px 112px,291px 108px);
}

.paraiba{
clip-path: polygon(256px 163px,256px 180px,270px 185px,275px 180px,279px 174px,285px 174px,293px 176px,293px 196px,305px 195px,308px 189px,309px 184px,355px 175px,352px 155px,321px 151px,317px 152px,313px 161px,310px 164px,293px 161px,285px 159px,283px 153px,282px 145px,260px 153px);
}

.pernambuco{
clip-path: polygon(209px 181px,207px 191px,199px 201px,189px 209px,200px 225px,205px 228px,220px 217px,224px 208px,231px 205px,237px 204px,264px 223px,267px 223px,276px 214px,280px 214px,298px 223px,312px 222px,347px 213px,355px 193px,356px 179px,312px 189px,309px 198px,299px 199px,290px 198px,289px 179px,281px 179px,272px 190px,257px 184px,252px 184px,246px 187px,224px 175px,210px 178px);
}

.alagoas{
clip-path: polygon(280px 235px,287px 237px,300px 242px,305px 248px,311px 260px,316px 255px,335px 230px,346px 216px,322px 223px,303px 228px,283px 219px,276px 219px,269px 228px);
}

.sergipe{
clip-path: polygon(270px 235px,274px 257px,272px 259px,267px 260px,265px 262px,271px 279px,277px 284px,290px 286px,294px 278px,302px 266px,309px 261px,300px 247px,294px 243px,282px 239px,269px 231px);
}

.bahia{
clip-path: polygon(131px 230px,131px 237px,120px 259px,115px 266px,89px 268px,79px 265px,73px 260px,69px 254px,65px 254px,55px 264px,52px 269px,67px 379px,86px 369px,92px 364px,102px 358px,124px 358px,128px 367px,132px 371px,171px 386px,192px 394px,209px 396px,215px 400px,221px 406px,220px 409px,212px 416px,208px 420px,205px 430px,207px 442px,207px 448px,226px 456px,241px 464px,242px 447px,242px 430px,247px 413px,251px 405px,247px 376px,248px 358px,250px 341px,252px 332px,258px 325px,267px 322px,286px 292px,285px 289px,270px 285px,266px 279px,265px 271px,261px 259px,263px 257px,268px 256px,266px 238px,265px 230px,258px 223px,244px 213px,234px 208px,227px 210px,223px 220px,211px 228px,202px 231px,186px 211px,154px 233px,148px 236px,133px 227px);
}

</style>
