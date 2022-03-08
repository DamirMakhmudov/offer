app.component('selectedrows', {
  name: 'selectedrows',
  template:
    /*html*/
    `
<!-- Выбранные позиции -->
<div class="q-ma-xs row justify-start">
  <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt()" style="overflow: auto;max-height:2em;width:16em"></q-btn>
</div>

<!-- <div class="q-ma-md row justify-start"> -->
  <!-- <div class="col"> -->
    <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=false overflow: auto>
      <!-- <q-input v-model=modelc.address.val class="q-mx-md" label="Адрес объекта"></q-input> -->
      <div class="q-ma-md row justify-start">
        <q-select v-model=modelc.manager.val :options=viewc.filterUsers label="Менеджер" class="col" style="overflow: auto;"></q-select>
        <!-- <q-input v-model=modelc.managerEmail.val class="q-mx-md" label="Почта"></q-input> -->
        <!-- <q-input v-model=modelc.managerPhone.val class="q-mx-md" label="Телефон"></q-input> -->
      </div>

      <div class="q-ma-md row justify-start">
        <q-list dense bordered separator class="rounded-borders">
          <q-item v-for="item in selectedc.val" clickable v-ripple>
            <q-item-section class="text-caption">
              {{item.id}} {{item.name}}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-expansion-item>
  <!-- </div> -->
<!-- </div> -->
`
  ,
  props: {

  },
  setup(props) {
    modelc = reactive(model)
    viewc = reactive(view)

    const $q = useQuasar();

    function saveIt() {
      $q.loading.show({
        message: 'Секунду. Я сохраняю данные...'
      });

      // google.script.run.withSuccessHandler(hideLoading).saveDataGS(JSON.stringify(model));
      // google.script.run.withSuccessHandler(hideLoading).setOfferValue(JSON.stringify(model));

      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0
      }, 2000)
    }

    function hideLoading(res) {
      $q.loading.hide();
      if (res != true) {
        $q.notify({
          message: res,
          color: 'red'
        });
      }
    }

    watch(modelc.manager, (val) => {
      let userIdx = viewc.users.names.indexOf(val.val.value);
      // let user = viewc.users.filter(user => { return user.name == val.val.value })[0];
      modelc.managerEmail.val = viewc.users.emails[userIdx];
      modelc.managerPhone.val = viewc.users.phones[userIdx];
    })

    return {
      modelc,
      viewc,
      saveIt,
      selectedc: ref(model.selected)
    }
  }
})