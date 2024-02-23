<template>
    <div class='logo-wrapper'>
        <a href='/' class='logo'>VAL</a>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Logo'
    }
</script>

<style lang="scss" scoped>
  @import '../../../assets/scss/variables.scss';
  .logo-wrapper{
    
  }
    .logo{
        font-family:$raleway;
        font-weight:900;
        font-size:2rem;
        color:$primary-main;

        text-decoration:none;
        &:hover{
            color:$primary-main-hover;
             transition: color $timeDelay $cubic;
        }
    }

</style>