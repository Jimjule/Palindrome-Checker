function palindrome(str) {
  var str = window.prompt("Check a Palindrome");
  var check = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  var other = check.toLowerCase().split('').reverse().join('');
  if(other == check){
    window.alert("It's a Palindrome!");
  }
  else{
    window.alert("Not a Palindrome.");
  }
}
