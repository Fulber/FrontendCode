hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
        'EmployeeService', 'DepartmentService', 'JobService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentService, JobService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.patternNameNotRespectedMessage = "The name should contain only letters";
        $scope.patternEmailNotRespectedMessage = "Email format should be test@mail.com";
        $scope.patternNumberNotRespectedMessage = "This should be a number";

        //TODO #HR1
        EmployeeService.findAllEmployees()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findAll: " + err);
            });

        DepartmentService.findAllDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at departments/findAll: " + err);
            });

        JobService.findAllJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at jobs/findAll: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
        $scope.namePattern = /^[a-zA-Z]+$/;
        $scope.emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        $scope.numberPattern = /\d+/;
}]);