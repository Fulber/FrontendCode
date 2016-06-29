hrApp.controller('JobEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
        'JobService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, JobService) {

        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternNumberNotRespectedMessage = "This should be a number";

        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at job/findOne: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.job = {};
        };

        /**
         * Persist a job
         * @param addJob - job to be persisted
         */
        $scope.create = function (addJob) {
            $http({url: CommonResourcesFactoryBackup.editJobUrl, method: 'PUT', data: addJob})
                .success(function (data) {
                    $scope.job = data;
                    $location.url('/jobView/' + $scope.job.jobId);
                });
        };

        $scope.numberPattern = /\d+/;
    }]);