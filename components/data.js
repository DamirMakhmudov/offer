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

  filterContract: [
    { "label": "Рабочие проекты", "value": "1ModfPq9MrXVPhjfLK-iQC3zkE8HZUMq0KBb0SyEK4hU" },
    { "label": "Дополнительное соглашение Замена БТИ на Ростех (юр. лицо) (&&&)", "value": "1ozPtsUFycvBds3CXK71xjudz5pha6PiIvem8xxasyCo" },
    { "label": "(ИП Замятин) ПТЗ,ТЗБ (с юр. лицом)", "value": "1Mi-Q5O9c3X84WHmQPPg0Aas6DIPKWX63Pj7VObsRx54" },
    { "label": "(ИП Замятин) С+ПТЗ (с юр. лицом)", "value": "14TBfHB7NyVx1xvbm5ZNuI_VlQoXU6yKwoGIN6k3PA_A" },
    { "label": "(ИП Замятин) У + ТЗБ (с юр. лицом)", "value": "1UWyNhgo4J7P71Agu8thdCREPEY1pwjvB2Tf5jtZE1y4" },
    { "label": "ПТЗ,ТЗБ (с юр. лицом)", "value": "1w3UPO89NVCqZHjcX8pQxMo2cUx0OkcHYmV82_PUo_xQ" },
    { "label": "С+ПТЗ (с юр. лицом)", "value": "1IMUyW5LSNJgEwGorNiJgeLtSa-wd2GO9n3VmpZnTx48" },
    { "label": "У + ТЗБ (с юр. лицом)", "value": "12TchjCanbh8kQ94P89CYNM-jJ7KCm3ANywUMq0dpP08" },
    { "label": "У+ТЗБ (с ИП)", "value": "1n7vMMOXRLgnH2AxGCkYMi0g5gDTsApHie5ZaGr7_-uo" },
    { "label": "ПТЗ,ТЗБ (с ИП)", "value": "1xNc0xTHLYlr69TPzNgbEtyUak2simGp9WDh_ETZ8Dls" },
    { "label": "С+ПТЗ (с ИП)", "value": "1SMME8uNsVX3kXUthkMh8ArjRD-YiRL0qopmT9lPg02o" },
    { "label": "ПТЗ,ТЗБ", "value": "1gwnp5wR63obO3nWJHR43iXPoWOmVyXJLsvziqs73BAs" },
    { "label": "(ИП Замятин) С+ПТЗ", "value": "1-A8ruQpHK6WL-otiFDI8e7jdqQ-CQuIqShg2PUecuIk" },
    { "label": "(ИП Замятин) С+ПТЗ (с ИП)", "value": "1Ht-mPQM-5x2FhAcgaGrAQI87rynpF7dHoy0t3qvYk2g" },
    { "label": "(ИП Замятин) У+ТЗБ", "value": "1xg6B2I0lBhs0Bo-Y82_tQjzKCvPaSLzBGki2AbhJyTU" },
    { "label": "(ИП Замятин) У+ТЗБ (с ИП)", "value": "18bniEqU4eqNyg5jDG4oEtPthFnjBoX_rHBSBnb_X80Y" },
    { "label": "НЕЖИЛОЕ ПТЗ+БТИ+ЕГРН  НОВЫЙ", "value": "19dsA_rbRArULuIVGOURyi5cGfUaTXTgoob1vC5amnnA" },
    { "label": "(ИП Замятин) ПТЗ,ТЗБ", "value": "1TsJ7ZTKH8ZbtdDmA6nQsAf7Ka_uCLKmo8B8Tf93GYyk" },
    { "label": "(ИП Замятин) ПТЗ,ТЗБ (с ИП)", "value": "1UVUJ9u7Zrhv5Ji30PrHgBdOpXICEQ6VRQVlLHLx7uJE" },
    { "label": "С+ПТЗ", "value": "1WjSMDdy-XqpPNHR49Aouln-OwOjYSQdmbhrZuaHMD_Q" },
    { "label": "У+ТЗБ", "value": "17VE3BLv0kqQ8340DqQHC-KDpEahXKfLujc6yr2E6CEw" },
    { "label": "Тех.план с внесением 2 платежа (&&&)", "value": "1B0QuCj4Sc3UXoQxF8neHcyhg8dbKkIhYwm3VdIBe9Dg" },
    { "label": "Тех.надзор", "value": "1hjohU6hvvlnkcQHiQjovyioamx1v64cGbVprVsBzgro" },
    { "label": "( ИП Замятин) Рабочие проекты (с ИП)", "value": "1L1etAxdbJcCbAFiwc7Sz8CT0FSdKEuEwo-mGjAXVANY" },
    { "label": "( ИП Замятин ) Рабочие проекты", "value": "1EdneuKHQMU2PlJcJyW37GKbk8zCiVrgziyUaCQcBfqQ" },
    { "label": "Рабочие проекты (с ИП)", "value": "1uCfZEtPVGfymAUe7Z6SiwzrTJj4H4ho-fhDbg4C3KU4" },
    { "label": "( ИП Замятин) Рабочие проекты (с Юр. лицом)", "value": "14lq8x4Tw6QLE83zUULrM8XbzrGvuLQS0zJh0cMOBVZU" },
    { "label": "Рабочие проекты (с Юр. лицом)", "value": "1wBbQOmkoJcJ3rgtzMQXJ2KVzAWNsg5jEc04J9N_FmTE" },
    { "label": "КР", "value": "1ceWlz3T9aCxJudlhZO0y9aXmNmhGImlxTDY7EtFrLUE" },
    { "label": "Договор - счет (с юр.лицом) (&&&)", "value": "1Dm4Eim3Wt0_0Cc71kkvQXyR4uwSxxheI7LLVmAHBGsI" },
    { "label": "Договор - счет (с ИП) (&&&)", "value": "1p86BAFknsEOpvf9vu2giQrc6o0ocpDZl1bAxQfo7xBo" },
    { "label": "Договор - счет (&&&)", "value": "1NopwPN4cTGHWd-ft_vecu89kHUauhZXP63jr-ai-vAk" },
    { "label": "Дополнительное соглашение Замена БТИ на Ростех (физ. лицо) (&&&)", "value": "1osHVIzJHf76WHRpo4dgWUx37rrSeZ5xIQUIki9yHn_s" },
    { "label": "Договор - счет (Юр.лицо) ИП Замятин (&&&)", "value": "1vYRsoyXeemakRdo9o9IZA9--1oYnZNdSCYRJyc_oRkY" },
    { "label": "Договор - счет ИП Замятин (&&&)", "value": "1pfr3cmhErUj5--4eTHpZXw7t5I-En1veUvpmthw8AJs" },
    { "label": "Тех.план 1 платеж (&&&)", "value": "1_ch-IQ2GEcD5ndKAtR3l61j_tRxmm9nf_PKWwA-7eqw" },
    { "label": "Для согласователей", "value": "1i_LCGDXNZrtCNAlgmY4zS41q9FGqO6KH-8TN8KqXV2Y" },
    { "label": "НЕЖИЛОЕ ПТЗ+БТИ+ЕГРН  с выездом В РАБОТЕ ", "value": "1bPnVolesom8Z2Txw2mcPRJEmvI8KQV03X9IPB-rZ5jg" }
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

  filterUsers: [
    { "label": "Адам Джанкулаев", "value": "Адам Джанкулаев" }, { "label": "Айдемир Нагоев", "value": "Айдемир Нагоев" }, { "label": "Александр Макаров", "value": "Александр Макаров" }, { "label": "Александра Карасева", "value": "Александра Карасева" }, { "label": "Алексей Калашников", "value": "Алексей Калашников" }, { "label": "Алексей Кугушев", "value": "Алексей Кугушев" }, { "label": "Алина Лагутенко", "value": "Алина Лагутенко" }, { "label": "Альмира Темукуева", "value": "Альмира Темукуева" }, { "label": "Анастасия Блинова", "value": "Анастасия Блинова" }, { "label": "Анастасия Лупащенко", "value": "Анастасия Лупащенко" }, { "label": "Анастасия Мельничук", "value": "Анастасия Мельничук" }, { "label": "Анастасия Сумская", "value": "Анастасия Сумская" }, { "label": "Анастасия Устинова", "value": "Анастасия Устинова" }, { "label": "Андрей Ларин", "value": "Андрей Ларин" }, { "label": "Андрей Маслов", "value": "Андрей Маслов" }, { "label": "Арам Арутюнян", "value": "Арам Арутюнян" }, { "label": "Астемир Валиев", "value": "Астемир Валиев" }, { "label": "Астемир Гучев", "value": "Астемир Гучев" }, { "label": "Вера Паршина", "value": "Вера Паршина" }, { "label": "Виктор Белоконь", "value": "Виктор Белоконь" }, { "label": "Виктория Лукошина", "value": "Виктория Лукошина" }, { "label": "Владимир Михейкин", "value": "Владимир Михейкин" }, { "label": "Григорий Лазаренко", "value": "Григорий Лазаренко" }, { "label": "Дамир", "value": "Дамир" }, { "label": "Дмитрий Горбунов", "value": "Дмитрий Горбунов" }, { "label": "Дмитрий Замятин", "value": "Дмитрий Замятин" }, { "label": "Дмитрий Кайстро", "value": "Дмитрий Кайстро" }, { "label": "Дмитрий Леонов", "value": "Дмитрий Леонов" }, { "label": "Евгения Светлекова", "value": "Евгения Светлекова" }, { "label": "Екатерина Николаенко", "value": "Екатерина Николаенко" }, { "label": "Елена Сумская", "value": "Елена Сумская" }, { "label": "Любовь Куликова", "value": "Любовь Куликова" }, { "label": "Максим Джураев", "value": "Максим Джураев" }, { "label": "Максим Сорока", "value": "Максим Сорока" }, { "label": "Марина Бареева", "value": "Марина Бареева" }, { "label": "Марина Дубицкая", "value": "Марина Дубицкая" }, { "label": "Мария Харитонова", "value": "Мария Харитонова" }, { "label": "Михаил Вальт", "value": "Михаил Вальт" }, { "label": "Наталья Якунина", "value": "Наталья Якунина" }, { "label": "Общий М", "value": "Общий М" }, { "label": "Общий С", "value": "Общий С" }, { "label": "Роман Галахов", "value": "Роман Галахов" }, { "label": "Роман Медведев", "value": "Роман Медведев" }, { "label": "Юлия Емельянова", "value": "Юлия Емельянова" }, { "label": "Юрий Воробец", "value": "Юрий Воробец" }, { "label": "Ярослав Корягин", "value": "Ярослав Корягин" }
  ],

  filterPayments: [
    { "label": "Согласование", "value": "Согласование" },
    { "label": "ТЗБ", "value": "ТЗБ" },
    { "label": "ПТЗ", "value": "ПТЗ" },
    { "label": "Узаконивание", "value": "Узаконивание" },
    { "label": "Рабочка", "value": "Рабочка" }
  ],

  filterPF: [
    { "label": "АО", "value": "АО", "full": "Акционерное общество" },
    { "label": "ГУП", "value": "ГУП", "full": "Государственное унитарное предприятие" },
    { "label": "ЗАО", "value": "ЗАО", "full": "Закрытое акционерное общество" },
    { "label": "ИП", "value": "ИП", "full": "Индивидуальный предприниматель" },
    { "label": "ООО", "value": "ООО", "full": "Общество с ограниченной ответственностью" },
    { "label": "ОАО", "value": "ОАО", "full": "Открытое акционерное общество" },
    { "label": "ТСЖ", "value": "ТСЖ", "full": "Товарищество собственников жилья" },
    { "label": "НКО", "value": "НКО", "full": "Некоммерческая организация" },
    { "label": "ПАО", "value": "ПАО", "full": "Публичное акционерное общество" },
    { "label": "НАО", "value": "НАО", "full": "Непубличное акционерное общество" }
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
  ],

  users2: [
    { "name": "Дамир", "email": "samrukov@gmail.com", "phone": "89274433788" },
    { "name": "Дима", "email": "dima@gmail.com", "phone": "89172463459" }
  ],

  users: {
    "names": ["Адам Джанкулаев", "Айдемир Нагоев", "Александр Макаров", "Александра Карасева", "Алексей Калашников", "Алексей Кугушев", "Алина Лагутенко", "Альмира Темукуева", "Анастасия Блинова", "Анастасия Лупащенко", "Анастасия Мельничук", "Анастасия Сумская", "Анастасия Устинова", "Андрей Ларин", "Андрей Маслов", "Арам Арутюнян", "Астемир Валиев", "Астемир Гучев", "Вера Паршина", "Виктор Белоконь", "Виктория Лукошина", "Владимир Михейкин", "Григорий Лазаренко", "Дамир", "Дмитрий Горбунов", "Дмитрий Замятин", "Дмитрий Кайстро", "Дмитрий Леонов", "Евгения Светлекова", "Екатерина Николаенко", "Елена Сумская", "Любовь Куликова", "Максим Джураев", "Максим Сорока", "Марина Бареева", "Марина Дубицкая", "Мария Харитонова", "Михаил Вальт", "Наталья Якунина", "Общий М", "Общий С", "Роман Галахов", "Роман Медведев", "Юлия Емельянова", "Юрий Воробец", "Ярослав Корягин"],
    "emails": ["adamdzhankulaev@gmail.com", "nagoevajdemir@gmail.com", "i7@pereplan.msk.ru", "5@pereplan.msk.ru", "i0@pereplan.msk.ru", "i10@pereplan.msk.ru", "i2@pereplan.msk.ru", "almira.job1@gmail.com", "anastasiya-blinova-83@mail.ru", "m2@pereplan.msk.ru", "antananariy@gmail.com", "2@pereplan.msk.ru", "m1@pereplan.msk.ru", "s3@pereplan.msk.ru", "masl-a@yandex.ru", "i6@pereplan.msk.ru", "i3@pereplan.spb.ru", "i4@pereplan.msk.ru", "10@pereplan.msk.ru", "i1@pereplan.msk.ru", "vlukoshina@gmail.com", "-", "6@pereplan.msk.ru", "samrukov@gmail.com", "k1@pereplan.msk.ru", "dimazamyatin@bk.ru", "-", "i8@pereplan.msk.ru", "m4@pereplan.msk.ru", "7@pereplan.msk.ru", "12@pereplan.msk.ru", "i9@pereplan.msk.ru", "13@pereplan.msk.ru", "maxim91135@gmail.com", "9@pereplan.msk.ru", "3@pereplan.msk.ru", "8@pereplan.msk.ru", "s2@pereplan.msk.ru", "4@pereplan.msk.ru", "info@pereplan-one.ru", "s1@pereplan.msk.ru", "sapogvs@mail.ru", "-", "m3@pereplan.msk.ru", "dwgautocadpro@gmail.com", "i5@pereplan.msk.ru"],
    "phones": ["89289135526", "89300743997", "89399006415", "89399006410", "89399006416", "89399001095", "89399006404", "89389145569", "89688302886", "89399006412", "89399006398", "89399006401", "89399006396", "89031598522", "89808004523", "89399006414", "89399006409", "89808003561", "89399006405", "89399006408", "89274433788", "89399006403", "89258075049", "89808004521", "89399006417", "89399006413", "89699001834", "89399001096", "89699001832", "89399006406", "89399006407", "89808004520", "89399006419", "89399006402", "84951811309", "84951811309", "89850462253", "89399006397", "89399006395"]
  }
}

