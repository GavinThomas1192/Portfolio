'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.requestRepos = function(callback) {

    $.get({
      url: 'https://api.github.com/user/repos?type=owner',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .then(
      data => {
        console.log(data);
        repos.all = data;
      },
      err => console.error(err)
    )
    .then(callback)
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);

console.log('help');
