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
      :selected-rows-label="getSelectedString"
      v-model:selected="selectedc.val"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.selected"></q-checkbox>
          </q-td>
          <q-td v-for='col in columnsc' :key="col.name" :props="props">
            {{ props.row[col.name] }}
            <q-popup-edit v-model="props.row[col.name]" :title="col.label" auto-save v-slot="scope" @save="syncselected(props.row)">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" type="textarea"></q-input>
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>

    </q-table>
    <q-btn color="primary" label="Добавить строку" @click="addRow"></q-btn>
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

    function syncselected(rowo){
      let idx = selectedc.value.val.findIndex(row => row.id === rowo.id);
      if(idx!= -1){
        selectedc.value.val[idx] = rowo
      }
    }

    return {
      columnsc,
      rowsc,
      selectedc,
      getSelectedString,
      addRow,
      syncselected
    } 
  },

})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
// :filter = "filter"
// :filter-method="myfilterMethod"
// v-model:selected="selectedc.val"


/* <template v-slot:body="props">
<q-tr :props="props">
  <q-td>
    <q-checkbox v-model="props.selected"></q-checkbox>
  </q-td>
  <q-td v-for='col in columnsc' :key="col.name" :props="props">
    {{ props.row[col.name] }}
    <q-popup-edit v-model="props.row[col.name]" :title="col.label" auto-save v-slot="scope">
      <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" type="textarea"></q-input>
    </q-popup-edit>
  </q-td>
</q-tr>
</template> */