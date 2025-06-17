let myPreviousGuesses = [];
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); //not necessary to show the random no , it is just for testing purpose.

let maxAttempt = 0;
document.querySelector("#reset").addEventListener("click", function () {
    location.reload();
})
document.querySelector("#submit").addEventListener("click", function (event) {
    let guessedNo = parseInt(document.querySelector("#gussed_no").value);
    const result = document.querySelector("#result");
    if (isNaN(guessedNo)) {
        result.innerHTML = "Please enter a valid number";
        result.style.color = "red";
        result.style.fontSize = "25px";


    }
    else {
        myPreviousGuesses.push(guessedNo);
        maxAttempt++;

        if (guessedNo === randomNumber) {
            result.innerHTML = `yeah you won , the no is ${guessedNo}`;
            result.style.fontSize = "25px";
            result.style.color = "green";
            disableGame();

            // return , this return here is unncecessary because , if you write return then after the condition is true it will not execute further code , in this case lets assume after 6 guess you won , but you always want that all the guess should be displayed , but to display the guesses the logic is written after the return statement i mean below at last , so if the condition satisfy then it disable the game for sure but not execute the code , here i write the return statement to show you the use of return statement that how it works actyually , but in this case it is not required. if you want then you can try it i mean enable the return statement and check the output.

        }

        else if (maxAttempt >= 10) {
            console.log("You lose condition triggered!");
            result.innerHTML = ` you loose , the no is ${randomNumber}`;
            disableGame();
        }

        else {

            if (guessedNo < randomNumber) {
                let lowHigh = "low"
                result.style.fontSize = "25px";
                result.innerHTML = `Your guessed no is Too ${lowHigh}`;

            }

            else {
                let lowHigh = "High"
                result.style.fontSize = "25px";
                result.innerHTML = `Your guessed no is Too ${lowHigh}`;

            }

            result.style.color = "red";

        }


        document.querySelector("#gussed_no").value = "";
        document.querySelector("#previousguess").innerHTML = `${myPreviousGuesses.join(",")}`;
        document.querySelector("#guessesRemaining").innerHTML = `Guesses Remaining =  ${10 - maxAttempt}`

    }

})

function disableGame() {
    document.querySelector("#submit").disabled = true;
    document.querySelector("#gussed_no").disabled = true;

}


