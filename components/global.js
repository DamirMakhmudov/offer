var filtersArrSquare = [
  { value: '0-70', label: '0-70' },
  { value: '71-100', label: '71-100' },
  { value: '101-150', label: '101-150' },
  { value: '151-200', label: '151-200' },
];

var filtersArr = [
  { value: 'ТЗБ', label: 'ТЗБ' },
  { value: 'ПТЗ', label: 'ПТЗ' },
  { value: 'Газ', label: 'Газ' },
  { value: 'Ростех', label: 'Ростех' },
  { value: 'МосгорБТИ', label: 'МосгорБТИ' },
  { value: 'Согласование', label: 'Согласование' },
  { value: 'Узаконивание', label: 'Узаконивание' },
  { value: 'ГБУ ЭЦ', label: 'ГБУ ЭЦ' },
  { value: 'МНИИТЭП', label: 'МНИИТЭП' },
  { value: 'Разделение', label: 'Разделение' },
  { value: 'Объединение', label: 'Объединение' },
  { value: 'Рабочка', label: 'Рабочка' },
];

var filtersArrCheck = [
  { value: 'ТЗБ', label: 'ТЗБ' , check:false},
  { value: 'ПТЗ', label: 'ПТЗ' , check:false},
  { value: 'Газ', label: 'Газ' , check:false},
  { value: 'Ростех', label: 'Ростех' , check:false},
  { value: 'МосгорБТИ', label: 'МосгорБТИ' , check:false},
  { value: 'Согласование', label: 'Согласование' , check:false},
  { value: 'Узаконивание', label: 'Узаконивание' , check:false},
  { value: 'ГБУ ЭЦ', label: 'ГБУ ЭЦ' , check:false},
  { value: 'МНИИТЭП', label: 'МНИИТЭП' , check:false},
  { value: 'Разделение', label: 'Разделение' , check:false},
  { value: 'Объединение', label: 'Объединение' , check:false},
  { value: 'Рабочка', label: 'Рабочка', check:false },
];

var servicesname = [
  { "id": 1, "{fname:'ilter": "Согласование , Узаконивание, ПТЗ, ТЗБ", "shortname": "Наш предварительный выезд", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации", "price1": 5000, "price2": 100, "price3": 100, "price4": 100, "time": 1, "document": "Заключение о возможности согласования перепланировки в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" },
  { "id": 2, "filter": "ГБУ ЭЦ", "shortname": "Предварительный выезд с ГБУ", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из ГБУ «Экспертный центр»", "price1": 15000, "price2": 100, "price3": 100, "price4": 100, "time": 10, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из ГБУ «Экспертный центр» в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" },
  { "id": 3, "filter": "МНИИТЭП", "shortname": "Предварительный выезд с МНИИТЭП", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из АО «МНИИТЭП»", "price1": 15000, "price2": 100, "price3": 100, "price4": 100, "time": 10, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из АО «МНИИТЭП» в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" }
];

var squareG = '';
var filtersG = ['Газ'];
var testArr = ['a', 'b', 'c'];

const { createApp, ref, computed, watch, onMounted } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components:['filters', 'filtersSquare'],
  data() {
    return {
      square: squareG,
      filters: filtersG,
      title: 'Boris',
      myArr: testArr,
      question: ''
    }
  },
  methods: {
    keepsquare(val){
      console.log('keepsquare was run')
      this.square = val
    },
    keepfilter(val){
      console.log('keepfilter was run')
      this.filters = val
      console.log('', )
    },
    megaclick(){
      this.myArr.push('d');
      console.log(testArr);
    }
  },
  mounted: function () {
    console.log(`${this.$options.name} component is mounted`);
  },
  setup(){
    // const myArr = testArr
    // var rr = this.myArr
    // function megaclick(){
      // rr.push('d')
      // myArr.push('d');
      // console.log(myArr);
    // }
    return {
      optionsfilter: filtersArr
      // megaclick, rr
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