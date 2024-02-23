
  <template>
      <LayoutComponent>
          <main>
            <div class='hero'>
            <p>Наш новий сайт</p>
            <p>скоро </p>
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
  </style>