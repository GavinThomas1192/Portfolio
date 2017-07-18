'use-strict';
$(document).ready(function() {

  $('#quote').hide();
  $('#heroText').fadeOut();
  $('#heroText').fadeIn(8000);

  $(window).mousemove(function() {
    $('#quote').fadeIn(5000);
  })
  $('.icon-menu').on('click', function() {
    $(this).hide();
    $('header nav ul').fadeIn('slow');
    $(this).fadeIn(3000);

  });
});

var pastProjects = [];

function PastProject(rawDataObj) {
  this.thumbnailPath = rawDataObj.thumbnailPath;
  this.title = rawDataObj.title;
  this.description = rawDataObj.description;
  this.url = rawDataObj.url;
}

PastProject.prototype.toHtml = function() {


  var source = $('#article-template').html();
  var comp = Handlebars.compile(source);
  //$('#articles').append(compile(this));
  return comp(this);

};

PastProject.loadAll = function(rawData) {

  rawData.forEach(function(projectObject) {
    pastProjects.push(new PastProject(projectObject));
  });


  pastProjects.forEach(function(PastProject) {
    $('#articles').append(PastProject.toHtml());
  });

};

PastProject.fetchAll = function() {
  if (localStorage.rawData) {

    PastProject.loadAll(JSON.parse(localStorage.getItem('rawData')));

  } else {

    $.getJSON('./projectsdata.json')
    .then( function(data) {
      localStorage.setItem('rawData', JSON.stringify(data));
      PastProject.loadAll(JSON.parse(localStorage.getItem('rawData')));
    },

      function(err) {
        console.log(err);
      }
    )
  }
}

pastProjects.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn('slow');


  });
  $('.main-nav .tab:first').click();
};

pastProjects.handleMainNav();
