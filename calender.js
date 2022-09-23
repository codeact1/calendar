var importantIcon = "fas fa-exclamation"
var nonImportantIcon = "far fa-star"
var isImportant = false;
var isVisible = true;
//$(".info").hide();

function saveTask(){
    console.log("Button Clicked");
}

function changeIcon(){
    if (isImportant == false) {
        //change to important
    console.log("Icon Clicked!")

    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    }
    else{
        //change to non important
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false; 
    }
}

function showForm(){
    if(isVisible){
        $(".info").hide();
        isVisible = false;
    }
    else{
        $(".info").show();
        isVisible = true;
    }
}

function init(){
    console.log("Task Manager");

    // load prev data

    //catch events


$("#btnSave").click(saveTask);
$("#iImportant").click(changeIcon);
$("#showForm").click(showForm);


}


window.onload = init;
