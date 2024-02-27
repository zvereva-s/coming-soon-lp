<template>
  <div v-if="openForm">
    <div class="overlay">
      <div class="modal-context">
        <button class="btn-close" type="button" @click="$emit('closeModal')">
          <CloseIcon />
        </button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from '@/shared/components/UIComponents/icons/closeIcon.vue'
export default {
  name: 'ModalComponent',
  components: {
    CloseIcon
  },
  props: {
    openForm: Boolean
  }
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

  background-color: #61300364;
}
.modal-context {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: $black-mute;
  width: 600px;
  height: auto;
}
.btn-close {
  display: block;
  width: 24px;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;

  position: absolute;
  top: 8px;
  right: 8px;

  &:hover {
    fill: $primary-main-hover;
    transition: fill $timeDelayNormal $cubic;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity $timeDelay $cubic;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
