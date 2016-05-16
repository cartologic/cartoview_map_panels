angular.module('newInstanceApp').directive('mapPanelsConfigFields', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: "map-panels-config-fields.html",
        controller: function($scope, dataService) {
            $scope.instanceObj = dataService.instanceObj;
        }
    }
});
