<template>
  <div>
    <div class="backdrop">
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

.backdrop {
}
.modal-context {
}
</style>
