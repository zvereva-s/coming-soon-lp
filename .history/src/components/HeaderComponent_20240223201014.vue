<template>
<header>
      <nav class='nav'>
      <Logo />
      <div class='router-links'>
       <RouterLink class='router-link' to="/">Головна</RouterLink>
       <RouterLink class='router-link' to="/about">Про нас</RouterLink>
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
  alight-items:center;
  width:100%;
  border-bottom:1px solid white;
}
.router-links{
  display:flex;
  justify-content:space-between;alight-items:center;
  gap:10px
}
.router-link{
  display:flex;
  align-items: center;
  text-decoration:none;

 &:hover{
            color:$primary-main-hover;
             transition: color $timeDelay $cubic;
        }

}
</style>