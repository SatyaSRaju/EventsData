console.log('Enter fdaDrugEventDataCtrl');
angular.module('angularFrameWork.Controllers').controller('fdaDrugEventDataCtrl',['$scope', 'fdaDrugAPI',  function($scope, fdaDrugAPI ){
    
        
        $scope.gridOptions ={
            
            columnDefs : [
            { name:'term', width:500 },
            { name:'count', width:500 }
            ],
            data: 'DrugData',
            enableColumnResizing: true,
            enableFiltering: true,
            enableGridMenu: true,
            showGridFooter: true,
            showColumnFooter: true,
            enableScrollbars: true,
            enablePaginationControls: true,
            paginationPageSize: 15,
            paginationPageSizes: [5, 10, 15],
            rowTemplate: '<div ng-dblclick="getExternalScopes().onDblClickRow(row)" ng-click="grid.appScope.fnOne(row)" ng-repeat="col in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ui-grid-cell></div>',
            
            //Export Options
            exporterCsvFilename: 'myFile.csv',
            exporterPdfDefaultStyle: {fontSize: 9},
            exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
            exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
            exporterPdfFooter: function ( currentPage, pageCount ) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
            },
            
             exporterPdfCustomFormatter: function ( docDefinition ) {
             docDefinition.styles.headerStyle = { fontSize: 22, bold: true }; 
             docDefinition.styles.footerStyle = { fontSize: 10, bold: true }; 
             return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            
            onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            },
            
            rowIdentity: function(row) {
            return row.id;
            },
            
            getRowIdentity: function(row) {
            return row.id;
            }
        };
        
        $scope.fdaDrugAPI = function(data)
        {
            var Var1 = data;
            if (!Var1 ) 
                Var1 = "nonsteroidal+anti-inflammatory+drug";
            
            var Var2 = "patient.reaction.reactionmeddrapt.exact";
            $scope.DrugData = [];
            $scope.DrugData.Term=[];
            $scope.DrugData.Count=[];
            
            fdaDrugAPI.get({var1:Var1, var2:Var2},function(response) {
                var i = 0;
                var responseData = response.results;
                //console.log("Total Records :"+ $scope.DrugData.length);
                responseData.forEach(function(row){
                row.Term = row.term;
                $scope.DrugData.Term.push(row.Term);
                row.Count = row.count;
                $scope.DrugData.Count.push(row.Count);
                row.id = i;
                i++;
                $scope.DrugData.push(row);
                });
            });
            //fdaDrugAPI(data);
        };
        
        
        
        
   
}]);