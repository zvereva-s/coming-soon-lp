<template>
  <div class="container">
    <slot>Default value</slot>
  </div>
</template>

<script>
export default {
  name: 'ContainerComponent',
}
</script>

<style lang="scss" scoped>
.container {

  margin: 0 auto;
  padding:5px 15px;
}
</style>