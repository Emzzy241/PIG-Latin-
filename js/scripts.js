// Business Logic 



// First writing the algorithm for our application then we move to defining each function one by one
// Our Algorithm

function pigLatin(checkVowelWords){
    if (wordsStartingWithAVowel(checkVowelWords)){
        return checkVowelWords.concat("way");
    } else if(wordsStartingWithQu(thisWord)){
        return thisWord.slice(2).concat("quay");
    }
    else{
        let firstVowelIndex = firstVowelIndex(thisWord);
        let consonantPart = thisWord.slice(0, firstVowelIndex);
        let remainingPart = thisWord.slice(consonantPart, )
    }

}


// The function for words starting with a vowel irrespective of capitalization
// NOTE IN THE README I USED "checkedVowelWords" but for understanding and because
// both the first function and 2nd function  should have the same parameter name
// I changed it to "this Word"
function wordsStartingWithAVowel(thisWord){
    let vowels = ["a", "e", "i", "o", "u"];

    for(let i = 0; i < vowels.length; i++){
        if(thisWord.charAt(0).toLowerCase() === vowels[i]){
            return true;
        }
    }
    return false;
}

// The function for words starting with qu irrespective of capitalization
function wordsStartingWithQu(thisWord){
    let storingSlicedValue = thisWord.slice(0, 2);
    if( storingSlicedValue.toLowerCase() === "qu"){
        return true;
    }
    else{
        return false
    }
}

// The remaining part is just to do what our consonant is telling us to do
// The third function: a function that determines if the first word is a vowel

function wordIsVowel(letter){
    let vowels = ["a", "e", "i", "o", "u"];
    for( let i = 0; i < vowels.length; i++){
        if( letter === vowels[i]){
            return true;
        }
    }
    return false;
}

// and the fourth function to determine if the first index of the first word is a vowel

function firstVowelIndex(thisWord){
    let wordArray = thisWord.split("");
    for ( let i = 0; wordArray.length; i++){
        if(wordIsVowel(wordArray[i])){
            return 1;
        } 
    } return wordArray.length;
}

