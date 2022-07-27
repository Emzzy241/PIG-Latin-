// Business Logic 



// First writing the algorithm for our application then we move to defining each function one by one
// Our Algorithm

function pigLatin(checkVowelWords){
    if (wordsStartingWithAVowel(checkVowelWords)){
        return checkVowelWords.concat("way");
    } 

}


// The function for words starting with a vowel irrespective of capitalization
function wordsStartingWithAVowel(checkVowelWords){
    let vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < vowels.length; i++){
        if(checkVowelWords.charAt(0).toLowerCase() === vowels[i]){
            return true;
        }
    }
    return false;
}