'use strict';

// init slick carousel
$(document).ready(function(){
	$('.carousel').slick({
		dots: false,
		infinite: true,
		fade: true,
		slide: 'div',
		cssEase: 'linear',
	});
});

// Declare app level module which depends on views, and components

var myApp = angular.module('myApp', []);

myApp.controller('SkillSet', function($scope) {
	$scope.skills = [
		{'name': 'Nexus S',
		 'level': 1},
		{'name': 'Some skill',
		 'level': 2},
		{'name': 'MOTOROLA XOOM™',
		 'level': 3}
	];
});

myApp.controller('HeaderContent', function($scope) {

	$scope.titleName = "Valentyne Radchuk";

	$scope.titleItems = [
		{'name': 'Team Lead'},
		{'name': 'Senior .NET Developer'},
		{'name': 'Front-end developer'},
	];
	
	$scope.locations = [
		{"name": "Ukraine"},
		{"name": "Kyiv"},
	]; 

	$scope.faAttribute = "fa fa-lg";

	$scope.contactsList = [
		{
			"value" : "zaknafeyn@gmail.com",
			"link-value": "mailto:zaknafeyn@gmail.com",
			"fa-glyph" : "fa-envelope-square",
		},
		{
			"value" : "cv.vradchuk.info",
			"link-value" : "http://cv.vradchuk.info",
			"fa-glyph" : "fa-hand-o-right",
		},
		{
			"value" : "zzaknafeyn",
			"link-value": "skype:NZeraF?call",
			"fa-glyph" : "fa-skype",
		},
	];
});


// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
