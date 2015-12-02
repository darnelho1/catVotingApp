//Empty array for storing cat objects
var cats =[];
var catNumOne;
var catNumTwo;
$image1 = $('#image1');
$image2 = $('#image2');


//Cat Object Constructor
var Cat = function (name, fileLocation,hasStripes,votes,viewed,catColor){
  this.name = name;
  this.fileLocation = fileLocation;
  this.hasStripes = hasStripes;
  this.votes = 0;
  this.viewed = false;
  //this.catColor = catColor;
    cats.push(this);

};

//tracker object
var tracker = {
    totalSelections: 0,
    picPref1: 0,
    picPref2: 0,
    prefStripesCounter: 0,
    prefStripes: false,
};



//Cat objects
catOne = new Cat ('catOne','images/01.jpg',false);
catTwo = new Cat ('catTwo', 'images/02.jpg',true);
catThree = new Cat ('catThree','images/03.jpg',true);
catFour = new Cat ('catFour','images/04.jpg',true);
catFive = new Cat ('catFive', 'images/05.jpg',false);
catSix = new Cat ('catSix','images/06.jpg',false);
catSeven = new Cat ('catSeven','images/07.jpg',false);
catEight = new Cat ('catEight', 'images/08.jpg',true);
catNine = new Cat ('catNine','images/09.jpg',false);
catTen = new Cat ('catTen','images/10.jpg',false);
catEleven = new Cat ('catEleven', 'images/11.jpg',false);
catTwelve = new Cat ('catTwelve', 'images/12.jpg',false);
catThirteen = new Cat ('catThirteen', 'images/13.jpg',false);
catFourteen = new Cat ('catFourteen', 'images/14.jpg',true);


//random number generator between 0-13 (length of cats array)
function randomInt(){
  return Math.floor(Math.random() * 13);
  //var random2 = Math.floor(Math.random() * 13);
}

//function to random select cat images
function catSelector(){

  var x = randomInt();
  var y = randomInt();

        while ((cats[x].viewed && cats[y].viewed === true) || (cats[x] === cats[y])){
          if(tracker.totalSelections > 6){
                alert('You have voted on all the cats.')
                break;
              }
          var x = randomInt();
          var y = randomInt();
        }
  catNumOne = cats[x];
  catNumTwo = cats[y];


  $image1.attr('src', cats[x].fileLocation);
  $image2.attr('src', cats[y].fileLocation);
  $image1.css('border-color', 'black');
  $image2.css('border-color', 'black');

    };

catSelector();


function buttonClick1(){
  $image1.css("border-color","green");
  $image2.css("border-color", "red");
  console.log("I'm clicked");
  catNumOne.viewed = true;
  catNumTwo.viewed = true;
  tracker.picPref1++;
  tracker.totalSelections++;
  console.log(tracker.totalSelections);

      if(catNumOne.hasStripes===true){
        tracker.prefStripesCounter++;
      }
  //catSelector();

}

function buttonClick2(){
  $image2.css("border-color", "green");
  $image1.css("border-color", "red");
  console.log("I'm clicked");
  catNumOne.viewed = true;
  catNumTwo.viewed = true;
  tracker.picPref2++;
  tracker.totalSelections++;
  //console.log(tracker.picPref2);
      if(catNumTwo.hasStripes===true){
        tracker.prefStripesCounter++;
      }
  //catSelector();



}


/*$( document ).ready(function() {
    catSelector();
  });
*/


