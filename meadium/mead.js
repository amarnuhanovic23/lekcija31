var input = document.getElementById("input");
var btn = document.getElementById("btn");

function palindrome(str) {
    var word = str.toLowerCase();
    var reversed = word.split("").reverse().join("");
    if (word === reversed) {
        return true;
        console.log("The word is a palindrome.");
    } else {
        return false;
        console.log("The word is not a palindrome.");
    }
}

btn.addEventListener("click", function() {
    var str = input.value;
    palindrome(str);
});