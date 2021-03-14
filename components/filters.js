app.component('filters', {
  name: 'filters',
  emits:['fill-filter'],
  template:
  /*html*/
  `

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="filtersc"
        :options="optionsfilter"
        color="primary"
        type="checkbox"
        inline
        dark
        @update:modelValue="val => { $emit('fill-filter', filtersc) }"
      />
      <!--
      <template v-for='(filter, index) in filters' :key='filter.id'>
        <label>
          <q-checkbox dark v-model='filter.check' color="green" />
          {{filter.name}}
        </label>
      </template >
      <template v-for='(filter, index) in farr'>
        <q-checkbox dark v-model='filter.check' :label='filter.label' color="green"/>
      </template>
      -->
    </div>
  </div>
  `
  ,
  data(){
    return {
      // filters: filtersArr
      filtersc: filtersG,
      // filtersF: filtersG,
      farr: filtersArrCheck,
      optionsfilter: filtersArr
    }
  },
  methods: {
    megaclickc(){
      this.filters.push('Ростех');
      console.log(filtersG);
    }
  },
  watch:{
    filtersc(){
      filtersG = [...this.filtersc]
    }
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
  setup() {
     return {
      //  farr: ref(filtersG),
      //  farr: ref(['ПТЗ']),
      //  optionsfilter: filtersArr
     } 
  }
})