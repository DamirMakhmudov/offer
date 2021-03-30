
const { createApp, ref, reactive, computed, watch, onMounted, watchEffect } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['filter-category', 'filter-square', 'services'],
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
      square: ref(mmm.square),
      columns: ref(mmm.columns),
      rows: ref(mmm.rows),
      optionsFilterSquare: ref(mmm.filterArrSquare),
      optionsFilterCategory: ref(mmm.filterArrCategory),
      selectedg: ref(mmm.selectedo),
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