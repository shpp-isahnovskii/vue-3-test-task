<script setup>
import { ref, computed, reactive } from 'vue';
import { useInviteFormStore } from '@/stores/inviteForm';

const store = useInviteFormStore();

const locationsValidateForm = ref(store.locationInfoRef);

const locations = [
  {
    value: 'usa',
    label: 'Main Precoro US',
  },
  {
    value: 'ua',
    label: 'Main Precoro UA',
  },
  {
    value: 'pl',
    label: 'Main Precoro PL',
  },
];

const checkAll = ref(false);
const isIndeterminate = ref(true);
const offices = [
  'Berlin',
  'Poland Office',
  'Venice Office',
  'Mexico',
  'USA Office',
  'Ukraine Kiyv Lukivska 7 Main Office',
  'Canada',
];

const handleCheckAllChange = (val) => {
  locationsValidateForm.value.checkedOffices = val ? offices : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === offices.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < offices.length;
};

const validationRules = reactive({
  mainLocation: [
    {
      required: true,
      message: 'Please check your main location',
      trigger: 'change',
    },
  ],
});

const selectedCount = computed(
  () => locationsValidateForm.value.checkedOffices.length
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
      <el-form
        label-position="top"
        :model="locationsValidateForm"
        :rules="validationRules"
      >
        <el-form-item label="Main Location" prop="mainLocation">
          <el-select
            v-model="locationsValidateForm.mainLocation"
            placeholder="Your base location"
            size="large"
          >
            <el-option
              v-for="location in locations"
              :key="location.value"
              :value="location.value"
              :label="location.label"
            />
          </el-select>
        </el-form-item>
        <el-checkbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
          >Select All Locations
        </el-checkbox>
        <el-form-item label="Available locations" class="locations-wrapper">
          <el-checkbox-group
            v-model="locationsValidateForm.checkedOffices"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox
              v-for="office in offices"
              :key="office"
              :label="office"
            />
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item name="2">
      <template #title>
        <div class="el-collapse-header">Precoro Development</div>
        <div class="el-collapse-items-selected">5 selected</div>
      </template>
      <div>Not disabled but Empty :)</div>
    </el-collapse-item>
    <el-collapse-item name="3">
      <template #title>
        <div class="el-collapse-header">Procurement</div>
        <div class="el-collapse-items-selected">2 selected</div>
      </template>
      <div>Hi ;)</div>
    </el-collapse-item>
  </el-collapse>
</template>

<style lang="scss" scoped>
@import '@/styles/invite_form_preset.scss';
@import '@/styles/collapse_form_preset.scss';
.el-form {
  :deep(.el-form-item) {
    margin-bottom: 0;
    &.locations-wrapper {
      .el-form-item__label {
        font-weight: 400;
        opacity: 0.6;
        font-size: 14px;
      }
      margin-bottom: 20px;
    }
  }
}
.el-form .el-form-item {
  width: 100%;
}
.el-checkbox-group {
  display: grid;
  grid-template-columns: 160px 1fr;
}
</style>
