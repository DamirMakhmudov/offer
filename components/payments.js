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
    :rows="rowsc"
    :columns="columnsc"
    title="Порядок оплаты"
    :rows-per-page-options="[20]"
    row-key="id"
    wrap-cells
    no-data-label="Нет данных"
    no-results-label = "Нет данных"

    :filter = "filter"
    :filter-method="myfilterMethod"

    selection="multiple"
    v-model:selected="selectedc.val"
    :selected-rows-label="getSelectedString"
  >

    <template v-slot:body="props">
      <q-tr :props="props">

        <q-td>
          <q-checkbox v-model="props.selected" />
        </q-td>

        <q-td v-for='col in columnsc' :key="col.name" :props="props">
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
    filter: {
      type: Object
    },
    columns: {
      type: Array
    },
    rows: {
      type: Array
    },
    selected:{
      type: Object
    }
  },
  setup(props) {
    var columnsc = ref(props.columns)
    var rowsc = ref(props.rows)
    var selectedc= ref(props.selected)
    var paymentsc = ref(props.filter)

    function getSelectedString(){
      return `Выбрано строк: ${selectedc.value.val.length}`
    }

    function myfilterMethod() {
      return rowsc.value.filter(row => (
        paymentsc.value.val.includes(row.filter)
      ))
    }

    return {
      columnsc,
      rowsc,
      filterPaymentsc: view.filterPayments,
      paymentsc,
      selectedc,
      filter: ref({ value: 'none' }),
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