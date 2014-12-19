
var app = angular.module("phoneApp", [])

app.controller("AppCtrl", function($scope) {
    $scope.getDate = function() {
        return new Date();
    }
    $scope.messageLog = [];

    $scope.addToMessageLog = function(number, message) {

        //alert(number + " " + message)
        //alert(message);
        $scope.messageLog.push({content:message, date: new Date()});
        for (var x = 0; x < $scope.messageLog.length; x++) {
            console.log($scope.messageLog[x]);

        }
    }

})


app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: '<input type="text" ng-model="value" style="width:350px;">' +
        '<div class="button" ng-click="makeCall({number:number, message:value})">Call {{number}} and leave a message</div>',
        link: function(scope, element, attrs) {
        }
    }
})