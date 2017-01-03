(function () {
'use strict';

angular.module('assignment2', [])
.controller('ToBuyListController',ToBuyListController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyListController.$inject=['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

function ToBuyListController(ListService){
  var toBuyList=this;
  toBuyList.items=ListService.getToBuyItems();
  toBuyList.MoveItemToBought=function(index){
    ListService.moveItem(index);
  };
}

function AlreadyBoughtController(ListService){
  var boughtList=this;
  boughtList.items=ListService.getBoughtItems();
}
function ShoppingListCheckOffService(){
  var service=this;
  service.toBuyItems=[
    {
      "name": "cookies",
      "quantity":10
    },
    {
      "name": "Chocolates",
      "quantity":30
    },
    {
      "name": "Chips Packet",
      "quantity":15
    },
    {
      "name": "Cold Drink",
      "quantity":5
    },
    {
      "name": "Chewing Gum",
      "quantity":20
    }
  ];
  service.boughtItems=[];
  service.getToBuyItems=function(){
    return service.toBuyItems;
  };
  service.getBoughtItems=function(){
    return service.boughtItems;
  };
  service.moveItem=function(index){
    service.boughtItems.push(service.toBuyItems[index]);
    service.toBuyItems.splice(index,1);
  };
}

})();
