/**
 * Created by asus on 19/12/2014.
 */

var app = angular.module("phoneApp", [])

angular.controller("AppCtrl", function($scope) {
    $scope.leaveVoicemail = '';

})


angular.directive("phone", function() {
    return {
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template: ''

    }

})