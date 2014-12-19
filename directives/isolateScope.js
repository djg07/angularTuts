/**
 * Created by asus on 19/12/2014.
 */

var app = angular.module("drinkApp", [])

app.controller=("AppCtrl", function($scope) {


})

app.directive("drink", function() {
        return {
            scope: {},
            template: '<div>{{flavour}}</div>'
        }

})