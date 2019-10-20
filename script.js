$(document).ready(function() {

    setInterval(getCurrentTime, 1000);


    var currentDay = $("#currentDay");
    var date = $("<div>");
    function getCurrentTime(){
    date.text(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
    currentDay.append(date);
    }

    function liveTime(){
        var today = new Date();
        var currentHour = today.getHours()
        console.log("current Hour(using javascript) date function) : " + currentHour);
    
        for (let i = 9; i < 18; i++) {

        if (i == currentHour) {
            document.getElementById("t" + i).setAttribute("class", "present");
        }

        else if (i < currentHour){
            document.getElementById("t" + i).setAttribute("class", "past");
        }

        else if (i > currentHour){
            document.getElementById("t" + i).setAttribute("class", "future");
        }
        }
    
    }
// get and give to local storage
    var appts = {};
    function init(){
        // getting entries on page load
        liveTime();
        appts = retrieveFromStorage("localStorageAppt");
        if (appts == null){
            appts = {};
            sendToStorage("localStorageAppt", appts);
        }
        if (appts.hasOwnProperty("t9")){
            document.getElementById("t9").value = appts.t9;
        }
        if (appts.hasOwnProperty("t10")){
            document.getElementById("t10").value = appts.t10;
        }
        if (appts.hasOwnProperty("t11")){
            document.getElementById("t11").value = appts.t11;
        }
        if (appts.hasOwnProperty("t12")){
            document.getElementById("t12").value = appts.t12;
        }
        if (appts.hasOwnProperty("t13")){
            document.getElementById("t13").value = appts.t13;
        }
        if (appts.hasOwnProperty("t14")){
            document.getElementById("t14").value = appts.t14;
        }
        if (appts.hasOwnProperty("t15")){
            document.getElementById("t15").value = appts.t15;
        }
        if (appts.hasOwnProperty("t16")){
            document.getElementById("t16").value = appts.t16;
        }
        if (appts.hasOwnProperty("t17")){
            document.getElementById("t17").value = appts.t17;
        }
    }


// use the following in the HTML file
// create 9 rows
// create 3 columns
// add text areas using an array of hours

// create a function for button to save to local storage when clicked

// past = grey
// current = red
// future = green

var clickToSave = $(".saveBtn").on("click", function (key, value) {
    alert("you saved this appointment");
    var apptTextContent = $(this).siblings(".col-md-10").val();
    localStorage.setItem("apptTextContent", value);
    return JSON.parse(localStorage.getItem(key));
});

//creating key value pair by clicking save button


function saveAppt(key, value) {
    appts[key] = value;
    sendToStorage("localStorageAppt", appts);
  }
  //sending new entries into local storage
  function sendToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  //retrieving entries from local storage
  function retrieveFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }


});