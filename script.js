var cats =[];

var CatMaker = function(name, fileLocation,votes,viewed){
  this.name = name;
  this.fileLocation = fileLocation;
  this.votes = 0;
  this.viewed = false;
    cats.push(this);

}
