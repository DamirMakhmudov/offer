app.component('services',{
  name: 'services',
  template:
  /* html */
  `
  <p>services: {{square}}</p>
  <p>services: {{sqr}}</p>
  <input v-model='sqr'>
  
  <button @click='setvisiblecolumns'>click</button>
  <div class="q-pa-md">
    <q-table 
      :rows="rows"
      :columns="columnss"
      title="Услуги"
      :rows-per-page-options="[5]"
      row-key="name"
      wrap-cells
      :filter = "filter"
      :filter-method="myfilterMethod"
      :visible-columns="visibleColumns"
    >

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
      rows: rows,
      filter: {value: 'none'},
      // sq: squareG
      // visibleColumns: 
      // setvisiblecolumns: columns.map(row => row.name)
      // visibleColumns: setvisiblecolumns
      // :visible-columns="visibleColumns"
    }
  },
  methods:{
    myfilterMethod () {
      return this.rows.filter(row => (
        // row.iron == '1%' || row.iron == '7%'
        row.name != 'd'
      ))
    },
  },
  props:{
    square: {
      type: String
    }
  },
  setup(props) {
    var tst = reactive(testObject);
    // var sq = ref(squareG);
    // var columnss = columns;
    const capacity = ref(4);
    // var columns = columns,
    // var visibleColumns = ref(this.columns.map(row => row.name));
    function setvisiblecolumns(){
      // visibleColumns.value = ['name', 'price1']
      // capacity.value++
      // console.log(sq.value.value);
      console.log(visibleColumns.value);
      // console.log(visibleColumns.indexOf(sq.value.value));
      // console.log(visibleColumns.splice(visibleColumns.indexOf(sq.value.value),1));
      visibleColumns.value.splice(visibleColumns.value.indexOf(sq.value.value),1);
    };
    var columnss = ref(columns);
    var visibleColumns = ref(columnss.value.map(row => row.name));
    function cloco(){
      tst.value = 'Marat';
    };
    // var sqr = ref(props.sq);
    // watch(() => {
    //   console.log(`name is: ` + props.sq)
    // })
    return {
      // visibleColumns: ref(columnss.value.map(row => row.name)),
      sqr: ref(props.square),
      // sqr,
      cloco,
      tst,
      setvisiblecolumns,
      capacity,
      columnss,
      visibleColumns
      // visibleColumns: ref(setvisiblecolumns)
      // pagination,
    }
  },
  // watch:{
  //   square(val){
  //     console.log(val)
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

  // <tdd :descc='desc' :propss='props'></tdd>

});