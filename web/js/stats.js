define(['js/roggel'], function(roggel) {
    roggel.controller('Stats', ['$scope', function($scope) {
        $scope.copperCount = 9003;
        $scope.silverCount = 256;
        $scope.goldCount = 200;

        setInterval(function() {
            $scope.copperCount += Math.round(Math.random() * 100);
            $scope.silverCount += Math.round(Math.random() * 100);
            $scope.goldCount += Math.round(Math.random() * 100);
            $scope.$apply();
        }, 500);
    }]);
});
