(function() {

var angFrameworkApp = angular.module(
        'angFrameworkApp', ['ui.router',
                            'chart.js',
                            'ngResource',
                            'ngMdIcons',
                            'ui.grid.exporter',
                            'ngTouch',
                            'ui.grid',
                            'ui.grid.cellNav', 
                            'ui.grid.edit', 
                            'ui.grid.resizeColumns', 
                            'ui.grid.pinning', 
                            'ui.grid.selection', 
                            'ui.grid.moveColumns',
                            'ui.grid.pagination',
                            'angularFrameWork.Controllers',
                            'angularFrameWork.fdaDrugServices',
                            'angularFrameWork.fdaFoodServices'
                           
                            ]);
                            
console.log("Before Loading App Config");
angFrameworkApp.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
    
        console.log ("Enter App Config File");
        $urlRouterProvider.otherwise ('/home');
            
            $stateProvider
              .state ('home', {
                  url: '/home',
                  templateUrl: 'index.html'
            })
              .state('drug', {
                 url:'/drug',
                 controller: 'fdaDrugEventDataCtrl',
                 templateUrl: 'app/viewer/viewDrugEventData.html'
            })
            
              .state('food', {
                 url:'/food',
                 controller: 'fdaFoodEventDataCtrl',
                 templateUrl: 'app/viewer/viewFoodEventData.html'
                 
            }) 
            .state('chart', {
                 url:'/chart',
                 templateUrl: 'app/viewer/chartView.html'
              
              });  
            console.log ("Loaded App Config");
        }]);
    
    angFrameworkApp.config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
          colours: ['#FF5252', '#FF8A80'],
          responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('PolarArea', {
           scaleShowLabelBackdrop : true,

        //String - The colour of the label backdrop
        scaleBackdropColor : "rgba(255,255,255,0.75)",

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero : true,

        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY : 2,

        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX : 2,

        //Boolean - Show line for each value in the scale
        scaleShowLine : true,

        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke : true,

        //String - The colour of the stroke on each segement.
        segmentStrokeColor : "#fff",

        //Number - The width of the stroke value in pixels
        segmentStrokeWidth : 2,

        //Number - Amount of animation steps
        animationSteps : 100,

        //String - Animation easing effect.
        animationEasing : "easeOutBounce",

        //Boolean - Whether to animate the rotation of the chart
        animateRotate : true,

        //Boolean - Whether to animate scaling the chart from the centre
        animateScale : false,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

        });
      }]);

    angFrameworkApp.controller("TabController", function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      });

    angFrameworkApp.directive('ngEnter', function () {
        console.log ("Loaded ngEnter Directive");
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });
                    console.log("Enter Key");
                    event.preventDefault();
                }
            });
        };
    });        

    angFrameworkApp.directive('chartDoughnut', function() {
        return {
          restrict: 'E',
          templateUrl: 'app/viewer/viewDoughnutChart.html'
        };
      });

    angFrameworkApp.directive('chartRadar', function() {
        return {
          restrict: 'E',
          templateUrl: "app/viewer/viewChartRadar.html"
        };
      });
  
})();
å