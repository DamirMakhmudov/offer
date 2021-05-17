app.component('services', {
  name: 'services',
  emits:['calculateAmount', 'backsquared'],
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
          <q-input v-model.number="amount.val" type="number" style="width:200px;float:right" dense label='Итого'/>
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
    },
    selectedprofile: {
      type: Object
    }
  },
  setup(props) {
    var
      columnsc = ref(props.columns),
      rowsc = ref(props.rows),
      squarec = ref(props.square),
      selectedc = ref(props.selected),
      filtercategoryc = ref(props.filter),
      discounto = ref(model.discount),
      amount = ref(model.amountServices),
      visibleColumns = computed(() => { return setvisiblecolumns(props.square) }),
      selectedprofilec = ref(props.selectedprofile);

    function setvisiblecolumns() {
      rowsc.value.map(row =>{
        row['price'] = Math.round(row[props.square]*(1-discounto.value.val/100));
      })
      return columnsc.value.map(col => col.name)
    };

    function myfilterMethod() {
      calculateAmount();
      let length = props.filter.length;
      return rowsc.value.filter(row => (
        props.filter.filter(i => {return (row.filter.split(', ').indexOf(i) > -1);}).length >= length
      ))
    }

    function calculateAmount(){
      let amo = 0;
      selectedc.value.val.forEach(row => {
        amo += +row.price;
      });
      amount.value.val = amo;
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

    // watchEffect(() => {
    //   console.log('watchEffect', discounto.value.val);
    //   //  console.log('props', props.filter);
    //   //  myfilterMethod()
    //   // selectedc = props.selected
    //   // console.log('watchEffect', discounto.val);
    // })

    // var visibleColumns = ref(computed(() => { return setvisiblecolumns(props.square) }));
    // var visibleColumns = ref(columnsc.value.map(col => col.name));
    watch(rowsc.value, (val) => {
      calculateAmount();
    })

    watch(selectedprofilec.value, (val) => {
      let key = val.val.value;
      selectedc.value.val = rowsc.value.filter(row =>{
        return row[key] == true
      });
    })

    // watch(discounto.value, () => {
    // let priceColumnPosition = columnsc.value.filter((col, idx) =>{return /price/.test(col.name)}).map(col => col.name);
    // rowsc.value.forEach(row =>{
    //   priceColumnPosition.forEach(price =>{
    //     row[price] = Math.round(row[price]*(1-discounto.value.val/100)); 
    //   })
    // })

    // let filteredRows = rowsc.value.map(row => (
    //   props.filter.filter(function(i) {return (row.filter.split(', ').indexOf(i) > -1);}).length > 0
    // ));
    // console.log('filteredRows', filteredRows);
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
      amount,
      selectedprofilec,
      myfilterMethod,
      calculateAmount,
      addRow,
      setvisiblecolumns,
      getSelectedString
    }
  },

  /*
  watch:(discount, (discount, prediscount) => {
    console.log(discount);
    console.log(prediscount);
  }),
  */

  /*
  watch:{
    square(val){
      console.log(`square was changed to ${val}`)
      sqr = val
      console.log(sqr)
      // visibleColumns = setvisiblecolumns()
    },
    filter(val){
      console.log(val);
    }
  },
  */
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