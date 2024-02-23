<template>
<header>
    <div class="wrapper">
      <nav>
 
        <RouterLink to="/">Головна</RouterLink>
        <RouterLink to="/about">Про нас</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default{
  name: 'HeaderComponent', 
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