'use strict';
var app = app || {};


(function(module) {
  const projectsController = {};
  projectsController.init = function (){

    $('.tab-content').hide();
    $('#myProjects').show();

  }


  module.projectsController = projectsController;
})(app);