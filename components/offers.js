app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" />
    </div>
  </div>
  `
  ,
  setup(){
    return{
      selectedoffer: ref(model.selectedoffer),
      options: view.filterOffertemplates
    }
  },
})