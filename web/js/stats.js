define(['js/roggel'], function(roggel) {
    roggel.factory('stats', ['$rootScope', function($rootScope) {
        var result = {
            copperCount: 9003,
            silverCount: 256,
            goldCount: 200
        };

        setInterval(function() {
            result.copperCount += Math.round(Math.random() * 100);
            result.silverCount += Math.round(Math.random() * 100);
            result.goldCount += Math.round(Math.random() * 100);
            $rootScope.$apply();
        }, 500);

        return result;
    }]);

    roggel.controller('Stats', ['$scope', 'stats', function($scope, stats) {
        Object.defineProperty($scope, 'copperCount', {
            enumerable: true,
            get: function() { return stats.copperCount; }
        });
        Object.defineProperty($scope, 'silverCount', {
            enumerable: true,
            get: function() { return stats.silverCount; }
        });
        Object.defineProperty($scope, 'goldCount', {
            enumerable: true,
            get: function() { return stats.goldCount; }
        });
    }]);
});
