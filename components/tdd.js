app.component('tdd',{
  name: 'tdd',
  props:['propss','descc'],
  template:
  /* html */
  `
  <q-td key="descc" :props="propss">
    {{ propss.row.name }}
    <q-popup-edit v-model="propss.row.name" title="Edit the Name" auto-save v-slot="scope">
      <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
    </q-popup-edit>
  </q-td>
  `
  ,
  data(){
    return{
    }
  },
  setup () {
    return {
    //   rows: ref(rows),
    //   columns
    }
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  }
});