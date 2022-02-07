app.component('selectedrows', {
  name: 'selectedrows',
  template:
    /*html*/
    `
  <!-- Выбранные позиции -->
  <div class="q-ma-none row fit justify-start">
    <div class="col">
      <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=false overflow: auto>
        <div class="q-ma-sm" style="overflow: auto">
          <q-list dense bordered separator class="rounded-borders">
            <q-item v-for="item in selectedc.val" clickable v-ripple>
              <q-item-section class="text-caption">
                {{item.id}} {{item.name}}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-expansion-item>

    </div>

    <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt()" style="overflow: auto;max-height:2em"></q-btn>
  </div>
  `
  ,
  props: {

  },
  setup(props) {
    const $q = useQuasar();

    function saveIt(){
      $q.loading.show({
        message: 'Секунду. Я сохраняю данные...'
      });

      // saveDataJS();
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

    return {
      saveIt,
      selectedc: ref(model.selected),
    }
  }
})