<script setup>
import InviteForm from '@/components/modals/invite-form/InviteForm.vue';
import { pageContent } from '@/constants/defaultText';
import { useInviteFormStore } from '@/stores/inviteForm';
import { storeToRefs } from 'pinia';

const { isFormSubmitted, formData } = storeToRefs(useInviteFormStore());
</script>

<template>
  <div
    class="page-wrapper"
    :class="{ 'invite-form__wrapper': isFormSubmitted }"
  >
    <h2 class="page-header">
      <span v-if="isFormSubmitted">Invite Info</span
      ><span v-else>Some Text</span>
    </h2>
    <div class="page-content">
      <template v-if="!isFormSubmitted">{{ pageContent }}</template>
      <template v-else>
        <div class="invite-form__article">
          <div class="invite-form__header">General</div>
          <div class="invite-form__data">
            Name: <span>{{ formData.name }}</span>
          </div>
          <div class="invite-form__data">
            Last name: <span>{{ formData.lastName }}</span>
          </div>
          <div class="invite-form__data">
            Email: <span>{{ formData.email }}</span>
          </div>
          <div class="invite-form__data">
            Phone: <span>{{ formData.phone }}</span>
          </div>
          <div class="invite-form__data">
            Position: <span>{{ formData.position }}</span>
          </div>
          <div class="invite-form__data">
            Companies:
            <span v-for="(company, key) in formData.companies" :key="key">{{
              company
            }}</span>
            <span v-if="!formData.companies.length"> none </span>
          </div>
        </div>
        <div class="invite-form__article">
          <div class="invite-form__header">Location</div>
          <div class="invite-form__data">
            Main location: <span>{{ formData.mainLocation }}</span>
          </div>
          <div class="invite-form__data">
            Available offices:
            <span v-for="(office, i) in formData.checkedOffices" :key="i">
              {{ office }} </span>
          </div>
          <div>
            <div class="invite-form__wrapper">
              Admin: <span>{{ formData.admin }}</span>
            </div>
          </div>
        </div>
        <div></div>
      </template>
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
  &.invite-form__wrapper {
    max-width: none;
    .invite-form__article {
      &:first-child {
        margin-bottom: 20px;
      }
      .invite-form__header {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 5px;
      }
      .invite-form__data {
        font-weight: 600;
        span {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
