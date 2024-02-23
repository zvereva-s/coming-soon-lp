
  <template>
      <LayoutComponent>
          <main>
            <div class='hero'>
                <p class='hero-title hero-title__first'>Наш новий сайт</p>
                <p class='hero-title hero-title__second'>скоро буде готовий</p>
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
    
    &__first{
      text-transform:lowercase;
      font-size:0.8rem;
    }

    &__second{
      font-weight:600;
      font-size:4rem;
      line-height:1.3;
    }
  }
  </style>