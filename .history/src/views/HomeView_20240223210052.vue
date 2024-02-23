
  <template>
      <LayoutComponent>
          <main>
            <div class='hero'>
            <div class="clock">
                <div class="hour-hand"></div>
                <div class="minute-hand"></div>
                <div class="second-hand"></div>
                <div class="dial">
                    <div class="hour hour1">1</div>
                    <div class="hour hour2">2</div>
                    <div class="hour hour3">3</div>
                    <div class="hour hour4">4</div>
                    <div class="hour hour5">5</div>
                    <div class="hour hour6">6</div>
                    <div class="hour hour7">7</div>
                    <div class="hour hour8">8</div>
                    <div class="hour hour9">9</div>
                    <div class="hour hour10">10</div>
                    <div class="hour hour11">11</div>
                    <div class="hour hour12">12</div>
                </div>
            </div>
            <div>
            <p class='hero-title hero-title__first'>Наш новий сайт</p>
                <p class='hero-title hero-title__second'>скоро буде готовий</p></div>
                
            </div>
          </main>
      </LayoutComponent>
  </template>

  <script>
  import LayoutComponent from '@/components/shared/Layout/LayoutComponent.vue'

  export default {
    name: 'HomeComponents',
    components:{
      LayoutComponent,
    }
    }
  </script>

  <style lang="scss" scoped>
  @import '../assets/scss/variables.scss';

.clock {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid $white;
    border-radius: 50%;
   
}

.dial {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

     
}

.hour {
    position: absolute;
    font-size: 14px;
    color:$white;
}

.hour1 { transform: rotate(30deg) translateY(-80px); }
.hour2 { transform: rotate(60deg) translateY(-80px); }
.hour3 { transform: rotate(90deg) translateY(-80px); }
.hour4 { transform: rotate(120deg) translateY(-80px); }
.hour5 { transform: rotate(150deg) translateY(-80px); }
.hour6 { transform: rotate(180deg) translateY(-80px); }
.hour7 { transform: rotate(210deg) translateY(-80px); }
.hour8 { transform: rotate(240deg) translateY(-80px); }
.hour9 { transform: rotate(270deg) translateY(-80px); }
.hour10 { transform: rotate(300deg) translateY(-80px); }
.hour11 { transform: rotate(330deg) translateY(-80px); }
.hour12 { transform: rotate(360deg) translateY(-80px); }

.hour-hand,
.minute-hand,
.second-hand {
    position: absolute;
    background-color: $white;
}

.hour-hand {
    width: 4px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform-origin: 50% 100%;
}

.minute-hand {
    width: 3px;
    height: 70px;
    top: 50%;
    left: 50%;
    transform-origin: 50% 100%;
}

.second-hand {
    width: 2px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform-origin: 50% 100%;
}
.hero{
  width:100%;
  height:auto;
  min-height:700px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:7rem;

}

  .hero-title{
    color: $white;
    text-transform:uppercase;
    width:500px;
    text-align:center;
    font-family:Raleway;
    
    &__first{
      text-transform:lowercase;
      font-size:0.9rem;
    }

    &__second{
      font-weight:600;
      font-size:4rem;
      line-height:1.3;
    }
  }
  </style>