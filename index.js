// code your solution here

function superBowlWin (array) {

    let found = array.find(array =>(array.result === 'W')); {
 console.log(found)
 if (found) {
     return found.year; 
 } else {
     return undefined;
 }
    }}

    superBowlWin(array)
