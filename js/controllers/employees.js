var app = angular.module('employeeDemoApp');
app.controller('employeesCtrl', function($scope, $state, EmployeeService, $stateParams) {
	console.log("Hello")

        $scope.saveEmployee = function(formname){
			console.log(formname.$error)
			EmployeeService.saveEmployee($scope.user);
			$state.go("employees");
	    }
        
        $scope.employeeslist = EmployeeService.getEmployees();
        if($stateParams && $stateParams.id){
        	$scope.user = EmployeeService.getEmployee($stateParams.id);
        	$scope.user.dob = new Date($scope.user.dob);
        	console.log("gdfg", $scope.user)
        }
         
        $scope.updateEmployee = function(req){
          
          EmployeeService.updateEmployee($stateParams.id, $scope.user);
          
         
		  

		  $state.go("employees")
	    }
	    $scope.goto_new_employee_page = function(){
		$state.go("employees_new")
	}


	    $scope.deleteEmployee = function(index){
	    	console.log("fgdfhdh")
	    	EmployeeService.deleteEmployee(index);
	    	 $scope.employeeslist = EmployeeService.getEmployees();

	    }

	  

       
 });
		
	