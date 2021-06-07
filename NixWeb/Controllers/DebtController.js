app.controller('DebtController', function ($scope, $http) {
    $scope.filter = {};
    $scope.errorMessage = {};
    $scope.GetStatement = function () {
        $http.post('https://localhost:44326/api/Debt/GetStatement', $scope.filter)
            .then(function (response) {
                $scope.data = response.data;
                $scope.errorMessage = '';
            },
                function (err) {
                    $scope.errorMessage = 'Falha na requisição: \n' 

                    if (typeof err.data.errors !== 'undefined') {
                        if (typeof err.data.errors.InitialDate !== 'undefined') {
                            for (i = 0; i < err.data.errors.InitialDate.length; i++){
                                $scope.errorMessage += err.data.errors.InitialDate[i] + "\r\n";
                            }
                        }
                        if (typeof err.data.errors.FinalDate !== 'undefined') {
                            for (i = 0; i < err.data.errors.FinalDate.length; i++) {
                                $scope.errorMessage += err.data.errors.FinalDate[i] + "\r\n";
                            }
                        }
                    }
                    else
                        $scope.errorMessage += err.data;

                    console.log(err);
                });
    }
});