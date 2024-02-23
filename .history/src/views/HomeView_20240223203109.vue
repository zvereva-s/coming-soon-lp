
  <template>
      <LayoutComponent>
          <main>
            <div class='hero'>
                <p class='hero-title'>Наш новий сайт</p>
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

  .hero-title{
    color: $white;
    text-transform:uppercase;
    place-text:center;

    &__second{
      
    }
  }
  </style>