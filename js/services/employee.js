var app = angular.module('employeeDemoApp');
app.factory('EmployeeService',function() {

  var factory = {};
  var employeeList=[];


  factory.saveEmployee = function(employee) {


    var employeeList = JSON.parse(localStorage.getItem("employeesList"));  
    employeeList.push(employee);
    localStorage.setItem("employees", JSON.stringify(employeeList));
  }




  factory.getEmployees = function(){
    var employeeList = JSON.parse(localStorage.getItem("employees"));  
    return employeeList;
  }
  factory.getEmployee = function(index){

   console.log(employeeList, employeeList[index])
   return angular.copy(employeeList[index]);
 }
 factory.updateEmployee = function(index, employee){



   if (localStorage && EmployeesArr) {  

    localStorage.setItems("employees", angular.toJson(EmployeesArr));  



    return employeeList[index] = employee;
  }
  factory.deleteEmployee = function(index){

    return employeeList.splice(index,1);
  }


  return factory;

}

});