var model = {
  id: '19885',
  manager: { "val": "" },
  managerEmail: { "val": "" },
  managerPhone: { "val": "" },
  firstname: "",
  surname: "",
  patronymic: "",
  phonenumber: "",
  shortname: "",
  email: "",
  address: { "val": "" },
  passportnumber: "",
  passportdate: "",
  passportdepartmentcode: "",
  passportdepartment: "",
  customerposition: { "val": "" },
  contractdate: "",
  contractnumber: "",
  payment1: 0,
  payment2: 0,
  payment3: 0,
  payment4: 0,
  payment5: 0,
  inn: "",
  kpp: "",
  bik: "",
  ogrn: "",
  bank: "",
  correspondentaccount: "",
  pfshort: { "val": "" },
  pffull: { "val": "" },
  company: "",
  legalentityaddress: "",
  factaddress: "",
  paymentaccount: "",
  contractNumber: "",
  contractdDate: "",
  selectedOffer: { "val":  { "label": "Copy of Коммерческое предложение", "value": "1ZhY0nEEJK-6HiIuM-rHN2H2uem2Htaia5jFgqC9KmeU" } },
  selectedProfile: { "val": "" },
  selectedContract: { "val": "" },
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
  // amountTime: { "val": 0 },
  amountTime: 0,
}

