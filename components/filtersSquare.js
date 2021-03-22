app.component('filters-square', {
  name: 'filters-square',
  emits:['myevent'],
  template:
  /*html*/
  `
  <p>filterSquare: {{squaref}}</p>
  <input v-model='squaref'>

  <button @click='myevento'>change</button>
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="squaref"
        :options="options"
        color="primary"
        inline
        dark
        @update:modelValue="val => { $emit('myevent', squaref) }"
      />
    </div>
  </div>
  `
  ,
  data(){
    return{
      some: 'Hello'
    }
  },
  methods:{
    myevento(){
      this.$emit('myeventos', this.some)
    }
  },
  props:{
    square: {
      type: String
    }
  },
  setup(props) {
    // var some = ref('200');
    // function myevento(){
      // console.log(some);
      // this.$emit('myevent', some)
    // }
    return {
      // some,
      // myevento,
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