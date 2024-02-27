<template>
  <li>
    <a
      class="social-link"
      href="https://www.facebook.com/val.autoparts"
      v-if="type === 'facebook'"
      target="_blank"
      rel="noopener norefferal"
      ><FacebookIcon
    /></a>
    <a
      class="social-link"
      href="https://www.instagram.com/val.com.ua/"
      v-if="type === 'instagram'"
      target="_blank"
      rel="noopener norefferal"
      ><InstagramIcon
    /></a>
    <a
      class="social-link"
      href="https://www.youtube.com/@VAL_autoparts/"
      v-if="type === 'youtube'"
      target="_blank"
      rel="noopener norefferal"
      ><YoutubeIcon
    /></a>
    <a
      class="social-link"
      href="https://www.t.me/val_autoparts_Nissan_Infiniti"
      v-if="type === 'telegram'"
      target="_blank"
      rel="noopener norefferal"
      ><TelegramIcon
    /></a>
    <a
      class="social-link"
      href="viber://chat?number=380989492778"
      v-if="type === 'viber'"
      target="_blank"
      rel="noopener norefferal"
      ><ViberIcon
    /></a>
  </li>
</template>

<script>
import FacebookIcon from '@/shared/components//UIComponents/icons/facebookIcon.vue'
import InstagramIcon from '@/shared/components//UIComponents/icons/instagramIcon.vue'
import YoutubeIcon from '@/shared/components//UIComponents/icons/youtubeIcon.vue'
import TelegramIcon from '@/shared/components//UIComponents/icons/telegramIcon.vue'
import ViberIcon from '@/shared/components//UIComponents/icons/viberIcon.vue'

export default {
  name: 'SocialLink',
  components: {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
    TelegramIcon,
    ViberIcon
  },
  props: {
    type: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';

.social-link {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  fill: $primary-main-hover;

  &:hover {
    fill: $white;
    transition: fill $timeDelay $cubic;
  }
}
</style>
