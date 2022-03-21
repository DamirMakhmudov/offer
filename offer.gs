var
  sp = SpreadsheetApp.getActiveSpreadsheet(),
  spArr = ['1pGNR7o5XO5mOhl_K6IjT0bkuGvyKddqh8gLhTPaCbHQ', '1vBMXb18yrLpQnN0qIw3_Teo9InbDJhNuMyP1YEZLLaA'],
  docFolderArr = ['11Dq7su0iu6AzaQIUbcQpg1SNmshDnUmI', '12BXGykjWDCRKngMr7h8uKMSUyVRhfGQe'];

function doGet(e) {
  // let
  // cityIdx = ['m', 'p'].indexOf(city) + 1,
  // spStore = SpreadsheetApp.openById(spArr[cityIdx - 1]),
  // docFolderId = docFolderArr[cityIdx];

  let html1 = HtmlService.createTemplateFromFile('offer/index');
  html1.id = e.parameter.id;
  html1.city = e.parameter.city;
  return html1.evaluate().setTitle('GenDoc').setFaviconUrl('https://cdn2.iconfinder.com/data/icons/random-set-1/363/Asset_84-512.png');
}

/* Получает view */
function getView(city) {
  let
    sheet = sp.getSheetByName('view'),
    data = sheet.getDataRange().getValues(),
    view = {},
    cityIdx = ['m', 'p'].indexOf(city) + 1;

  data[0].forEach((col, idx) => {
    view[col] = JSON.parse(data[cityIdx][idx])
  })
  return JSON.stringify(view)
}

/* Получает model из активной строки столбец offer, если она не пустая, иначе из отдельной таблицы 1CtThsc4jvy5ozsitBhAIDLirUX6QGwAW2WNd-Fs06CM */
function getModel(id, city) {
  let
    spId = spArr[['m', 'p'].indexOf(city)],
    spStore = SpreadsheetApp.openById(spId),
    actSheet = spStore.getSheetByName('store'),
    row = actSheet.getRange('A:A').createTextFinder(id).findNext();
  if (row) {
    rowIndex = row.getRowIndex();
    cell = actSheet.getRange(rowIndex, 2);
    cell2 = actSheet.getRange(rowIndex, 3);
    return cell.getValue() + cell2.getValue()
  } else {
    let
      sheet = sp.getSheetByName('model2'),
      data = sheet.getDataRange().getValues(),
      model = {},
      cityIdx = ['m', 'p'].indexOf(city) + 1;

    data[0].forEach((col, idx) => {
      model[col] = JSON.parse(data[cityIdx][idx])
    });

    let
      servicesSheet = sp.getSheetByName(`Услуги ${city}`),
      rows = servicesSheet.getRange(3, servicesSheet.getRange('1:1').getValues()[0].indexOf('json') + 1, servicesSheet.getLastRow() - 3, 1).getValues(),
      arr = [];
    rows.forEach(row => {
      arr.push(JSON.parse(row[0]))
    });
    model.rows = arr;
    model.id = id;
    model.city = { val: city }

    let
      datar = JSON.stringify(model),
      part1 = Math.floor(datar.length / 2),
      part2 = datar.length - part1;

    actSheet.appendRow([id, datar.substr(0, part1), datar.substr(part1, part2)]);
    return datar
  }
}

/* Заполняет столбцы offer */
function setOfferValue(data, city) {
  try {
    let
      spId = spArr[['m', 'p'].indexOf(city)],
      spStore = SpreadsheetApp.openById(spId),
      sheet = spStore.getSheetByName('store'),
      obj = JSON.parse(data),
      part1 = Math.floor(data.length / 2),
      part2 = data.length - part1,
      row = sheet.getRange('A:A').createTextFinder(obj.id).findNext();

    if (row) {
      rowIndex = row.getRowIndex();
      sheet.getRange(rowIndex, 2).setValue(data.substr(0, part1));
      sheet.getRange(rowIndex, 3).setValue(data.substr(part1, part2));
      sendPOST(obj);
      return true
    } else {
      return "Не нашел id"
    }
  } catch (err) {
    sp.getSheetByName('log').appendRow([new Date(), err.stack]);
    return err.stack
  }
}

