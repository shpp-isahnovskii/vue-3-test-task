<script setup>
import InviteForm from '@/components/modals/invite-form/index.vue';
import HelloArticle from '@/pages/the-main-page/HelloArticle.vue';
import SubmitArticle from '@/pages/the-main-page/SubmitArticle.vue';
import { useInviteFormStore } from '@/stores/inviteForm';
import { storeToRefs } from 'pinia';

const { isFormSubmitted, formData } = storeToRefs(useInviteFormStore());
</script>

<template>
  <div :class="['page-wrapper', { form_submitted: isFormSubmitted }]">
    <h2 class="header">
      <span v-if="isFormSubmitted">Invite Info</span
      ><span v-else>Test Task</span>
    </h2>
    <div class="content-block">
      <hello-article v-if="!isFormSubmitted" />
      <submit-article v-else :data="formData" />
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

  .header {
    font-size: 24px;
    font-weight: 600;
  }
  .content-block {
    margin-bottom: 20px;
    text-align: justify;
  }
  &.form_submitted {
    max-width: none;
  }
}
</style>
