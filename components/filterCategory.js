app.component('filter-category', {
  name: 'filter-category',
  emits:['fill-filter'],
  template:
  /*html*/
  `
    <!--
    <template v-for='filter in farr'>
      <input v-model='filtersc.content' type='checkbox' :value='filter.value'>
      {{filter.value}}
    </template>
    -->
  <template v-if='preview'>
    {{filtersc}}
  </template>

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <template v-for='filter in filtersc' :key='filter.label'>
        <q-checkbox
          dark
          v-model='filter.value'
          :label='filter.label'
          color="green"
        />
      </template>

      <!--
      <q-option-group
        v-model="filtersc.content"
        :options="optionsfilter"
        color="primary"
        type="checkbox"
        inline
        dark
        @update:modelValue="val => { $emit('fill-filter', filtersc) }"
      />
      -->

      <!--
      <template v-for='(filter, index) in filters' :key='filter.id'>
        <label>
          <q-checkbox dark v-model='filter.check' color="green" />
          {{filter.name}}
        </label>
      </template>
      -->
      
    </div>
  </div>
  `
  ,
  data(){
    return {
      // filtersc: filtersG,
      // filtersc: filterArrCategory,
      // optionsfilter: filterArr
    }
  },
  methods: {
    megaclickc(){
      this.filters.push('Ростех');
      console.log(filtersG);
    }
  },
  mounted: function(){
    console.log(`${this.$options.name} component is mounted`);
  },
  props:{
    filterarrcategory: {
      type: Array
    }
  },
  setup(props) {
     return {
      preview: preview,
      filtersc: ref(props.filterarrcategory)

      //  farr: ref(filtersG),
      //  farr: ref(['ПТЗ']),
      //  optionsfilter: filterArr
     } 
  }
})