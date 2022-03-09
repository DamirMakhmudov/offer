  app.component('offers',{
  name: 'offers',
  template:
  /*html*/
  `
  <!-- Выбор шаблона документа, профиля и формата + кнопки Пачать и Сохранить-->
  <div class="q-ma-xs row justify-between">
    <!-- <div class="row justify-between"> -->
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон КП" class="col" style="overflow: auto;"></q-select>
      <q-select v-model="selectedprofilec.val" :options="optionsprofile" label="Выберите профиль" class="col" style="overflow: auto;"></q-select>
      <q-select v-model="selectedformatc.val" :options="optionsformat" label="Выберите формат" class="col" style="overflow: auto;"></q-select>
      <q-select v-model="selectedContract.val" :options="optionsContract" label="Выберите шаблон Договора" class="col" style="overflow: auto;"></q-select>
    </div>
    
    <div class="q-ma-xs row justify-start">
      <q-btn v-show="showOffer" color="positive" class="q-ma-xs" icon="print" label="Печать КП" @click="printOffer(selectedoffer.val, selectedformatc.val)" style="overflow: auto;max-height:2em;width:16em"></q-btn>
      <q-btn v-show="showContract" color="positive" class="q-ma-xs" icon="print" label="Печать договора" @click="printContract(selectedContract.val)" style="overflow: auto;max-height:2em;width:16em"></q-btn>
    </div>
  <!-- </div> -->
  `
  ,
  props: {
    selectedprofile: {
      type: Object
    }
  }
  ,
  setup(props){
    const $q = useQuasar();
    const selectedoffer = ref(model.selectedOffer);
    const selectedContract = ref(model.selectedContract);

    function saveIt(){
      $q.loading.show({
        message: 'Секунду. Я сохраняю данные...'
      });

      // google.script.run.withSuccessHandler(hideLoading).saveDataGS(JSON.stringify(model));

      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0
      }, 2000)
    }

    function hideLoading(res){
      $q.loading.hide();
      if(res!=true){
        $q.notify({
          message: res,
          color: 'red'
        });
      }
    }

    function printOffer(template, format){
      // google.script.run.withSuccessHandler(openUrl).printGS(JSON.stringify(model), template.value, format.value);

      $q.loading.show({
        message: 'Печатаю КП. Нужно немного подождать...'
      });
      timer = setTimeout(() => {
        $q.loading.hide()
        timer = void 0
      }, 5000)
    }

    function printContract(template){
      // google.script.run.withSuccessHandler(openUrl).printGS(JSON.stringify(model), template.value, format.value);

      $q.loading.show({
        message: 'Печатаю договор. Нужно немного подождать...'
      });
      timer = setTimeout(() => {
        $q.loading.hide()
        timer = void 0
      }, 5000)
    }

    return{
      selectedc: ref(model.selected),
      selectedoffer,
      selectedprofilec: ref(props.selectedprofile),
      selectedformatc: ref(model.selectedFormat),
      selectedContract,
      options: view.filterOffer,
      optionsprofile: view.filterProfile,
      optionsformat: view.filterFormat,
      optionsContract: view.filterContract,
      showOffer: computed(() => { return selectedoffer.value.val == "" ? false : true }),
      showContract: computed(() => { return selectedContract.value.val == "" ? false : true }),
      saveIt,
      printOffer,
      printContract
    }
  }
})