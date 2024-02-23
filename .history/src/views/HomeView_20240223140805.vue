  <script setup>
  // import TheWelcome from '../components/TheWelcome.vue'
  // import HeroComponent from '@/components/HeroComponent.vue'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  </script>

  <template>
    <div class='wrapper'>
     <HeaderComponent />
      <main class='wrapper'>
    <h1>Something </h1>
    </main></div>
     
  </template>

  <style lang="scss" scoped>
  .wrapper{
    min-height: 100vh;
      width: 100%;
    background-image: url('../assets/kyiv-1x.jpg'), linear-gradient(to top, #212121 20%, #2121210b 80%);
        background-repeat: no-repeat;
        background-size: contain;
        background-position-x: right;}
  </style>