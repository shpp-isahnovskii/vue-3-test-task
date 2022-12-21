<script setup>
import { useInviteFormStore } from '@/stores/inviteForm';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { accessData, managementData } from '@/constants/invite-form/roles';

const { permissions } = storeToRefs(useInviteFormStore());

permissions.value.access = ref(accessData);

/* view 0 create 1 approve 2 pay 3 */
const checkedColumns = ref([false, false, false, false]);

const handleAllCheckChange = (index, accessName) => {
  if (isPermissionsFalsy(accessName)) {
    columnSetAll(accessName, true);
    checkedColumns[index] = true;
    return;
  }
  columnSetAll(accessName, false);
  checkedColumns[index] = false;
};

const handleCheckChange = (index, accessName, event) => {
  if (checkedColumns.value[index] === true && event === false) {
    checkedColumns.value[index] = false;
    return;
  }
  if (
    event === true &&
    checkedColumns.value[index] === false &&
    !isPermissionsFalsy(accessName)
  ) {
    checkedColumns.value[index] = true;
  }
};

const isPermissionsFalsy = (accessName) => {
  return permissions.value.access.find((val) => {
    return val.status[accessName] === false;
  });
};

const columnSetAll = (accessName, status) => {
  permissions.value.access.forEach((_, i) => {
    if (permissions.value.access[i].status[accessName] !== null) {
      permissions.value.access[i].status[accessName] = status;
    }
  });
};

const checkedAllManagement = ref(false);

const handleManagementAllChange = (value) => {
  permissions.value.management = value === true ? managementData : [];
};

const handleManagementChange = (value) => {
  checkedAllManagement.value = value.length === managementData.length;
};

const activeCollapseItem = ref('1');
</script>

<template>
  <el-collapse v-model="activeCollapseItem" accordion>
    <el-collapse-item name="1">
      <template #title>
        <div class="el-collapse-header">Precoro</div>
        <div class="el-collapse-items-selected">View Only</div>
      </template>
      <div class="content-wrapper">
        <table class="el-table">
          <thead class="el-table__header">
            <tr class="el-row">
              <th class="el-cell">Access to:</th>
              <th class="el-cell">View only</th>
              <th class="el-cell">Create</th>
              <th class="el-cell">Approve</th>
              <th class="el-cell">Pay</th>
            </tr>
          </thead>
          <tbody class="el-table__body">
            <tr class="el-row">
              <td class="el-cell el__bold">All Bellow</td>
              <td class="el-cell">
                <el-checkbox
                  v-model="checkedColumns[0]"
                  @change="handleAllCheckChange(0, 'view')"
                ></el-checkbox>
              </td>
              <td class="el-cell">
                <el-checkbox
                  v-model="checkedColumns[1]"
                  @change="handleAllCheckChange(1, 'create')"
                ></el-checkbox>
              </td>
              <td class="el-cell">
                <el-checkbox
                  v-model="checkedColumns[2]"
                  @change="handleAllCheckChange(2, 'approve')"
                ></el-checkbox>
              </td>
              <td class="el-cell">
                <el-checkbox
                  v-model="checkedColumns[3]"
                  @change="handleAllCheckChange(3, 'pay')"
                ></el-checkbox>
              </td>
            </tr>
            <tr
              v-for="(row, rowIndex) in permissions.access"
              :key="rowIndex"
              class="el-row"
            >
              <td class="el-cell el-cell__name">{{ row.name }}</td>
              <td
                v-for="(val, accessName, colIndex) in row.status"
                :key="accessName"
                class="el-cell"
              >
                <el-checkbox
                  v-if="val !== null"
                  v-model="permissions.access[rowIndex].status[accessName]"
                  @change="handleCheckChange(colIndex, accessName, $event)"
                ></el-checkbox>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="el-checklist">
          <div class="el-checkbox__header">Management:</div>
          <el-checkbox
            class="el__bold"
            v-model="checkedAllManagement"
            @change="handleManagementAllChange"
            >All Bellow</el-checkbox
          >
          <el-checkbox-group
            v-model="permissions.management"
            @change="handleManagementChange"
          >
            <el-checkbox
              v-for="name in managementData"
              :key="name"
              :label="name"
              >{{ name }}</el-checkbox
            >
          </el-checkbox-group>
          <el-checkbox
            v-model="permissions.admin"
            class="el-checkbox__admin-access"
            >Admin (Full Access)</el-checkbox
          >
        </div>
      </div>
      <div class="info-section-wrapper">
        <span class="info__text">The user becomes a </span
        ><el-link type="primary" :underline="false">Power User </el-link
        ><span class="info__text">
          if at least ONE of the following roles is selected: Approve, View
          only, Configuration, Suppliers and Items, Budgets, Warehouse
          manager.</span
        >
      </div>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template #title>
        <div class="el-collapse-header">Precoro Development</div>
        <div class="el-collapse-items-selected">Create, Approve</div>
      </template>
      <div>No, not today -_-</div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template #title>
        <div class="el-collapse-header">Procurement</div>
        <div class="el-collapse-items-selected">Admin (Full Access)</div>
      </template>
      <div>Hi again ^-^</div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss">
@import '@/styles/collapse_form_preset.scss';

.content-wrapper {
  display: flex;
}
.el-collapse-item__wrap {
  overflow: visible;
}

.el-table .el-table__header,
.el-checklist .el-checkbox__header {
  font-size: 16px;
  height: 30px;
  vertical-align: top;
}

.el-checklist .el-checkbox__header {
  color: var(--color-text-table-header);
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    margin: -5px 0 0 4px;
    background: url('@/assets/icons/icon-info.svg') no-repeat center;
    width: 24px;
    height: 24px;
    opacity: 0.6;
  }
}

.el-table {
  line-height: 12px;
  width: 500px;
  flex-shrink: 0;
  border-spacing: 0;
  .el-table__header {
    .el-row {
      .el-cell {
        color: var(--color-text-table-header);
      }
    }
  }
  .el-table__header,
  .el-table__body {
    .el-row {
      &:first-child {
        .el__bold {
          font-weight: 600;
        }
      }
      .el-cell {
        padding: 0;
        text-align: center;
        &:first-child {
          text-align: initial;
        }
        &:not(:first-child) {
          width: 15%;
        }
      }
    }
  }
}
.el-checklist {
  border-left: 1px solid var(--color-border);
  margin-bottom: 8px;
  padding-left: 30px;
  line-height: 12px;
  .el-checkbox.el__bold .el-checkbox__label {
    font-weight: 600;
  }
  .el-checkbox__label {
    padding-left: 16px;
  }
  .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;
    .el-checkbox {
      flex-basis: 100%;
    }
  }
  .el-checkbox.el-checkbox__admin-access {
    margin-top: 23px;
    align-items: flex-end;
    .el-checklist .el-checkbox__header {
      color: var(--color-text-table-header);
    }
    .el-checkbox__label {
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        margin: -5px 0 0 10px;
        background: url('@/assets/icons/icon-warning.svg') no-repeat center;
        width: 24px;
        height: 24px;
      }
    }
  }
}
.info-section-wrapper {
  margin-top: 28px;
  max-width: 638px;
  line-height: 130%;
  background-color: rgba(244, 244, 255, 0.5);
  padding: 6px 6px 6px 44px;
  border-radius: 8px;
  .info__text {
    opacity: 0.5;
  }
  .el-link {
    vertical-align: initial;
    text-decoration: underline;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    left: 10px;
    background: url('@/assets/icons/icon-info.svg') no-repeat center;
    width: 24px;
    height: 24px;
    opacity: 0.4;
  }
}
</style>
