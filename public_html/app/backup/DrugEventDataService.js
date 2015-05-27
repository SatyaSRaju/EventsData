(function() {
    
 console.log ("Entry angularFrameWork.fdaDrugServices");


var fdaDrugServices = angular.module('angularFrameWork.fdaDrugServices', ['ngResource']);
 console.log ("Load fdaDrugServices Services module");
 fdaDrugServices.factory('fdaDrugAPI',  function($resource){
    //$scope.ddTerm={};
    //$scope.ddCount={};
 
    var qryString = "https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc=:var1&count=:var2";
    return $resource(qryString,{}, {
            query: {
            method: 'GET',
            params: {},
            isArray:false
        }
            
            });
      //      $scope.ddTerm=fdaDrugAPI.results.term;
        //    $scope.ddCount=fdaDrugAPI.results.count;

            console.log(query.length);
        });
    
      console.log ('Exiting from DrugAPI...');
      


})();
