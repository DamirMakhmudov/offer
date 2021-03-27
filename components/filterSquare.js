app.component('filter-square', {
  name: 'filter-square',
  emits:['backsquare'],
  template:
  /*html*/
  `
  <template v-if='preview'>
    <p>filterSquare: {{squaref}}</p>
  </template>

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="squaref.value"
        :options="optionss"
        color="primary"
        inline
        dark
        
      />
    </div>
  </div>
  `
  ,
  props:{
    square: {
      type: Object
    },
    options: {
      type: Array
    }
  },
  setup(props) {
    return {
      preview: preview,
      squaref: ref(props.square),
      optionss: ref(props.options),
      // options: filterArrSquare,
      filterChecked(val){
        console.log(val);
      }
    }  
  },
  mounted: function(){
    // @update:modelValue="val => { $emit('backsquare', squaref) }"
    console.log(`${this.$options.name} component is mounted`);
  }
})