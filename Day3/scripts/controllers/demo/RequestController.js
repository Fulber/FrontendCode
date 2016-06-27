hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){

    $scope.jobList = [];

    $http.get("http://hrapp-zth.rhcloud.com/hrapp/jobs")
        .success(function (data) {
            $scope.jobList = data;
        })
        .error(function (data, status) {
            alert("Error: " +status);
        });
}]);
