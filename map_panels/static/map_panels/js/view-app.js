 var mapPanelsApp = angular.module('mapPanelsApp', [
	'ui.layout',
	"btford.markdown",
	'cartoview.map']);
mapPanelsApp.controller('mapPanelsController', function($scope){
	// appConfig is a global variable set in django template
	//TODO: use angular service to get
	$scope.appConfig = appConfig; 
	$scope.rowLayoutOptions = {
		dividerSize:0
	};
	$scope.columnLayoutOptions = {
		flow: 'column',
		dividerSize:0
	};
	$scope.$on('ui.layout.resize', function(e, beforeContainer, afterContainer){
		console.debug(arguments)
	});
	$scope.$on('ui.layout.toggle', function(e, container){
	  if ( container.size > 0 ){
		 console.log('container is open!');
	  }
	});
});