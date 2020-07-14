//Function for Calendar
$(document).ready(function(){
    //display current Date, MMDDYYYY, HH:MM am/pm
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    //Retrieve stored data
    $(".time-block").each(function () {
        var id = $(this).attr(".hour");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });

    //Define save button
    var saveBtn = $(".saveBtn")

    //Save button stores data in local storage
    saveBtn.on("click", function (){
        var time = $(this).parent().attr(".hour");
        var schedule = $(this).siblings(".schedule").val();
    
        localStorage.setItem(time, schedule);
    });


});