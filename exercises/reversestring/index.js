// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let strArr = str.split('');
    let reverseArr = strArr.reverse();
    let joinArr = reverseArr.join('');
    return joinArr;
}

module.exports = reverse;

// function reverse(str) {
//    return str.split('').reverse().join('')
// }

// function reverse(str) {
//    let reversed = '';
//    for(let character of str){
//     reversed = character + reversed
//    }
//    return reversed
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, character)=> {
//         return character + reversed
//     }, '');
// }
