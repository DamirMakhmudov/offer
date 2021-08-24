function runPanel(){
  let sheet = SpreadsheetApp.getActiveSheet();
  // if (sheet.getName() != 'Менеджер'){
    // Browser.msgBox('Выполняется только для листа "Менеджер"');
    // return;
  // }
  if(!(sheet.getRange('1:1').getValues()[0].indexOf('offer') + 1)){
    Browser.msgBox('Не найден столбец "offer". Обратитесь к администратору');
    return;
  }
  let html = HtmlService.createTemplateFromFile('offer/index').evaluate()
  .setWidth(2000)
  .setHeight(1700)
  // .evaluate();
  // html1.data = 'some data';
  // let html = html1.evaluate();
  SpreadsheetApp.getUi().showModalDialog(html,'КП');
}

/* получает view из таблицы */
function getView(){
  let
    actSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(),
    col = actSheet.getRange('1:1').getValues()[0].indexOf('offer') + 1;
    cell = actSheet.getRange(actSheet.getActiveCell().getRow(), col),
    settingSheetId = '1CtThsc4jvy5ozsitBhAIDLirUX6QGwAW2WNd-Fs06CM',
    sheet = SpreadsheetApp.openById(settingSheetId).getSheetByName('view'),
    data = sheet.getDataRange().getValues(),
    view = {};
  data[0].forEach((col, idx) =>{
    view[col] = JSON.parse(data[1][idx])
  })
  return JSON.stringify(view)
}

/* получает model из активной строки столбец offer, если она не пустая, иначе из отдельной таблицы */
function getModel(){
  let
    actSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet(),
    col = actSheet.getRange('1:1').getValues()[0].indexOf('offer') + 1;
    cell = actSheet.getRange(actSheet.getActiveCell().getRow(), col);
  if (cell.getValue() == ''){
    let
      settingSheetId = '1CtThsc4jvy5ozsitBhAIDLirUX6QGwAW2WNd-Fs06CM',
      sheet = SpreadsheetApp.openById(settingSheetId).getSheetByName('model'),
      data = sheet.getDataRange().getValues(),
      model = {};
    data[0].forEach((col, idx) =>{
      model[col] = JSON.parse(data[1][idx])
    })
    return JSON.stringify(model)
  }else{
    col2 = actSheet.getRange('1:1').getValues()[0].indexOf('offer2') + 1;
    cell2 = actSheet.getRange(actSheet.getActiveCell().getRow(), col2);
    return cell.getValue() + cell2.getValue()
  }
}

/* сохраняет значение model в столбец offer */
function saveDataGS(data){
  // try{
    let
      sp = SpreadsheetApp.getActiveSpreadsheet(),
      actSheet = sp.getActiveSheet(),
      actCell = actSheet.getActiveCell(),
      cellId = actSheet.getRange(actCell.getRowIndex(), 1).getValue(),
      rowIndex = actCell.getRowIndex(),
      actHeader = actSheet.getRange('1:1').getValues()[0];

    setOfferValue(cellId, actSheet, data, rowIndex);

    if(cellId){
      sheetsList.filter(item => item != actSheet.getName()).forEach(sheetName =>{
        let sheet = sp.getSheetByName(sheetName);
        if(row = sheet.getRange('A1:A').createTextFinder(cellId).findNext()){
          header = sheet.getRange('1:1').getValues()[0];

          ['Общая цена договора', 'Общая цена договора прописью', 'Сроки, рабочих дней','offer'].forEach(colName => {
            if(col = header.indexOf(colName) + 1){
              cellValue = actSheet.getRange(rowIndex, actHeader.indexOf(colName) + 1).getValue();
              sheet.getRange(row.getRowIndex(), col).setValue(cellValue);
            }
          });

          for(i=1;i<=6;i++){
            colName = `${i} платеж`;
            if(col = header.indexOf(colName) + 1){
              cellValue = actSheet.getRange(rowIndex, actHeader.indexOf(colName) + 1).getValue();
              sheet.getRange(row.getRowIndex(), col).setValue(cellValue);
            }
          }

          for(i=1;i<=6;i++){
            colName = `${i} платеж прописью`;
            if(col = header.indexOf(colName) + 1){
              cellValue = actSheet.getRange(rowIndex, actHeader.indexOf(colName) + 1).getValue();
              sheet.getRange(row.getRowIndex(), col).setValue(cellValue);
            }
          }
        }
      });
    }
  // }catch(err){
    // getError(err)
    // Browser.msgBox(err)
  // }
}

