var dayArray = new Array( "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" );
var monthArray = new Array( "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" );

var getAtTime = function() {

    var myDate = new Date();
    var year = myDate.getYear();
    if (year < 1000) {
        year += 1900;
    }
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var date = myDate.getDate();
    if (date < 10) {
        date = "0" + date;
    }
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();

    var dn = "";

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Calculate Internet Time here
    var d = new Date();
    var internetTime = AtTime.toInternetDateTime(d, 2);

    // We do a real cheap calculation to figure out how large
    // we want the time graph.
    var internetTimeFrac = AtTime.toInternetDateTime(d, 3).slice(-3) / 10;
    var percent = internetTimeFrac + "%";

    var dateString = "";
    // dateString += dayArray[day] + ", ";
    dateString += monthArray[month] + " ";
    dateString += date + " " + year;

    var timeString = hours + ":" + minutes + ":" + seconds + " " + dn;

    return { dateString: dateString, timeString: timeString, internetTime: internetTime, percent: percent };
};