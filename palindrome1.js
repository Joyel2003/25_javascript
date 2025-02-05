// check whether the given string with space is palindrome or not
function isPalindrome(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return str === reversedStr;
}
console.log(isPalindrome('racecar'));
