/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let accept = false;
    while (accept==false) {
        let name=prompt('What\'s your name?');
        let gender=prompt('What\'s your gender?');
        let town=prompt('In which town do you live?');
        if (confirm(name + gender + town +' Ces informations sont-elles correctes?')) {
            alert('Merci.');
            accept=true;
        } else {
            accept=false;
        }
    }

    // if (confirm('Vous vous appelez' + name + '. Vous êtes une' + gender + 'et vous vivez à' + town.'Ces informations sont-elles correctes?')) {
    //     alert('Merci.');
    // } 
})();
