<template>
  <div class="btn-wrapper">
    <button :class="`btn ${class}`" :type="type" :style="{ padding: padding }">{{ text }}</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    text: {
      type: String
    },
    padding: {
      type: String,
      default: '8px'
    },
    class: { type: String }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.btn-wrapper {
  width: 100%;
}
.btn {
  width: 100%;
  height: auto;

  border-radius: 5px;
  border: 0.6px solid $primary-main;

  font-family: Raleway;
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.5;
  text-align: center;

  background-color: transparent;
  color: $primary-main;

  &:hover {
    background-color: $primary-main;
    color: $white;

    transition:
      background-color $timeDelay $cubic,
      color $timeDelayNormal $cubic;
  }
}
</style>
