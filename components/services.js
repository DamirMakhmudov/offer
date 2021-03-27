app.component('services',{
  name: 'services',
  template:
  /* html */
  `
  <template v-if='preview'>

  </template>
  
  <div class="q-pa-md">
    <q-table 
      :rows="rowss"
      :columns="columnss"
      title="Услуги"
      :rows-per-page-options="[10]"
      row-key="name"
      wrap-cells
      no-data-label="Нет данных"
      :visible-columns="visibleColumns"
      :filter = "filter"
      :filter-method="myfilterMethod"
    >
    <template v-slot:top>
      <q-btn color="primary" label="Add row" @click="addRow"/>
    </template>

    <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for='col in columnss' :key="col.name" :props="props">
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
  data(){
    return{
      // columnss: columns,
      // rows: rows,
      // filter: {value: 'none'},
      // sq: squareG
      // setvisiblecolumns: columns.map(row => row.name)

      // :visible-columns="visibleColumns"
      // :filter = "filter"
      // :filter-method="myfilterMethod"
    }
  },
  props:{
    square: {
      type: String
    },
    columnss: {
      type: Array
    },
    rowss: {
      type: Array
    }
  },
  setup(props) {
    function setvisiblecolumns(sq){
      var cols = columnss.value.map(row => row.name).filter(row => row.indexOf('price'));
      cols.push(sq)
      return cols
    };
    var columnss = ref(props.columnss);
    var rowss = ref(props.rowss);
    function myfilterMethod () {
      return props.rowss.filter(row => (
        // row.iron == '1%' || row.iron == '7%'
        row.time >= '0'
      ))
    }
    var sqr = ref(props.square);
    function addRow(){
      var rr = {id:1,name:'',price1:0,price2:0,price3:0,price4:0,time:0,filter:'',document:'',count:''};
      rowss.value.push(rr);
    }
    return {
      filter: ref({value: 'none'}),
      visibleColumns: computed(() => { return setvisiblecolumns(props.square)}),
      // sqr: ref(props.square),
      setvisiblecolumns,
      columnss,
      rowss,
      myfilterMethod,
      preview: preview,
      sqr,
      addRow
      // pagination,
    }
  },
  // watch:{
  //   square(val){
  //     console.log(`square was changed to ${val}`)
  //     // visibleColumns = setvisiblecolumns()
  //   }
  // },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  }
  // <q-td key="desc" :props="props">
  //   {{ props.row.name }}
  //   <q-popup-edit v-model="props.row.name" title="Edit the Name" auto-save v-slot="scope">
  //     <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
  //   </q-popup-edit>
  // </q-td>
});