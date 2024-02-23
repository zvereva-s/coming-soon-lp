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
  @import '../assets/scss/variables.scss';
      .wrapper{
        min-height: 100vh;
          width: 100%;
        background-image: url('../assets/images/kyiv-1x.jpg'), linear-gradient(to top, $black-soft 20%, $black-mute 80%);
            background-repeat: no-repeat;
            background-size: contain;
            background-position-x: right;}
  </style>