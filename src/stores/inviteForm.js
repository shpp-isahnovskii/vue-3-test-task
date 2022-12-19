import { defineStore } from 'pinia';

export const useInviteFormStore = defineStore('inviteForm', {
  state: () => ({
    toAllCompanies: true,
    /* Page 1 */
    generalInfoRef: {
      name: 'Jon',
      lastName: 'Doe',
      email: 'jondoe@gmail.com',
      phone: '+38 044 111 22 33',
      position: 'Developer',
      companies: [],
    },
    /* Page 2 */
    locationInfoRef: {
      mainLocation: 'usa',
      checkedOffices: ['Berlin', 'Venice Office', 'USA Office'],
    },
    /* Page 3 */
    documentsInfoRef: {
      classes: [],
      departments: [],
      dcf: [],
    },
    /* Page 4 */
    permissions: {
      permissions: [],
    },
  }),
  getters: {
    submitData: (state) => ({
      toAllCompanies: state.toAllCompanies,
      ...state.generalInfoRef,
      ...state.locationInfoRef,
      ...state.documentsInfoRef,
      ...state.permissions,
    }),
  },
  actions: {
    submitForm() {
      console.log('good job!');
      console.log(this.submitData);
      this.$reset();
    },
  },
});
