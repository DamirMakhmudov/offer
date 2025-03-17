const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { useQuasar, Loading, QSpinnerGears } = Quasar;

var vueObject = {
  name: 'root',
  setup() {
    return {
      selectedprofile: ref(model.selectedProfile),
      square: ref(model.square),
      columns: ref(view.columns),
      rows: ref(model.rows),
      filterSquare: ref(view.filterSquare),
      categories: ref(model.categories),
      selected: ref(model.selected),
      
      columnspayment: ref(view.columnsPayment),
      rowspayment: ref(model.rowsPayment),
      payments: ref(model.payments),
      selectedpayment: ref(model.selectedPayment),

      columnsdops: ref(view.columnsDops),
      rowsdops: ref(model.rowsDops),
      dops: ref(model.dops),
      selecteddops: ref(model.selectedDops),

      columnsadditional: ref(view.columnsAdditional),
      rowsadditional: ref(model.rowsAdditional),
      selectedadditional: ref(model.selectedAdditional),
      columnsdocuments: ref(view.columnsDocuments),
      rowsdocuments: ref(model.rowsDocuments),
      selecteddocuments: ref(model.selectedDocuments),
    }
  },

  /*
  mounted: function () {
    console.log(`${this.$options.name} component is mounted`);
  }
  */
}

const app = Vue.createApp(vueObject)

app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ },
    loading: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);