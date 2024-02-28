<template>
  <div class="form-wrapper">
    <p class="application">Залиште заявку на підбір автозапчастини</p>
    <form class="form" @submit.prevent="handleSubmit">
      <CustomInput
        v-for="field in fields"
        :key="field.id"
        v-model="initialState[field.value]"
        :label="field.label"
        :placeholder="field.placeholder"
        :required="field.required"
      />
      <CustomButton type="submit" :text="'Надіслати заявку'" :padding="'16px'" />
    </form>
  </div>
</template>

<script>
import CustomInput from '@/shared/components/UIComponents/CustomInput.vue'
import CustomButton from '@/shared/components/UIComponents/CustomButton.vue'

import { initialState } from '@/views/AboutView/AboutViewForm/initialState.js'
import { fields } from '@/views/AboutView/AboutViewForm/fields.js'

export default {
  name: 'AboutViewForm',
  components: {
    CustomInput,
    CustomButton
  },
  data() {
    return {
      initialState,
      fields
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.initialState })
      this.fields.forEach((field) => {
        this.initialState[field.value] = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.form-wrapper {
  @include mq(desktop) {
    padding-top: 4rem;
  }
}
.application {
  font-weight: 200;
  font-size: 0.9rem;
  color: $white;
  text-align: center;

  @include mq(mobile-only) {
    margin-bottom: 2rem;
  }
}

.form {
  @include mq(desktop) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 5rem;
    margin: 0 2rem;
    margin-top: 2.5rem;
  }
}
</style>
