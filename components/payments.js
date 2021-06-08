app.component('payments', {
  name: 'payments',
  template:
  /*html*/
  `
  {{selectedc}}
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="paymentsc.val"
        :options="filterPaymentsc"
        color="primary"
        type="checkbox"
        inline
        dark
      >
      </q-option-group>
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

    <template v-slot:top='props'>
      <div style="width:100%;float:right" :props='props'>
        <span style='font:14pt arial'>Порядок оплаты</span>
        <q-input v-model.number="amount.val" type="number" style="width:200px;float:right" dense label='Итого'></q-input>
      </div>
    </template>

    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td>
          <q-checkbox v-model="props.selected"></q-checkbox>
        </q-td>
        <q-td v-for='col in columnsc' :key="col.name" :props="props">
          {{ props.row[col.name] }}
          <q-popup-edit v-model="props.row[col.name]" :title="col.label" buttons label-set="Сохранить" label-cancel="Отменить" v-slot="scope" @save="syncselected(props.row)">
            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" type="textarea"></q-input>
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
    var
      columnsc = ref(props.columns),
      rowsc = ref(props.rows),
      selectedc= ref(props.selected),
      paymentsc = ref(props.filter),
      amount = ref(model.amountPayments);

    function getSelectedString(){
      return `Выбрано строк: ${selectedc.value.val.length}`
    }

    function myfilterMethod() {
      calculateAmount();
      return rowsc.value.filter(row => (
        paymentsc.value.val.includes(row.filter)
      ))
    }

    function calculateAmount(){
      let amo = 0;
      selectedc.value.val.forEach(row => {
        amo += +row.price;
      });
      amount.value.val = amo;
    }
    
    watch(selectedc.value, (val) => {
      selectedc.value.val.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    })

    function syncselected(rowo){
      let idx = selectedc.value.val.findIndex(row => row.id === rowo.id);
      if(idx!= -1){
        selectedc.value.val[idx] = rowo
      }
    }

    return {
      columnsc,
      rowsc,
      filterPaymentsc: view.filterPayments,
      paymentsc,
      selectedc,
      filter: ref({ value: 'none' }),
      amount,
      getSelectedString,
      myfilterMethod,
      syncselected
    } 
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
// :filter = "filter"
// :filter-method="myfilterMethod"