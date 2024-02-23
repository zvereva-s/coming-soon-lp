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
    padding:25px 15px 10px;
    background-color: $black;
    -webkit-box-shadow: -1px 49px 105px -21px rgba(255,122,0,0.75);
    -moz-box-shadow: -1px 49px 105px -21px rgba(255,122,0,0.75);
    box-shadow: -1px 49px 105px -21px rgba(255,122,0,0.75);
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