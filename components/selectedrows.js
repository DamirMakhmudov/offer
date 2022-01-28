app.component('selectedrows', {
  name: 'selectedrows',
  template:
  /*html*/
  `
  <!-- Выбранные позиции -->
  <q-expansion-item
    expand-separator
    icon="view_list"
    label="Выбранные позиции"
    default-opened
  >
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
  `
  ,
  props: {

  },
  setup(props) {
    return {
      selectedc: ref(model.selected),
    }
  }
})