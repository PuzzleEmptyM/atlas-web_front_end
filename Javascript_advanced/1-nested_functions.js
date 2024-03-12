var globalVariable = 'Welcome';

function outer() {
  alert(globalVariable);

  var course = 'Atlas';

  function inner() {
    alert(globalVariable + ' ' + course);

    var exclamation = '!';

    function inception() {
      alert(globalVariable + ' ' + course + exclamation);
    }

    inception();
  }

  inner();
}

outer();
