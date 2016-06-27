/**
 * Created by user on 27.06.2016.
 */
hrApp.controller('UserController', function ($scope, $location, UserService) {

    $scope.back = function () {
        $location.url('/');
    };
    $scope.reset = function () {
        $scope.firstName = undefined;
        $scope.lastName = undefined;
        $scope.id = undefined;
        $scope.age = undefined;
    };
    $scope.save = function () {
        var user = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            id: $scope.id,
            age: $scope.age
        };
        UserService.addUser(user);
        alert("User Added!");
    };
    $scope.show = function () {

        var userList = UserService.getList();
        alert(userList[0].firstName);
    };
});