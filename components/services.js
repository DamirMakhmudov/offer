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
      row-key="name"
      :filter = "filter"
      :filter-method="myfilterMethod"
      >

      <template v-slot:body="props">
      
        <q-tr :props="props">

          <q-td v-for='col in columns' :key="col.name" :props="props">

              {{ props.row[col.name] }}
              <q-popup-edit v-model="props.row[col.name]" title="Edit the Name" auto-save v-slot="scope">
                <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
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
      rows: rows,
      columns: columns,
      filter: {value: 'none'}
    }
  },
  methods:{
    myfilterMethod () {
      // if(this.data.length > 2) {
        // if(this.filter.value === 'active') {
          return this.rows.filter(row => (
            row.iron == '1%' || row.iron == '7%'
          ))
        // }
        // if(this.filter.value === 'inactive') {
        //   return this.data.filter(row => !row.active)
        // }
        // return this.rows
      // }  
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