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

// myApp.controller('SkillSet', function($scope) {
// 	$scope.skills = [
// 		{'name': 'Nexus S',
// 		 'level': 1},
// 		{'name': 'Some skill',
// 		 'level': 2},
// 		{'name': 'MOTOROLA XOOM™',
// 		 'level': 3}
// 	];
// });

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

	// $scope.contactsList = [
	// 	{
	// 		"value" : "zaknafeyn@gmail.com",
	// 		"link-value": "mailto:zaknafeyn@gmail.com",
	// 		"fa-glyph" : "fa-envelope-square",
	// 	},
	// 	{
	// 		"value" : "cv.vradchuk.info",
	// 		"link-value" : "http://cv.vradchuk.info",
	// 		"fa-glyph" : "fa-hand-o-right",
	// 	},
	// 	{
	// 		"value" : "zzaknafeyn",
	// 		"link-value": "skype:NZeraF?call",
	// 		"fa-glyph" : "fa-skype",
	// 	},
	// ];
	$scope.links = [
		{link : "https://www.linkedin.com/in/valentineradchuk", icon:"fa-linkedin-square"},
		{link : "https://www.xing.com/profile/Valentyn_Radchuk/", icon:"fa-xing-square"},
		{link : "https://www.facebook.com/valik.radchuk", icon:"fa-facebook-square"},
		{link : "https://github.com/Zaknafeyn", icon:"fa-github-square"},
		{link : "https://twitter.com/zzaknafeyn", icon:"fa-twitter-square"},
	];
});


myApp.controller('SkillSet', function($scope) {

	$scope.skillSets = [
		{name: "Programming languages", 
		 skillItems: [
			{
				level: 8,
				skills : [
					{name : "C Sharp", iconClass : "icon-csharp"},
				]
			},
			{
				level : 5,
				skills: [
					{name: "HTML", iconClass: "icon-html", separator:","},
					{name: "CSS", iconClass : "icon-css", separator:","},
					{name: "JS", iconClass : "icon-javascript fa-lg-fix"},
				]
			},
			{
				level: 4,
				skills: [
					{name : "PowerShell", iconClass: "icon-shell", separator:","},
					{name: "Batch"},
				]
			}
		]},	

		{name: "Databases", 
		 skillItems: [
			{
				level: 4,
				skills : [
					{name : "MS SQL", iconClass : "icon-mssql fa-lg-fix"},
				]
			},
			{
				level : 4,
				skills: [
					{name: "HTML", iconClass: "icon-oracle fa-lg-fix"}
				]
			},
			{
				level: 1,
				skills: [
					{name : "MongoDB"},
				]
			}
		]},	

		{name: "C# Frameworks", 
		 skillItems: [
			{
				level: 7,
				skills : [
					{name : ".NET 2-3.5", separator:","},
					{name : "LINQ"},
				]
			},
			{
				level : 6,
				skills: [
					{name: "ASP.NET MVC", separator:","},
					{name: "WCF", separator:",", title: "Windows Communcation Foundation"},
					{name: "EF", title: "Entity Framework"},
				]
			},
			{
				level: 6,
				skills: [
					{name : "MongoDB"},
				]
			}
		]},	

		{name: "Instruments", 
		 skillItems: [
			{
				level: 9,
				skills : [
					{name : "GIT/SVN", separator:","},
					{name : "Jira", separator:","},
					// {name : "Confluence"},
				]
			},
			{
				level : 6,
				skills: [
					{name: "TC", separator:",", title: "Team City Build Server"},
					{name: "MSBuild", separator:","},
					{name: "NuGet"},
				]
			},
			{
				level: 6,
				skills: [
					{name: "VS", separator:",", title: "Visual Studio"},
					{name: "WebStorm", separator:","},
					{name: "Sublime"},
				]
			}
		]},

		{name: "Other skills", 
		 skillItems: [
			{
				level: 6,
				skills : [
					{name : "XML/XSLT/XPath"},
				]
			},
			{
				level : 8,
				skills: [
					{name: "SCRUM", separator:","},
					{name: "Kanban", separator:","},
				]
			},
			{
				level: 10,
				skills: [
					{name: "OOP", separator:",", title: "Object-oriented programming"},
					{name: "OOD", separator:",", title: "Object-oriented design"},
					{name: "SOLID", title: "SOLID principles of OOD"},
				]
			}
		]},

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
