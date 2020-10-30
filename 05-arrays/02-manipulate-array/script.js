/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function() {
        
        let last = fruits.pop();
        let first = fruits.shift();
        let newLength = fruits.unshift('Banana');
        let newLength2 = fruits.push('Kiwi');
        for (let i=0; i<fruits.length; i++) {
            console.log(fruits[i]);
        }
    
    });

})();
