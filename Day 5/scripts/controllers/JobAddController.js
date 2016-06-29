hrApp.controller('JobAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, CommonResourcesFactoryBackup) {

        $scope.job = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternNumberNotRespectedMessage = "This should be a number";

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.job = {};
        };

        /**
         * Persist a job
         * @param addJob - job to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.numberPattern = /\d+/;
}]);