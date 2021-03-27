var filtersG = { content: ['Газ'] };
var testObject = {name: 'Damir'};

const { createApp, ref, reactive, computed, watch, onMounted } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['filter-category', 'filter-square', 'services'],
  data() {
    return {
      columns: columns,
      rows: rows,
    }
  },
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
    // const myArr = testArr
    // var rr = this.myArr
    // function megaclick(){
    // rr.push('d')
    // myArr.push('d');
    // console.log(myArr);
    // }
    function keepsquare(val) {
      console.log(`keepsquare was run with "${val}"`)
      square = val
    }
    return {
      preview: preview,
      square: ref(squarel),
      optionsFilterSquare: ref(filterArrSquare),
      // optionsfilter: filterArr,
      optionsFilterCategory: ref(filterArrCategory),
      filters: filtersG,
      keepsquare
    }
    // filtermain: []
    // onMounted(() => {
    //   console.log('Component is mounted!');
    // })
  },
  mounted: function () {
    console.log(`${this.$options.name} component is mounted`);
  }
}

const app = Vue.createApp(AppObject)

app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);