<script setup>
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useInviteFormStore } from '@/stores/inviteForm';

const { generalInfoRef } = storeToRefs(useInviteFormStore());

const validationRef = ref();
function submitForm() {
  return new Promise((res) => {
    if (!validationRef.value) return res(false);
    validationRef.value.validate((valid) => res(valid));
  });
};

defineExpose({ submitForm });

const validateLength = (_, value, callback) => {
  if (value.length === 0) {
    callback(new Error('Please input the missing data'));
    return;
  }
  callback();
};

const rules = reactive({
  name: [
    { validator: validateLength, trigger: 'blur' },
    { min: 3, message: 'Length should more then 3', trigger: 'blur' },
  ],
  lastName: [
    { validator: validateLength, trigger: 'blur' },
    { min: 3, message: 'Length should more then 3', trigger: 'blur' },
  ],
  email: [
    { validator: validateLength, trigger: 'blur' },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: 'blur',
    },
  ],
  phone: [{ validator: validateLength, trigger: 'blur' }],
  position: [{ validator: validateLength, trigger: 'blur' }],
  companies: [{ validator: validateLength, trigger: 'blur' }],
});

const companiesList = [
  { label: 'Precoro', value: 'general' },
  { label: 'Precoro Development', value: 'dev' },
  { label: 'Precoro Mobile', value: 'mobile' },
  { label: 'Precoro Design', value: 'design' },
];
</script>

<template>
  <el-form
    label-position="top"
    :model="generalInfoRef"
    :rules="rules"
    ref="validationRef"
  >
    <el-form-item label="First Name" prop="name">
      <el-input v-model="generalInfoRef.name" size="large" />
    </el-form-item>
    <el-form-item label="Last Name" prop="lastName">
      <el-input v-model="generalInfoRef.lastName" size="large" />
    </el-form-item>
    <el-form-item label="Email Address" prop="email">
      <el-input v-model="generalInfoRef.email" size="large" />
    </el-form-item>
    <el-form-item label="Phone Number" prop="phone">
      <el-input v-model="generalInfoRef.phone" size="large" />
    </el-form-item>
    <el-form-item label="Position" prop="position">
      <el-input v-model="generalInfoRef.position" size="large" />
    </el-form-item>
    <el-form-item label="Available Companies" prop="companies">
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
