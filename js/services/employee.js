var app=angular.module('employeeDemoAp');
app.factory('EmployeeService',function (){
	var factory={};
	var employeeList=[];
	factory.saveEmployee=function(employee){
		return employeeList.push(employee);
	
	}
	factory.getEmployees=function(){
		return employeeList.push(employee);
	}

factory.getEmployee=function(index)
{
	console.log(employeeList,employeeList[index])
	return employeeList[index];

}
factory.updateEmployee=function(index,employee){
	return employeeList[index]=employee;
	}
	return factory;
});