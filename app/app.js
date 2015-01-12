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

myApp.controller('ExperienceSet', function($scope) {

	$scope.predicate = 'predicate';
	
	$scope.expItems = [
		{ 
			itemid: 4, 
			companyName: "Cogniance",
			companyLink: "http://www.cogniance.com/",
			position: "Senior .NET Developer",
			logoSrc: "./img/logos/cogniance.png",
			place: "Kyiv, Ukraine",
			expStart: "10.2014",
			expEnd: "now",
			projects: [
				{
					projectName: "eFolder", 
					projectLink: "http://www.efolder.net/", 
					projectDescr:"Development and supporting Outlook plugin."
				}
			]
		},

		{ 
			itemid: 3, 
			companyName: "UBS ODC at Luxoft Ukraine",
			companyLink: "http://www.luxoft.com/",
			position: ".NET Technical Lead",
			logoSrc: "./img/logos/Luxoft.jpg",
			place: "Kyiv, Ukraine",
			expStart: "01.2012",
			expEnd: "07.2014",
			projects: [
				{
					projectName: "Structured Risk", 
					projectLink: "http://usb.com", 
					projectDescr:"Optimization risk calculation engine for derivative financial instruments."
				}
			]
		},

		{ 
			itemid: 2, 
			companyName: "UBS ODC at Luxoft Ukraine",
			companyLink: "http://www.luxoft.com/",
			position: "Senior .NET developer",
			logoSrc: "./img/logos/Luxoft.jpg",
			place: "Kyiv, Ukraine",
			expStart: "05.2010",
			expEnd: "12.2011",
			projects: [
				{
					projectName: "Structured Risk", 
					projectLink: "http://usb.com", 
					projectDescr:"Optimization risk calculation engine for derivative financial instruments."
				}
			]
		},

		{ 
			itemid: 1, 
			companyName: "GlobalLogic",
			companyLink: "http://www.globallogic.com/",
			position: ".NET developer",
			logoSrc: "./img/logos/gl.jpg",
			place: "Kyiv, Ukraine",
			expStart: "12.2009",
			expEnd: "04.2010",
			projects: [
				{
					projectName: "Voltari (Motricity)", 
					projectLink: "http://voltari.com", 
					projectDescr:"Optimizing billing system for company Voltari (Motricity)"
				}
			]
		},

		{ 
			itemid: 0, 
			companyName: "Vimas Technologies",
			companyLink: "http://www1.vimas.com/",
			position: ".NET developer",
			logoSrc: "./img/logos/vimas_1.png",
			place: "Kyiv, Ukraine",
			expStart: "07.2007",
			expEnd: "11.2009",
			projects: [
				{
					projectName: "Voltari (Motricity)", 
					projectLink: "http://www.spx.com/", 
					projectDescr:"Development component for filling content for product configurator for one of the departments of company SPX"
				}
			]
		},
	];

});