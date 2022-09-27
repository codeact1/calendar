var importantIcon = "fas fa-exclamation";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isVisible = true;
//$(".info").hide();

function saveTask() {
 

  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let tag = $("#txtTag").val();
  let dueDate = $("#txtDueDate").val();
  let category = $("#txtCategory").val();
  let color = $("#txtColor").val();

  let task = new Task(title, description, tag, dueDate, category, color);
  
$.ajax({
  type: "POST",
  url: "https://fsdiapi.azurewebsites.net/api/tasks/",
  data: JSON.stringify(task),
  contentType:"application/json",
  success: function(response) {
    displayTask(task);
  clearForm();

  },
  error: function(details) {
    console.log("saved failed", details);
  },
   
});

  
}

function displayTask(task) {
  
  let syntax = `<div class="task" style="border-color:${task.color}">

    <div class="title-des">
        <h4>${task.title}</h4>
        <p>${task.description}</p>
     </div>

     <label class="date">${task.dueDate}</label>

     <div class="cat-tag">
        <label>${task.category}</label>
        <label>${task.tag}</label>
     </div>
  
  </div>`;

  $("#taskList").append(syntax);
}
function clearForm() {
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtTag").val("");
    $("#txtDueDate").val("");
    $("#txtCategory").val("");
    $("#txtColor").val("");
}


function changeIcon() {
  if (isImportant == false) {
    //change to important
    

    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
  } else {
    //change to non important
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  }
}

function showForm() {
  if (isVisible) {
    $(".info").hide();
    isVisible = false;
  } else {
    $(".info").show();
    isVisible = true;
  }
}

function testRequest(){
  //this is a test http request 
  $.ajax({
    type:"GET",
    url: "https://fsdiapi.azurewebsites.net/",
    success: function(data){
      console.log(data);
    },
    error:function(details){
      console.log("Error", details);
    }

  });
}

function fetchTask(){
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    contentType:"application/json",
    success: function(response) {
      let allTasks = JSON.parse(response);
  
      //travel array
      for(let i =0; i < allTasks.length; i++) {
        let task = allTasks[i];
        //display only your task
        if(task.name == "LaChaka"){
        displayTask(allTasks[i]);
        }
        } 
      },
    error: function(details) {
      console.log("Error", details);
     },
     
  });

}


function init() {
  
  // load prev data
fetchTask();
  //catch events

  $("#btnSave").click(saveTask);
  $("#iImportant").click(changeIcon);
  $("#showForm").click(showForm);
}

window.onload = init;
