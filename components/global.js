var filtersArrSquare = [
  { value: '0-70', label: '0-70' },
  { value: '71-100', label: '71-100' },
  { value: '101-150', label: '101-150' },
  { value: '151-200', label: '151-200' },
];

var squareG = { value: filtersArrSquare[0].value };

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
  { label: 'ТЗБ', value: true },
  { label: 'ПТЗ', value: false },
  { label: 'Газ', value: false },
  { label: 'Ростех', value: false },
  { label: 'МосгорБТИ', value: false },
  { label: 'Согласование', value: false },
  { label: 'Узаконивание', value: false },
  { label: 'ГБУ ЭЦ', value: false },
  { label: 'МНИИТЭП', value: false },
  { label: 'Разделение', value: false },
  { label: 'Объединение', value: false },
  { label: 'Рабочка', value: false },
];



var servicesname = [
  { "id": 1, "filter": "Согласование , Узаконивание, ПТЗ, ТЗБ", "shortname": "Наш предварительный выезд", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации", "price1": 5000, "price2": 100, "price3": 100, "price4": 100, "time": 1, "document": "Заключение о возможности согласования перепланировки в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" },
  { "id": 2, "filter": "ГБУ ЭЦ", "shortname": "Предварительный выезд с ГБУ", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из ГБУ «Экспертный центр»", "price1": 15000, "price2": 100, "price3": 100, "price4": 100, "time": 10, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из ГБУ «Экспертный центр» в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" },
  { "id": 3, "filter": "МНИИТЭП", "shortname": "Предварительный выезд с МНИИТЭП", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из АО «МНИИТЭП»", "price1": 15000, "price2": 100, "price3": 100, "price4": 100, "time": 10, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из АО «МНИИТЭП» в ввиде текстового электронного письма без предоставления распечатанного экземпляра", "count": "1 (один)" },
  { "id": 4, "filter": "Согласование", "shortname": "Получение ЕГРН", "name": "Получение первоначальной выписки из ЕГРН на Помещение", "price1": 3000, "price2": 100, "price3": 100, "price4": 100, "time": 5, "document": "Первоначальная выписка из ЕГРН (с неузаконенной перепланировкой, в PDF формате с ЭЦП)", "count": "1 (один)" },
  { "id": 5, "filter": "Согласование, Объединение", "shortname": "Получение ЕГРН на 2 Помещения", "name": "Получение первоначальных выпискок из ЕГРН на Помещения", "price1": 6000, "price2": 100, "price3": 100, "price4": 100, "time": 5, "document": "Первоначальные выписки из ЕГРН на два Помещения (с неузаконенной перепланировкой, в PDF формате с ЭЦП)", "count": "1 (один)" },
];

var filtersG = { content: ['Газ'] };
var testObject = { name: 'Damir' };

const { createApp, ref, computed, watch, onMounted } = Vue;
const { useQuasar } = Quasar;

var AppObject = {
  name: 'global',
  components: ['filters', 'filtersSquare'],
  data() {
    return {
      square: squareG,
      filters: filtersG,
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
      console.log('',)
    },
    megaclick() {
      testObject.name = "Vasya";
      console.log(testObject.name);
      console.log(person);

      // filtersArrCheck.push({value: 'test', check: true})
      // console.log(filtersArrCheck);
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