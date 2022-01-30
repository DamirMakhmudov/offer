app.component('datepicker', {
  name: 'datepicker',
  template:
  /*html*/
  `
  <q-input v-model="modelc[property]" :label="label" class="q-mx-md" mask="##.##.####" :rules="['##.##.####']" style="font-size: smaller">
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="modelc[property]" mask="DD.MM.YYYY">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Закрыть" color="primary" flat/>
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
  `
  ,
  props: {
    // fields: Object,
    modelc: Object,
    property: String,
    label: String
  }
  ,
  setup(props) {
    return {
    }
  }
})