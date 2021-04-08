app.component('additional', {
  name: 'additional',
  template:
  /*html*/
  `
    <div class="q-pa-md">

      <q-table
        :rows="rowspaymentc"
        :columns="columnspaymentc"
        title="Дополнительные услуги"
        :rows-per-page-options="[20]"
        row-key="id"
        wrap-cells
        no-data-label="Нет данных"
        no-results-label = "Нет данных"
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
    <q-btn color="primary" label="Добавить строку" @click="addRow"/>
  </div>
  `
  ,
  props:{
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

    function addRow() {
      let arr = {};
      columnspaymentc.value.forEach(col  =>(
        arr[col.name] = ''
      ));
      rowspaymentc.value.push(arr);
    }

    function getSelectedString(){
      return `Выбрано строк: ${selectedpaymentc.value.val.length}`
    }

    return {
      columnspaymentc,
      rowspaymentc,
      selectedpaymentc,
      getSelectedString,
      addRow
    } 
  },
  mounted: function(){
    // console.log(`${this.$options.name} component is mounted`);
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
// :filter = "filter"
// :filter-method="myfilterMethod"