// this validates if the number passed in is a US telephone number
function telephoneCheck(str) {
  // Good luck!
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
  }

telephoneCheck("555-555-5555");