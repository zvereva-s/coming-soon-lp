<template>
  <div class="logo-wrapper">
    <a href="/" class="logo" :style="{ fontSize: fontSize + 'rem' }">VAL</a>
    <p>Автозапчастини для Nissan & Infiniti</p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',
  props: {
    fontSize: {
      type: String,
      default: '2'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
.logo-wrapper {
  text-align: center;

  min-width: 100px;
  padding-top: 1rem;
  margin: 0;
  color: $primary-main-hover;
  font-size: 0.6rem;
}
.logo {
  font-family: $raleway;
  font-weight: 900;
  font-size: 2rem;
  color: $primary-main;

  text-decoration: none;

  &:hover {
    color: $primary-main-hover;
    transition: color $timeDelay $cubic;
  }
}
</style>
