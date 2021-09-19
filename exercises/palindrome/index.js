// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let reversedStr = str.split('').reverse().join('');
//   if(str === reversedStr){
//       return true
//   }
//   else return false
// }

// function palindrome(str){
//     let reversedStr = '';
//     for(let char of str){
//         reversedStr = char + reversedStr
//     }
//     if(reversedStr === str){
//         return true
//     } else return false
// }

// function palindrome(str){
// const rev = str.split('').reverse().join('');
//     return str === rev;
// }

function palindrome(str){
    return str.split('').every((char, i)=>{
        return char === str[str.length-i-1]
    });
}
//every is not ideal solution, because it runs the 
//whole array, doing double the work

module.exports = palindrome;
