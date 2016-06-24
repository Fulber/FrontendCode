/**
 * Created by user on 24.06.2016.
 */
hrApp.controller('MathController', function ($scope) {

    $scope.mathOperation = function (op) {
        switch (op){
            case '+': $scope.result = $scope.numberA + $scope.numberB;
                    break;
            case '-': $scope.result = $scope.numberA - $scope.numberB;
                    break;
            case '*': $scope.result = $scope.numberA * $scope.numberB;
                    break;
            case '/': $scope.result = $scope.numberA / $scope.numberB;
                    break;
        }
    }
});