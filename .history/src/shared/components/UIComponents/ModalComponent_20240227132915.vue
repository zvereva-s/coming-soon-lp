<template>
  <div>
    <div class="overlay">
      <div class="modal-context">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

.overlay {
}
.modal-context {
}
</style>
