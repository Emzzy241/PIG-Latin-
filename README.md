<!-- Wrting out each specs from little to large
NOTE: THIS SPEC WILL WORK BUT IT WASN'T SEPARATING MY 2 LOGIC SO I HAD TO START IT AGAIN. IF I WAS TO SEPARATE LOGIC 
IN THIS I WOULD BE NEEDING A "return true" keyword BUT return; and break; BOTH DON'T WORK IN forEach LOOPS SO 
I WILL BE USING forLoop IN THE NEW SPEC BELOW

1. the first spec is writing a function to know if a word starts from vowels: I will be writing a function,
in that function I would first create an array for my vowels and then use .forEach function to check if the input user gave me starts with a vowel with the code below


function wordsStartingWithAVowel(vowelWords)({

    let vowels = ["a", "e","i", "o", "u"];

    vowels.forEach( function(aVowelWord){
        if (aVowelWord === vowels){

        }
    });
});

NOW I am done with the first spec, moving on to the next.

2. THe second spec is updating our previous function to do something when we know what user's Input is, and when we 
know whether the input starts with a vowel

Assuming we have collected user's input, stored it in a variable 

function wordsStartingWithAVowel(vowelWords)({

    let vowels = ["a", "e","i", "o", "u"];

    vowels.forEach( function(aVowelWord){
        if (aVowelWord === vowels){
            userInput = userInput.concat("way");
        }
    });
});


IN the above code, our business Logic is depending upon the value of a user which is not a good way of separating
our 2 logic's to avoid that, I will be starting my specs section again

 --> 

<!-- THE NEW SPEC THAT CAREFULLY SEPARATES MY 2 LOGIC
1.  The first detail of my code is for words that starts with a vowel, this time around I would be using 
a forLoop so we can return true immediately we notice a word starts with a vowel: so in the function, first I would 
create an array of vowels, then I run my forLoop I give it the 4 arguments a forLoop takes and then use my return true;
keyword.... then in that forLoop I will run a conditional stating if functionParameter(in this case it is checkVowelWords)
so if checkVowelWords.charAt(0) === vowelArray[i] we should return true otherwise return false
HERE IS THE CODE:
    
    function wordsStartingWithAVowel(checkVowelWords){
        let vowels = ["a", "e", "i", "o", "u"];

        for(let i = 0; i < vowels.length; i++){
            if(checkVowelWords.charAt(0) === vowels[i]){
                return true;
            }
        }
        return false;
    }

NOTE: THE TEST FOR THIS IS DOWN BELOW







 -->


<!-- THE NEXT SPEC
2. Yes we have written a nice function that checks if the first letter of our word is a vowel, but when we enter 
uppercase letters, this test fails woefully, so to prevent this now we need to take in vowels whether they're capitalized
or not... To do this we are just going to update our previous function
CODE:
        function wordsStartingWithAVowel(checkVowelWords){
        let vowels = ["a", "e", "i", "o", "u"];

        for(let i = 0; i < vowels.length; i++){
            if(checkVowelWords.charAt(0).toLowerCase() === vowels[i]){
                return true;
            }
        }
        return false;
    }

So all we had to just do here was to put in the .toLowerCase() method and it completely worked
NOW OUR FUNCTION IS GOOD TO GO AND WILL WORK WHETHER OR NOT IF USER ENTERS A CAPITAL LETTER FIRST OR A SMALL LETTER FIRST
 -->






 <!-- THE NEXT SPEC 
 3. Still following my algorithm, the next should be writing a function for words starting with qu
 No forLoop is needed here because this is a simple function that can be executed with a conditional and with a new method called .slice()... this slices out the characters you want and you can now choose to store them back in the variable.... So back to the next spec, to solve this now I will create a function: wordsStartingWithQu... I will first create a variable for storing the sliced value of the words enterred and then I use a conditional... Here is the code

    function wordsStartingWithQu(thisWord){

    }


 
 -->

















<!-- This is the entire list of tests we want to reorder starting from the simplest possible behaviour to the most 
complex behaviour -->

<!-- 
Describe: vowelCounter();

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

 -->


 <!-- Starting the Test: the first Test I feel is the simplest to start with -->
<!-- 
  FIRST TEST: CHECKING IF A PARTICULAR WORD STARTS WITH A VOWEL -->

 Describe: wordsStartingWithAVowel()

 Test: "It will check if a particular word starts with a vowel"
 Code: wordsStartingWithAVowel("david");
 Expected Output: false
<!--  
 THIS TEST HAS BEEN PASSED, MOVING ON TO THE NEXT TEST  -->


  <!-- SECOND TEST: TO ALSO MAKE SURE WE TAKE IN VOWELS IREESPECTIVE OF WHETHER IT IS A CAPITAL LETTER OR A SMALL LETTER
   -->

   
 Test: "It will check if a particular word starts with a vowel irrespective of capitalization"
 Code: wordsStartingWithAVowel("Emmanuel");
 Expected Output: true

 <!--  
 THIS TEST HAS BEEN PASSED, MOVING ON TO THE NEXT TEST  -->