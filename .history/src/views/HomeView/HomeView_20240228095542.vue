<template>
  <LayoutComponent>
    <main>
      <div class="hero hero__wrapper">
        <ClockComponent />
        <div class="hero-title__wrapper">
          <p class="hero-title hero-title__first">Наш новий сайт</p>
          <p class="hero-title hero-title__second">скоро буде готовий</p>
        </div>
      </div>
    </main>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/shared/components/Layout/LayoutComponent.vue'
import ClockComponent from '@/views/HomeView/ClockComponent.vue'

export default {
  name: 'HomeView',
  components: {
    LayoutComponent,
    ClockComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/_mixins.scss';

.hero {
  @include mq(desktop) {
    width: 100%;
    height: auto;
    min-height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7rem;

    &__wrapper {
      position: relative;
      border: 1px double $primary-main-hover;
    }
  }
}

.hero-title {
  text-align: center;
  text-transform: uppercase;
  color: $white;

  font-family: Raleway;

  &__wrapper {
    width: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__first {
    text-transform: lowercase;
    font-size: 0.9rem;
    position: absolute;
    top: -20vh;
    left: 50%;
    transform: translate(-50%);
  }
  &__second {
    font-weight: 600;
    font-size: 3rem;
  }

  @include mq(desktop) {
    width: 500px;

    &__wrapper {
      width: 50%;
      height: 90%;
    }

    &__first {
      text-transform: lowercase;
      font-size: 0.9rem;

      top: 5%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__second {
      font-weight: 600;
      font-size: 4rem;
      line-height: 1.3;
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
