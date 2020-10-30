/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let age, jour, mois, annee;

        jour = document.getElementById("dob-day").value;
        console.log(jour);
        mois = document.getElementById("dob-month").value;
        console.log(mois);
        annee = document.getElementById("dob-year").value;
        console.log(annee);
        let today = new Date();
        console.log(today);
        let year = today.getFullYear();
        console.log(year);
        let month = today.getMonth() + 1;
        console.log(month);
        let day = today.getDate();
        console.log(day);

        if (month < mois) {
            age = (year - annee) -1;
        }
        else if (day < jour) {
            age = (year - annee) -1; 
        } 
        else {
            age = year - annee;
        }
        console.log(age);
        
        alert('Vous avez ' + age + ' ans.');

        

    });

})();
