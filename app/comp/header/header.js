/**
 *
 */

angular
    .module("app")
    .component("header", {
        templateUrl: "app/comp/header/header.html",
        controller: function($scope, $rootScope) {
            $rootScope.ciao = 10;
        }
    });
