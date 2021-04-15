app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <div class="q-ma-md">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" map-options/>
  </div>
  `
  ,
  setup(){
    return{
      selectedoffer: ref(model.selectedoffer),
      options: view.filterOffers
    }
  },
})