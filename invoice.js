angular.module('invoice1', [])
.controller('InvoiceController', function() {
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'USD';
  this.currencies = ['USD', 'NEP', 'IND'];
  this.usdToForeignRates = {
    USD: 1,
    NEP: 105.94,
    IND: 66.17
  };
  
  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  
  this.pay = function pay() {
    window.alert("Thanks!");
  };
});
