<template>
    <div>
    <p class='logo'>VAL</p>
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
    .logo{
        font-family:$raleway;
        font-weight:700;
        font-size:3rem;
        color:$primary-main;
    }

</style>