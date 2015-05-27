console.log('Enter panelController');
angular.module('angularFrameWork.Controllers')
        .controller('panelCtrl',[  function(){
            this.tab=0;
            this.selectTab=function(setTab){
               this.tab=setTab; 
               console.log ("Selected Tab:" & setTab)
            };
            this.isSelected=function(checkedTab) {
              return this.tab===checkedTab;  
            };
                
        console.log('executing panelController');
}]);