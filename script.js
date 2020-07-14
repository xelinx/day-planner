//Function for Calendar
$(document).ready(function(){
    //display current Date, MMDDYYYY, HH:MM am/pm
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

});