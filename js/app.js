 
var App = angular.module('employeeDemoApp',['ui.router', 'ngMessages']);

App.config(function($stateProvider, $urlRouterProvider){
				
			$stateProvider
		        .state('employees', {
					url: "/employees",
					templateUrl: "views/employees/list.html",
					controller: "employeesCtrl"
				})
				.state('employees_edit', {
					url: "/:id/edit",
					templateUrl: "views/employees/edit.html",
					controller: "employeesCtrl"
				})
				.state('employees_new', {
					url: "/new",
					templateUrl: "views/employees/new.html",
					controller: "employeesCtrl"
				});

							
				$urlRouterProvider.otherwise("/employees")	


            

           });

	