/* Печать Договора */
async function printContractGS(data, template, city) {
  try {
    setOfferValue(data, city);
    let
      obj = JSON.parse(data),
      docFolderId = docFolderArr[['m', 'p'].indexOf(city)],
      folder = DriveApp.getFolderById(docFolderId),
      fileName = `Договор ${obj.id} ${obj.address.val}`,
      templateFile = DriveApp.getFileById(template),
      file = templateFile.makeCopy(fileName, folder),
      doc = DocumentApp.openById(file.getId()),
      body = doc.getBody();

    body.replaceText(`{Дата}`, Utilities.formatDate(new Date(), "GMT+3", "dd.MM.yyyy"));
    body.replaceText(`{Общая цена договора}`, obj.amountServices.val);
    body.replaceText(`{Общая цена договора прописью}`, limb.number2string(obj.amountServices.val));

    body.replaceText(`{Сроки, рабочих дней}`, obj.amountTime);
    if (obj.manager.val != '') {
      body.replaceText(`{Менеджер}`, obj.manager.val.value);
      body.replaceText(`{Менеджер.Почта}`, obj.managerEmail.val);
      body.replaceText(`{Менеджер.Телефон}`, obj.managerPhone.val);
    };
    body.replaceText(`{Адрес объекта}`, obj.address.val);
    body.replaceText(`{Имя}`, obj.firstname);
    body.replaceText(`{Фамилия}`, obj.surname);
    body.replaceText(`{Отчество}`, obj.patronymic);
    body.replaceText(`{Фамилия И.О.}`, `${obj.surname} ${obj.firstname[0]}.${obj.patronymic[0]}.`);
    body.replaceText(`{Телефон}`, obj.phonenumber);
    body.replaceText(`{В лице}`, obj.customerposition.val);

    /* убрать позже после изменеия в шаблоне */
    if (obj.surname != '' || obj.firstname != '' && obj.patronymic != '') {
      body.replaceText(`{Фамилии Имя Отчество}`, setPadezh(`${obj.surname} ${obj.firstname} ${obj.patronymic}`, 'Р'));
    }

    body.replaceText(`{Почта}`, obj.email);
    body.replaceText(`{Серия и номер паспорта}`, obj.passportnumber);
    body.replaceText(`{Дата выдачи}`, obj.passportdate);
    body.replaceText(`{Код подразделения}`, obj.passportdepartmentcode);
    body.replaceText(`{Кем выдан}`, obj.passportdepartment);

    body.replaceText(`{1 платеж}`, obj.payment1);
    body.replaceText(`{2 платеж}`, obj.payment2);
    body.replaceText(`{3 платеж}`, obj.payment3);
    body.replaceText(`{4 платеж}`, obj.payment4);
    body.replaceText(`{5 платеж}`, obj.payment5);
    body.replaceText(`{6 платеж}`, obj.payment6);

    body.replaceText(`{1 платеж прописью}`, limb.number2string(obj.payment1));
    body.replaceText(`{2 платеж прописью}`, limb.number2string(obj.payment2));
    body.replaceText(`{3 платеж прописью}`, limb.number2string(obj.payment3));
    body.replaceText(`{4 платеж прописью}`, limb.number2string(obj.payment4));
    body.replaceText(`{5 платеж прописью}`, limb.number2string(obj.payment5));
    body.replaceText(`{6 платеж прописью}`, limb.number2string(obj.payment6));

    body.replaceText(`{ИНН}`, obj.inn);
    body.replaceText(`{КПП}`, obj.kpp);
    body.replaceText(`{БИК}`, obj.bik);
    body.replaceText(`{ОГРН}`, obj.ogrn);
    body.replaceText(`{Название банка}`, obj.bank);
    body.replaceText(`{Корр.счет}`, obj.correspondentaccount);
    if (obj.pfshort.val != '') {
      body.replaceText(`{Правовая форма сокращенно}`, obj.pfshort.val.value);
      body.replaceText(`{Правовая форма полностью}`, obj.pffull.val);
    }
    body.replaceText(`{Название организации}`, obj.company);
    body.replaceText(`{Юр.адрес}`, obj.legalentityaddress);
    body.replaceText(`{Факт. адрес}`, obj.factaddress);
    body.replaceText(`{Расч. счет}`, obj.paymentaccount);
    body.replaceText(`{Номер договора}`, obj.contractNumber);
    body.replaceText(`{Дата заключения договора}`, obj.contractdDate);

    /*
    titles.forEach((title, idx) => {
      if (title != '') {
        let header = headers[idx];
        body.replaceText(`{${title}}`, obj[header]);
      }
    });
    */

    if (/(&&&)/.test(templateFile.getName()) == false) {
      // if (appendTablesNew(doc) === undefined) {
      // };
      appendTablesNew(doc, obj);
      // let
      // colOffer = sheet.getRange("1:1").getValues()[0].indexOf("offer") + 1,
      // valueOffer = sheet.getRange(sheet.getActiveRange().getRow(), colOffer).getValue();
      // if(valueOffer){
      // if (appendTablesNew(doc) === undefined) {
      // DriveApp.removeFile(DriveApp.getFileById(doc.getId()));
      // return
      // }
      // }
    }

    doc.saveAndClose();

    let url = await file.getUrl();

    /*
    if (!format) {
      url = limb.generatePDF(file.getBlob(), fileName, folder);
      DriveApp.removeFile(file);
    };
    sp.getSheetByName('log').appendRow([new Date(), url])
    */

    obj.urlContract = url;
    sendPOST(obj);

    return url;
  } catch (err) {
    sp.getSheetByName('log').appendRow([new Date(), err.stack])
  }
}

