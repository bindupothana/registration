var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

  var factory = {};
  var employeeList=[];


  factory.saveEmployee = function(employee){
    employeeList =  JSON.parse(localStorage.getItem('employeeList')); 
    if(employeeList == null){
      employeeList = [];
    }
    employeeList.push(employee);

    return localStorage.setItem('employeeList', JSON.stringify(employeeList));
  }



  factory.getEmployees = function(){

   var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
   console.log(JSON.parse(localStorage.getItem('employeeList')));
   return employeeList;
 }

 



 factory.getEmployee = function(index){
  var employeeList =  JSON.parse(localStorage.getItem('employeeList'));
  console.log(JSON.parse(localStorage.getItem('employeeList')));


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