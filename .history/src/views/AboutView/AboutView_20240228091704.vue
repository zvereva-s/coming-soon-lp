<template>
  <div class="main-wrapper">
    <div class="wrapper--white">
      <nav class="nav">
        <a href="/">Головна</a>
      </nav>
      <div class="wrapper-info">
        <h1 class="title-h1">Про нас</h1>
        <div class="description__wrapper">
          <p class="description__space">
            Замовляючи оригінальні запчастини за VIN-кодом для автомобілів Nissan та Infiniti від
            нас, власнику авто, майстру СТО, де проводиться ремонт авто, або менеджеру іншої
            торговельної організації, які звернулися до нас, вам не потрібно хвилюватися тим, що
            запчастина не підійде до авто. Вам не доведеться витрачати час на повернення та новий
            пошук запчастин. І найголовніше - не буде порушено відносин з механіком чи клієнтом.
          </p>

          <p class="description__space">
            Наша компанія спеціалізується на оригінальних запчастинах до автомобілів Nissan та
            Infiniti. Ось деякі переваги оригінальних запчастин: <br />
            <b class="description__space--bold">1. Відповідність високим стандартам якості:</b>
            Оригінальні запчастини Nissan та Infiniti розробляються та виробляються відповідно до
            строгих стандартів на заводах виробника. <br />
            <b class="description__space--bold">2. Тестування перед поставкою:</b>
            Перед поставкою на конвеєр або до дилерських складів, оригінальні запчастини проходять
            тестування на відповідність цим стандартам, що гарантує їх високу якість та
            надійність.<br />
            <b class="description__space--bold">3.Дотримання стандартів виробника: </b>Оригінальні
            запчастини розробляються з урахуванням стандартів, встановлених виробником автомобілів
            Nissan та Infiniti. Вони допомагають зберегти безпеку і ефективність систем автомобіля.
            <br />
            <b class="description__space--bold">4.Високі стандарти якості:</b> Оригінальні
            запчастини мають найвищі стандарти якості порівняно з підробками, що впливає на загальну
            продуктивність, тривалість і комфорт при експлуатації автомобіля. Замовлення
            оригінальних запчастин у нас - це гарантія якості та надійності для вашого автомобіля
            Nissan або Infiniti.
          </p>
          <p class="description__space">
            Оригінальні запчастини мають орієнтовно передбачуваний ресурс. Звісно, не враховуючи тих
            вузлів, зношення яких залежить від манери водіння, наприклад, гальмівні колодки чи
            диски. Однак навіть у цьому випадку, після першого розуміння водієм, що гальма зношені,
            у автомобіля є достатній ресурс, щоб доїхати на станцію технічного обслуговування.
            Порада та побажання: своєчасне обслуговування оригінальними запчастинами гарантує
            власнику автомобіля не витрачати на нього більше часу, ніж він того потребує. Заміна
            витратних матеріалів - ЦЕ НЕ РЕМОНТ, а обслуговування!
          </p>
          <p class="description__space">
            Бажаємо вашому автомобілю тривалої безперебійної роботи і відсутності несподіваних
            поломок, щоб ваш настрій завжди був відмінним, а механікам на станції обслуговування -
            легко і швидко вирішувати будь-які завдання з технічного обслуговування. Дякуємо вам за
            обрання оригінальних запчастин і довіру до нас!
          </p>
        </div>
      </div>
      <div class="contact__wrapper">
        <p class="contact__title">
          За допомогою з підбором та пошуком запчастин звертайтесь за контактами:
        </p>
        <ul class="contact__list">
          <li class="contact__list--item">
            <a class="contact__list--link" href="tel:380502447923">+38 050 244 7923</a>
          </li>
          <li class="contact__list--item">
            <a class="contact__list--link" href="tel:380989492778">+38 098 949 2778</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper--black">
      <Logo :fontSize="3" />
      <AboutViewForm @submit="logger" />
    </div>
  </div>
</template>

<script>
import Logo from '@/shared/components/UIComponents/Logo.vue'
import AboutViewForm from './AboutViewForm/AboutViewForm.vue'
export default {
  name: 'AboutView',
  components: {
    Logo,
    AboutViewForm
  },
  methods: {
    logger(data) {
      console.log('data', data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/_mixins.scss';

.main-wrapper {
  width: 100%;
  background: $black;

  /*  Comment out this line  */
  background-attachment: fixed;

  padding: 30px;

  @include mq(mobile-only) {
    background-image: url('../../assets/images/kyiv-2x 1.jpg'),
      linear-gradient(to top, $black-soft 30%, $black-mute 40%);
    background-repeat: repeat;
  }

  @include mq(desktop) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    max-height: 100vh;
    overflow: hidden;

    background-image: url('../assets/images/kyiv-2x.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
.wrapper--white {
  background: #ffffff3d;
  padding: 2rem;

  @include mq(desktop) {
    padding: 5rem;
  }
}
.nav {
  margin-bottom: 5rem;
  & a {
    text-decoration: none;
    color: $white;

    font-size: 0.6rem;

    &:hover {
      color: $primary-main-hover;
      transition: color $timeDelayNormal $cubic;
    }
  }

  @include mq(desktop) {
    margin-bottom: 10rem;
  }
}

.title-h1 {
  font-size: 3rem;
  font-weight: 800;
  font-family: Raleway;

  color: $white;

  margin-bottom: 1rem;

  @include mq(desktop) {
    margin-bottom: 3rem;
  }
}
.description {
  @include mq(desktop) {
    &__wrapper {
      max-height: 300px;
      overflow: scroll;
    }

    &__space {
      margin-top: 10px;
      font-size: 0.9rem;
      line-height: 1.5;
      color: $white;

      &--bold {
        font-weight: 800;
      }
    }
  }
}
.contact {
  @include mq(desktop) {
    &__wrapper {
      margin-top: 3rem;
      color: $white;
      font-weight: 700;
    }
    &__title {
      font-weight: 700;
      margin-bottom: 1rem;
      text-decoration: underline;
    }
    &__list {
      list-style: none;
      display: flex;
      gap: 3rem;

      &--link {
        text-decoration: none;
        color: $primary-main;
        font-size: 2rem;

        &:hover {
          color: $primary-main-hover;
          transition: color $timeDelayNormal $cubic;
        }
      }
    }
  }
}
</style>
