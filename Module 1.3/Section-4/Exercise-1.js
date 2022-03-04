// Scrable is a famous game where we have to build words and each leeter has 
// different values, the person that builds words with most value is the winner.


// We can use this site as an example https://www.wordnik.com/
var MAINAPP = MAINAPP || {};

(function(nsp) {
    "use strict";

    // It was replaced because http://api.wordnik.com/v4/word.json/ wasn't available
    // we have to get our own key, BUT  I get this message from the site Your key is not yet available. Check back in a few days
    // however i am using the testing key, bad practice but this is only fo testing purposes. 
    let wordnikWord = "https://developer.wordnik.com/api-docs/swagger.json",
        apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
        field = document.querySelector('#word'),
        btn = document.querySelector('#submitBtn'),
        results = document.querySelector('#results'),
        word,
        scrabbleVal = 0;

    const getValue = function(word) {
        //code this function so it will query the wordnik site. Send a word that is entered in the field. Retrieve the scrabble score from the site. Extract the score from the response and then display it in the results span tag.
        
        // here is where we get the score. 
        // the json method will return a promise as well but we need to convert the data to a more redable value.
        
        fetch(wordnikWord + word + '/scrabbleScore' + apiKey)
        .then(function(data) {
            return data.json();
        })
        .then(function(score) {
            scrabbleVal = score.value;
            results.innerHTML = scrabbleVal;
        });
    };

    btn.addEventListener('click', function(e) {
        word = field.value;
        getValue(word);
    });

    nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);


