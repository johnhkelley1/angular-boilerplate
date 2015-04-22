angular.module('app.directives', [])
.directive('boilerPlate', function() {
  return {
  	restrict: 'E',
  	controller: function($scope) {
  		     

  	},
    templateUrl: '/partials/boilerplate/boilerplateView.html'
  };
});