app.component('filter-category', {
  name: 'filter-category',
  emits:['fill-filter'],
  template:
  /*html*/
  `
  <template v-if='preview'>
    <p>filterarrcategoryc: {{filterarrcategoryc}}</p>
  </template>

  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="filterarrcategoryc.val"
        :options="optionsfilter"
        color="primary"
        type="checkbox"
        inline
        dark
      />
      <!--
      <template v-for='filter in filterarrcategoryc.value' :key='filter.label'>
        <q-checkbox
          dark
          v-model='filter.value'
          :label='filter.label'
          color="green"
        />
      </template>
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
  props:{
    filterarrcategory: {
      type: Object
    }
  },
  setup(props) {
    return {
      preview: preview,
      filterarrcategoryc: ref(props.filterarrcategory),
      optionsfilter: mmm.filterArr
    } 
  },
  mounted: function(){
    // console.log(`${this.$options.name} component is mounted`);
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"