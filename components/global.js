
const { createApp, ref, reactive, computed, watch, onMounted, watchEffect } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['categories', 'square', 'services'],
  methods: {
    keepfilter(val) {
      console.log('keepfilter was run')
      this.filters = val
    },
    megaclick() {
      this.rowsg[0].name = '123abx';
      console.log('here');
    }
  },
  setup() {
    return {
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

      columnsadditional: ref(view.columnsAdditional),
      rowsadditional: ref(model.rowsAdditional),
      selectedadditional: ref(model.selectedAdditional),
    }
  },
  mounted: function () {
    // console.log(`${this.$options.name} component is mounted`);
  }
}

const app = Vue.createApp(AppObject)

app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);