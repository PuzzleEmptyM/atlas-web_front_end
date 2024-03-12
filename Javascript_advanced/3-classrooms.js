function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    }
  }
  var students = [];
  for (var i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

var classRoom = createClassRoom(10);

// Testing closure
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
