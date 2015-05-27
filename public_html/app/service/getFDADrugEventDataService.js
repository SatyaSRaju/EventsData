(function() {
    
 console.log ("Entry angularFrameWork.fdaDrugServices");


var fdaDrugServices = angular.module('angularFrameWork.fdaDrugServices', ['ngResource']);
 console.log ("Load fdaDrugServices Services module");
 fdaDrugServices.factory('fdaDrugAPI',  function($resource){
    
        
      var qryString = "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc=:var1&count=:var2";
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
