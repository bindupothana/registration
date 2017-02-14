var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

  var factory = {};
  


  factory.saveEmployee = function(employee){
    var employeeList =  JSON.parse(localStorage.getItem('employeeList')); 
   
console.log(angular.copy(employeeList));

    if(employeeList == null){
      employeeList = [];
    }
    employeeList.push(employee);

    return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  }

  factory.getEmployees = function(){

   var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
  
console.log(angular.copy(employeeList));
   console.log(JSON.parse(localStorage.getItem('employeeList')));
   return employeeList;
 }
   factory.getEmployee = function(index){
    var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
  
    console.log(JSON.parse(localStorage.getItem('employeeList')));
    return angular.copy(employeeList[index]);
  }


factory.updateEmployee = function(index, employee){

    var employeeList =  JSON.parse(localStorage.getItem('employeeList')); 

    
      //employeeList.updateEmployees(employee);

    
   return employeeList[index] = employee;
}



factory.deleteEmployee = function(index){

    var employeeList = JSON.parse (localStorage.getItem('employeeList')); 
  console.log("index...", index, employeeList)
     employeeList.splice(index, 1);
    console.log("index...", index, employeeList)
    localStorage.setItem('employeeList', JSON.stringify(employeeList));
    return employeeList;
}







return factory;



});