/* заполняет столбец offer во всех рабочих листах */
function setOfferValue(cellId, sheet, data, rowIndex){
  let
    jsondata = JSON.parse(data),
    header = sheet.getRange('1:1').getValues()[0];

  let part1 = Math.floor(data.length/2);
  let part2 = data.length-part1;

  // let offer = header.indexOf('offer') + 1;
  // offer ? sheet.getRange(rowIndex, offer).setValue(data) : limb.cl(`В листе "${sheet.getName()}" не найден столбец "offer"`, 'offer');

  let offer = header.indexOf('offer') + 1;
  offer ? sheet.getRange(rowIndex, offer).setValue(data.substr(0, part1)) : cl(`В листе "${sheet.getName()}" не найден столбец "offer"`, 'offer');
  
  let offer2 = header.indexOf('offer2') + 1;
  offer2 ? sheet.getRange(rowIndex, offer2).setValue(data.substr(part1, part2)) : cl(`В листе "${sheet.getName()}" не найден столбец "offer2"`, 'offer2');

  let sum = header.indexOf('Общая цена договора') + 1;
  if(sum){
    sheet.getRange(rowIndex, sum).setValue(jsondata.amountServices.val);
    if(cellId){cellToBitrix(cellId, 'Общая цена договора', jsondata.amountServices.val)};
  }else{
    // limb.cl(`В листе "${sheet.getName()}" не найден столбец "Общая цена договора"`, 'offer');
  }

  let sumStr = header.indexOf('Общая цена договора прописью') + 1;
  sumStr ? sheet.getRange(rowIndex, sumStr).setValue(number2string(jsondata.amountServices.val)) : cl(`В листе "${sheet.getName()}" не найден столбец "Общая цена договора прописью"`, 'offer');
  
  let time = header.indexOf('Сроки, рабочих дней') + 1;
  if(time){
    sheet.getRange(rowIndex, time).setValue(jsondata.amountTime.val);
    if(cellId){cellToBitrix(cellId, 'Сроки, рабочих дней', jsondata.amountTime.val)};
  }else{
    // limb.cl(`В листе "${sheet.getName()}" не найден столбец "Сроки, рабочих дней"`, 'offer');
    // Browser.msgBox(`В листе "${sheet.getName()}" не найден столбец "Сроки, рабочих дней"`)
  }

  let timerCol = header.indexOf('Таймер') + 1;
  if(timerCol){
    let timerRange = sheet.getRange(rowIndex, timerCol);
    if(timerRange.getValue() == ''){
      timerRange.setValue(jsondata.amountTime.val)
    }
  }else{
    // limb.cl(`В листе "${sheet.getName()}" не найден столбец "Таймер"`, 'offer');
    // Browser.msgBox(`В листе "${sheet.getName()}" не найден столбец "Таймер"`)
  }

  jsondata.selectedPayment.val.forEach((payment, idx) =>{
    let
      i = idx + 1,
      col = header.indexOf(`${i} платеж`) + 1,
      colStr = header.indexOf(`${i} платеж прописью`) + 1;
    if(col){
      sheet.getRange(rowIndex, col).setValue(payment.price);
      if(cellId){cellToBitrix(cellId, `${i} платеж`, payment.price)};
    }else{
      // limb.cl(`В листе "${sheet.getName()}" не найден столбец "${i} платеж"`, 'offer');
    }
    colStr ? sheet.getRange(rowIndex, colStr).setValue(number2string(payment.price)) : cl(`В листе "${sheet.getName()}" не найден столбец "${i} платеж прописью"`, 'offer');
  })
}

/* печать кп */
function printGS(data, template ='1i-SYaGmZPgi1BruyaKt_eVJbei-r5IdLsapy42M5EB4', format) {
  //try {
    saveDataGS(data);
    let sheet = SpreadsheetApp.getActive().getActiveSheet();
    let captions = sheet.getRange("1:1").getValues()[0];
    let currentRow = sheet.getRange(sheet.getActiveRange().getRow(), 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
    let fileName = "КП №" + currentRow[captions.indexOf("id")];
    let folder = DriveApp.getFolderById("1h23gKPYDPvBCttFoNm1Ip-g6_9de2IgQ");
    let file = DriveApp.getFileById(template).makeCopy(fileName, folder);
    let contacts = holdContacts();

    let forSave = DocumentApp.openById(file.getId());
    let doc = forSave.getBody();
    for ( let i = 0; i < captions.length; i++ ) {
      doc.replaceText(`{${captions[i]}}`, currentRow[i]);
    };

    let res = doc.getText().match(/(?<={)([А-я]*?\.[А-я]*?)(?=})/g);
    if(res){
      res.forEach(item => {
        [position, contact] = item.split('.');
        name = currentRow[captions.indexOf(position)];
        idx = contacts.users.indexOf(name);
        address = contacts[contact][idx];
        if(address){
          doc.replaceText(`{${item}}`, address)
        }
      })
    }

    let style = {};
    style[DocumentApp.Attribute.FOREGROUND_COLOR] = "#000000";

    let obj = JSON.parse(data);
    obj.selected.val.forEach((item, i) => {
      let tableRow = doc.getTables()[0].appendTableRow(doc.getTables()[0].getRow(1).copy());
      tableRow.getCell(0).getChild(0).asParagraph().replaceText("1", (i + 1).toString());
      tableRow.getCell(1).getChild(0).asParagraph().replaceText("1", item.name);
      if ( item.comment != "" ) {
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
    
    let url = file.getUrl();
    if ( !format ) {
      url = limb.generatePDF(file.getBlob(), fileName, folder);
      DriveApp.removeFile(file);
    };

    SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput('<script>window.open("'+ url + '");setTimeout(function(){google.script.host.close()},0)</script>'), 'Открываю документ...');
  //} catch(err) {
  //  Browser.msgBox(err)
    // getError(err);
 // }
}