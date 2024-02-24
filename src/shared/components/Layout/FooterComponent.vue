<template>
  <footer class="footer">
    <ContainerComponent>
      <div class="footer__wrapper">
        <div class="wrapper-contacts social-links-wrapper">
          <p class="wrapper-contacts__title">Слідкуйте за нами в соцмережах</p>
          <SocialLinks :links="['facebook', 'instagram', 'youtube']" />
        </div>
        <div class="wrapper-contacts">
          <p class="wrapper-contacts__title">Напишіть в мессенджер</p>
          <SocialLinks :links="['telegram', 'viber']" />
        </div>
        <div class="wrapper-contacts">
          <p class="wrapper-contacts__title">Залиште заявку на підбір автозапчастин</p>
          <SocialLinks :links="['telegram', 'viber']" />
        </div>
      </div>
      <div class="wrapper-dev">
        <p class="wrapper-dev__text">
          &copy; 2024 | Designed by
          <a
            class="wrapper-dev__text--link"
            href="https://github.com/zvereva-s"
            target="_blank"
            rel="noopener norefferal"
            >zvereva-s</a
          >
        </p>
      </div>
    </ContainerComponent>
  </footer>
</template>

<script>
import SocialLinks from '@/shared/components/UIComponents/SocialLinks.vue'
import ContainerComponent from '@/shared/components/UIComponents/Container.vue'
export default {
  name: 'FooterComponent',
  components: {
    SocialLinks,
    ContainerComponent
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

.footer {
  padding: 10px;

  height: 100%;

  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;

    min-height: 10rem;
  }
}

.wrapper-contacts {
  justify-content: center;

  &__title {
    color: $white-soft;
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
}
.wrapper-dev {
  position: absolute;
  bottom: 5px;
  left: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__text {
    color: $white;
    font-size: 0.6rem;

    &--link {
      link-style: none;
      color: $primary-main;
    }
  }
}
</style>
