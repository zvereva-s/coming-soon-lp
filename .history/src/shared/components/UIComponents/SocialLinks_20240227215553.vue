<template>
  <ul class="social-list">
    <SocialLink v-for="link in links" :key="link" :type="link" />
  </ul>
</template>

<script>
import SocialLink from '@/shared/components//UIComponents/SocialLink.vue'
export default {
  name: 'SocialLinks',
  components: { SocialLink },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/_mixins.scss';

.social-list {
  display: flex;
  justify-content: center;
  gap: 1rem;

  @include mq(desktop) {
    gap: 3rem;
  }
}
</style>
