<template>
  <div class="clock">
    <div class="hour-hand"></div>
    <div class="minute-hand"></div>
    <div class="second-hand"></div>
    <div class="dial">
      <div class="hour hour1">
        <p>1</p>
      </div>
      <div class="hour hour2">
        <p>2</p>
      </div>
      <div class="hour hour3">
        <p class="hour__text--3">3</p>
      </div>
      <div class="hour hour4">
        <p class="hour__text--4">4</p>
      </div>
      <div class="hour hour5">
        <p class="hour__text--5">5</p>
      </div>
      <div class="hour hour6">
        <p class="hour__text--6">6</p>
      </div>
      <div class="hour hour7">
        <p class="hour__text--7">7</p>
      </div>
      <div class="hour hour8">
        <p class="hour__text--8">8</p>
      </div>
      <div class="hour hour9">
        <p class="hour__text--9">9</p>
      </div>
      <div class="hour hour10">
        <p>10</p>
      </div>
      <div class="hour hour11">
        <p>11</p>
      </div>
      <div class="hour hour12">
        <p>12</p>
      </div>
    </div>
  </div>
</template>

<script>
import { updateClock } from '@/shared/utils'
export default {
  name: 'ClockComponent',
  mounted() {
    // setInterval(updateClock, 1000)
    // updateClock()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.clock {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 20rem;
  height: 20rem;
  border: 0.2px solid $text-dark-2;
  border-radius: 50%;
}

.dial {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hour {
  position: absolute;
  font-weight: 100;
  font-size: 1rem;
  font-family: $raleway;
  color: $primary-main;
}

.hour1 {
  transform: rotate(30deg) translateY(-140px);
}
.hour2 {
  transform: rotate(60deg) translateY(-140px);
}
.hour3 {
  transform: rotate(90deg) translateY(-140px);
}
.hour4 {
  transform: rotate(120deg) translateY(-140px);
}
.hour5 {
  transform: rotate(150deg) translateY(-140px);
}
.hour6 {
  transform: rotate(180deg) translateY(-140px);
}
.hour7 {
  transform: rotate(210deg) translateY(-140px);
}
.hour8 {
  transform: rotate(240deg) translateY(-140px);
}
.hour9 {
  transform: rotate(270deg) translateY(-140px);
}
.hour10 {
  transform: rotate(300deg) translateY(-140px);
}
.hour11 {
  transform: rotate(330deg) translateY(-140px);
}
.hour12 {
  transform: rotate(360deg) translateY(-140px);
}

.hour__text {
  &--3 {
    transform: rotate(180deg);
  }

  &--4 {
    transform: rotate(180deg);
  }
  &--5 {
    transform: rotate(180deg);
  }
  &--6 {
    transform: rotate(180deg);
  }
  &--7 {
    transform: rotate(180deg);
  }
  &--8 {
    transform: rotate(180deg);
  }
  &--9 {
    transform: rotate(1deg);
  }
}

.hour-hand,
.minute-hand,
.second-hand {
  position: absolute;
  background-color: $white;
}
.second-hand {
  background-color: red;
}
.hour-hand {
  width: 4px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
}

.minute-hand {
  width: 3px;
  height: 8rem;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
}

.second-hand {
  width: 1px;
  height: 10rem;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
}
</style>
