tasks
=
- ~~add input for discount~~
- ~~make component for additional spreadsheet with default checkboxes~~
- ~~make component for documents~~

architecture
=
component|view|model
-|-|-
square|view.filterSquare | model.square
categories|view.filterCategories | model.categories
services|view.columns <br> view.discount| model.rows <br> model.selected 
payments|view.filterPayments <br> view.columnsPayment | model.payments <br> model.rowsPayment <br> model.selectedPayment
additional|view.columnsAdditional|model.rowsAdditional <br> 
