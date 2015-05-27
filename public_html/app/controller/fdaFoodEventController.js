(function() {

console.log('Enter fdafoodEventDataCtrl');
angular.module('angularFrameWork.Controllers')
        .controller('fdaFoodEventDataCtrl',[ 'fdaFoodAPI','$scope', function(fdaFoodAPI, $scope){
                        
        var paginationOptions = {
            pageNumber: 1,
            pageSize: 100
            
          };
        
           $scope.fdaFoodAPI = function() {
               locfdaFoodAPI();
           };
           
           $scope.gridOptions = {
            data:'FoodData',
            enableColumnResizing: true,
            enableFiltering: true,
            enableGridMenu: true,
            showGridFooter: true,
            showColumnFooter: true,
            enableScrollbars: true,
            enablePaginationControls: true,
            paginationPageSizes: [25,50,75, 100],
            paginationPageSize: 100,
            useExternalPagination: true,
            useExternalSorting: false,
            columnDefs: [
              { name: 'ProductDesc', enableSorting: true, width:500 },
              { name: 'RecallReason', enableSorting: true, width:300 },
              { name: 'RecallStatus', enableSorting: true, width:100 }
            ],
            onRegisterApi: function(gridApi) {
              $scope.gridApi = gridApi;
              
              gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                paginationOptions.pageNumber = newPage;
                paginationOptions.pageSize = pageSize;
                locfdaFoodAPI();
              });
            }
          };      
                
            var locfdaFoodAPI = function() {
           
                $scope.FoodData = [];
                var i=0;
                var Var1;
                var Var2;
                
                if (!$scope.gridOptions.totalItems) {
                     Var1 = paginationOptions.pageSize;
                     Var2 = 0;
                }
                else
                {
                    Var1=paginationOptions.pageSize;
                    tempVar2= paginationOptions.pageSize * (paginationOptions.pageNumber-1);
                    Var2 = Math.round(tempVar2);
                }
                
                fdaFoodAPI.get({var1:Var1, var2:Var2},function(response) {
                var responseData = response.results;
                $scope.gridOptions.totalItems=response.meta.results.total;
                
                responseData.forEach(function(row){
                    var rowData ={};
                    rowData.ProductDesc = row.product_description;
                    rowData.RecallReason = row.reason_for_recall;
                    rowData.RecallStatus = row.status;
                    rowData.id = i;
                    i++;
                    $scope.FoodData.push(rowData);
                
                });
                //var firstRow = (paginationOptions.pageNumber - 1) * paginationOptions.pageSize;
                //$scope.gridOptions.FoodData = $scope.FoodData.slice(firstRow, firstRow + paginationOptions.pageSize);
            });
          };
          
           //fdaFoodAPI();
    }     
    ]);
})();