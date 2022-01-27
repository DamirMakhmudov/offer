app.component('fields', {
  name: 'fields',
  template:
  /*html*/
  `
  <!-- Данные физлица -->
  <q-expansion-item
    expand-separator
    icon="account_circle"
    label="Данные физлица"
    default-opened
  >
    <div class="q-ma-sm" style="overflow: auto">
    </div>
  </q-expansion-item>

  <!-- Данные ИП -->
  <q-expansion-item
    expand-separator
    icon="work"
    label="Данные ИП"
    default-opened
  >
    <div class="q-ma-sm" style="overflow: auto">
     
    </div>
  </q-expansion-item>

  <!-- Данные юрлица -->
  <q-expansion-item
    expand-separator
    icon="store"
    label="Данные юрлица"
    default-opened
  >
    <div class="q-ma-sm" style="overflow: auto">
     
    </div>
  </q-expansion-item>
  `
  ,
  props:{

  },
  setup(props) {
    return {
      selectedc: ref(model.selected),
    }
  }
})