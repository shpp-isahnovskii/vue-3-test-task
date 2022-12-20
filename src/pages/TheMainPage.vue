<script setup>
import InviteForm from '@/components/modals/invite-form/InviteForm.vue';
import { pageContent } from '@/constants/defaultText';
</script>

<template>
  <div class="page-wrapper">
    <h2 class="page-header">Some Header</h2>
    <div class="page-content">
      {{ pageContent }}
    </div>
    <invite-form />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 360px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .page {
    &-content {
      margin: 10px 0;
      text-align: justify;
    }
  }
}
</style>
