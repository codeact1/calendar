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
  displayTask(task);
  clearForm();
}

function displayTask(task) {
  
  let syntax = `<div class="task">

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

function init() {
  
  // load prev data

  //catch events

  $("#btnSave").click(saveTask);
  $("#iImportant").click(changeIcon);
  $("#showForm").click(showForm);
}

window.onload = init;
