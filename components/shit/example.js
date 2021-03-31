app.component('example',{
  name: 'example',
  // props:['validate'],
  template:
  /* html */
  `
  <div class="q-pa-md">
    <div class="cursor-pointer">
      {{ label.name}}
      <q-popup-edit v-model="label.name" auto-save v-slot="scope">
        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set"/>
      </q-popup-edit>
    </div>
  </div>
  `
  ,
  data(){
    return{

    }
  },
  setup () {
    var label = ref(testObject)
    return {
      label
    }
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
});