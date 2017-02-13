var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function(localStorage,$window,$rootScope) {

    var factory = {};
    
 


  /* var employeeList=[];
   localStorage.setEmployee("employees", JSON.stringify(employeeList));
   var retrievedData = localStorage.getEmployee("employees");
    if (event.key === 'employeeList') {
      $rootScope.$apply();
    }
  
  return {
    setEmployee: function(val) {
      $window.localStorage && $window.localStorage.setEmployee('employees', val);
      return this;
    },
    getEmployee: function() {
      return $window.localStorage && $window.localStorage.getEmployee('employees');
    }
  },

*/



return {  
                    List: employeeList, 
                     updateEmployees: function (employee) {  
                        if(localStorage && localStorage.getEmployee('employees')){
                                       localStorage.setEmployee("employees", (employees));  
                        }   
                        employeeList = employees;  
                          
},


getEmployees: function () {  
                         
                        employeeList = localStorage.getEmployee("employees");                         
                        return employeeList ? employeeList : [];  
                    }  
                };  
  
            });  










            
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