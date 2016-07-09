var app = angular.module('CervejaMe', 
	[
		'ngRoute', 
		'ngResource',
		'Cerveja.Beers',
		'Cerveja.Beer',
		'Cerveja.Breweries',
		'Cerveja.Brewery'
	]);

//Update this before commiting and deploing to Heroku
//app.constant('CURRENT_BACKEND', 'http://localhost:3000');
app.constant('CURRENT_BACKEND', 'http://cervejame.herokuapp.com');

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider 
		.when('/', {
			templateUrl: 'src/welcome/index.html'/*,
			controller: 'BeersCtrl',
			controllerAs: 'beers'*/
		})
		.when('/beers', {
			templateUrl: 'src/beers/beers.html',
			controller: 'BeersCtrl',
			controllerAs: 'beersCtrl'
		})
		.when('/beers/name/:name', {
			templateUrl: 'src/beers/beers.html',
			controller: 'BeersCtrl',
			controllerAs: 'beersCtrl'
		})
		.when('/beers/id/:id', {
			templateUrl: 'src/beers/beer.html',
			controller: 'BeerCtrl',
			controllerAs: 'beerCtrl'
		})
		.when('/breweries', {
			templateUrl: 'src/breweries/breweries.html',
			controller: 'BreweriesCtrl',
			controllerAs: 'breweriesCtrl'
		})
		.when('/breweries/name/:name', {
			templateUrl: 'src/breweries/breweries.html',
			controller: 'BreweriesCtrl',
			controllerAs: 'breweriesCtrl'
		})
		.when('/breweries/id/:id', {
			templateUrl: 'src/breweries/brewery.html',
			controller: 'BreweryCtrl',
			controllerAs: 'breweryCtrl'
		})
		.when('/breweries/zip/:zip', {
			templateUrl: 'src/breweries/breweryzip.html'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

