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
    <p>filterarrcategoryc: {{filterarrcategoryc}}</p>
  </template>

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <!--<template v-for='filter in filterarrcategoryc.value' :key='filter.label'>
        <q-checkbox
          dark
          v-model='filter.value'
          :label='filter.label'
          color="green"
        />
      </template>
-->
      <q-option-group
        v-model="filterarrcategoryc.value"
        :options="optionsfilter"
        color="primary"
        type="checkbox"
        inline
        dark
      />

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
      type: Object
    }
  },
  setup(props) {
     return {
      preview: preview,
      filterarrcategoryc: ref(props.filterarrcategory),
      //  farr: ref(filtersG),
      //  farr: ref(['ПТЗ']),
       optionsfilter: mmm.filterArr
     } 
  }
})

// @update:modelValue="val => { $emit('fill-filter', filtersc) }"
