//Function for Calendar
$(document).ready(function(){
    //display current Date, MMDDYYYY, HH:MM am/pm
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    //Retrieve stored data
    var schedule = localStorage.getItem(".hour")
    //Define save button
    var saveBtn = $(".saveBtn")

    //Save button stores data in local storage
    saveBtn.addEventListener("click", function (){
        var time = $(this).parent().attr(".hour");
        var schedule = $(this).siblings(".schedule").val();
    
        localStorage.setItem(time, schedule);
    });


});