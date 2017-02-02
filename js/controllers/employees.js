	var app=angular.module('employeeDemoApp');
	app.controller('employeectrl',function($scope,$state,$stateparams,EmployeeService){
		console.log("Registrtion")
		   

		    $scope.saveEmployee = function(formname){
		 	console.log($scope.employee);
		 	EmployeeService.saveEmployee($scope.employee);
		 	$state.go("employees");

		 }
		 $scope.employeeslist=Employeeservice.getEmployees();
		 if($stateparams && $stateparams.id){
	 	    $scope.employee =EmployeeService.getEmployees($stateparams.id);
		 }
		 $scope.updateEmployee = function(req){
		 	EmployeeService.updateEmployee($stateparams.id,$scope.employee);
		 	$state.go("employees")
		 }
	});