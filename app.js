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

  $($newPastProject).removeClass().addClass(this.title);

  $('.template').append(this.title);
  var thumbnail = $('<img id="thumbnail">');
  thumbnail.attr('src', this.thumbnailPath);
  thumbnail.appendTo('.template');
  var p = $('<p></p>');
  p.text(this.description);
  p.appendTo('.template');
  // $('.template').append(this.description);
  $('.template').append(this.url);

};

rawData.forEach(function(projectObject) {
  pastProjects.push(new PastProject(projectObject));

});

pastProjects.forEach(function(PastProject) {
  $('#articles').append(PastProject.toHtml());
});

console.log(PastProject);
