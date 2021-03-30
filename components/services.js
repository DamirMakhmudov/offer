app.component('services', {
  name: 'services',
  template:
  /* html */
  `
  <template v-if='preview'>
    <p>category: {{filterarrcategoryc}}</p>
    <p>props category: {{filterarrcategory}}</p>
  </template>
    <p>{{selectedp}}</p>
    <p>{{selectedc}}</p>
    <hr>
    <p>{{rrr}}</p>

  
  <div class="q-pa-md">
    <q-table 
      :rows="rowsc"
      :columns="columnsc"
      title="Услуги"
      :rows-per-page-options="[20]"
      row-key="id"
      wrap-cells
      no-data-label="Нет данных"
      no-results-label = "Нет данных"
     
      :filter = "filter"
      :filter-method="myfilterMethod"
      :visible-columns="visibleColumns"

      selection="multiple"
      v-model:selected="selectedc"
      @selection = "val => onSelect(val)"
    >
    <template v-slot:top>
      <q-btn color="primary" label="Add row" @click="addRow"/>
    </template>

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
  data() {
    return {
      // :filter = "filter"
      // :filter-method="myfilterMethod"
      // :visible-columns="visibleColumns"

      // selection="multiple"
      // v-model:selected="selectedc"
      // :selected.sync="selected"


      // <q-td>
      //   <q-checkbox v-model="props.selected" />
      // </q-td>
    }
  },
  props: {
    square: {
      type: String
    },
    columns: {
      type: Array
    },
    rows: {
      type: Array
    },
    filterarrcategory: {
      type: Array
    },
    selectedp: {
      type: Array
    }
  },
  setup(props) {
    var columnsc = ref(props.columns);
    var rowsc = ref(props.rows);

    function setvisiblecolumns(sq) {
      console.log('setvisiblecolumns')
      var cols = columnsc.value.map(row => row.name).filter(row => row.indexOf('price'));
      cols.push(sq)
      return cols
    };

    function myfilterMethod() {
      console.log('filterarrcategoryc', props.filterarrcategory);
      let rrr =  rowsc.value.filter(row => (
        // row.iron == '1%' || row.iron == '7%'
        // row.time >= '0'
        props.filterarrcategory.filter(function(i) {return (row.filter.split(', ').indexOf(i) > -1);}).length > 0
      ))
      console.log('rrr', rrr);
      return rrr
    }

    function addRow() {
      var rr = { id: 1, name: '', price1: 0, price2: 0, price3: 0, price4: 0, time: 0, filter: '', document: '', count: '' };
      selectedc.value.push(rr);
    }

    function getSelectedString(){
      return 'many'
    }

    var rrr = ref([]);
    function onSelect(evt) {
      console.log(evt.rows);
      rrr.value.push(evt.rows[0])
      // this.updateSelectedTableData(this.selected);
      // console.log(this.selected);
    }

    const squarec = ref(props.square);
    var selectedc = ref(mmm.selectedo);

    var filterarrcategoryc = ref(props.filterarrcategory);

    watchEffect(() => {
      //  console.log('props', props.filterarrcategory)
      //  myfilterMethod()
      // selectedc = props.selected
    })

    return {
      rrr,
      preview: preview,
      filter: ref({ value: 'none' }),
      filterarrcategoryc,
      visibleColumns: computed(() => { return setvisiblecolumns(props.square) }),
      setvisiblecolumns,
      columnsc,
      rowsc,
      myfilterMethod,
      addRow,
      squarec,
      selectedc,
      getSelectedString,
      onSelect
      // pagination,
    }
  },
  // watch:{
  //   // square(val){
  //   //   console.log(`square was changed to ${val}`)
  //   //   sqr = val
  //   //   console.log(sqr)
  //   //   // visibleColumns = setvisiblecolumns()
  //   // },
  //   filterarrcategory(val){
  //     console.log(val);
  //   }
  // },
  mounted: function () {
    console.log(`${this.$options.name} component is mounted`);
  }
  // <q-td key="desc" :props="props">
  //   {{ props.row.name }}
  //   <q-popup-edit v-model="props.row.name" title="Edit the Name" auto-save v-slot="scope">
  //     <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
  //   </q-popup-edit>
  // </q-td>

  // <template v-slot:body-selection="scope"> <q-toggle v-model="scope.selected" /> </template>
});