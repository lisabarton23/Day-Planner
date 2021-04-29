$ (document).ready (function () {

// write all jquery should be inside this function so it will be applied to all of the DOM

var date = $("#currentDay"); 
date.text (moment ().format ("dddd, MMMM Do YYYY"));







$(".saveBtn").on ("click", function () {

    var value = $(this).siblings (".description").val ();

 

})

})



























//TODO: use the moment.js TO HELP CREATE
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//TODO: create a Date Object that will be current
// var date; 

// function displayTime() {
//     var date = moment().format('MMM DD, YYYY [at] hh:mm:ss a');}
    
  
   //add location of 
//TODO: add to the header
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//TODO: create timeblocks for each hour 9-5


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//TODO: create color for each block that shows time

// WHEN I click into a timeblock
//THEN I can enter an event
//TODO: creat an input field for each block

// WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//TODO: create a save button for timeblock
//TODO: create eventlistener that saves input to local storage


// WHEN I refresh the page
// THEN the saved events persist
//TODO: make sure local storage does not clear with page refresh
// ```