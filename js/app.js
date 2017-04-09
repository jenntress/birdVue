console.log("YOU GOT IT TO WORK JENN!!"); //smoke test

//store our Title in a variable, and then render the var to the page.
var title = "Bird Collection";


//make a constructor function then put our "bird objects" in it
function Bird(name, species, gender, img){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
}//don't stop that feeling! hold on to that semi colon

var b1 = new Bird('Donald', 'Malard', 'male', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/618px-Donald_Duck.svg.png');
var b2 = new Bird('Daffy', 'Black', 'male', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/665px-Daffy_Duck.svg.png');
var b3 = new Bird('Road Runner', 'Cuckoo', 'male', 'https://upload.wikimedia.org/wikipedia/en/e/ee/Roadrunner_looney_tunes.png');
var b4 = new Bird('Tweety', 'Canary', 'fluid', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Tweety.svg/570px-Tweety.svg.png');


var birds = [b1, b2, b3, b4]; //put all the birds into the bird array

//create an instance of vue - move it AFTER the birds array
var app = new Vue ({
  'el': '#app', //el property states the target HTML to append to the "id" rather than "class"
  'data': { //data object allows us to attach any properties we want
    title: title, //we only want a title property for now
    birds: birds //"pass in a second property to the data object in the Vue app"
  }
});
