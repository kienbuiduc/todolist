angular.module('toDoList', [])

	.controller('mainController', function() {
		vm = this;

		vm.todoText == "";
		vm.todos = [
			{text:'learn AngularJS', check:true},
			{text:'build an AngularJS app', check:false}];

		// add new work item
		vm.addTodo = function() {
			if(vm.todoText == "" || vm.todoText == undefined){
				//alert("Input value");
				vm.error = "input value plz !";
				return;
			}
			vm.todos.push({text:vm.todoText, check:false});
			vm.todoText = '';
		};

		//input work change
		vm.textChange = function(){
			if(vm.todoText.length > 0){
				vm.error = "";
			}
		}

		//remove single item
		vm.removeItem = function(item){
			for (var i = 0; i < vm.todos.length; i++) {
				if(vm.todos[i].text == item.text){
					vm.todos.splice(i,1);
				}
			};
		}

		//check all item
		vm.checkAll = function(){
			for (var i = 0; i < vm.todos.length; i++) {
				vm.todos[i].check = true;
			};
		}

		//uncheck all
		vm.uncheckAll = function(){
			for (var i = 0; i < vm.todos.length; i++) {
				vm.todos[i].check = false;
			};
		}

		//remmove witch checked item
		vm.remove = function(){
			vm.todos = vm.todos.filter( function( item ){
		    	return !item.check;
		  	})
		}
	});