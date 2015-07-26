
//Custom directive
var app = angular.module('directiveApp', ["ngAnimate"]);
app.controller('PatientsController', function($scope){
	$scope.patients = [
	  {name:'John', age:25, gender:'male'},
	  {name:'Jessie', age:30, gender:'female'},
	  {name:'Joan', age:28, gender:'male'},
	  {name:'Joy', age:15, gender:'female'},
	  {name:'Mary', age:28, gender:'female'},
	  {name:'Peter', age:95, gender:'male'},
	  {name:'Sebastian', age:50, gender:'male'},
	  {name:'Ekra', age:27, gender:'female'},
	  {name:'Patrick', age:40, gender:'male'},
	  {name:'Samantha', age:60, gender:'female'}
	];
});



