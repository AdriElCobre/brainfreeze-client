

'use strict';
moduloSistema.controller('GestionController',
        ['$scope', '$routeParams', '$location', 'sessionService',
            function ($scope, $routeParams, $location, sessionService) {
                $scope.op = "Gestion";
                $scope.session_info = sessionService.getSessionInfo();
                $scope.isSessionActive = sessionService.isSessionActive();
            }
        ]);