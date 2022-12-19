<script setup>
import { ref } from 'vue';

import { useInviteFormStore } from '@/stores/inviteForm';

const store = useInviteFormStore();

const generalInfo = ref(store.generalInfoRef);

const companiesList = [
  { label: 'Precoro', value: 'general' },
  { label: 'Precoro Development', value: 'dev' },
  { label: 'Precoro Mobile', value: 'mobile' },
  { label: 'Precoro Design', value: 'design' },
  {},
];
</script>

<template>
  <el-form :model="generalInfo" label-position="top">
    <el-form-item label="First Name">
      <el-input v-model="generalInfo.name" size="large" />
    </el-form-item>
    <el-form-item label="Last Name">
      <el-input v-model="generalInfo.lastName" size="large" />
    </el-form-item>
    <el-form-item label="Email Address">
      <el-input v-model="generalInfo.email" size="large" />
    </el-form-item>
    <el-form-item label="Phone Number">
      <el-input v-model="generalInfo.phone" size="large" />
    </el-form-item>
    <el-form-item label="Position">
      <el-input v-model="generalInfo.position" size="large" />
    </el-form-item>
    <el-form-item label="Available Companies">
      <el-select-v2
        v-model="generalInfo.companies"
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
