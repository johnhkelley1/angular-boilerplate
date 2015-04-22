var app = angular.module('app',[
	'ngRoute',
	'app.controllers',
	'app.services',
	'app.directives']);

angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider.
	when('/', {
		templateUrl: 'components/boilerplate/boilerplateView.html',
	}).
	otherwise({
		redirectTo: '/'
	});

}]);