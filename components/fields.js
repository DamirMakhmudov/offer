app.component('fields', {
  name: 'fields',
  template:
  /*html*/
  `
  <!-- Данные физлица -->
  <q-expansion-item
    expand-separator
    icon="account_circle"
    label="Данные физлица"
    default-opened
  >
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=fields.firstname class="q-mx-md" label="Имя"></q-input>
      <q-input v-model=fields.surname class="q-mx-md" label="Фамилия"></q-input>
      <q-input v-model=fields.patronymic class="q-mx-md" label="Отчество"></q-input>

      <q-input v-model=fields.phonenumber class="q-mx-md" label="Телефон" mask="+7(###)#######"></q-input>

      <!-- let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; -->
      <q-input v-model=fields.email class="q-mx-md" label="Почта" type="email"></q-input>
      
      <q-input v-model=fields.email class="q-mx-md" label="Почта" :rules="[val => !!val || 'Email is missing', isValidEmail,]"></q-input>

      <!-- <q-input v-model=fields.email class="q-mx-md" label="Почта" :rules="[ val => {
        reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        reg.test(val) != true || 'Please use maximum 3 characters'}]"
      ></q-input> -->
    </div>

    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>

    <div class="q-ma-md fit row justify-start  items-between content-start">
      <q-input v-model=fields.passportnumber class="q-mx-md" label="Серия и номер паспорта"></q-input>

      <q-input v-model="fields.passportdate" label="Дата выдачи" class="q-mx-md" mask="##.##.####" :rules="['##.##.####']" style="font-size: smaller">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="fields.passportdate" mask="DD.MM.YYYY">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Закрыть" color="primary" flat/>
                </div>
            </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      
      <q-input v-model=fields.passportdepartmentcode class="q-mx-md" label="Код подразделения"></q-input>

    </div>

    <q-separator color="orange" size="2pt" @dark="true" inset></q-separator>
    
    <div class="q-ma-md fit row justify-start">
      <q-input v-model=fields.payment1 class="q-mx-md" label="1 платеж"></q-input>
      <q-input v-model=fields.payment2 class="q-mx-md" label="2 платеж"></q-input>
      <q-input v-model=fields.payment3 class="q-mx-md" label="3 платеж"></q-input>
      <q-input v-model=fields.payment4 class="q-mx-md" label="4 платеж"></q-input>
      <q-input v-model=fields.payment5 class="q-mx-md" label="5 платеж"></q-input>
    </div>

  </q-expansion-item>

  <!-- Данные ИП -->
  <q-expansion-item
    expand-separator
    icon="work"
    label="Данные ИП"
    default-opened
  >
    <div class="q-ma-sm" style="overflow: auto">
     
    </div>
  </q-expansion-item>

  <!-- Данные юрлица -->
  <q-expansion-item
    expand-separator
    icon="store"
    label="Данные юрлица"
    default-opened
  >
    <div class="q-ma-sm" style="overflow: auto">
     
    </div>
  </q-expansion-item>
  `
  ,
  props:{

  },
  setup(props) {
    function isValidEmail(val){
      console.log('s');
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailPattern.test(val) || 'Invalid email';
    }
    fields = ref(model.fields)
    return {
      fields,
      isValidEmail
    }
  }
})