app.component('fields', {
  name: 'fields',
  template:
    /*html*/
    `
  <!-- ДАННЫЕ ФИЗЛИЦА -->
  <q-expansion-item expand-separator icon="account_circle" label="Данные физлица" :default-opened=false>
    <!-- common data -->
    <div class="q-ma-md row justify-start">
      <q-input v-model=modelc.address.val class="q-mx-md col" label="Адрес объекта"></q-input>
    </div>
    <div class="q-ma-md row justify-start">
      <q-input v-model=modelc.surname class="q-mx-md" label="Фамилия"></q-input>
      <q-input v-model=modelc.firstname class="q-mx-md" label="Имя"></q-input>
      <q-input v-model=modelc.patronymic class="q-mx-md" label="Отчество"></q-input>
      <q-input v-model=modelc.phonenumber class="q-mx-md" label="Телефон" mask="+7(###)#######"></q-input>
      <q-input v-model=modelc.email class="q-mx-md" label="Почта" :rules="[val => !!val || 'Email is missing', isValidEmail,]"></q-input>
    </div>

    <!-- passport data -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md row justify-start items-between content-start">
      <q-input v-model=modelc.passportnumber class="q-mx-md" label="Серия и номер паспорта"></q-input>
      <datepicker :modelc=modelc property="passportdate" label="Дата выдачи"></datepicker>
      <!-- <q-input v-model=modelc.passportdepartmentcode class="q-mx-md" label="Код подразделения"></q-input> -->
      <q-input v-model=modelc.passportdepartment class="q-mx-md" label="Кем выдан"></q-input>
    </div>

    <!-- payment series -->
    <!--
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=modelc.payment1 type=number class="q-mx-md" label="1 платеж"></q-input>
      <q-input v-model=modelc.payment2 type=number class="q-mx-md" label="2 платеж"></q-input>
      <q-input v-model=modelc.payment3 type=number class="q-mx-md" label="3 платеж"></q-input>
      <q-input v-model=modelc.payment4 type=number class="q-mx-md" label="4 платеж"></q-input>
      <q-input v-model=modelc.payment5 type=number class="q-mx-md" label="5 платеж"></q-input>
    </div>
    -->

    <!-- contract data -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md row justify-start">
      <!-- <q-input v-model= modelc.amountTime type=number class="q-mx-md" label="Сроки, рабочих дней" readonly>
        <q-tooltip>Рассчитвается автоматически в конструторе документов</q-tooltip>
      </q-input> -->
      <q-input v-model= modelc.contractNumber class="q-mx-md" label="Номер договора"></q-input>
      <datepicker :modelc=modelc property="contractdDate" label="Дата заключения договора"></datepicker>
    </div>
  </q-expansion-item>

  <!-- ДАННЫЕ ИП -->
  <q-expansion-item expand-separator icon="work" label="Данные ИП" :default-opened=false>
    <!-- common data -->
    <div class="q-ma-md row justify-start">
      <q-input v-model=modelc.address.val class="q-ma-md col" label="Адрес объекта"></q-input>
    </div>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=modelc.surname class="q-mx-md" label="Фамилия"></q-input>
      <q-input v-model=modelc.firstname class="q-mx-md" label="Имя"></q-input>
      <q-input v-model=modelc.patronymic class="q-mx-md" label="Отчество"></q-input>
      <q-input v-model=modelc.phonenumber class="q-mx-md" label="Телефон" mask="+7(###)#######"></q-input>
      <q-input v-model=modelc.email class="q-mx-md" label="Почта" :rules="[val => !!val || 'Email is missing', isValidEmail,]"></q-input>
    </div>

    <!-- passport data -->
    <!--
      <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
      <div class="q-ma-md fit row justify-start items-between content-start">
        <q-input v-model=modelc.passportnumber class="q-mx-md" label="Серия и номер паспорта"></q-input>
        <datepicker :modelc=modelc property="passportdate" label="Дата выдачи"></datepicker>
        <q-input v-model=modelc.passportdepartmentcode class="q-mx-md" label="Код подразделения"></q-input>
        <q-input v-model=modelc.passportdepartment class="q-mx-md" label="Кем выдан"></q-input>
      </div>
    -->

    <!-- contract data -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model= modelc.contractNumber class="q-mx-md" label="Номер договора"></q-input>
      <datepicker :modelc=modelc property="contractdDate" label="Дата заключения договора"></datepicker>
    </div>

    <!-- requisites -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=modelc.inn class="q-mx-md" label="ИНН"></q-input>
      <q-input v-model=modelc.ogrn class="q-mx-md" label="ОГРНИП"></q-input>
      <q-input v-model=modelc.bik class="q-mx-md" label="БИК"></q-input>
      <q-input v-model=modelc.bank class="q-mx-md" label="Банк"></q-input>
      <q-input v-model=modelc.correspondentaccount class="q-mx-md" label="Кор. счет"></q-input>
      <q-input v-model=modelc.paymentaccount class="q-mx-md" label="Расч. счет"></q-input>
      <!-- <q-input v-model=modelc.factaddress class="q-mx-md" label="Факт. адрес"></q-input> -->
      <q-input v-model=modelc.legalentityaddress class="q-mx-md" label="Юр. адрес"></q-input>
      <!-- <q-input v-model=modelc.company class="q-mx-md" label="Название организации"></q-input> -->
    </div>
  </q-expansion-item>

  <!-- ДАННЫЕ ЮРЛИЦА -->
  <q-expansion-item expand-separator icon="store" label="Данные юрлица" :default-opened=false>
    <!-- common data -->
    <div class="q-ma-md row justify-start">
      <q-input v-model=modelc.address.val class="q-mx-md col" label="Адрес объекта"></q-input>
    </div>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=modelc.customerposition.val class="q-mx-md" label="В лице"></q-input>
      <q-input v-model=modelc.surname class="q-mx-md" label="Фамилия"></q-input>
      <q-input v-model=modelc.firstname class="q-mx-md" label="Имя"></q-input>
      <q-input v-model=modelc.patronymic class="q-mx-md" label="Отчество"></q-input>
      <q-input v-model=modelc.phonenumber class="q-mx-md" label="Телефон" mask="+7(###)#######"></q-input>
      <q-input v-model=modelc.email class="q-mx-md" label="Почта" :rules="[val => !!val || 'Email is missing', isValidEmail,]"></q-input>
    </div>

    <!-- passport data -->
    <!--
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md fit row justify-start items-between content-start">
      <q-input v-model=modelc.passportnumber class="q-mx-md" label="Серия и номер паспорта"></q-input>
      <datepicker :modelc=modelc property="passportdate" label="Дата выдачи"></datepicker>
      <q-input v-model=modelc.passportdepartmentcode class="q-mx-md" label="Код подразделения"></q-input>
      <q-input v-model=modelc.passportdepartment class="q-mx-md" label="Кем выдан"></q-input>
    </div>
    -->

    <!-- contract data -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md fit row justify-start">
      <!-- <q-input v-model= modelc.amountTime type=number class="q-mx-md" label="Сроки, рабочих дней" readonly>
        <q-tooltip>Рассчитвается автоматически в конструторе документов</q-tooltip>
      </q-input> -->
      <q-input v-model= modelc.contractNumber class="q-mx-md" label="Номер договора"></q-input>
      <datepicker :modelc=modelc property="contractdDate" label="Дата заключения договора"></datepicker>
    </div>

    <!-- requisites -->
    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    <div class="q-ma-md row justify-start">
      <q-select v-model=modelc.pfshort.val :options=viewc.filterPF label="Правовая форма" class="q-mx-md" style="width:200px"></q-select>
      <!-- <q-input v-model=modelc.pffull.val class="q-mx-md" label="Правовая форма полностью"></q-input> -->
      <q-input v-model=modelc.company class="col" label="Название организации"></q-input>
    </div>
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=modelc.inn class="q-mx-md" label="ИНН"></q-input>
      <q-input v-model=modelc.ogrn class="q-mx-md" label="ОГРН"></q-input>
      <q-input v-model=modelc.kpp class="q-mx-md" label="КПП"></q-input>
      <q-input v-model=modelc.bik class="q-mx-md" label="БИК"></q-input>
      <q-input v-model=modelc.bank class="q-mx-md" label="Банк"></q-input>
      <q-input v-model=modelc.correspondentaccount class="q-mx-md" label="Кор. счет"></q-input>
      <q-input v-model=modelc.paymentaccount class="q-mx-md" label="Расч. счет"></q-input>
      <q-input v-model=modelc.legalentityaddress class="q-mx-md" label="Юр. адрес"></q-input>
      <!-- <q-input v-model=modelc.factaddress class="q-mx-md" label="Факт. адрес"></q-input> -->
      <!-- <div class="q-ma-md fit row justify-start"> -->
        <!-- <q-input v-model=modelc.pffull.val class="q-mx-md" label="Правовая форма полностью"></q-input> -->
      <!-- </div> -->
    </div>

  </q-expansion-item>
`
  ,
  props: {

  },
  setup(props) {
    modelc = reactive(model)
    viewc = reactive(view)

    function isValidEmail(val) {
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailPattern.test(val) || 'Invalid email';
    }

    return {
      modelc,
      viewc,
      isValidEmail
    }
  }
})