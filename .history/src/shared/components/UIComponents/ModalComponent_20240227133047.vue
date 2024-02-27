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
  position: fixed;

  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;

  width: 100vw;
  height: 100%;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}
.modal-context {
  background-color: $white;
  width: 600px;
}
</style>
