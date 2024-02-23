<template>
<header>
      <nav class='nav'>
      <Logo />
      <div class='router-links'>
       <RouterLink to="/">Головна</RouterLink><RouterLink to="/about">Про нас</RouterLink>
       </div>
      </nav>
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

.nav{
  display:flex;
  justify-content:space-between;
  alight-items:baseline;
  width:100%;
  border-bottom:1px solid white;
}
.router-links{
  display:flex;
  justify-content:space-between;
  gap:10px
}
</style>