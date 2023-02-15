<script setup>
const props = defineProps({
  data: {
    default: {},
    required: true,
  },
});
</script>

<template>
  <div class="invite-form-block">
    <div class="invite-form__header">General</div>
    <div class="invite-form__data">
      Name: <span>{{ props.data.name }}</span>
    </div>
    <div class="invite-form__data">
      Last name: <span>{{ props.data.lastName }}</span>
    </div>
    <div class="invite-form__data">
      Email: <span>{{ props.data.email }}</span>
    </div>
    <div class="invite-form__data">
      Phone: <span>{{ props.data.phone }}</span>
    </div>
    <div class="invite-form__data">
      Position: <span>{{ props.data.position }}</span>
    </div>
    <div class="invite-form__data">
      Companies:
      <span v-for="(company, key) in props.data.companies" :key="key">{{
        company
      }}</span>
      <span v-if="!props.data.companies.length"> none </span>
    </div>
  </div>
  <div class="invite-form-block">
    <div class="invite-form__header">Location</div>
    <div class="invite-form__data">
      Main location: <span>{{ props.data.mainLocation }}</span>
    </div>
    <div class="invite-form__data">
      Available offices:
      <span v-for="(office, i) in props.data.checkedOffices" :key="i">
        {{ office }}
      </span>
    </div>
    <div>
      <div>
        Admin: <span>{{ props.data.admin }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
