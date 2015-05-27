(function() {

console.log ("Entry angularFrameWork.fdaFoodServices");
 
 var fdaFoodServices = angular.module('angularFrameWork.fdaFoodServices', ['ngResource']);
 console.log ("Load fdaFoodServices Services module");
 fdaFoodServices.factory('fdaFoodAPI',  function($resource){
    var qryString = "https://api.fda.gov/food/enforcement.json?&limit=:var1&skip=:var2";
    return $resource(qryString,{}, {
            query: {
            method: 'GET',
            params: {},
            isArray:false
        }
            });
        });
    
      console.log ('Exiting from DrugAPI...');
      
})();