app.component('selectedrows', {
  name: 'selectedrows',
  template:
    /*html*/
    `
<!-- Выбранные позиции -->
{{modelc.manager}}
<div class="q-ma-none row fit justify-start">
  <div class="col">
    <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=true overflow: auto>
      <div class="q-ma-md fit row justify-start">
        <!-- <q-input v-model=modelc.manager class="q-mx-md" label="Менеджер"></q-input> -->
        <q-select v-model=modelc.manager.val :options=viewc.filterUsers label="Менеджер" class="col" style="overflow: auto;"></q-select>
        <q-input v-model=modelc.managerEmail.val class="q-mx-md" label="Почта"></q-input>
        <q-input v-model=modelc.managerPhone.val class="q-mx-md" label="Телефон"></q-input>
      </div>

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

  <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt()" style="overflow: auto;max-height:2em;width:16em"></q-btn>
</div>
`
  ,
  props: {

  },
  setup(props) {
    const modelc = reactive(model)
    viewc = reactive(view)

    const $q = useQuasar();

    function saveIt() {
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
      console.log(val.val.value);
      let user = viewc.users.filter(user =>{ return user.name == val.val.value});
      console.log(user);
      // modelc.managerEmail.val = 
    })

    return {
      modelc,
      viewc,
      saveIt,
      selectedc: ref(model.selected),
    }
  }
})