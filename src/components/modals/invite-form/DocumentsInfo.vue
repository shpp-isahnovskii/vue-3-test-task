<script setup>
import { ref, computed, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useInviteFormStore } from '@/stores/inviteForm';
import CheckboxTree from '../../checkbox-tree/CheckboxTree.vue';

import {
  classesData,
  departmentsData,
  dcfThreeData,
} from '@/constants/invite-form/documents.js';

const { documentsInfoRef } = storeToRefs(useInviteFormStore());

const checkedNodesList = ref([false, false, false]);
const checkAllTreesAction = ref(undefined);

const checkAllProp = computed({
  get() {
    return checkedNodesList.value.every((el) => el);
  },
  set(val) {
    setAllTrees(val);
  },
});

const setAllTrees = (event) => {
  checkAllTreesAction.value = event;
  checkedNodesList.value =
    event === true ? [true, true, true] : [false, false, false];
  nextTick(() => {
    checkAllTreesAction.value = undefined;
  });
};

function updateTree(key, value) {
  /** Names:
   *  classes 0
   *  departments 1
   *  dcf 2
   */
  switch (key) {
    case 0:
      documentsInfoRef.value.classes = value.data;
      break;
    case 1:
      documentsInfoRef.value.departments = value.data;
      break;
    default:
      documentsInfoRef.value.dcf = value.data;
  }
  checkedNodesList.value[key] = value.status;
}

const selectedCount = computed(
  () => Object.values(documentsInfoRef.value).flat(1).length
);
const activeCollapseItem = ref('1');
</script>

<template>
  <el-collapse v-model="activeCollapseItem" accordion>
    <el-collapse-item name="1">
      <template #title>
        <div class="el-collapse-header">Precoro</div>
        <div class="el-collapse-items-selected">
          {{ selectedCount }} selected
        </div>
      </template>
      <el-form label-position="top">
        <el-form-item>
          <el-checkbox v-model="checkAllProp" @change="setAllTrees"
            >Select All Document Custom Fields
          </el-checkbox>
        </el-form-item>
        <el-form-item
          label="Available Document Custom Fields"
          class="documents__wrapper"
        >
          <el-form-item label="Classes" class="checklist-tree__wrapper">
            <checkbox-tree
              :data="classesData"
              :checkAllAction="checkAllTreesAction"
              @update:CheckAll="updateTree(0, $event)"
            />
          </el-form-item>
          <el-form-item label="Departments" class="checklist-tree__wrapper">
            <checkbox-tree
              :data="departmentsData"
              :checkAllAction="checkAllTreesAction"
              @update:CheckAll="updateTree(1, $event)"
            />
          </el-form-item>
          <el-form-item label="DCF 3" class="checklist-tree__wrapper">
            <checkbox-tree
              :data="dcfThreeData"
              :checkAllAction="checkAllTreesAction"
              @update:CheckAll="updateTree(2, $event)"
            />
          </el-form-item>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template #title>
        <div class="el-collapse-header">Precoro Development</div>
        <div class="el-collapse-items-selected">5 selected</div>
      </template>
      <div>I hate this page :c</div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template #title>
        <div class="el-collapse-header">Procurement</div>
        <div class="el-collapse-items-selected">2 selected</div>
      </template>
      <div>I'm dead x_x</div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
@import '@/styles/collapse_form_preset.scss';

.documents__wrapper {
  :deep(.el-form-item__content) {
    align-items: flex-start;
    column-gap: 40px;
  }
  .checklist-tree__wrapper {
    min-width: 240px;
    :deep(.el-form-item__label) {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text);
    }
  }
}
</style>
