app.component('filters-square', {
  name: 'filters-square',
  emits:['fill-filter-square'],
  template:
  /*html*/
  `
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="sq"
        :options="options"
        color="primary"
        inline
        dark
        @update:modelValue="val => { $emit('fill-filter-square', sq) }"
      />
    </div>
    <hr>
  </div>
  `
  ,
  data(){
    return {
    }
  },
  methods: {
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
  setup() {
    return {
      sq: ref(filtersArrSquare[0].value),
      options: filtersArrSquare,
      filterChecked(val){
        console.log(val);
      }
    }  
  }
})