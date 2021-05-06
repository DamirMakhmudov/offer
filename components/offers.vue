app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <div class="q-ma-md">
    <div class="full-width row justify-between">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" class="col" style="overflow: auto;"/>
      <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt(selectedoffer.val)" style="overflow: auto;max-height:4em"/>
    </div>
  </div>
  `
  ,
  setup(){
    const $q = useQuasar()
    function saveIt(v){
      saveDataJS(v.label);
      $q.loading.show();
    }
    return{
      selectedoffer: ref(model.selectedOffer),
      options: view.filterOffers,
      saveIt
    }
  }
})