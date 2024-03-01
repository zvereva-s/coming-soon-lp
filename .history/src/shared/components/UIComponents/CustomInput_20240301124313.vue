<template>
  <div class="input-wrapper">
    <label class="input-label" :class="{ 'input-label--active': inputFocused }" :for="inputId"
      >{{ label }}
    </label>
    <input
      v-maska
      :data-maska="mask"
      class="input-field"
      :class="{ 'input-field--active': inputFocused }"
      v-model="value"
      :pattern="pattern"
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :autocomplete="autocomplete"
      :required="required"
      @focus="inputFocused = true"
      @blur="inputFocused = false"
    />
    <slot></slot>
  </div>
</template>

<script>
import { vMaska } from 'maska'

export default {
  directives: { maska: vMaska },
  props: {
    modelValue: String,
    label: { type: String, default: '' },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String
    },
    pattern: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  computed: {
    inputId() {
      return 'input-' + Math.random().toString(36).substr(2, 9)
    },
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/variables.scss';
@import '../../../assets/scss/_mixins.scss';

.input-wrapper {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 60px;

  @include mq(notDesktop) {
    margin-bottom: 20px;
  }
}
.input-label {
  position: absolute;
  top: -22px;

  font-weight: 100;
  font-size: 0.9rem;
  line-height: 1.5;
  color: $white;

  background-color: $primary-main-hover;
  padding: 0 5px;
  right: 20px;

  min-width: 10%;
  border-radius: 2px;

  font-family: Manrope;
  text-align: center;

  &--active {
    background-color: $primary-main;
  }
}
.input-field {
  padding: 16px;
  width: 100%;

  border-radius: 5px;
  border: 0.4px solid $primary-main-hover;

  font-family: Manrope;
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.5;
  color: $white-soft;
  background-color: $divider-light-1;

  &::placeholder {
    color: $divider-dark-2;
    font-weight: 200;
  }
  &:hover {
    outline: 0.6px solid $primary-main;
    border: 0.6px solid $primary-main;
    &::placeholder {
      color: $white-mute;
      font-weight: 200;
    }
  }

  &--active {
    outline: 0.6px solid $primary-main;
    border: 0.6px solid $primary-main;

    &::placeholder {
      color: $white-mute;
      font-weight: 200;
    }
  }
}
</style>
