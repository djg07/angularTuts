var app = angular.module("myApp", [])

app.filter('reverse', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }

})

app.factory('Data', function() {
    return {
        message: "I'm data from a service"
    }

})

app.controller("FirstCtrl", function($scope, Data) {
    $scope.data = Data;
})

app.controller("SecondCtrl", function($scope, Data) {
    $scope.data = Data;
    $scope.reversedMessage = function() {
        return $scope.data.message.split("").reverse().join("");

    }
})


