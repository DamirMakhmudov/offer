const columns2 = [
  { name: 'name', align: 'left', label: 'Dessert (100g serving)', field: 'name' },
  { name: 'calories', align: 'center', label: 'Calories!', field: 'calories1' },
  { name: 'fat', label: 'Fat (g)', field: 'fat' },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium' },
  { name: 'iron', label: 'Iron (%)', field: 'iron' }
]

const columns = [
  { name: 'name', label: 'Наименование', field: 'name', align: 'left', style: 'max-width: 30%px; width: 600px'},
  { name: 'price1', label: '0-70', field: 'price1', align: 'center'},
  { name: 'price2', label: '71-100', field: 'price2', align: 'center'},
  { name: 'price3', label: '101-150', field: 'price3', align: 'center'},
  { name: 'price4', label: '151-200', field: 'price4', align: 'center'},
  { name: 'time', label: 'Срок оказания услуги, раб. дни', field: 'time', align: 'center'}
]

const rows = [
  {id:1,name:"Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации",price1:5000,price2:100,price3:100,price4:100,time:1,filter:"Согласование , Узаконивание, ПТЗ, ТЗБ",document:"Заключение о возможности согласования перепланировки в ввиде текстового электронного письма без предоставления распечатанного экземпляра",count:"1 (один)"},
  {id:2,name:"Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из ГБУ «Экспертный центр»",price1:15000,price2:100,price3:100,price4:100,time:10,filter:"ГБУ ЭЦ",document:"Заключение о возможности согласования перепланировки с учетом консультации специалиста из ГБУ «Экспертный центр» в ввиде текстового электронного письма без предоставления распечатанного экземпляра",count:"1 (один)"},
  {id:3,name:"Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из АО «МНИИТЭП»",price1:15000,price2:100,price3:100,price4:100,time:10,filter:"МНИИТЭП",document:"Заключение о возможности согласования перепланировки с учетом консультации специалиста из АО «МНИИТЭП» в ввиде текстового электронного письма без предоставления распечатанного экземпляра",count:"1 (один)"},
  {id:4,name:"Получение первоначальной выписки из ЕГРН на Помещение",price1:3000,price2:100,price3:100,price4:100,time:5,filter:"Согласование",document:"Первоначальная выписка из ЕГРН (с неузаконенной перепланировкой, в PDF формате с ЭЦП)",count:"1 (один)"},
  {id:5,name:"Получение первоначальных выпискок из ЕГРН на Помещения",price1:6000,price2:100,price3:100,price4:100,time:5,filter:"Согласование, Объединение",document:"Первоначальные выписки из ЕГРН на два Помещения (с неузаконенной перепланировкой, в PDF формате с ЭЦП)",count:"1 (один)"},
  {id:6,name:"Подготовка проекта востановительных работ по перепланировке и переустройству Помещения",price1:25000,price2:100,price3:100,price4:100,time:10,filter:"Согласование",document:"Проект востановительных работ по перепланировке и переустройству Помещения (в PDF формате с ЭЦП)",count:"1 (один)"},
  {id:7,name:"Получение данных из ГБУ «МосгорБТИ» в электронном виде (формат PDF, необходим для внутреннего пользования)",price1:3000,price2:100,price3:100,price4:100,time:3,filter:"МосгорБТИ",document:"План Помещения с экспликацией (в PDF формате)",count:"1 (один)"},
  {id:8,name:"Получение данных из ГБУ «МосгорБТИ» по выше расположенному этажу в электронном виде (формат PDF, необходим для внутреннего пользования)",price1:3000,price2:100,price3:100,price4:100,time:1,filter:"МосгорБТИ",document:"План Помещения с экспликацией по выше расположенному этажу (в PDF формате)",count:"2 (один)"},
  {id:9,name:"Получение данных из ГБУ «МосгорБТИ» по ниже расположенному этажу в электронном виде (формат PDF, необходим для внутреннего пользования)",price1:3000,price2:100,price3:100,price4:100,time:1,filter:"МосгорБТИ",document:"План Помещения с экспликацией по ниже расположенному этажу (в PDF формате)",count:"3 (один)"},
  {id:10,name:"Получение первичного технического паспорта ГБУ «МосгорБТИ» с проведением обследования",price1:30000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ",document:"Первичный технический паспорт ГБУ «МосгорБТИ»",count:"1 (один)"},
  {id:11,name:"Получение первичных технических паспортов ГБУ «МосгорБТИ» с проведением обследования на два Помещения",price1:60000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ, Объединение",document:"Первичные технические паспорта ГБУ «МосгорБТИ» на два Помещения",count:"1 (один)"},
  {id:12,name:"Получение обновленного технического паспорта ГБУ «МосгорБТИ» с проведением обследования",price1:30000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ",document:"Технический паспорт ГБУ «МосгорБТИ» с первоначальной планировкой",count:"1 (один)"},
  {id:13,name:"Получение обновленных технических паспортов ГБУ «МосгорБТИ» с проведением обследования на два Помещения",price1:60000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ, Объединение",document:"Технические паспорта ГБУ «МосгорБТИ» с первоначальной планировкой на два Помещения",count:"1 (один)"},
  {id:14,name:"Получение первичного технического паспорта АО «Ростехинвентаризация – Федеральное БТИ»",price1:30000,price2:100,price3:100,price4:100,time:20,filter:"Ростех",document:"Первичный технический паспорт АО «Ростехинвентаризация – Федеральное БТИ»",count:"1 (один)"},
  {id:15,name:"Получение первичных технических паспортов АО «Ростехинвентаризация – Федеральное БТИ» с проведением обследования на два Помещения",price1:60000,price2:100,price3:100,price4:100,time:20,filter:"Ростех, Объединение",document:"Первичные технические паспорта АО «Ростехинвентаризация – Федеральное БТИ» на два Помещения",count:"1 (один)"},
  {id:16,name:"Получение архивных данных из ГБУ «МосгорБТИ»",price1:15000,price2:100,price3:100,price4:100,time:25,filter:"МосгорБТИ",document:"Архивный план и экспликация из ГБУ «МосгорБТИ»",count:"1 (один)"},
  {id:17,name:"Получение архивных данных из ГБУ «МосгорБТИ» на два Помещения",price1:15000,price2:100,price3:100,price4:100,time:25,filter:"МосгорБТИ, Объединение",document:"Архивный план и экспликация из ГБУ «МосгорБТИ» на два Помещения",count:"1 (один)"},
  {id:18,name:"Получение технического паспорта ГБУ «МосгорБТИ» в \"красных линиях\" (с неузаконенной перепланировкой)",price1:30000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ, Узаконивание",document:"Технический паспорт ГБУ «МосгорБТИ» в \"красных линиях\" (с неузаконенной перепланировкой)",count:"1 (один)"},
  {id:19,name:"Получение технических паспортов ГБУ «МосгорБТИ» в \"красных линиях\" на два Помещения (с неузаконенной перепланировкой)",price1:30000,price2:100,price3:100,price4:100,time:20,filter:"МосгорБТИ, Узаконивание, Объединение ",document:"Технические паспорта ГБУ «МосгорБТИ» в \"красных линиях\" на два Помещения (с неузаконенной перепланировкой)",count:"1 (один)"},
  {id:20,name:"Получение технического заключения о возможности переустройства и/или перепланировки, затрагивающей несущие конструкции от авторов проекта здания - АО «МНИИТЭП»",price1:25000,price2:100,price3:100,price4:100,time:40,filter:"МНИИТЭП, Согласование",document:"Техническое заключение о состоянии несущих конструкций Помещения выполненное АО «МНИИТЭП»",count:"1 (один)"}
];

const rows2 = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]