async function sendGET() {
  let url = 'https://crm.pereplan-one.ru/bitrix/tools/act/update_deal.php';
    // url = 'https://script.google.com/macros/s/AKfycbzUgwNF8Tqs3tmw7sV3ZxWKBDN5bUJ2mfr7mUR5MLrWeCMIvo3GSS4ZfKUbYZN5eXRY/exec',
    // data = {};

  // data["id"] = 1200;
  // data["urlOffer"] = "url address";
  // data["mode"] = "addressesbyengineer";
  // data["engineer"] = "Александр_Макаров";

  let response = await fetch(url, {
    method: 'post',
    muteHttpExceptions: false,
    // mode: 'no-cors', // no-cors, *cors, same-origin, cors
    headers: {
      //'Content-Type': 'application/json',
      // 'Content-Type': "application/json; charset=UTF-8",
      // 'Content-Type': "multipart/form-data",
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data)
  }
    //  ).then(resp =>
    // console.log(resp.json())
  );
  console.log(await response.json());
}

async function sendPOST() {
  let
    url = 'https://crm.pereplan-one.ru/bitrix/tools/act/update_deal.php',
    // url = 'https://script.google.com/macros/s/AKfycbzUgwNF8Tqs3tmw7sV3ZxWKBDN5bUJ2mfr7mUR5MLrWeCMIvo3GSS4ZfKUbYZN5eXRY/exec',
    data = {};

  data["id"] = 1200;
  data["urlOffer"] = "url address";
  // data["mode"] = "addressesbyengineer";
  // data["engineer"] = "Александр_Макаров";

  let response = await fetch(url, {
    method: 'POST',
    muteHttpExceptions: false,
    // mode: 'no-cors', // no-cors, *cors, same-origin, cors
    headers: {
      //'Content-Type': 'application/json',
      // 'Content-Type': "application/json; charset=UTF-8",
      // 'Content-Type': "multipart/form-data",
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data)
  }
    //  ).then(resp =>
    // console.log(resp.json())
  );
  console.log(await response.json());
}

