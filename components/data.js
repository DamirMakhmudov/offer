selectedDocuments = [
  { "id": 1, "name": "Эскиз перепланировки с указанием возводимых / демонтируемых стен, сантехники, дверей / проемов, встроенных шкафов и верхнего покрытия пола в каждой комнате", "count": "1 (один)", "filter": "Всегда" },
  { "id": 2, "name": "Скан-копия документации из ГБУ «МосгорБТИ» или АО «Ростехинвентаризация – Федеральное БТИ» на Помещение (экспликация и поэтажный план или технический паспорт)", "count": "1 (один)", "filter": "Всегда" },
  { "id": 3, "name": "Скан-копия архивных данных из ГБУ «МосгорБТИ» или АО «Ростехинвентаризация – Федеральное БТИ» на Помещени (экспликация и поэтажный план или технический паспорт)", "count": "1 (один)", "filter": "Всегда" },
  { "id": 4, "name": "Скан-копия паспортов всех собственников Помещения", "count": "1 (один)", "filter": "Узаконивание, Согласование" },
  { "id": 5, "name": "Оригинал нотариальной доверенности на бумажном носителе (содержание доверенности согласовывается с Исполнителем), а также доверенность в виде электронного документа, заверенная электронной подписью нотариуса.", "count": "1 (один)", "filter": "Узаконивание, Согласование" },
  { "id": 6, "name": "Справка с АО «МОСГАЗ» о правильности подключения газовой плиты (требуется перед вызовом комиссии после ремонта)", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
  { "id": 7, "name": "Справка с АО «МОСГАЗ» об отключении Помещения от газоснабжения (требуется перед вызовом комиссии после ремонта)", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
  { "id": 8, "name": "Справка от управляющей компании о выделенной электрической мощности на Помещение", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
  { "id": 9, "name": "Дизайн-проект Помещения с указанием мест расположения и характеристик устраиваемого оборудования для подготовки рабочей документации", "count": "1 (один)", "filter": "ТЗБ" },
  { "id": 10, "name": "Технические условия на Помещение от управляющей компании.", "count": "1 (один)", "filter": "Рабочка" }
];

selectedAdditional = [

];

var view = {
  filterOffer: [
    { "label": "Copy of Коммерческое предложение", "value": "1ZhY0nEEJK-6HiIuM-rHN2H2uem2Htaia5jFgqC9KmeU" },
    { "label": "Коммерческое предложение", "value": "17ocUkGrgPPbxwOWF40uob6JsnRwsV5X3edO6a5LNy3c" }
  ],

  filterProfile: [
    { "label": "Шаблон 1", "value": "template1" },
    { "label": "Шаблон 2", "value": "template2" }
  ],

  filterFormat: [
    { "label": "Google Doc", "value": true },
    { "label": "PDF", "value": false }
  ],

  filterSquare: [
    { "value": "price1", "label": "0-70" },
    { "value": "price2", "label": "71-100" },
    { "value": "price3", "label": "101-150" },
    { "value": "price4", "label": "151-200" },
  ],

  filterCategories: [
    { "label": "ПТЗ", "value": "ПТЗ" },
    { "label": "ТЗБ", "value": "ТЗБ" },
    { "label": "Газ", "value": "Газ" },
    { "label": "Ростех", "value": "Ростех" },
    { "label": "МосгорБТИ", "value": "МосгорБТИ" },
    { "label": "Согласование", "value": "Согласование" },
    { "label": "Узаконивание", "value": "Узаконивание" },
    { "label": "ГБУ ЭЦ", "value": "ГБУ ЭЦ" },
    { "label": "МНИИТЭП", "value": "МНИИТЭП" },
    { "label": "Разделение", "value": "Разделение" },
    { "label": "Объединение", "value": "Объединение" },
    { "label": "Рабочка", "value": "Рабочка" }
  ],

  filterPayments: [
    { "label": "Согласование", "value": "Согласование" },
    { "label": "ТЗБ", "value": "ТЗБ" },
    { "label": "ПТЗ", "value": "ПТЗ" },
    { "label": "Узаконивание", "value": "Узаконивание" },
    { "label": "Рабочка", "value": "Рабочка" }
  ],

  columns: [
    { "type": "textarea", "name": "name", "label": "Наименование", "align": "left", "style": "max-width: 500px; overflow: hidden; text-overflow: ellipsis" },
    { "type": "textarea", "name": "comment", "label": "Комментарий", "align": "left", "style": "max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap" },
    { "type": "number", "name": "price", "label": "Сумма", "align": "center" },
    { "type": "textarea", "name": "time", "label": "Срок оказания услуги, раб. дни", "align": "center" },
    { "type": "textarea", "name": "document", "label": "Документы", "align": "left", "style": "max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap" },
    { "type": "textarea", "name": "count", "label": "Количество", "align": "center" }
  ],

  columnsPayment: [
    { "name": "name", "label": "Наименование", "align": "left", "style": "width: 70%" },
    { "name": "price", "label": "Стоимость", "align": "center" }
  ],

  columnsAdditional: [
    { "name": "name", "label": "Наименование", "align": "left", "style": "width: 60%" },
    { "name": "time", "label": "Срок оказания услуги, раб. дни", "align": "center" },
    { "name": "price", "label": "Стоимость", "align": "center" }
  ],

  columnsDocuments: [
    { "name": "name", "label": "Наименование", "align": "left", "style": "width: 70%" },
    { "name": "count", "label": "Кол-во экз.", "align": "center" }
  ]
}

var model = {
  fields: {
    // common
    firstname: "",
    surname: "",
    patronymic: "",
    phonenumber: "",
    email: "",
    passportnumber: "",
    passportdate:"",
    passportdepartmentcode: "",
    contractdate:"",
    workdays: 3,
    contractnumber: "",
    payment1: 100,
    payment2: 200,
    payment3: 300,
    payment4: 400,
    payment5: 500,
    // legal entity
    inn: "",
    kpp: "",
    bik: "",
    ogrn: "",
    bank: "",
    bankaccount: "",
    correspondentaccount: "",
    pfshort: "",
    pffull: "",
    company: "",
    legalentityaddress: "",
    factaddress: "",
    paymentaccount: ""
  },
  
  selectedOffer: { "val": "" },

  selectedProfile: { "val": "" },

  selectedFormat: { "val": view.filterFormat[0] },

  discount: { "val": 0 },

  square: { "val": "" },

  categories: { "val": [] },

  payments: { "val": [] },

  rows: [
    { "id": 1, "filter": "Эл.БТИ", "name": "Получение данных из ГБУ «МосгорБТИ» в электронном виде (формат PDF, необходим для внутреннего пользования).", "template1": "", "template2": "", "comment": "Электронные данные необходимые для подготовки проектной документации.", "price": 0, "price1": 3000, "price2": 3000, "price3": 3000, "price4": 3000, "time": 5, "document": "План Помещения с экспликацией (в PDF формате).", "count": "1 (один)" },
    { "id": 2, "filter": "Эл.БТИ", "name": "Получение данных из ГБУ «МосгорБТИ» по выше расположенному этажу в электронном виде (формат PDF, необходим для внутреннего пользования).", "template1": "", "template2": "", "comment": "", "price": 0, "price1": 3000, "price2": 3000, "price3": 3000, "price4": 3000, "time": 5, "document": "План Помещения с экспликацией по выше расположенному этажу (в PDF формате).", "count": "2 (один)" },
    { "id": 3, "filter": "Эл.БТИ", "name": "Получение данных из ГБУ «МосгорБТИ» по ниже расположенному этажу в электронном виде (формат PDF, необходим для внутреннего пользования).", "template1": "", "template2": "", "comment": "", "price": 0, "price1": 3000, "price2": 3000, "price3": 3000, "price4": 3000, "time": 5, "document": "План Помещения с экспликацией по ниже расположенному этажу (в PDF формате).", "count": "3 (один)" },
    { "id": 4, "filter": "ПТЗ, ТЗБ", "name": "Обмер Помещения с целью определения возможности согласования переустройства и/или перепланировки и подготовки документации.", "template1": true, "template2": true, "comment": "Необходим, чтобы выявить все возможные нюансы сразу, например - ошибки БТИ.", "price": 0, "price1": 5000, "price2": 5000, "price3": 10000, "price4": 10000, "time": 3, "document": "Заключение о возможности согласования перепланировки в виде текстового электронного письма без предоставления распечатанного экземпляра.", "count": "1 (один)" },
    { "id": 5, "filter": "ГБУ ЭЦ", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из ГБУ «Экспертный центр».", "template1": "", "template2": true, "comment": "Это нужно, чтобы выявить возможность затрагивания несущих конструкций и сформировать точное коммерческое предложение заранее. Могут понадобится вскрытия.", "price": 0, "price1": 15000, "price2": 15000, "price3": 20000, "price4": 20000, "time": 5, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из ГБУ «Экспертный центр» в виде текстового электронного письма без предоставления распечатанного экземпляра.", "count": "1 (один)" },
    { "id": 6, "filter": "МНИИТЭП", "name": "Обмер Помещения с целью определения возможности переустройства и/или перепланировки и подготовки документации c представителем из АО «МНИИТЭП».", "template1": "", "template2": "", "comment": "Это нужно, чтобы выявить возможность устройства проема в несущей стене и сформировать точное коммерческое предложение заранее. Необходимо предоставить доступ к соседям сверху и снизу , а также сделать вскрытие.", "price": 0, "price1": 15000, "price2": 15000, "price3": 20000, "price4": 20000, "time": 5, "document": "Заключение о возможности согласования перепланировки с учетом консультации специалиста из АО «МНИИТЭП» в виде текстового электронного письма без предоставления распечатанного экземпляра.", "count": "1 (один)" },
    { "id": 7, "filter": "Согласование", "name": "Получение первоначальной выписки из ЕГРН на Помещение.", "template1": "", "template2": "", "comment": "Требуется для проверки права собственности на объект недвижимости.", "price": 0, "price1": 3000, "price2": 3000, "price3": 3000, "price4": 3000, "time": 3, "document": "Первоначальная выписка из ЕГРН (с неузаконенной перепланировкой, в PDF формате с ЭЦП).", "count": "1 (один)" },
    { "id": 8, "filter": "Объединение", "name": "Получение первоначальных выписок из ЕГРН на Помещения.", "template1": "", "template2": "", "comment": "Требуется для проверки права собственности на объект недвижимости.", "price": 0, "price1": 6000, "price2": 6000, "price3": 6000, "price4": 6000, "time": 3, "document": "Первоначальные выписки из ЕГРН на два Помещения (с неузаконенной перепланировкой, в PDF формате с ЭЦП).", "count": "1 (один)" },
    { "id": 9, "filter": "Восстановление", "name": "Подготовка проекта восстановительных работ по перепланировке и переустройству Помещения.", "template1": "", "template2": "", "comment": "В проекте будет указано, как необходимо восстановить помещение, чтобы все соответствовало действующим нормам.", "price": 0, "price1": 25000, "price2": 30000, "price3": 35000, "price4": 40000, "time": 12, "document": "Проект восстановительных работ по перепланировке и переустройству Помещения (в PDF формате с ЭЦП).", "count": "1 (один)" },
    { "id": 10, "filter": "Восстановление", "name": "Осмотр Помещения после восстановительных работ по перепланировке и переустройству.", "template1": "", "template2": "", "comment": "Необходим для проверки помещения после восстановительных работ, перед проведением дальнейших согласований.", "price": 0, "price1": 5000, "price2": 5000, "price3": 10000, "price4": 10000, "time": 3, "document": "Заключение о возможности согласования перепланировки после восстановительных работ по перепланировке и переустройству в виде текстового электронного письма без предоставления распечатанного экземпляра.", "count": "1 (один)" },
    { "id": 11, "filter": "МосгорБТИ", "name": "Получение первичного технического паспорта ГБУ «МосгорБТИ» с проведением обследования.", "template1": "", "template2": "", "comment": "Понадобится предоставить доступ специалисту из БТИ. В стоимость услуги не входит госпошлина (на помещение до 100м2 около 15.000р.).", "price": 0, "price1": 15000, "price2": 15000, "price3": 15000, "price4": 15000, "time": 25, "document": "Первичный технический паспорт ГБУ «МосгорБТИ».", "count": "1 (один)" },
    { "id": 12, "filter": "Объединение", "name": "Получение первичных технических паспортов ГБУ «МосгорБТИ» с проведением обследования на два Помещения.", "template1": "", "template2": "", "comment": "Понадобится предоставить доступ специалисту из БТИ. В стоимость услуги не входит госпошлина (на помещение до 100м2 около 15.000р.).", "price": 0, "price1": 25000, "price2": 25000, "price3": 25000, "price4": 25000, "time": 25, "document": "Первичные технические паспорта ГБУ «МосгорБТИ» на два Помещения.", "count": "1 (один)" },
    { "id": 13, "filter": "МосгорБТИ", "name": "Получение обновленного технического паспорта ГБУ «МосгорБТИ» с проведением обследования.", "template1": "", "template2": "", "comment": "Понадобится предоставить доступ специалисту из БТИ. В стоимость услуги не входит госпошлина (на помещение до 90м2 около 15.000р., на помещение от 90 до 150м2 около 22.000р.).", "price": 0, "price1": 15000, "price2": 15000, "price3": 15000, "price4": 15000, "time": 25, "document": "Технический паспорт ГБУ «МосгорБТИ» с первоначальной планировкой.", "count": "1 (один)" },
    { "id": 14, "filter": "Объединение", "name": "Получение обновленных технических паспортов ГБУ «МосгорБТИ» с проведением обследования на два Помещения.", "template1": "", "template2": "", "comment": "Понадобится предоставить доступ специалисту из БТИ. В стоимость услуги не входит госпошлина (на помещение до 90м2 около 15.000р., на помещение от 90 до 150м2 около 22.000р.).", "price": 0, "price1": 25000, "price2": 25000, "price3": 25000, "price4": 25000, "time": 25, "document": "Технические паспорта ГБУ «МосгорБТИ» с первоначальной планировкой на два Помещения.", "count": "1 (один)" },
    { "id": 15, "filter": "Ростех", "name": "Получение первичного технического паспорта АО «Ростехинвентаризация – Федеральное БТИ».", "template1": "", "template2": "", "comment": "Документ необходимый для дальнейшего согласования. В стоимость услуги не входит оф. платеж (на помещение до 90м2 около 15.000р., на помещение от 90 до 150м2 около 22.000р.).", "price": 0, "price1": 20000, "price2": 20000, "price3": 25000, "price4": 25000, "time": 30, "document": "Первичный технический паспорт АО «Ростехинвентаризация – Федеральное БТИ».", "count": "1 (один)" },
    { "id": 16, "filter": "Объединение", "name": "Получение первичных технических паспортов АО «Ростехинвентаризация – Федеральное БТИ» с проведением обследования на два Помещения.", "template1": "", "template2": true, "comment": "Документы необходимые для дальнейшего согласования. В стоимость услуги не входит оф. платеж (на помещение до 90м2 около 15.000р., на помещение от 90 до 150м2 около 22.000р.).", "price": 0, "price1": 60000, "price2": 70000, "price3": 80000, "price4": 90000, "time": 25, "document": "Первичные технические паспорта АО «Ростехинвентаризация – Федеральное БТИ» на два Помещения.", "count": "1 (один)" },
    { "id": 17, "filter": "МосгорБТИ", "name": "Получение архивных данных из ГБУ «МосгорБТИ».", "template1": "", "template2": "", "comment": "В стоимость услуги не входит гос. пошлина (около 3.000р., считается индивидуально в БТИ)", "price": 0, "price1": 5000, "price2": 5000, "price3": 5000, "price4": 5000, "time": 25, "document": "Архивный план и экспликация из ГБУ «МосгорБТИ».", "count": "1 (один)" },
    { "id": 18, "filter": "Объединение", "name": "Получение архивных данных из ГБУ «МосгорБТИ» на два Помещения.", "template1": "", "template2": "", "comment": "В стоимость услуги не входит гос. пошлина (около 3.000р., считается индивидуально в БТИ)", "price": 0, "price1": 5000, "price2": 5000, "price3": 5000, "price4": 5000, "time": 25, "document": "Архивный план и экспликация из ГБУ «МосгорБТИ» на два Помещения.", "count": "1 (один)" }
  ],

  rowsPayment: [
    { "id": 1, "name": "Перед выездом на объект для проведения обмера Помещения с целью определения возможности переустройства и/или перепланировки", "price": 5000, "filter": "Согласование" },
    { "id": 2, "name": "После выезда на объект для проведения обмера Помещения , при условии, отсутствия обстоятельств, препятствующих исполнению договора", "price": 20000, "filter": "Согласование" },
    { "id": 3, "name": "После получения разрешения на переустройство и/или перепланировку Помещения", "price": 35000, "filter": "Согласование" },
    { "id": 4, "name": "Перед выездом на обмер Помещения после произведенной перепланировки с целью проверки соответветвия ранее согласованной проектно-технической документации", "price": 5000, "filter": "Согласование" },
    { "id": 5, "name": "После получения технического паспорта на Помещение с узаконенной перепланировкой", "price": 10000, "filter": "Согласование" },
    { "id": 6, "name": "Перед выездом на объект для проведения обмера Помещения с целью определения возможности переустройства и/или перепланировки", "price": 5000, "filter": "ПТЗ" },
    { "id": 7, "name": "После выезда на объект для проведения обмера Помещения , при условии, отсутствия обстоятельств, препятствующих исполнению договора", "price": 20000, "filter": "ПТЗ" },
    { "id": 8, "name": "Перед выездом на объект для проведения обмера Помещения с целью определения возможности переустройства и/или перепланировки", "price": 5000, "filter": "ТЗБ" },
    { "id": 9, "name": "После выезда на объект для проведения обмера Помещения , при условии, отсутствия обстоятельств, препятствующих исполнению договора", "price": 20000, "filter": "ТЗБ" },
    { "id": 10, "name": "Перед выездом на объект для проведения обмера Помещения с целью определения возможности переустройства и/или перепланировки", "price": 5000, "filter": "Узаконивание" },
    { "id": 11, "name": "После выезда на объект для проведения обмера Помещения , при условии, отсутствия обстоятельств, препятствующих исполнению договора", "price": 25000, "filter": "Узаконивание" },
    { "id": 12, "name": "После подготовки проектно-технической требующейся для подачи в МосЖилИнспекцию", "price": 30000, "filter": "Узаконивание" },
    { "id": 13, "name": "После получения акта о завершенном переустройстве и/или перепланировки Помещения", "price": 10000, "filter": "Узаконивание" },
    { "id": 14, "name": "После получения технического паспорта на Помещение с узаконенной перепланировкой", "price": 5000, "filter": "Узаконивание" },
    { "id": 15, "name": "Тестовое", "price": 5000, "filter": "Рабочка" }
  ],

  rowsAdditional: [
    { "id": 1, "name": "В случае, если в ходе обследования обнаружатся ошибки в планах БТИ по квартире (не верно указано окно, проем в несущей стене и т.д.). Это необходимо сделать, чтобы инспектор из МосЖилИнспекции не думал, что эти изменения сделали Вы", "time": 2, "price": "от 10000 до 30000" },
    { "id": 2, "name": "Подготовка тех.палана для внесениея изменений в ЕГРН", "time": 3, "price": 25000 },
    { "id": 3, "name": "По требованию МосЖилИнспекции все строительные работы должны производить лицензированные специалисты с допуском СРО. Помощь в подписании необходимых актов в случае, когда Ваши специалисты не обладают подобным допуском", "time": 4, "price": 15000 },
    { "id": 4, "name": "Алмазная резка и усиление проема в несущей стене", "time": 5, "price": 50000 }
  ],

  rowsDocuments: [
    { "id": 1, "name": "Эскиз перепланировки с указанием возводимых / демонтируемых стен, сантехники, дверей / проемов, встроенных шкафов и верхнего покрытия пола в каждой комнате", "count": "1 (один)", "filter": "Всегда" },
    { "id": 2, "name": "Скан-копия документации из ГБУ «МосгорБТИ» или АО «Ростехинвентаризация – Федеральное БТИ» на Помещение (экспликация и поэтажный план или технический паспорт)", "count": "1 (один)", "filter": "Всегда" },
    { "id": 3, "name": "Скан-копия архивных данных из ГБУ «МосгорБТИ» или АО «Ростехинвентаризация – Федеральное БТИ» на Помещени (экспликация и поэтажный план или технический паспорт)", "count": "1 (один)", "filter": "Всегда" },
    { "id": 4, "name": "Скан-копия паспортов всех собственников Помещения", "count": "1 (один)", "filter": "Узаконивание, Согласование" },
    { "id": 5, "name": "Оригинал нотариальной доверенности на бумажном носителе (содержание доверенности согласовывается с Исполнителем), а также доверенность в виде электронного документа, заверенная электронной подписью нотариуса.", "count": "1 (один)", "filter": "Узаконивание, Согласование" },
    { "id": 6, "name": "Справка с АО «МОСГАЗ» о правильности подключения газовой плиты (требуется перед вызовом комиссии после ремонта)", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
    { "id": 7, "name": "Справка с АО «МОСГАЗ» об отключении Помещения от газоснабжения (требуется перед вызовом комиссии после ремонта)", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
    { "id": 8, "name": "Справка от управляющей компании о выделенной электрической мощности на Помещение", "count": "1 (один)", "filter": "Газ, Узаконивание, Согласование" },
    { "id": 9, "name": "Дизайн-проект Помещения с указанием мест расположения и характеристик устраиваемого оборудования для подготовки рабочей документации", "count": "1 (один)", "filter": "ТЗБ" },
    { "id": 10, "name": "Технические условия на Помещение от управляющей компании.", "count": "1 (один)", "filter": "Рабочка" }
  ],

  selected: { "val": [] },

  selectedPayment: { "val": [] },

  selectedAdditional: { "val": [] },

  selectedDocuments: { "val": [] },

  amountServices: { "val": 0 },

  amountPayments: { "val": 0 },

  amountTime: { "val": 0 }
}

// test();

function test() {

  let email = "samrukov@gmail.com"

  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  console.log(reg.test(email));

  // let
  //   arr = model.rows,
  //   filters = ['МосгорБТИ', 'Объединение'],
  //   frows = model.rows.filter(row => (
  //     filters.filter(i => { return (row.filter.split(', ').indexOf(i) > -1); }).length >= filters.length
  //   ));
  // console.log('length', frows.length);
  // frows.forEach(row => { console.log(row.id) })

  // const red = (acc, cur) => +acc + cur.price1;
  // let sum = arr.reduce(red);

  let findrow = selectedAdditional[0];
  let idx = model.selectedAdditional.val.indexOf(findrow);
  // console.log(idx)
}