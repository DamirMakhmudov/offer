app.component('categories', {
  name: 'categories',
  emits:['fill-filter'],
  template:
  /*html*/
  `
  <div class="q-pa-md bg-grey-10 text-white">
    <div class="q-gutter-sm">
      <q-option-group
        v-model="categories.val"
        :options="filterCategoriesc"
        color="primary"
        type="checkbox"
        inline
        dark
      >
      </q-option-group>
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
    filter: {
      type: Object
    }
  },
  setup(props) {
    return {
      categories: ref(props.filter),
      filterCategoriesc: view.filterCategories
    } 
  },
})
// @update:modelValue="val => { $emit('fill-filter', filtersc) }"