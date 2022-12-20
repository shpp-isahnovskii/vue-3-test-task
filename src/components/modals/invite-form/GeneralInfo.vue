<script setup>
import { storeToRefs } from 'pinia';
import { useInviteFormStore } from '@/stores/inviteForm';

const { generalInfoRef } = storeToRefs(useInviteFormStore());

const companiesList = [
  { label: 'Precoro', value: 'general' },
  { label: 'Precoro Development', value: 'dev' },
  { label: 'Precoro Mobile', value: 'mobile' },
  { label: 'Precoro Design', value: 'design' },
  {},
];
</script>

<template>
  <el-form :model="generalInfoRef" label-position="top">
    <el-form-item label="First Name">
      <el-input v-model="generalInfoRef.name" size="large" />
    </el-form-item>
    <el-form-item label="Last Name">
      <el-input v-model="generalInfoRef.lastName" size="large" />
    </el-form-item>
    <el-form-item label="Email Address">
      <el-input v-model="generalInfoRef.email" size="large" />
    </el-form-item>
    <el-form-item label="Phone Number">
      <el-input v-model="generalInfoRef.phone" size="large" />
    </el-form-item>
    <el-form-item label="Position">
      <el-input v-model="generalInfoRef.position" size="large" />
    </el-form-item>
    <el-form-item label="Available Companies">
      <el-select-v2
        v-model="generalInfoRef.companies"
        :options="companiesList"
        placeholder="Please select"
        size="large"
        multiple
        collapse-tags
        collapse-tags-tooltip
      />
    </el-form-item>
  </el-form>
</template>

<style lang="scss" scoped>
@import '@/styles/invite_form_preset.scss';

.el-form {
  :deep(.el-form-item) {
    margin-bottom: 20px;
  }
}
.el-form .el-select-v2 {
  width: 345px;
}
</style>
