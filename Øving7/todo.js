// JavaScript Document

document.getElementById("the_todo_form").addEventListener("submit", function(event){
  event.preventDefault()
}); //prevents the page from reloading itself


var ul = document.getElementById('todoli');
var output = document.getElementById('out');
var tasks=[]; //list to store the tasks in
var tasks_completed = 0; //counter for how many task that have been checked



function addTask() {
	var input = document.getElementById('in').value; //get the task input
	if (input == "") { //if input element is empty show message:
		alert ("You have to enter a task.")
		return false;
	}
	
	else {
		var li = document.createElement('li'); //creates a list element
		
		var checkbox = document.createElement('input'); //create the input for the checkbox
		checkbox.type='checkbox'; //sets the type of the input to checkbox
		li.appendChild(checkbox); //add the checkbox to the list element
		
		var label = document.createElement('label') //create a label element
		label.innerHTML = input; //adds the input to the label
		li.appendChild(label); //add the label to the list element after the checkbox
		ul.insertBefore(li, ul.firstElementChild); //adds the newest list element on the top of the list
	
		var the_date = Date.now();
	
		tasks.push({date: the_date, task: input}); //keeps a log of all the tasks and the date (in milliseconds) for when they were added.
		//console.log(tasks);
		
		
		checkbox.addEventListener("change", function() { //if the box is checked or unchecked this keeps a track of it.
			if (this.checked == true) {
				tasks_completed += 1; 
			}
			if (this.checked == false) {
			tasks_completed -= 1;
		}
		//console.log(tasks_completed);
		output.innerHTML = tasks_completed + "/" + tasks.length + " completed"; //shows how many out of the total tasks that are completed.
	});
		
		
	}
}
