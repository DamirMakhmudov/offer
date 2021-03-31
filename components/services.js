app.component('services', {
  name: 'services',
  emits:['backsquared'],
  template:
  /*html*/
  `
  <template v-if='preview'>
    <p>category: {{filterarrcategoryc}}</p>
    <p>props category: {{filterarrcategory}}</p>
    <p>{{selectedp}}</p>
    <p>{{selectedc}}</p>
  </template>
  
  <div class="q-pa-md">
    <q-table 
      :rows="rowsc"
      :columns="columnsc"
      title="Услуги"
      :rows-per-page-options="[20]"
      row-key="name"
      wrap-cells
      no-data-label="Нет данных"
      no-results-label = "Нет данных"
     
      :filter = "filter"
      :filter-method="myfilterMethod"
      :visible-columns="visibleColumns"

      selection="multiple"
      v-model:selected="selectedc.val"
      :selected-rows-label="getSelectedString"
    >

      <template v-slot:top>
        <q-btn color="primary" label="Добавить строку" @click="addRow"/>
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
      type: Object
    }
  },
  setup(props) {
    var columnsc = ref(props.columns);
    var rowsc = ref(props.rows);
    var squarec = ref(props.square);
    var selectedc = ref(props.selectedp);
    var filterarrcategoryc = ref(props.filterarrcategory);

    function setvisiblecolumns(sq) {
      console.log('setvisiblecolumns was run')
      var cols = columnsc.value.map(row => row.name).filter(row => row.indexOf('price'));
      cols.push(sq)
      return cols
    };

    function myfilterMethod() {
      console.log('filterarrcategoryc', props.filterarrcategory);
      let filtered = rowsc.value.filter(row => (
        props.filterarrcategory.filter(function(i) {return (row.filter.split(', ').indexOf(i) > -1);}).length > 0
      ))
      console.log('filtered', filtered);
      return filtered
    }

    function addRow() {
      let arr = {};
      columnsc.value.forEach(col  =>(
        arr[col.name] = ''
      ));
      arr['filter'] = props.filterarrcategory.join(', ');
      arr['id'] = rowsc.value.length + 1
      // var rr = { id: rowsc.value.length + 1, name: '', price1: 0, price2: 0, price3: 0, price4: 0, time: 0, filter: props.filterarrcategory.join(', '), document: '', count: '' };
      // selectedc.val.push(rr);
      rowsc.value.push(arr);
    }

    function getSelectedString(){
      return `Выбрано строк: ${selectedc.value.val.length}`
    }

    function onSelect(evt) {
      console.log(evt.rows);
      // console.log(this.selected);
    }

    // watchEffect(() => {
      //  console.log('props', props.filterarrcategory)
      //  myfilterMethod()
      // selectedc = props.selected
    // })

    return {
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
      onSelect,
      getSelectedString
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
    // console.log(`${this.$options.name} component is mounted`);
  }
});

//  <q-td key="desc" :props="props">
//     {{ props.row.name }}
//     <q-popup-edit v-model="props.row.name" title="Edit the Name" auto-save v-slot="scope">
//       <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
//     </q-popup-edit>
//   </q-td>

// <template v-slot:body-selection="scope"> <q-toggle v-model="scope.selected" /> </template>

// @selection="val => { $emit('backsquared', selectedc) }"

// :filter = "filter"
// :filter-method="myfilterMethod"
// :visible-columns="visibleColumns"

// selection="multiple"
// v-model:selected="selectedc"
// :selected.sync="selected"


// <q-td>
//   <q-checkbox v-model="props.selected" />
// </q-td>