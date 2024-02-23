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
    width:100px;
    padding:25px 15px 20px;
    background-color: $black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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