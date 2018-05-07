var todos = [];

var input = prompt("What would you like to do");

while (input !== "quit"){

if(input === "new"){
 	newTodo();
} else if (input === "list"){
	listTodos();
} else if (input === "delete"){
	deleteTodo();
}
var input = prompt("What would you like to do");

}

console.log("ok u quit");

function listTodos(){
	console.log("*********");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("*********");
}

function deleteTodo(){
	var index = prompt("enter index of todo to delete");
	todos.splice(index,1);
}

function newTodo(){
	var newTodo = prompt("Whats the new todo");
	todos.push(newTodo);
}