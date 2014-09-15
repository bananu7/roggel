define(['js/roggel'], function(roggel) {
    roggel.controller('FieldController', ['$scope', function($scope) {
        $scope.field = [];
        for (var x = 0; x < 25; ++x) {
            for (var y = 0; y < 25; ++y) {
                $scope.field.push({
                    x: x,
                    y: y,
                    color: '#3d9970'
                });
            }
        }

        for (var i = 0; i < 2; ++i) {
            var current = { x: Math.round(Math.random() * 25), y: Math.round(Math.random() * 25) };
            for (var j = 0; j < 60; ++j) {
                $scope.field.forEach(function(cell) {
                    if (cell.x === current.x && cell.y === current.y) {
                        if (Math.random() < 0.1) {
                            cell.color = 'gold';
                        } else {
                            cell.color = '#aaaaaa';
                        }
                    }
                });
                current.x += -1 + Math.round(Math.random() * 2);
                current.y += -1 + Math.round(Math.random() * 2);
            }
        }

        for (var i = 0; i < 2; ++i) {
            var current = { x: Math.round(Math.random() * 25), y: 0 };
            while (current.y <= 25) {
                $scope.field.forEach(function(cell) {
                    if (cell.x === current.x && cell.y === current.y) {
                        cell.color = '#7fdbff';
                    }
                });
                var dx = -1 + Math.round(Math.random() * 2);
                current.x += dx;
                if (dx == 0) {
                    ++current.y;
                }
            }
        }
    }]);
});
