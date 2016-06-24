/**
 * Created by user on 24.06.2016.
 */
hrApp.controller('ScopesController', function ($rootScope, $scope) {

    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childschope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (value) {
        $scope.firstVariable = value;
    };
});