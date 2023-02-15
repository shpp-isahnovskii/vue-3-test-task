<script setup>
//lottie animation link: https://lottiefiles.com/132777-vue-js
import animatedLogo from '@/assets/lottie/vue.json';
</script>

<template>
  <lottie-animation
    class="vue-icon"
    :animationData="animatedLogo"
    :loop="true"
    :autoPlay="true"
  />
  <p>
    Hello there. This test task was designed by Precoro team. The task
    challenge: figure out with Element.IO+ library, create an layout from the
    <a
      href="https://www.figma.com/file/qWFCw9OE1u0biZ1pKpY6Tf/Precoro-test-(copy)?t=6ssm05PnDYvgBUar-0"
      target="_blank"
      rel="noopener"
      >figma reference</a
    >, adapt it and add logic.
  </p>
</template>

<style lang="scss" scoped>
p {
  font-size: 16px;
}
.vue-icon {
  height: 100px;
}
</style>
