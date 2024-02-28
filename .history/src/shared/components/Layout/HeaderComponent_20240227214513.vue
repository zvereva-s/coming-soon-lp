<template>
  <header>
    <ContainerComponent>
      <nav class="nav">
        <Logo />
        <div class="router-links">
          <RouterLink class="router-link" to="/">Головна</RouterLink>
          <RouterLink class="router-link" to="/about">Про нас</RouterLink>
          <a class="router-link" href="tel:+380502447923">Зателефонувати</a>
          <a class="router-link" href="mailto:office.val.com.ua@gmail.com">Написати листа</a>
        </div>
      </nav>
    </ContainerComponent>
  </header>
</template>

<script>
import Logo from '@/shared/components/UIComponents/Logo.vue'
import ContainerComponent from '@/shared/components/UIComponents/Container.vue'
export default {
  name: 'HeaderComponent',
  components: {
    Logo,
    ContainerComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.nav {
  text-align: center;
  @include mq(desktop) {
    display: flex;
    justify-content: space-between;
    alight-items: center;
    width: 100%;
  }
}
.router-links {
  @include mq(desktop) {
    display: flex;
    justify-content: space-between;
    alight-items: center;
    gap: 3rem;
  }
}
.router-link {
  text-decoration: none;
  color: $white;
  font-size: 0.6rem;
  &:hover {
    color: $primary-main-hover;
    transition: color $timeDelayNormal $cubic;
  }
  @include mq(desktop) {
    display: flex;
    align-items: flex-end;
  }
}
</style>
