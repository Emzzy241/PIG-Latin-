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
        let 
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

// The third function: a function that determines whether the first
// 2 letters of a word starts with vowel