<script setup>
import { ref, computed, reactive } from 'vue';
import CheckboxTree from '../../checkbox-tree/CheckboxTree.vue';

import {
  classesData,
  departmentsData,
  dcfThreeData,
} from '@/constants/invite-form/data.js';

import { useInviteFormStore } from '@/stores/inviteForm';

const store = useInviteFormStore();

let documentsInfoRef = reactive(store.documentsInfoRef);

let checkAllRef = ref(false);
const checkAllProp = computed({
  get() {
    return checkedNodesList.value.every((el) => el);
  },
  set(val) {
    checkAllRef.value = val;
    setAllTrees(val);
  },
});

const setAllTrees = (event) => {
  checkedNodesList.value =
    event === true ? [true, true, true] : [false, false, false];
};

let checkedNodesList = ref([false, false, false]);

function updateTree(key, value) {
  /** Names:
   *  classes
   *  departments
   *  dcf
   */
  switch (key) {
    case 0:
      documentsInfoRef.classes = value.data;
      break;
    case 1:
      documentsInfoRef.departments = value.data;
      break;
    default:
      documentsInfoRef.dcf = value.data;
  }
  checkedNodesList.value[key] = value.status;
}

const selectedCount = computed(
  () => Object.values(documentsInfoRef).flat(1).length
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
              nodeKey="label"
              :checkAll="checkedNodesList[0]"
              @update:CheckAll="updateTree(0, $event)"
            />
          </el-form-item>
          <el-form-item label="Departments" class="checklist-tree__wrapper">
            <checkbox-tree
              :data="departmentsData"
              nodeKey="label"
              :checkAll="checkedNodesList[1]"
              @update:CheckAll="updateTree(1, $event)"
            />
          </el-form-item>
          <el-form-item label="DCF 3" class="checklist-tree__wrapper">
            <checkbox-tree
              :data="dcfThreeData"
              nodeKey="label"
              :checkAll="checkedNodesList[2]"
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
