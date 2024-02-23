<template>
<header>
    <div class="wrapper">
      <nav>
      <div>
      <p class='logo'>VAL</p>
      </div>
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
      default: ()=>{}
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  font-weight:900;
  color:orange;
}
</style>