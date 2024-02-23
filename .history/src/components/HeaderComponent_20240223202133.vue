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
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.nav{
  display:flex;
  justify-content:space-between;
  alight-items:center;
  width:100%;

}
.router-links{
  display:flex;
  justify-content:space-between;alight-items:center;
  gap:3rem;
}
.router-link{
  display:flex;
  align-items: center;
  text-decoration:none;
  color:$white;
  font-size:0.6rem;

 &:hover{
  color:$primary-main-hover;
  transition: color $timeDelayNormal $cubic;
 }

}
</style>