function updateTime() {
    var today = moment();

    // updates the time element in the header
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, hh:mm:ss"));

    // colors time blocks
    var now = moment().format("kk");
    for (var i = 0; i < scheduleArray.length; i++) {
        scheduleArray[i].removeClass("future past present");

        if (now > scheduleArray[i].data("hour")) {
            scheduleArray[i].addClass("past");
        } else if (now === scheduleArray[i].attr("data-hour")) {
            scheduleArray[i].addClass("present");
        } else {
            scheduleArray[i].addClass("future");
        }
    }
}

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


updateTime();
setInterval(updateTime, 1000);