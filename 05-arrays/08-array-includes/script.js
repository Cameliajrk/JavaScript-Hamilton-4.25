/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function() {
        
        let i, apple;
        for (i=0; i<fruits.length; i++){
            if (fruits[i]==="apple"){
                apple=true;
            }
        }
        if (apple){
            console.log('There is an apple in the array fruits.');
        } else { console.log('There is no apple in the array fruits.');
        }
    
    });

})();
