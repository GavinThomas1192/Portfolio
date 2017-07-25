
'use-strict';
var app = app || {};
(function(module) {

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

    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  PastProject.prototype.toHtml = function() {

    var source = $('#article-template').html();
    var comp = Handlebars.compile(source);
    return comp(this);

  };

  pastProjects = rawData.map(ele => new PastProject(ele)).map(function(pro) {
    $('#articles').append(pro.toHtml());
  })


  pastProjects.handleMainNav = function() {
    $('.main-nav .tab').on('click', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn('slow');


    });
    $('.main-nav .tab:first').click();
  };


  pastProjects.handleMainNav();


  let favoriteNumbers = [2, 4, 11, 76, 99, 204];
  let favoriteNumbersTotal = favoriteNumbers.reduce((acc, curr) => acc + curr);
  $('h5').append('The sum of my favorite numbers is ' + favoriteNumbersTotal + '.');


  module.PastProject = PastProject
})(app);
