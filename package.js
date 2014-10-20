Package.describe({
  name: 'cherbst:jquery-equalheights',
  summary: 'jquery-equalheights packaged for Meteor',
  version: '1.5.2_1',
  git: 'https://github.com/cherbst/meteor-jquery-equalheights.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('jQuery.equalHeights/jquery.equalheights.js', 'client');
});
