function welcome(firstName, lastName) {
  if (firstName === 'Atlas' && lastName === 'School') {
    var fullName = firstName + ' ' + lastName;

    function displayFullName() {
      alert('Welcome ' + fullName + '!');
    }

    displayFullName();
  } else {
    alert("Input must be 'welcome('Atlas', 'School'; we do not talk about Holberton.")
  }
}
