app.component('offers', {
  name: 'offers',
  template:
  /*html*/
  `
  <!-- Выбор шаблона документа, профиля и формата + кнопки Пачать и Сохранить-->
  <div class="q-ma-md">
    <div class="row justify-between">
      <q-select v-model="selectedoffer.val" :options="options" label="Выберите шаблон" class="col" style="overflow: auto;"></q-select>
      <q-select v-model="selectedprofilec.val" :options="optionsprofile" label="Выберите профиль" class="col" style="overflow: auto;"></q-select>
      <q-select v-model="selectedformatc.val" :options="optionsformat" label="Выберите формат" class="col" style="overflow: auto;"></q-select>
    </div>
    <div class="q-ma-sm row justify-end">
      <q-btn v-show="show" color="positive" icon="print" label="Печать" @click="printIt(selectedoffer.val, selectedformatc.val)" style="overflow: auto;max-height:4em"></q-btn>
      <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt(selectedoffer.val)" style="overflow: auto;max-height:4em"></q-btn>
    </div>
  </div>
  `
  ,
  props: {
    selectedprofile: {
      type: Object
    }
  }
  ,
  setup(props) {
    const $q = useQuasar();
    const selectedoffer = ref(model.selectedOffer);

    function saveIt() {
      saveDataJS();
      $q.loading.show({
        message: 'Секунду. Я сохраню данные и сам закрою диалог...'
      });
    }

    function printIt(v) {
      printJS(v.value);
      $q.loading.show({
        message: 'Печатаю компредложение. Нужно немного подождать...'
      });
    }

    return {
      selectedc: ref(model.selected),
      selectedoffer,
      selectedprofilec: ref(props.selectedprofile),
      selectedformatc: ref(model.selectedFormat),
      options: view.filterOffer,
      optionsprofile: view.filterProfile,
      optionsformat: view.filterFormat,
      show: computed(() => { return selectedoffer.value.val == "" ? false : true }),
      saveIt,
      printIt
    }
  }
})