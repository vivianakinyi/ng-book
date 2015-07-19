 var app = angular.module("myapp", ["firebase"]);

 app.controller("AuthCtrl", function($scope, $firebaseAuth){
 	
 });






















// app.factory("shoppingList", ["$firebaseArray", 
// 	function($firebaseArray){
// 		var ref = new Firebase("https://angularbook.firebaseio.com/data/items/shoppingList");

// 		return $firebaseArray(ref);
// 	]});

// app.controller("shoppingCrl", ["$scope", "shoppingList", 
// 	function($scope, $shoppingList){
// 		$scope.items = "newItem";
// 		$scope.shopping = shoppingList;

// 		$scope.shopping.$add({
// 			$scope.items
// 		});

// 		// $scope.shopping.$on("loaded",
// 		// 	function(){
// 		// 		console.log("items loades")
// 		// 	});

// }]);