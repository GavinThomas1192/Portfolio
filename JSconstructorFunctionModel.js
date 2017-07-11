//Projected Functions to be written
var allWork = [];

function DisplayWork(thumbnailPath, title, description, url) {
  this.thumbnailPath = thumbnailPath;
  this.title = title;
  this.description = description;
  this.url = url;
  allWork.push(this);
}

var exampleOne = new DisplayWork(
  'img/LakewoodSS.png',
  'Lakewood Veterinary Hospital',
  'Created for a local business',
  'http://www.lakewood-vet-hospital.com'
);
