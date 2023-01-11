<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  data: {
    default: [],
  },
  nodeKey: {
    default: 'label',
  },
  checkAllAction: {
    default: undefined, // undefined if no action
  },
  nodeProps: {
    children: 'children',
    label: 'label',
  },
});

const dataRef = ref();
const checkAll = ref(false);
const nodeKeyRef = ref(props.nodeKey);

watch(
  () => props.checkAllAction,
  (value) => {
    if (value !== undefined) {
      checkAll.value = value;
      handleCheckAllChange(value);
    }
  }
);

const rootKeys = props.data.map((element) => element[props.nodeKey]);
const handleCheckAllChange = (val) => {
  dataRef.value.setCheckedKeys(val === true ? rootKeys : []);
  emitUpdate(val);
};

const emit = defineEmits(['update:Tree']);
const emitUpdate = (status) => {
  emit('update:Tree', {
    status: status,
    data: dataRef.value.getCheckedKeys(),
  });
};

const handleCheckSingleNode = () => {
  /* Clicking on a checkbox and all became checked */
  if (dataRef.value.getCheckedKeys().length === treeLength) {
    emitUpdate(true);
    checkAll.value = true;
    return;
  }
  /* Clicking on a checkbox if all was checked */
  if (checkAll.value) {
    emitUpdate(false);
    checkAll.value = false;
    return;
  }
  /* Clicking on a checkbox */
  emitUpdate(false);
};

const treeLength = keysSearch(props.data, props.nodeKey).length;
function keysSearch(data, fieldToFind, result = []) {
  data.forEach((element) => {
    if (element.children) {
      result = keysSearch(element.children, fieldToFind, [
        element[fieldToFind],
        ...result,
      ]);
    } else {
      result = [element[fieldToFind], ...result];
    }
  });
  return result;
}
</script>

<template>
  <div class="tree-wrapper">
    <el-checkbox
      class="tree__select-all"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >Select All
    </el-checkbox>
    <el-tree
      :node-key="nodeKeyRef"
      ref="dataRef"
      :data="props.data"
      :props="props.nodeProps"
      @check="handleCheckSingleNode"
      show-checkbox
    />
  </div>
</template>

<style lang="scss" scoped>
.tree-wrapper {
  .tree__select-all {
    margin-bottom: 10px;
  }
  .el-tree {
    color: var(--color-text);
    :deep(.el-tree-node) {
      .el-tree-node__content {
        margin-right: 26px;
        .el-icon {
          right: -26px;
          top: 1px;
          position: absolute;
        }
      }
    }
  }
}
</style>
