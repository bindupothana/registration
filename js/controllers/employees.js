var app = angular.module('employeeDemoApp');
app.controller('employeesCtrl', function($scope, $state, EmployeeService, $stateParams,getLocalStorage) {
	console.log("Hello")


        





	
	
	/*$scope.saved = localStorage.getItem('employees');
	$scope.employees = (localStorage.getItem('employees')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	localStorage.setItem('employees', JSON.stringify($scope.employees));

	$scope.addEmployee = function() {
		$scope.employees.push({
			text: $scope.employeeText,
			done: false
		});
		$scope.employeeText = '';
		localStorage.setItem('employees', JSON.stringify($scope.employees));
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.employees, function(employees){
			count+= todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.archive = function() {
		var oldemployees = $scope.employees;
		$scope.employees = [];
		angular.forEach(oldemployees, function(employees){
			if (!employee.done)
				$scope.emploiyees.push(employees);
		});
		localStorage.setItem('employees', JSON.stringify($scope.emploiyees));
	};
}
*/





        $scope.saveEmployee = function(formname){
			console.log(formname.$error)
			EmployeeService.saveEmployee($scope.user);
			$state.go("employees");
	    }
        
        $scope.employeeslist = EmployeeService.getEmployees();
        if($stateParams && $stateParams.id){
        	$scope.user = EmployeeService.getEmployee($stateParams.id);
        	console.log("gdfg", $scope.user)
        }
         
        $scope.updateEmployee = function(req){
          
          EmployeeService.updateEmployee($stateParams.id, $scope.user);
          
          getLocalStorage.updateEmployees($scope.employees);  
		  

		  $state.go("employees")
	    }
	    $scope.goto_new_employee_page = function(){
		$state.go("employees_new")
	}


	    $scope.deleteEmployee = function(index){
	    	EmployeeService.deleteEmployee(index);

	    }

	    /*$scope.emploiyees.push($localStorage.employeeslist);
	 
    console.log($localStorage.employeeslist);*/
    
  EmployeeService.setEmployee('key', 'value');
   EmployeeService.getEmployee('key');

       

       
 });
		
	