/* Печать КП */
async function printOfferGS(data, template, format, city) {
  try {
    setOfferValue(data, city);

    let
      obj = JSON.parse(data),
      docFolderId = docFolderArr[['m', 'p'].indexOf(city)],
      folder = DriveApp.getFolderById(docFolderId),
      fileName = `КП ${obj.id} ${obj.address.val}`,
      templateFile = DriveApp.getFileById(template),
      file = templateFile.makeCopy(fileName, folder),
      forSave = DocumentApp.openById(file.getId()),
      doc = forSave.getBody();
    doc.replaceText(`{Общая цена договора}`, obj.amountServices.val);
    doc.replaceText(`{Сроки, рабочих дней}`, obj.amountTime);
    if (obj.manager.val != '') {
      doc.replaceText(`{Менеджер}`, obj.manager.val.value);
      doc.replaceText(`{Менеджер.Почта}`, obj.managerEmail.val);
      doc.replaceText(`{Менеджер.Телефон}`, obj.managerPhone.val);
    }
    doc.replaceText(`{Адрес объекта}`, obj.address.val);

    /*
    let res = doc.getText().match(/(?<={)([А-я]*?\.[А-я]*?)(?=})/g);
    if (res) {
      res.forEach(item => {
        [position, contact] = item.split('.');
        name = currentRow[captions.indexOf(position)];
        idx = contacts.users.indexOf(name);
        address = contacts[contact][idx];
        if (address) {
          doc.replaceText(`{${item}}`, address)
        }
      })
    }
    */

    let style = {};
    style[DocumentApp.Attribute.FOREGROUND_COLOR] = "#000000";

    obj.selected.val.forEach((item, i) => {
      let tableRow = doc.getTables()[0].appendTableRow(doc.getTables()[0].getRow(1).copy());
      tableRow.getCell(0).getChild(0).asParagraph().replaceText("1", (i + 1).toString());
      tableRow.getCell(1).getChild(0).asParagraph().replaceText("1", item.name);
      if (item.comment != "") {
        tableRow.getCell(1).getChild(1).asParagraph().replaceText("1", item.comment);
      } else {
        tableRow.getCell(1).removeChild(tableRow.getCell(1).getChild(1));
      }

      tableRow.getCell(2).getChild(0).asParagraph().replaceText("1", item.time.toString());
      tableRow.getCell(3).getChild(0).asParagraph().replaceText("1", limb.formatNumberThousand(item.price.toString()));
    });
    doc.getTables()[0].removeRow(1);

    obj.selectedPayment.val.forEach((item, i) => {
      let tableRow = doc.getTables()[2].appendTableRow(doc.getTables()[2].getRow(1).copy());
      tableRow.getCell(0).getChild(0).asParagraph().replaceText("1", (i + 1).toString());
      tableRow.getCell(1).getChild(0).asParagraph().replaceText("1", item.name);
      tableRow.getCell(2).getChild(0).asParagraph().replaceText("1", limb.formatNumberThousand(item.price.toString()));
    });
    doc.getTables()[2].removeRow(1);

    obj.selectedDocuments.val.forEach((item, i) => {
      let tableRow = doc.getTables()[3].appendTableRow(doc.getTables()[3].getRow(1).copy());
      tableRow.getCell(0).getChild(0).asParagraph().replaceText("1", (i + 1).toString());
      tableRow.getCell(1).getChild(0).asParagraph().replaceText("1", item.name);
    });
    doc.getTables()[3].removeRow(1);

    obj.selectedAdditional.val.forEach((item, i) => {
      let tableRow = doc.getTables()[4].appendTableRow(doc.getTables()[4].getRow(1).copy());
      tableRow.getCell(0).getChild(0).asParagraph().replaceText("1", (i + 1).toString());
      tableRow.getCell(1).getChild(0).asParagraph().replaceText("1", item.name);
      tableRow.getCell(2).getChild(0).asParagraph().replaceText("1", item.time.toString());
      tableRow.getCell(3).getChild(0).asParagraph().replaceText("1", limb.formatNumberThousand(item.price.toString()));
    });
    doc.getTables()[4].removeRow(1);

    forSave.saveAndClose();

    let url = await file.getUrl();
    if (!format) {
      url = limb.generatePDF(file.getBlob(), fileName, folder);
      DriveApp.removeFile(file);
    };

    obj.urlOffer = url;
    sendPOST(obj);

    return url;
  } catch (err) {
    sp.getSheetByName('log').appendRow([new Date(), err.stack])
  }
  // SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput('<script>window.open("' + url + '");setTimeout(function(){google.script.host.close()},0)</script>'), 'Открываю документ...');
}

function sendPOST(obj) {
  let url = 'https://crm.pereplan-one.ru/bitrix/tools/act/update_deal.php';
  let payload = {
    id: obj.id,
    address: obj.address.val,
    urlOffer: obj.urlOffer,
    urlContract: obj.urlContract,
    amountServices: obj.amountServices.val,
    payment1: obj.payment1,
    payment2: obj.payment2,
    payment3: obj.payment3,
    payment4: obj.payment4,
    payment5: obj.payment5,
    payment6: obj.payment6,
    surname: obj.surname,
    firstname: obj.firstname,
    patronymic: obj.patronymic,
    phonenumber: obj.phonenumber,
    email: obj.email,
    contractNumber: obj.contractNumber,
    contractdDate: obj.contractdDate
  };
  let
    options = { method: "post", muteHttpExceptions: false, payload: payload },
    res = UrlFetchApp.fetch(url, options),
    resObj = JSON.parse(res.getContentText());
}

function setPadezh(value, padezh) {
  let
    token = '93d7dfcc-e58b-472d-8f03-5062d37cd9e3',
    url = `https://ws3.morpher.ru/russian/declension?format=json&s=${value}&token=${token}`,
    response = UrlFetchApp.fetch(url);
  return JSON.parse(response)[padezh];
}