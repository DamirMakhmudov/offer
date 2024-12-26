app.component("selectedrows", {
  name: "selectedrows",
  template:
    /*html*/
    `
  <!-- Сохранить, Импорт, Менеджер -->
  <div class="q-ma-xs row justify-start">
    <q-btn round color="primary" :icon="modelc.urlFolder.val == '' ? 'folder_off' : 'folder'" @click="openFolder()">
      <q-tooltip>Папка на диске с документами по проекту</q-tooltip>
    </q-btn>
    <q-btn color="primary" icon="save" label="Сохранить" @click="saveIt()" class="q-mr-xs" style="overflow: auto; max-height:2em;width:16em"></q-btn>
    <q-btn color="primary" icon="get_app" label="Импорт Bitrix" @click="importBx()" class="q-mr-xs" style="overflow: auto; max-height:2em;width:16em"></q-btn>
    <q-select v-model=modelc.manager.val dense :options=viewc.filterUsers label="Менеджер" class="q-mx-xs col" style="overflow: auto;"></q-select>
  </div>

    <!-- 🦄 Выбранные позиции -->
  <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=true overflow: auto>
    <div class="q-ma-xs row justify-start">
      <q-list dense bordered separator class="rounded-borders fit" >

        <q-item v-for="(item, index) in selectedc.val" clickable
            :key = "item.id"
            v-ripple
            draggable="true"
            @dragstart="handleDragStart($event, index)"
            @dragend="handleDragEnd"
            @dragover="handleDragOver"
            @drop="handleDrop($event, index)"
            class=" row justify-between fit"
        > 
            <div class="row justify-between fit">
              <q-input v-model="item.name"  class="fit" dense/>
            </div>
        </q-item>
        
      </q-list>
    </div>
  </q-expansion-item>

  <!-- Выбранные позиции -->
  <!--
  <q-expansion-item expand-separator icon="view_list" label="Выбранные позиции" :default-opened=true overflow: auto>
    <div class="q-ma-md row justify-start">
      <q-list dense bordered separator class="rounded-borders">

        <q-item v-for="item in selectedc.val" clickable v-ripple>
          <q-item-section draggable class="text-caption">
            {{item.id}} {{item.name}}
          </q-item-section>
        </q-item>
        >
      </q-list>
    </div>
  </q-expansion-item>
  -->
  `,
  props: {
    selected: {
      type: Object,
    },
  },
  setup(props) {
    const items = ref([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
      { id: 3, name: "Item 3" },
      { id: 4, name: "Item 4" },
      { id: 5, name: "Item 5" },
    ]);

    let modelc = reactive(model),
      viewc = reactive(view);

    // let selectedc = ref(model.selected);
    let selectedc = ref(props.selected);

    const $q = useQuasar();

    function openFolder() {
      if (!modelc.urlFolder.val) {
        $q.loading.show({
          message: "Секунду. Ищу папку...",
        });
        checkFolder();
      } else {
        window.open(modelc.urlFolder.val);
      }
    }

    // request = {
    //   "mode": "createFolder",
    //   "Адрес объекта": "Тест создания папки",
    //   "Город": "МСК"
    // },

    async function checkFolder() {
      if (modelc.address.val != "") {
        let city = modelc.city.val == "m" ? "МСК" : "СПБ";
        let url =
          "https://script.google.com/macros/s/AKfycbwW1MD96u-yy2qqST7POK3oiVyYyGtvDlkTNOVs6HB0Oggj2AEvUvfNU57xpUvX5TsG/exec";
        let response = await fetch(url, {
          method: "POST",
          muteHttpExceptions: false,
          body: JSON.stringify({
            mode: "createFolder",
            "Адрес объекта": modelc.address.val,
            Город: city,
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }).then((resp) => resp.text());

        // let url = 'https://script.google.com/macros/s/AKfycbw0kKa-yHVMcrWyihYHaqNQh1FvvdG5hHqmZyjvJEddZxwtJwoTc4EzHBNsiW_5neu4/exec';
        // let response = await fetch(url, {
        //   method: 'POST',
        //   muteHttpExceptions: false,
        //   body: JSON.stringify({mode: 'folder', address: modelc.address.val}),
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        // }
        // ).then(resp => resp.json());
        // modelc.urlFolder.val = response.url;

        modelc.urlFolder.val = response;
      }

      $q.loading.hide();
    }

    async function importBx() {
      let url =
        "https://crm.pereplan-one.ru/bitrix/tools/act/update_deal.php?id=" +
        modelc.id;
      let response = await fetch(url, {
        method: "GET",
        muteHttpExceptions: false,
        // mode: 'no-cors', // no-cors, *cors, same-origin, cors
        headers: {
          //'Content-Type': 'application/json',
          // 'Content-Type': "application/json; charset=UTF-8",
          // 'Content-Type': "multipart/form-data",
          "Content-Type": "application/x-www-form-urlencoded",
          // 'Accept': 'application/json'
        },
      }).then((resp) => resp.json());

      Object.entries(response).forEach((ent) => {
        let key = ent[0];
        if (modelc.hasOwnProperty(key)) {
          if (modelc[key].hasOwnProperty("val")) {
            if (modelc[key].val == "") {
              modelc[key].val = ent[1] === null ? "" : ent[1];
            }
          } else {
            if (modelc[key] == "") {
              modelc[key] = ent[1] === null ? "" : ent[1];
            }
          }
        }
      });
    }

    function saveIt() {
      console.log("save");
      $q.loading.show({
        message: "Секунду. Я сохраняю данные...",
      });
      google.script.run
        .withSuccessHandler(hideLoading)
        .setOfferValue(JSON.stringify(model), model.city.val);
      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
      }, 2000);
    }

    function hideLoading(res) {
      $q.loading.hide();
      if (res != true) {
        $q.notify({
          message: res,
          color: "red",
        });
      }
    }

    // Обработчик для начала перетаскивания
    const handleDragStart = (event, index) => {
      event.dataTransfer.setData("index", index);
      setTimeout(() => {
        event.target.style.display = "none";
      }, 0);
    };

    // Обработчик для перетаскивания элемента
    const handleDragEnd = (event) => {
      event.target.style.display = "block";
    };

    // Обработчик для перемещения элемента
    const handleDragOver = (event) => {
      event.preventDefault();
    };

    // Обработчик для сброса элементов
    const handleDrop = (event, index) => {
      const draggedIndex = event.dataTransfer.getData("index");
      console.log(draggedIndex);
      const draggedItem = selectedc.value.val[draggedIndex];
      console.log(draggedItem);

      selectedc.value.val.splice(draggedIndex, 1);
      const rawObject = JSON.parse(JSON.stringify(draggedItem));
      selectedc.value.val.splice(index, 0, rawObject);
    };

    watch(modelc.manager, (val) => {
      let userIdx = viewc.users.names.indexOf(val.val.value);
      modelc.managerEmail.val = viewc.users.emails[userIdx];
      modelc.managerPhone.val = viewc.users.phones[userIdx];
    });

    return {
      modelc,
      viewc,
      // selectedc: ref(model.selected),
      selectedc,
      openFolder,
      saveIt,
      importBx,
      checkFolder,
      items,
      handleDragStart,
      handleDragEnd,
      handleDragOver,
      handleDrop,
    };
  },
});
