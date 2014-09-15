define(['js/roggel'], function(roggel) {
    roggel.controller('FieldController', ['$scope', function($scope) {
        $scope.field = [];
        for (var x = 0; x < 25; ++x) {
            for (var y = 0; y < 25; ++y) {
                $scope.field.push({
                    x: x,
                    y: y,
                    color: '#3d9970',
                    scale: 1.0
                });
            }
        }

        for (var i = 0; i < 18; ++i) {
            var current = { x: Math.round(Math.random() * 25), y: Math.round(Math.random() * 25) };
            for (var j = 0; j < 60; ++j) {
                $scope.field.forEach(function(cell) {
                    if (cell.x === current.x && cell.y === current.y) {
                        var value = Math.random();
                        switch (true) {
                        case value < 0.02: cell.color = 'cyan'; break;
                        case value < 0.05: cell.color = 'gold'; break;
                        case value < 0.15: cell.color = 'silver'; break;
                        case value < 0.3: cell.color = '#b87333'; break;
                        default: cell.color = '#999999'; break;
                        }
                        if (value < 0.3) {
                            cell.scale = 0.1 + (Math.random() * 0.7);
                        } else {
                            cell.scale = 1.0;
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
                        cell.scale = 1.0;
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
