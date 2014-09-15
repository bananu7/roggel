define(['js/roggel'], function(roggel) {
    roggel.controller('FieldController', ['$scope', function($scope) {
        $scope.hexagons = [];
        for (var x = 0; x < 25; ++x) {
            for (var y = 0; y < 25; ++y) {
                $scope.hexagons.push({
                    x: x,
                    y: y
                });
            }
        }
    }]);
});
