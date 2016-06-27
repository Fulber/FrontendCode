/**
 * Created by user on 27.06.2016.
 */
hrApp.service('UserService', function () {

    var userList = [];

    return {
        addUser: function (user) {
            userList.push(user);
        },
        getList: function () {
            return userList;
        }
    }
});