app.component('filters-square', {
  name: 'filters-square',
  emits:['fill-filter-square'],
  template:
  /*html*/
  `
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      {{square}}
      <q-option-group
        v-model="square.value"
        :options="options"
        color="primary"
        inline
        dark
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
    var square = ref(squareG);
    return {
      // sq: ref(filtersArrSquare[0].value),
      // square: ref(square),
      square,
      options: filtersArrSquare,
      filterChecked(val){
        console.log(val);
      }
    }  
  }
})