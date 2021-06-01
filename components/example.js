app.component('example', {
  name: 'example',
  template:
  /*html*/
  `
  <!--<q-btn color="primary" icon="smile" label="test" @click="$emit('@selection', rowsc[0])"></q-btn>-->
  {{rowsc}}
  <hr>
  {{selectedc.val}}
  <!--<q-btn color="primary" icon="smile" label="test" @click="testo()"></q-btn>-->

  <div class="q-pa-md">
    <q-table
      :rows="rowsc"
      :columns="columnsc"
      title="Дополнительные услуги"
      :rows-per-page-options="[100]"
      wrap-cells
      no-data-label="Нет данных"
      no-results-label = "Нет данных"
      selection="multiple"
      row-key="id"
      @selection = "val => testselection(val)"
      v-model:selected="selectedc.val"
    >

    <template v-slot:body="props">
      <q-tr :props="props">

        <q-td>
          <q-checkbox v-model="props.selected"></q-checkbox>
        </q-td>

        <q-td v-for='col in columnsc' :key="col.name" :props="props">
          {{ props.row[col.name] }}
          <q-popup-edit v-model="props.row[col.name]" :title="col.label" auto-save v-slot="scope" @save="(value, initialvalue) =>testo(value, props.row, col.name)">
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

    function testo(value, rowo, col){
      let idx = selectedc.value.val.findIndex(row => row.id === rowo.id);
      if(idx!= -1){
        selectedc.value.val[idx] = rowo
      }
    }
    
    function testselection(val){
      console.log(val);
    }

    function addRow() {
      let arr = {};
      columnsc.value.forEach(col  =>(
        arr[col.name] = ''
      ));
      rowsc.value.push(arr);
    }

    return {
      checked: ref(true),
      columnsc,
      rowsc,
      selectedc,
      addRow,
      testselection,
      testo
    } 
  }
})


function findo(element, index, array, id){
  if(element.id == id){
    return index
  }else{
    return'no'
  }
}

// @selection = "val => { $emit('testselection', val) }"

/* <template v-slot:body="props">
<q-tr :props="props">

  <q-td key>
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

// v-model:selected="selectedc.val"