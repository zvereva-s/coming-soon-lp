<template>
  <div>
    <div class="overlay" @click="$listeneres">
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
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: $white;
  width: 600px;
  height: 600px;
}
</style>
