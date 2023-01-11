<script setup>
import InviteForm from '@/components/modals/invite-form/InviteForm.vue';
import { useInviteFormStore } from '@/stores/inviteForm';
import { storeToRefs } from 'pinia';

//lottie animation link: https://lottiefiles.com/132777-vue-js
import animatedLogo from '@/assets/lottie/vue.json';

const { isFormSubmitted, formData } = storeToRefs(useInviteFormStore());
</script>

<template>
  <div :class="['page-wrapper', { form_submitted: isFormSubmitted }]">
    <h2 class="header">
      <span v-if="isFormSubmitted">Invite Info</span
      ><span v-else>Test Task</span>
    </h2>
    <div class="content-block">
      <template v-if="!isFormSubmitted">
        <lottie-animation
          class="vue-icon"
          :animationData="animatedLogo"
          :loop="true"
          :autoPlay="true"
        />
        <p>
          Hi. This test task was designed by Precoro team. The task challenge:
          figure out with Element.IO+ library, create an layout from the
          <a
            href="https://www.figma.com/file/qWFCw9OE1u0biZ1pKpY6Tf/Precoro-test-(copy)?t=6ssm05PnDYvgBUar-0"
            target="_blank"
            rel="noopener"
            >figma reference</a
          >, adapt it and add logic.
        </p></template
      >
      <template v-else>
        <div class="invite-form-block">
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
        <div class="invite-form-block">
          <div class="invite-form__header">Location</div>
          <div class="invite-form__data">
            Main location: <span>{{ formData.mainLocation }}</span>
          </div>
          <div class="invite-form__data">
            Available offices:
            <span v-for="(office, i) in formData.checkedOffices" :key="i">
              {{ office }}
            </span>
          </div>
          <div>
            <div>
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
  .content-block {
    margin-bottom: 20px;
    text-align: justify;
  }
  .vue-icon {
    height: 100px;
  }
  &.form_submitted {
    max-width: none;
    .invite-form-block {
      &:first-child {
        margin-bottom: 20px;
      }
      .invite-form {
        &__header {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 5px;
        }
        &__data {
          font-weight: 600;
          span {
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>
