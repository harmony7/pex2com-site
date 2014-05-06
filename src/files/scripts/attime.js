(function(fn) {
    fn(window["AtTime"] = {});
})(function(atTime) {

    atTime.toInternetTime = function(dateTime, num) {
        var d = new Date(dateTime);
        // We add 1 to UTC time because @Time is based on Switzerland time.
        // @Time was supposedly invented by Swatch, which is a Swiss company.
        var utcS = ((d.getUTCHours()+1) % 24) * 3600 + d.getUTCMinutes() * 60 + d.getUTCSeconds();
        var utcMS = utcS * 1000 + d.getUTCMilliseconds();
        // 86.4 is not an approximation.
        // The following gives us a number equal to 1000 times
        // the current internet time.
        var internetTime = Math.round(utcMS / 86.4);
        // We will now divide by 1000.
        // In the very rare case that fractional part of
        // internet time is 0, we have to add a decimal point.
        if ((internetTime % 1000) == 0) {
            internetTime /= 1000;
            internetTime += '.000';
        } else {
            internetTime /= 1000;
            internetTime += '000';
        }
        if (internetTime < 100) {
            internetTime = '0' + internetTime;
        }
        if (internetTime < 10) {
            internetTime = '0' + internetTime;
        }
        // num represents the number of decimal places to
        // display.  If num is unspecified, then we will use 2.
        if (num == undefined) {
            num = 2;
        }

        // If we specified a negative number of decimal places,
        // we set the number to zero.  We also limit the maximum
        // number of decimal places to three.
        if (num < 0) {
            num = 0;
        }
        if (num > 3) {
            num = 3;
        }

        // Due to the way String.slice() works, we add 1 to the
        // number.
        if (num > 0) {
            num++;
        }

        internetTime = '@' + internetTime.slice( 0, 3 + num );
        return internetTime;
    };

    atTime.toInternetDateTime = function(dateTime, num) {
        var dayString;
        var d = new Date(dateTime);
        d.setTime(d.getTime() + 3600000);
        var year, month, day;
        year = d.getUTCFullYear();
        month = (d.getUTCMonth() + 1);
        day = d.getUTCDate();
        if (month < 10) {
            month = "0" + "" + month;
        }
        if (day < 10) {
            day = "0" + "" + day;
        }
        dayString = year + "" + month + "" + day;
        return dayString + atTime.toInternetTime(dateTime, num);
    };
});

