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
.social-list {
  display: flex;
  justify-content: center;
  gap: 3rem;
}
</style>
