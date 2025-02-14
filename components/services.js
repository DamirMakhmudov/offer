app.component("services", {
  name: "services",
  emits: ["calculateAmount", "backsquared"],
  template:
    /*html*/
    `
  <div class="q-pa-md">
    <q-table
      :rows = "modelc.rows"
      :columns = "columnsc"
      title = "Услуги"
      :rows-per-page-options = "[100]"
      row-key = "id"
      wrap-cells
      no-data-label = "Нет данных"
      no-results-label = "Нет данных"
      :filter = "filter"
      :filter-method="myfilterMethod"
      selection="multiple"
      v-model:selected="selectedc.val"
      :selected-rows-label="getSelectedString"
    >
      <template v-slot:top='props'>
        <div style="width:100%;" :props='props'>
          <span style='font:14pt arial'>Услуги</span>
          
          <q-toggle v-model=modelc.nds.val :label='modelc.nds.val?"Включая НДС":"Не включая НДС"' />
          
          <q-input v-model=modelc.includedPayments type="number" style="width:200px;float:right" dense label='Включенные платежи'></q-input>
          <q-input v-model=modelc.amountTime type=number style="width:200px;float:right" dense label="Сроки, рабочих дней" :readonly=false>
            <q-tooltip>Рассчитывается автоматически в конструкторе документов</q-tooltip>
          </q-input>
          <q-input v-model.number="discounto.val" type="number" style="width:200px;float:right" dense label='Скидка,%'></q-input>
          
          <q-input v-model.number="amount.val" type="number" style="width:200px;float:right" dense label='Общая сумма договора'></q-input>
          <q-input v-model.number="amountNDS.val" type="number" style="width:200px;float:right" dense label='Размер НДС'></q-input>

        </div>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.selected"></q-checkbox>
          </q-td>
          <q-td v-for='col in columnsc' :key="col.name" :props="props">
            {{ props.row[col.name] }}
            <q-popup-edit v-model="props.row[col.name]" :title="col.label" v-slot="scope" buttons label-set="Сохранить" label-cancel="Отменить" @save="syncselected(props.row)">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" type="textarea"></q-input>
            </q-popup-edit>
          </q-td>
        </q-tr>
      </template>

    </q-table>
    <q-btn color="primary" label="Добавить строку" @click="addRow"></q-btn>
  </div>
  `,
  props: {
    square: {
      type: Object,
    },
    columns: {
      type: Array,
    },
    rows: {
      type: Array,
    },
    filter: {
      type: Array,
    },
    selected: {
      type: Object,
    },
    selectedprofile: {
      type: Object,
    },
  },
  setup(props) {
    var columnsc = ref(props.columns),
      modelc = reactive(model),
      // rowsc = ref(props.rows), //!!!
      squarec = ref(props.square),
      // selectedc = ref(props.selected.val),
      selectedc = ref(model.selected),

      filtercategoryc = ref(props.filter),
      discounto = ref(model.discount),
      amount = ref(model.amountServices),
      amountNDS = ref(model.amountServicesNDS),
      // visibleColumns = computed(() => { return setvisiblecolumns(props.square) }),
      selectedprofilec = ref(props.selectedprofile);

    function setvisiblecolumns() {
      // rowsc.value.map((row) => { //!!!
      modelc.rows.map((row) => { //!!!
        row["price"] = Math.round(
          row[props.square.val] * (1 - discounto.value.val / 100)
        );
      });

      selectedc.value.val.map((row) => {
        row["price"] = Math.round(
          row[props.square.val] * (1 - discounto.value.val / 100)
        );
      });
    }

    function myfilterMethod() {
      calculateAmount();
      // return rowsc.value.filter(
      return modelc.rows.filter(

        (row) =>
          props.filter.filter((i) => {
            return row.filter.split(", ").indexOf(i) > -1;
          }).length
      );
    }

    function calculateAmount() {
      let amo = 0;
      selectedc.value.val.forEach((row) => {
        amo += +row.price;
      });
      amo = amo * (1 - discounto.value.val / 100);
      amount.value.val = roundTwoDecimal(amo);
      amountNDS.value.val = roundTwoDecimal(modelc.nds.val == true ? amo / 1.05 * 0.05 : 0);
    }

    function calculateTime() {
      let amo = 0;
      selectedc.value.val.forEach((row) => {
        amo += +row.time;
      });
      modelc.amountTime = amo;
    }

    function addRow() {
      let arr = {};
      columnsc.value.forEach((col) => (arr[col.name] = ""));
      arr["filter"] = props.filter.join(", ");
      // arr["id"] = rowsc.value.length + 1; //!!!
      arr["id"] = modelc.rows.length + 1;
      // rowsc.value.push(arr); //!!!
      modelc.rows.value.push(arr);
    }

    function getSelectedString() {
      return `Выбрано строк: ${selectedc.value.length}`;
    }

    function syncselected(rowo) {
      let idx = selectedc.value.val.findIndex((row) => row.id === rowo.id);
      if (idx != -1) {
        selectedc.value.val[idx] = rowo;
      }
    }

    function roundTwoDecimal(value) {
      return value.toFixed(2);
    }

    function roundTwoDecimal2(value) {
      return Math.round(value * 100) / 100
    }

    watch(discounto.value, (val) => {
      calculateAmount();
    });

    watch(selectedc.value, (val) => {
      calculateTime();
      calculateAmount();
    });

    watch(selectedprofilec.value, (val) => {
      let key = val.val.value;
      // selectedc.value.val = rowsc.value.filter((row) => {
      selectedc.value.val = modelc.rows.filter((row) => {
        return row[key] == true;
      });
    });

    watch(squarec.value, (val) => {
      setvisiblecolumns();
      calculateAmount();
    });

    // watch(amount.value, (val) => {
    // calculateAmountNDS();
    // });

    watch(modelc.nds, (val) => {
      // console.log('s')
      // model.rows = [];
      modelc.rows = modelc.rows.map((row) => { return { ...row, price: modelc.nds.val ? roundTwoDecimal(row.price * 1.05) : roundTwoDecimal(row.price / 1.05) } });
      selectedc.value.val = selectedc.value.val.map((row) => { return { ...row, price: modelc.nds.val ? roundTwoDecimal(row.price * 1.05) : roundTwoDecimal(row.price / 1.05) } });
    });

    onMounted: {
      calculateTime();
    }

    return {
      modelc,
      filter: ref({ value: "none" }),
      // visibleColumns,
      squarec,
      columnsc,
      // rowsc, //!!!
      selectedc,
      discounto,
      filtercategoryc,
      amount,
      amountNDS,
      // period,
      selectedprofilec,
      myfilterMethod,
      calculateAmount,
      addRow,
      setvisiblecolumns,
      getSelectedString,
      syncselected,
    };
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

// <q-td>
//   <q-checkbox v-model="props.selected" />
// </q-td>
