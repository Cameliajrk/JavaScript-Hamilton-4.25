/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // console.log(random(1, 100))

    document.getElementById("run").addEventListener("click", function() {
       
        function random(min, max){
            return Math.round(Math.random()*(max-min) + min)
        }

        let numbers = [];
        let i;
        for (i=0; i<10; i++){
            numbers[i]=random(1, 100);
            document.getElementById('n-'+(i+1)).innerHTML=numbers[i];
        }
        
        console.log(numbers);

        let min=numbers[0], max=numbers[0], sum=0, average=0, count=0;

        for (i=0; i<numbers.length; i++){
            if (numbers[i]<min) {
                min=numbers[i];
                document.getElementById('min').innerHTML=min;
            }
        }

        for (i=0; i<numbers.length; i++){
            if (numbers[i]>max) {
                max=numbers[i];
                document.getElementById('max').innerHTML=max;
            }
        }

        for (i=0; i<numbers.length; i++){
            sum += numbers[i];
            console.log(sum);
        }
        document.getElementById('sum').innerHTML=sum;


        for (i=0; i<numbers.length; i++){
            count++;
        }
        average = sum / count;
        document.getElementById('average').innerHTML=average;
    
    });

})();
