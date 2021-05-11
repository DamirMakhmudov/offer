app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <div class="q-ma-md">
    <div class="full-width row justify-between">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" class="col" style="overflow: auto;"/>
      <q-btn color="positive" icon="print" label="Печать" @click="printIt(selectedoffer.val)" style="overflow: auto;max-height:4em"/>
      <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt(selectedoffer.val)" style="overflow: auto;max-height:4em"/>
    </div>
  </div>
  `
  ,
  setup(){
    const $q = useQuasar()

    function saveIt(v){
      // saveDataJS(v.label);
      $q.loading.show({
        message: 'Секунду. Я сохраняю данные и сам закрою диалог...'
      });
    }

    function printIt(v){
      // printJS(v.value);
      $q.loading.show({
        message: 'Печатаю компредложение. Нужно немного подождать...'
      });
    }
    
    return{
      selectedoffer: ref(model.selectedOffer),
      options: view.filterOffers,
      saveIt,
      printIt
    }
  }
})