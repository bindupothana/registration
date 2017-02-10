var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

    var factory = {};
    var employeeList = [];
            
    factory.saveEmployee = function(employee) {
       return employeeList.push(employee);
    }
    factory.getEmployees = function(){
    	return employeeList;
    }
    factory.getEmployee = function(index){
    	console.log(employeeList, employeeList[index])
    	return angular.copy(employeeList[index]);
    }
    factory.updateEmployee = function(index, employee){
    	
    	return employeeList[index] = employee;
    }


    factory.deleteEmployee = function(index){
        
        return employeeList.splice(index,1);
    }
    

    return factory;


});