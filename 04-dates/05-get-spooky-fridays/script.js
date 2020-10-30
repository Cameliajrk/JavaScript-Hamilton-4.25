/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        document.getElementById("run").addEventListener("click", function() {

            
            
            // let today = new Date();
            // console.log(today);
            // let jour = today.getDay();
            // console.log(jour);
            // let year = today.getFullYear();
            // // console.log(year);
            // let month = today.getMonth() + 1;
            // // console.log(month);
            // let day = today.getDate();
            // // console.log(day);
            let annee = parseInt(document.getElementById("year").value);
            console.log(annee);

            let somme= 0;
            let day, month;
            for (month=1; month<13; month++){
                for (day=1; day<32; day++){
                        if (day==13){
                            somme++;
                        }
                    }
                }
            alert(somme);
    
        });

})();
