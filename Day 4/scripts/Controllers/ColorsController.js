/**
 * Created by user on 28.06.2016.
 */
hrApp.controller('ColorsController', function ($scope) {

    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted"
        },
        {
            "text": "primary",
            "class": "text-primary"
        },
        {
            "text": "success",
            "class": "text-success"
        },
        {
            "text": "info",
            "class": "text-info"
        },
        {
            "text": "warning",
            "class": "text-warning"
        },
        {
            "text": "danger",
            "class": "text-danger"
        }
    ];

    $scope.changeColor = function () {
        $scope.colorClass = $scope.selColor.class;
    };
});