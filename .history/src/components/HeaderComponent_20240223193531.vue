<template>
<header>
    <div class="wrapper">
      <nav>
      <Logo />
        <RouterLink to="/">Головна</RouterLink>
        <RouterLink to="/about">Про нас</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '../components/shared/UIComponents/Logo.vue';
export default{
  name: 'HeaderComponent', 
  components:{
    Logo
  },
  props:{  
    links:{
      type: Array,
      default: ()=>[]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

</style>