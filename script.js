//Function for Calendar
$(document).ready(function(){
    //display current Date, MMDDYYYY, HH:MM am/pm
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    //Retrieve stored data
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });

    //Define save button
    var saveBtn = $(".saveBtn")

    //Save button stores data in local storage
    saveBtn.on("click", function (){
        var time = $(this).parent().attr("id");
        var schedule = $(this).siblings(".schedule").val();
    
        localStorage.setItem(time, schedule);
    });

    //Color code timeblock
    function colorCode() {
        hour = moment().hours();
        $(".time-block").each(function () {
            var thisHour = parseInt($(this).attr("id"));
    
            if (thisHour > hour) {
                $(this).addClass("future")
            }
            else if (thisHour === hour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
            }
        })
    }
    
    colorCode();

});