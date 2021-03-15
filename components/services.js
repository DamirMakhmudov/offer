app.component('services',{
  name: 'services',
  // props:['validate'],
  template:
  /* html */
  `
  <template>
  <div class="q-pa-md">
    <div class="cursor-pointer">
      {{ label }}
      <q-popup-edit v-model="label" auto-save v-slot="scope">
        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set"/>
      </q-popup-edit>
    </div>
  </div>
</template>
  `
  ,
  data(){
    return{

    }
  },
  setup () {
    return {
      label: ref('Click me')
    }
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
});