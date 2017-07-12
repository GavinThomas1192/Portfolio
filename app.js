'use-strict';
$(document).ready(function() {
  $(window).scroll(function() {
    $('#heroText').fadeOut(4000);
    $('#heroText').fadeIn('slow');
  })
  $('.icon-menu').on('click', function() {
    $(this).hide();
    $('header nav ul').fadeIn('slow');
    $(this).fadeIn(3000);

  });

});




//Projected Functions to be written
var pastProjects = [];

function PastProject(rawDataObj) {
  this.thumbnailPath = rawDataObj.thumbnailPath;
  this.title = rawDataObj.title;
  this.description = rawDataObj.description;
  this.url = rawDataObj.url;
}

PastProject.prototype.toHtml = function() {
  var $newPastProject = $('article.template').clone();

  $newPastProject.removeClass().addClass(this.title);


  $newPastProject.find('h1').html(this.title);
  $newPastProject.find('a').attr('href', this.url);
  $newPastProject.find('img').attr('src', this.thumbnailPath);
  $newPastProject.find('section').html(this.description);
  return $newPastProject;

};

rawData.forEach(function(projectObject) {
  pastProjects.push(new PastProject(projectObject));

});

pastProjects.forEach(function(PastProject) {
  $('#articles').append(PastProject.toHtml());
});

console.log(PastProject);
