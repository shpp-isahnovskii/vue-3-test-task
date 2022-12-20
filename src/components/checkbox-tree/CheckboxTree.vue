<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  data: {
    default: [],
  },
  nodeKey: {
    default: 'id',
  },
  checkAll: {
    default: false,
  },
  nodeProps: {
    children: 'children',
    label: 'label',
  }
});

const nodeKeyRef = ref(props.nodeKey);

const emit = defineEmits(['update:CheckAll']);
const emitUpdate = (status) => {
  emit('update:CheckAll', {
    status: status,
    data: dataRef.value.getCheckedKeys(),
  });
};

const dataRef = ref();

const checkAll = ref(false);
const checkAllProp = computed({
  get() {
    return props.checkAll;
  },
  set(val) {
    checkAll.value = val;
    handleCheckAllChange(val);
  },
});

const rootKeys = props.data.map((element) => element[props.nodeKey]);
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

const handleCheckAllChange = (val) => {
  dataRef.value.setCheckedKeys(val === true ? rootKeys : []);
  emitUpdate(val);
};

/* used to track prop.checkAll changes that stored in get() */
watch(checkAllProp, (val) => {
  checkAllProp.value = val;
});

</script>

<template>
  <div class="checkbox-tree__wrapper">
    <el-checkbox
      class="check-box__select-all"
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
.checkbox-tree__wrapper {
  .check-box__select-all {
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
