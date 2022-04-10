app.component('selectedrows', {
  name: 'selectedrows',
  template:
    /*html*/
    `
  <!-- Сохранить, Импорт, Менеджер -->
  <div class="q-ma-xs row justify-start">
    <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt()" class="q-mr-xs" style="overflow: auto; max-height:2em;width:16em"></q-btn>
    <q-btn color="primary" icon="get_app" label="Импорт Bitrix" @click="importBx()"  class="q-mr-xs" style="overflow: auto; max-height:2em;width:16em"></q-btn>
    <!-- <q-btn color="primary" icon="get_app" label="Импорт" @click="sendGET()"  class="q-mr-xs" style="overflow: auto; max-height:2em;width:16em"></q-btn> -->
    <q-select v-model=modelc.manager.val dense :options=viewc.filterUsers label="Менеджер" class="q-mx-xs col" style="overflow: auto;"></q-select>
  </div>

  <!-- Выбранные позиции -->
  <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=false overflow: auto>
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
  `
  ,
  setup(props) {
    let
      modelc = reactive(model),
      viewc = reactive(view);
    const $q = useQuasar();

    async function importBx() {
      let url = `https://crm.pereplan-one.ru/bitrix/tools/act/update_deal.php?id=${modelc.id}`;
      let response = await fetch(url, {
        method: 'GET',
        muteHttpExceptions: false,
        // mode: 'no-cors', // no-cors, *cors, same-origin, cors
        headers: {
          //'Content-Type': 'application/json',
          // 'Content-Type': "application/json; charset=UTF-8",
          // 'Content-Type': "multipart/form-data",
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Accept': 'application/json'
        },
      }
      ).then(resp => resp.json());

      Object.entries(response).forEach(ent => {
        let key = ent[0];
        if (modelc.hasOwnProperty(key)) {
          modelc[key].hasOwnProperty('val') ? modelc[key].val = ent[1] : modelc[key] = ent[1];
        }
      })
    }

    function saveIt() {
      $q.loading.show({
        message: 'Секунду. Я сохраняю данные...'
      });
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
      modelc.managerEmail.val = viewc.users.emails[userIdx];
      modelc.managerPhone.val = viewc.users.phones[userIdx];
    })

    return {
      modelc,
      viewc,
      saveIt,
      importBx,
      selectedc: ref(model.selected)
    }
  }
})