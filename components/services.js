app.component('services', {
  name: 'services',
  emits:['backsquared'],
  template:
  /*html*/
  `
  <div class="q-pa-md">
    <q-table
      :rows = "rowsc"
      :columns = "columnsc"
      title = "Услуги"
      :rows-per-page-options = "[20]"
      row-key = "id"
      wrap-cells
      no-data-label = "Нет данных"
      no-results-label = "Нет данных"
     
      :filter = "filter"
      :filter-method="myfilterMethod"
      :visible-columns="visibleColumns"

      selection="multiple"
      v-model:selected="selectedc.val"
      :selected-rows-label="getSelectedString"
    >

      <template v-slot:top='props'>
        <div style="width:100%;float:right" :props='props'>
          <span style='font:14pt arial'>Услуги</span>
          <q-input v-model.number="discounto.val" type="number" style="width:200px;float:right" dense label='Скидка,%'/>
        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.selected"/>
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
    filter: {
      type: Array
    },
    selected: {
      type: Object
    }
  },
  setup(props) {
    var columnsc = ref(props.columns);
    var rowsc = ref(props.rows);
    var squarec = ref(props.square);
    var selectedc = ref(props.selected);
    var filtercategoryc = ref(props.filter)

    function setvisiblecolumns(sq) {
      // console.log('setvisiblecolumns was run');
      // var cols = columnsc.value.map(row => row.name).filter(row => row.indexOf('price'));
      // cols.push(sq);
      // return cols
      rowsc.value.map(row =>{
        row['price'] = Math.round(row[props.square]*(1-discounto.value.val/100));
      })
      return columnsc.value.map(col => col.name)
    };

    function myfilterMethod() {
      let filteredRows = rowsc.value.filter(row => (
        props.filter.filter(function(i) {return (row.filter.split(', ').indexOf(i) > -1);}).length > 0
      ));
      return filteredRows
    }

    function addRow() {
      let arr = {};
      columnsc.value.forEach(col  =>(
        arr[col.name] = ''
      ));
      arr['filter'] = props.filter.join(', ');
      arr['id'] = rowsc.value.length + 1
      rowsc.value.push(arr);
    }

    function getSelectedString(){
      return `Выбрано строк: ${selectedc.value.val.length}`
    }

    var discounto = ref(model.discount);
    
    // watchEffect(() => {
    //   console.log('watchEffect', props.square)
    //   //  console.log('props', props.filter);
    //   //  myfilterMethod()
    //   // selectedc = props.selected
    //   // console.log('watchEffect', discounto.val);
    // })

    var visibleColumns = computed(() => { return setvisiblecolumns(props.square) });
    // var visibleColumns = ref(computed(() => { return setvisiblecolumns(props.square) }));
    // var visibleColumns = ref(columnsc.value.map(col => col.name));

    // watch(discounto.value, () => {
    //   // let priceColumnPosition = columnsc.value.filter((col, idx) =>{return /price/.test(col.name)}).map(col => col.name);
    //   // rowsc.value.forEach(row =>{
    //   //   priceColumnPosition.forEach(price =>{
    //   //     row[price] = Math.round(row[price]*(1-discounto.value.val/100)); 
    //   //   })
    //   // })

    //   rowsc.value.map(row =>{
    //     row['price'] = Math.round(row[props.square]*(1-discounto.value.val/100));
    //   })

    //   // let filteredRows = rowsc.value.map(row => (
    //     // props.filter.filter(function(i) {return (row.filter.split(', ').indexOf(i) > -1);}).length > 0
    //   // ));
    //   // console.log('filteredRows', filteredRows);
    // })

    // watch(() => props.square,()=>{
      // console.log(props.square);
    //   rowsc.value.map(row =>{
    //     row['price'] = Math.round(row[props.square]*(1-discounto.value.val/100));
    //   })
    // })

    return {
      filter: ref({ value: 'none' }),
      visibleColumns,
      squarec,
      columnsc,
      rowsc,
      selectedc,
      discounto,
      filtercategoryc,
      myfilterMethod,
      addRow,
      setvisiblecolumns,
      getSelectedString
    }
  },

  // watch:(discount, (discount, prediscount) => {
  //   console.log(discount);
  //   console.log(prediscount);
  // }),

  // watch:{
    // square(val){
    //   console.log(`square was changed to ${val}`)
    //   sqr = val
    //   console.log(sqr)
    //   // visibleColumns = setvisiblecolumns()
    // },
    // filter(val){
    //   console.log(val);
    // }
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