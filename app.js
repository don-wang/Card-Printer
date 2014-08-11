var app = angular.module("myApp", []);
 
app.controller("App", ['$scope','$http', function($scope, $http)
        {    
            $http.get('data.json').success (function(data){
                $scope.data = parseName(data);
        });

            
        }]
        

);

        function parseName(data){
            names = data.split("\n");
            return names;
        }