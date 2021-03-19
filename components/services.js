app.component('services',{
  name: 'services',
  template:
  /* html */
  `
  <div>{{rowss[0]}}</div>
  <hr>
  <div class="q-pa-md">
    <q-table 
      :rows="rowss"
      :columns="columnss"
      title="Услуги"
      :rows-per-page-options="[10]"
      row-key="name"
      wrap-cells
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
      // rows: rowss,
      // columns: columnss,
      filter: {value: 'none'},
      // visibleColumns: columns.map(row => row.name)
      // visibleColumns: setvisiblecolumns

      // :visible-columns="setvisiblecolumns"
      // :filter = "filter"
      // :filter-method="myfilterMethod"

    }
  },
  methods:{
    myfilterMethod () {
      return this.rows.filter(row => (
        // row.iron == '1%' || row.iron == '7%'
        row.name != 'd'
      ))
    }
  },
  computed: {
    // setvisiblecolumns(){
    //   return this.columns.map(row => row.name)
    // }
  },
  props: {
    columnss: {
      type: Array
    },
    rowss: {
      type: Array
    }
  },
  setup (props) {
    // var columns = columns,
    // var visibleColumns = ref(this.columns.map(row => row.name));
    // var setvisiblecolumns = function(){
    //   return props.columns.map(row => row.name)
    // }
    return {
      // columnsd,
      // rowsd
      // setvisiblecolumns
      // pagination
      // visibleColumns: ref(setvisiblecolumns)
      // rows: ref(rows),
      // columns
    }
  },
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