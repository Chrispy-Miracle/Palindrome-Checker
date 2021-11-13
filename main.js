var toCheck = "";
var words = "";
var backWords = "";

const isPalindrome = () => {
    words = document.getElementById("words").value
    toCheck = words.replace(/[^a-z0-9]/gi, "").toLowerCase();
    backWords = toCheck.split("").reverse().join("");
    document.getElementById("console").innerHTML = "Forwards: " + toCheck + "    ---     Backwords: " + backWords;
    if (toCheck === backWords){
        document.getElementById("isIt").style.color = "green";
        document.getElementById("isIt").innerHTML = 'You did it!     "' + words + '"    IS a Palindrome!!';
            } else {
                document.getElementById("isIt").style.color = "red";
                document.getElementById("isIt").innerHTML = 'Try Again...     "' + words + '"  is NOT a palindrome';
            };
}
