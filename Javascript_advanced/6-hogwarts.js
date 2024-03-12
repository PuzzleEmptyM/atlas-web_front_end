var studentHogwarts = (function() {
  // Private variables
  var privateScore = 0;
  var name = null;

  // Private method
  function changeScoreBy(points) {
    privateScore += points;
  }

  // Public methods
  return {
    setName: function(newName) {
      name = newName;
    },
    rewardStudent: function() {
      changeScoreBy(1);
    },
    penalizeStudent: function() {
      changeScoreBy(-1);
    },
    getScore: function() {
      return name + ': ' + privateScore;
    }
  };
});

// Instance for Harry
var harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Harry: 4

// Instance for Draco
var draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Draco: -2
