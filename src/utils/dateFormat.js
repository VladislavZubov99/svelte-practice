function pad(n) {
    return n<10 ? '0'+n : n;
}
const monthNames = [    "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weekInMs = 604800000;
const dayInMs = 86400000;

export function getDateFormat(dateStr) {
    const nowDate = new Date()
    let currentDate = new Date(dateStr);

    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();

    const dateWithMonthName = date + " " + monthNames[month];
    const dateInHours = pad(hours) + ":" + pad(minutes);

    if((nowDate.getTime() - currentDate.getTime()) < dayInMs) {
        return dateInHours
    } else {
        if ((nowDate.getTime() - currentDate.getTime()) < weekInMs)
            return weekNames[currentDate.getDay()]
        else
            return dateWithMonthName
    }
}