/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let date= new Date();
    console.log(date);
    let weekday = date.toLocaleString('En-EN', {weekday: 'long'});
    let day = date.getDate();
    let month = date.toLocaleString ('en-EN', {month: 'long'});
    let year = date.getFullYear();
    let hours = date.getHours() + 'h' + date.getMinutes();
    document.getElementById('target').innerHTML= weekday + " " + day + " " + month + " " + year + ", " + hours;

})();
