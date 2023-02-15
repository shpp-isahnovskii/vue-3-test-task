<script setup>
import GeneralInfo from './GeneralInfo.vue';
import LocationInfo from './LocationInfo.vue';
import AvailableDocuments from './DocumentsInfo.vue';
import RolesInfo from './RolesInfo.vue';
import { useInviteFormStore } from '@/stores/inviteForm';

import { ref } from 'vue';

const store = useInviteFormStore();

const open = ref(false);
const activeName = ref('first');

/* reference to the general-info Child page */
const generalInfoRef = ref(null);

const handleNextPageClick = async () => {
  switch (activeName.value) {
    case 'first':
      if (await generalInfoRef.value.isValid()) {
        activeName.value = 'second';
      }
      break;
    case 'second':
      activeName.value = 'third';
      break;
    case 'third':
      activeName.value = 'fourth';
      break;
    default:
      submitForm();
      open.value = false;
  }
};

const handleButtonClick = () => {
  if (store.isFormSubmitted) {
    store.resetInviteForm();
  } else {
    open.value = !open.value;
    activeName.value = 'first';
  }
};

const submitForm = () => {
  store.submitInviteForm();
};
</script>

<template>
  <el-button @click="handleButtonClick"
    ><span v-if="store.isFormSubmitted">Reset Form</span
    ><span v-else>Open form</span></el-button
  >
  <Teleport to="body">
    <div v-if="open" class="modal-overlay">
      <div class="modal-content">
        <div class="close-modal" @click="open = false"></div>
        <h3 class="content-header">Invite User</h3>
        <el-tabs v-model="activeName" class="invite-form">
          <el-tab-pane label="Main Info" :name="'first'" class="form-item">
            <general-info ref="generalInfoRef" />
          </el-tab-pane>
          <el-tab-pane
            label="Available Locations"
            :name="'second'"
            class="form-item"
          >
            <location-info />
          </el-tab-pane>
          <el-tab-pane
            label="Available Documents Custom Fields"
            :name="'third'"
            class="form-item"
          >
            <available-documents />
          </el-tab-pane>
          <el-tab-pane label="Roles" :name="'fourth'" class="form-item">
            <roles-info />
          </el-tab-pane>
        </el-tabs>
        <div class="bottom-section">
          <div v-if="activeName === 'first'" class="switch-wrapper">
            <el-switch v-model="store.toAllCompanies" />
            <div class="text-line">Active in all companies</div>
          </div>
          <el-button
            type="primary"
            round
            class="next-button"
            @click="handleNextPageClick"
            >{{
              activeName !== 'fourth' ? 'Next Step' : 'Invite User'
            }}</el-button
          >
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
}
:deep(.el-tabs) {
  border-bottom: 1px solid #e7eaef;
  margin-top: 4px;
  margin-bottom: 24px;

  .el-tabs__nav-wrap::after {
    height: 1px;
  }
  .el-tabs__nav {
    .el-tabs__item {
      margin-bottom: 8px;
      &:nth-child(2) {
        padding-left: 24px;
      }
      font-size: var(--el-font-size-medium);
      padding: 0 12px;
      color: var(--el-text-color-regular);
      &:hover {
        color: var(--el-color-primary);
      }
      &.is-active {
        color: var(--el-color-primary);
      }
    }
    .el-tabs__item:before {
      content: '1';
      display: inline-block;
      margin-right: 8px;
      height: 30px;
      width: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #415ada0d;
      border-radius: 50%;
    }
    .el-tabs__item {
      &:nth-child(2).el-tabs__item:before {
        content: '1';
      }
      &:nth-child(3).el-tabs__item:before {
        content: '2';
      }
      &:nth-child(4).el-tabs__item:before {
        content: '3';
      }
      &:nth-child(5).el-tabs__item:before {
        content: '4';
      }
    }
  }
}
.modal-content {
  width: 868px;
  margin: 40px auto;
  background: var(--color-background);
  box-shadow: 0px 8px 16px var(--color-box-shadow);
  border-radius: 16px;
  padding: 18px 0;
  .content-header {
    font-size: 24px;
    font-weight: 600;
  }
  .content-header,
  .form-item {
    padding: 0 24px;
  }
  .close-modal {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 20px;
    right: 24px;
    z-index: 1;
    &::before {
      content: '';
      background: no-repeat url('@/assets/icons/icon-close.svg');
      background-size: 24px;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0.6;
    }
    &:hover {
      cursor: pointer;
      &::before {
        opacity: 0.8;
      }
    }
  }
}

.bottom-section {
  padding: 0 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  .text-line {
    margin-left: 10px;
    margin-bottom: 1px;
    &::after {
      content: '';
      background: no-repeat url('@/assets/icons/icon-info.svg');
      display: inline-block;
      width: 20px;
      height: 20px;
      background-size: 18px 18px;
      opacity: 0.5;
      top: 5px;
      margin-left: 8px;
    }
  }
  .next-button {
    background-color: var(--vt-c-indigo);
    margin-left: auto;
  }
  .switch-wrapper {
    display: flex;
    align-items: center;
  }
}
</style>
