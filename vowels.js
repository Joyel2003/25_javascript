// count the number of vowels in a string

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str){
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("I'm from kerala!"));
