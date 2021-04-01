app.component('services',{
  name: 'services',
  template:
  /* html */
  `
  <div class="q-pa-md">
    <q-table 
      :rows="rows" 
      :columns="columns"
      title="Услуги"
      :rows-per-page-options="[]"
      row-key="name">

      <template v-slot:body="props">

        <q-tr :props="props">

          <q-td key="desc" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Edit the Name" auto-save v-slot="scope">
              <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>

          <q-td key="calories" :props="props">
            {{ props.row.calories }}
            <q-popup-edit v-model.number="props.row.calories" auto-save v-slot="scope">
              <q-input type="number" v-model.number="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>

          <q-td key="fat" :props="props">
            {{ props.row.fat }}
            <q-popup-edit disable v-model="props.row.fat" auto-save v-slot="scope">
              <div class="text-italic text-primary q-mb-xs">
                My Custom Title
              </div>

              <q-input v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
            </q-popup-edit>
          </q-td>

          <q-td key="carbs" :props="props">
            {{ props.row.carbs }}
          </q-td>

          <q-td key="protein" :props="props">
            {{ props.row.protein }}
          </q-td>

          <q-td key="sodium" :props="props">
            {{ props.row.sodium }}
          </q-td>

          <q-td key="calcium" :props="props">
            {{ props.row.calcium }}
          </q-td>
          
          <q-td key="iron" :props="props">
            {{ props.row.iron }}
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </div>
  `
  ,
  data(){
    return{
      rows: rows,
      columns: columns
    }
  },
  setup () {
    return {
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