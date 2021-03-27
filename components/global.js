var filtersG = { content: ['Газ'] };
var testObject = {name: 'Damir'};
// var preview = true;
var preview = false;

const { createApp, ref, reactive, computed, watch, onMounted } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['filters', 'filtersSquare', 'services'],
  data() {
    return {
      square: 'price2',
      columns: columns,
      rows: rows
    }
  },
  methods: {
    keepsquare(val) {
      console.log('keepsquare was run')
      this.square = val
    },
    keepfilter(val) {
      console.log('keepfilter was run')
      this.filters = val
    },
    megaclick() {
      this.rowsg[0].name = '123abx';
      console.log('here');
    }
  },
  mounted: function () {
    console.log(`${this.$options.name} component is mounted`);
  },
  setup() {
    // const myArr = testArr
    // var rr = this.myArr
    // function megaclick(){
    // rr.push('d')
    // myArr.push('d');
    // console.log(myArr);
    // }
    return {
      optionsfilterSquare: ref(filtersArrSquare),
      optionsfilter: filtersArr,
      filters: filtersG,
      preview: preview
    }
    // filtermain: []
    // onMounted(() => {
    //   console.log('Component is mounted!');
    // })
  }
}

const app = Vue.createApp(AppObject)

app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);