// master();

function master(){
  let n = null;
  console.log(n.toString())

  return;

  let [a, b, c] = ['Петров', 'Иван', 'Николаевич'];
  console.log(`${a} ${b[0]}.${c[0]}.`);
  return;
  let
    users = { "names": ["Адам Джанкулаев", "Айдемир Нагоев", "Александр Макаров", "Александра Карасева", "Алексей Калашников", "Алексей Кугушев", "Алина Лагутенко", "Альмира Темукуева", "Анастасия Блинова", "Анастасия Лупащенко", "Анастасия Мельничук", "Анастасия Сумская", "Анастасия Устинова", "Андрей Ларин", "Андрей Маслов", "Арам Арутюнян", "Астемир Валиев", "Астемир Гучев", "Вера Паршина", "Виктор Белоконь", "Виктория Лукошина", "Владимир Михейкин", "Григорий Лазаренко", "Дамир", "Дмитрий Горбунов", "Дмитрий Замятин", "Дмитрий Кайстро", "Дмитрий Леонов", "Евгения Светлекова", "Екатерина Николаенко", "Елена Сумская", "Любовь Куликова", "Максим Джураев", "Максим Сорока", "Марина Бареева", "Марина Дубицкая", "Мария Харитонова", "Михаил Вальт", "Наталья Якунина", "Общий М", "Общий С", "Роман Галахов", "Роман Медведев", "Юлия Емельянова", "Юрий Воробец", "Ярослав Корягин"], "emails": ["adamdzhankulaev@gmail.com", "nagoevajdemir@gmail.com", "i7@pereplan.msk.ru", "5@pereplan.msk.ru", "i0@pereplan.msk.ru", "i10@pereplan.msk.ru", "i2@pereplan.msk.ru", "almira.job1@gmail.com", "anastasiya-blinova-83@mail.ru", "m2@pereplan.msk.ru", "antananariy@gmail.com", "2@pereplan.msk.ru", "m1@pereplan.msk.ru", "s3@pereplan.msk.ru", "masl-a@yandex.ru", "i6@pereplan.msk.ru", "i3@pereplan.spb.ru", "i4@pereplan.msk.ru", "10@pereplan.msk.ru", "i1@pereplan.msk.ru", "vlukoshina@gmail.com", "-", "6@pereplan.msk.ru", "samrukov@gmail.com", "k1@pereplan.msk.ru", "dimazamyatin@bk.ru", "-", "i8@pereplan.msk.ru", "m4@pereplan.msk.ru", "7@pereplan.msk.ru", "12@pereplan.msk.ru", "i9@pereplan.msk.ru", "13@pereplan.msk.ru", "maxim91135@gmail.com", "9@pereplan.msk.ru", "3@pereplan.msk.ru", "8@pereplan.msk.ru", "s2@pereplan.msk.ru", "4@pereplan.msk.ru", "info@pereplan-one.ru", "s1@pereplan.msk.ru", "sapogvs@mail.ru", "-", "m3@pereplan.msk.ru", "dwgautocadpro@gmail.com", "i5@pereplan.msk.ru"], "phones": ["89289135526", "89300743997", "89399006415", "89399006410", "89399006416", "89399001095", "89399006404", "89389145569", "89688302886", "89399006412", "89399006398", "89399006401", "89399006396", "89031598522", "89808004523", "89399006414", "89399006409", "89808003561", "89399006405", "89399006408", "89274433788", "89399006403", "89258075049", "89808004521", "89399006417", "89399006413", "89699001834", "89399001096", "89699001832", "89399006406", "89399006407", "89808004520", "89399006419", "89399006402", "84951811309", "84951811309", "89850462253", "89399006397", "89399006395"] },
    names = users.names,
    arr = [];

  names.forEach(name => {
    arr.push({ "label": name, "value": name });
  })
}