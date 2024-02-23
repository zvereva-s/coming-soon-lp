
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