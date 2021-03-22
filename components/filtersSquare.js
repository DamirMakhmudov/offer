app.component('filters-square', {
  name: 'filters-square',
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
        v-model="squaref"
        :options="options"
        color="primary"
        inline
        dark
        @update:modelValue="val => { $emit('backsquare', squaref) }"
      />
    </div>
  </div>
  `
  ,
  data(){
    return{
    }
  },
  props:{
    square: {
      type: String
    }
  },
  setup(props) {
    return {
      preview: preview,
      squaref: ref(props.square),
      options: filtersArrSquare,
      filterChecked(val){
        console.log(val);
      }
    }  
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
})