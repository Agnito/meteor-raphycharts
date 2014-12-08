Package.describe({
  summary: "RaphyCharts - Beautiful charts based on Raphael.js, packaged for Meteor",
  version: "0.0.1",
  git: "https://github.com/Agnito/meteor-raphycharts.git",
  name: "agnito:raphycharts"
});

Package.onUse(function (api, where) {
  api.versionsFrom("1.0");
  api.use('agnito:raphael@0.0.2', 'client');
  api.addFiles('charts.js', 'client');
});

