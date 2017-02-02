var App=angular.module('employeeDemoApp',['ui.router','ngMessages']);
App.config(function($stateprovider,$urlRouterprovider){
			   


			   $stateprovider
				    .state('employees',{
					url:"/employees",
					templateurl:"views/employees/list.html",
					controller:"employeesctrl"

		})

				    .state('employees_edit',{
					url:"/:id/edit",
					templateurl:"views/employees/edit.html",
					controller:"employeesctrl"

		})

				    .state('employees_new',{
					url:"/new",
					templateurl:"views/employees/new.html",
					controller:"employeesctrl"

		})
				    $urlRouterprovider.otherwise("/employees")
})