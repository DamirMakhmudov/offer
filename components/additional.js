app.component('additional', {
  name: 'additional',
  template:
  /*html*/
  `
  <div class="q-pa-md">

    <q-table
      :rows="rowsc"
      :columns="columnsc"
      title="Дополнительные услуги"
      :rows-per-page-options="[20]"
      row-key="id"
      wrap-cells
      no-data-label="Нет данных"
      no-results-label = "Нет данных"
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
    <q-btn color="primary" label="Добавить строку" @click="addRow"/>
  </div>
  `
  ,
  props:{
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
      selectedc= ref(props.selected);

    function addRow() {
      let arr = {};
      columnsc.value.forEach(col  =>(
        arr[col.name] = ''
      ));
      rowsc.value.push(arr);
    }

    function getSelectedString(){
      return `Выбрано строк: ${selectedc.value.val.length}`
    }

    return {
      columnsc,
      rowsc,
      selectedc,
      getSelectedString,
      addRow
    } 
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
// :filter = "filter"
// :filter-method="myfilterMethod"