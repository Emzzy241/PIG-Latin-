// Business Logic 




// The function for words starting with a vowel irrespective of capitalization
// NOTE IN THE README I USED "checkedVowelWords" but for understanding and because
// both the first function and 2nd function  should have the same parameter name
// I changed it to "this Word"
function wordsStartingWithAVowel(thisWord) {
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < vowels.length; i++) {
        if (thisWord.charAt(0).toLowerCase() === vowels[i]) {
            return true;
        }
    }
    return false;
}

// The function for words starting with qu irrespective of capitalization
function wordsStartingWithQu(thisWord) {
    let storingSlicedValue = thisWord.slice(0, 2);
    if (storingSlicedValue.toLowerCase() === "qu") {
        return true;
    }
    else {
        return false
    }
}

// The remaining part is just to do what our consonant is telling us to do
// The third function: a function that determines if the first word is a vowel

function wordIsVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

// and the fourth function to determine if the first index of the first word is a vowel

function firstVowelIndex(thisWord) {
    let wordArray = thisWord.split("");
    for (let i = 0; wordArray.length; i++) {
        if (wordIsVowel(wordArray[i])) {
            return i
        }
    } 
    return wordArray.length;
}





// First writing the algorithm for our application then we move to defining each function one by one
// Our Algorithm

function pigLatin(thisWord) {
    if (wordsStartingWithAVowel(thisWord)) {
        return thisWord.concat("way");
    } else if (wordsStartingWithQu(thisWord)) {
        return thisWord.slice(2).concat("quay");
    }
    else {
        let firstVowel_Index = firstVowelIndex(thisWord);
        let consonantPart = thisWord.slice(0, firstVowel_Index);
        let remainingPart = thisWord.slice(firstVowel_Index);
        return remainingPart.concat(consonantPart, "ay");
    }

}

// Using the above to solve the pig Latin 

function pigLatinWholeText(text) {
    let textArray = text.split(" ");
    let pigLatinArray = [];

    textArray.forEach(function (element) {
        pigLatinArray.push(pigLatin(element));

    });
    return pigLatinArray.join(" ");
}


// THe UI Logic

$(document).ready( function(){
    $("#form").submit( function(event){
        event.preventDefault();
        const text = $("#languagePassage").val();
        const output = pigLatinWholeText(text);
        $("#output").html(output);

    });
});