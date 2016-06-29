hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'JobActionsService',
    function ($scope, EmployeeActionsService, jobActionsService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = jobActionsService;
    $scope.currentDate = new Date();
}]);
