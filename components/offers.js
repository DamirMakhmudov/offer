app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <div class="q-ma-md">
    <div class="row justify-between">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" class="col" style="overflow: auto;"/>
      <q-select v-model="selectedchoicec.val" :options="optionschoice" label="Выберите автовыбор" class="col" style="overflow: auto;"/>
    </div>
    <div class="q-ma-sm row justify-end">
      <q-btn v-show="show" color="positive" icon="print" label="Печать" @click="printIt(selectedoffer.val)" style="overflow: auto;max-height:4em"/>
      <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt(selectedoffer.val)" style="overflow: auto;max-height:4em"/>
    </div>
  </div>
  `
  ,
  props: {
    selectedchoice: {
      type: Object
    }
  }
  ,
  setup(props){
    const $q = useQuasar();
    const selectedoffer = ref(model.selectedOffer);

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
      selectedoffer,
      show: computed(() => { return selectedoffer.value.val =="" ? false : true }),
      selectedchoicec: ref(props.selectedchoice),
      options: view.filterOffers,
      optionschoice: view.filterChoice,
      saveIt,
      printIt
    }
  }
})