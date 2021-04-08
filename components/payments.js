app.component('payments', {
  name: 'payments',
  template:
  /*html*/
  `
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="paymentsc.val"
        :options="filterPaymentsc"
        color="primary"
        type="checkbox"
        inline
        dark
      />
    </div>
  </div>

  <div class="q-pa-md">
  <q-table 
    :rows="rowspaymentc"
    :columns="columnspaymentc"
    title="Порядок оплаты"
    :rows-per-page-options="[20]"
    row-key="id"
    wrap-cells
    no-data-label="Нет данных"
    no-results-label = "Нет данных"

    :filter = "filter"
    :filter-method="myfilterMethod"

    selection="multiple"
    v-model:selected="selectedpaymentc.val"
    :selected-rows-label="getSelectedString"
  >

    <template v-slot:body="props">
      <q-tr :props="props">

        <q-td>
          <q-checkbox v-model="props.selected" />
        </q-td>

        <q-td v-for='col in columnspaymentc' :key="col.name" :props="props">
          {{ props.row[col.name] }}
          <q-popup-edit v-model="props.row[col.name]" :title="col.label" auto-save v-slot="scope">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" type="textarea"/>
          </q-popup-edit>
        </q-td>
      </q-tr>

    </template>

  </q-table>
</div>
  `
  ,
  props:{
    filterpayment: {
      type: Object
    },
    columnspayment: {
      type: Array
    },
    rowspayment: {
      type: Array
    },
    selectedpayment:{
      type: Object
    }
  },
  setup(props) {
    var columnspaymentc = ref(props.columnspayment)
    var rowspaymentc = ref(props.rowspayment)
    var selectedpaymentc= ref(props.selectedpayment)
    var paymentsc = ref(props.filterpayment)

    function getSelectedString(){
      return `Выбрано строк: ${selectedpaymentc.value.val.length}`
    }

    function myfilterMethod() {
      return rowspaymentc.value.filter(row => (
        paymentsc.value.val.includes(row.filter)
      ))
    }

    return {
      columnspaymentc,
      rowspaymentc,
      filter: ref({ value: 'none' }),
      filterPaymentsc: view.filterPayments,
      paymentsc,
      selectedpaymentc,
      getSelectedString,
      myfilterMethod

    } 
  },
  mounted: function(){
    // console.log(`${this.$options.name} component is mounted`);
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
// :filter = "filter"
// :filter-method="myfilterMethod"