// variables for timeblocks
var sched9am = $("#9am");
var sched10am = $("#10am");
var sched11am = $("#11am");
var sched12pm = $("#12pm");
var sched1pm = $("#1pm");
var sched2pm = $("#2pm");
var sched3pm = $("#3pm");
var sched4pm = $("#4pm");
var sched5pm = $("#5pm");

var scheduleArray = [
    sched9am,
    sched10am,
    sched11am,
    sched12pm,
    sched1pm,
    sched2pm,
    sched3pm,
    sched4pm,
    sched5pm,
];

// accesses local storage to fill text boxes with user's previous input
function  initPage() {
    var init9 = JSON.parse(localStorage.getItem("9AM"));
    sched9am.val(init9);
    var init10 = JSON.parse(localStorage.getItem("10AM"));
    sched10am.val(init10);
    var init11 = JSON.parse(localStorage.getItem("11AM"));
    sched11am.val(init11);
    var init12 = JSON.parse(localStorage.getItem("12PM"));
    sched12pm.val(init12);
    var init1 = JSON.parse(localStorage.getItem("1PM"));
    sched1pm.val(init1);
    var init2 = JSON.parse(localStorage.getItem("2PM"));
    sched2pm.val(init2);
    var init3 = JSON.parse(localStorage.getItem("3PM"));
    sched3pm.val(init3);
    var init4 = JSON.parse(localStorage.getItem("4PM"));
    sched4pm.val(init4);
    var init5 = JSON.parse(localStorage.getItem("5PM"));
    sched5pm.val(init5);
}

function updateTime() {
    var today = moment();
    
    // updates time in the header
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, HH:mm"));
    
    // colors time blocks
    var now = moment().format("HH");
    for (var i = 0; i < scheduleArray.length; i++) {
        scheduleArray[i].removeClass("future past present");
        if (now > scheduleArray[i].attr("data-hour")) {
            scheduleArray[i].addClass("past");
        } else if (now === scheduleArray[i].attr("data-hour")) {
            scheduleArray[i].addClass("present");
        } else {
            scheduleArray[i].addClass("future");
        }
    }
}

updateTime();
initPage();
setInterval(updateTime, 1000);

// // save buttons functionality
$(".saveBtn").on("click", function() {
    userInput = $(this).siblings(".form-control").val().trim();
    selectedHour = $(this).siblings(".time-block").text().trim();
    localStorage.setItem(selectedHour, JSON.stringify(userInput));
  });