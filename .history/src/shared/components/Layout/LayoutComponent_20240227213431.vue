<template>
  <div class="wrapper">
    <HeaderComponent />
    <ContainerComponent>
      <slot></slot>
    </ContainerComponent>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import ContainerComponent from '../UIComponents/Container.vue'
import FooterComponent from '@/shared/components/Layout/FooterComponent.vue'

export default {
  name: 'LayoutComponent',
  components: {
    HeaderComponent,
    ContainerComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.wrapper {
  @include mq(desktop) {
    background-image: url('../../../assets/images/kyiv-1x.jpg'),
      linear-gradient(to top, $black-soft 20%, $black-mute 80%);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
  }
  min-height: 100vh;
  width: 100%;
}
</style>
