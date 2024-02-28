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
        <div class="wrapper-contacts application-form">
          <p class="wrapper-contacts__title">Залиште заявку на підбір автозапчастин</p>
          <CustomButton text="Підібрати запчастину" @click="openForm = !openForm" />

          <teleport to="#modals">
            <Transition>
              <ModalComponent :openForm="openForm" @closeModal="handleOpenForm">
                <AboutViewForm @submit="handleSubmit" /> </ModalComponent
            ></Transition>
          </teleport>
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
import CustomButton from '@/shared/components/UIComponents/CustomButton.vue'
import ModalComponent from '@/shared/components/UIComponents/ModalComponent.vue'
import AboutViewForm from '@/views/AboutView/AboutViewForm/AboutViewForm.vue'

export default {
  name: 'FooterComponent',
  components: {
    SocialLinks,
    ContainerComponent,
    CustomButton,
    ModalComponent,
    AboutViewForm
  },
  data() {
    return {
      openForm: false
    }
  },
  methods: {
    handleOpenForm() {
      return (this.openForm = false)
    },
    handleSubmit(data) {
      console.log('data', data)
      return (this.openForm = false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.footer {
  height: 100%;

  &__wrapper {
  }
  @include mq(mobile-only) {
    padding: 3px;

    &__wrapper {
      min-height: 20px;
    }
  }
  @include mq(desktop) {
    padding: 10px;
    &__wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 10rem;
    }
  }
}

.wrapper-contacts {
  &__title {
    color: $white;
    font-size: 0.6rem;
    margin-bottom: 10px;
  }

  @include mq(mobile-only) {
    margin-bottom: 1rem;
    text-align: right;
  }

  @include mq(desktop) {
    justify-content: center;
  }
}
.application-form {
  @include mq(mobile-only) {
    width: 100%;
  }
}
.wrapper-dev {
  text-align: center;
  &__text {
    font-family: Manrope;
    font-weight: 100;
    color: $white-mute;
    font-size: 0.6rem;

    &--link {
      link-style: none;
      color: $primary-main;
    }
  }
  @include mq(desktop) {
    position: absolute;
    bottom: 5px;
    left: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
