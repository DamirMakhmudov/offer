
const { createApp, ref, reactive, computed, watch, onMounted, watchEffect } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['categories', 'square', 'services'],
  methods: {
    // keepsquare(val) {
    //   console.log(`keepsquare was run with "${val}"`)
    //   this.square = val
    // },
    keepfilter(val) {
      console.log('keepfilter was run')
      this.filters = val
    },
    megaclick() {
      this.rowsg[0].name = '123abx';
      console.log('here');
    }
  },
  setup() {
    function keepsquare(val) {
      console.log(`keepsquare was run with "${val}"`)
      console.log(val);
      // selectedg = val
      // square = val
    }
    return {
      preview: preview,
      square: ref(model.square),
      columns: ref(view.columns),
      rows: ref(model.rows),
      optionsFilterSquare: ref(view.filterSquare),
      optionsFilterCategory: ref(model.categories),
      selectedg: ref(model.selectedo),
      keepsquare
    }
  },
  mounted: function () {
    // console.log(`${this.$options.name} component is mounted`);
  }
}

const app = Vue.createApp(AppObject)

app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);