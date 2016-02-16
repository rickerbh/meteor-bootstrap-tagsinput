Package.describe({
    name: 'rickerbh:bootstrap-tagsinput',
    summary: 'jQuery plugin providing a Twitter Bootstrap user interface for managing tags, repackaged for Meteor',
    version: '0.7.0',
    git: "https://github.com/rickerbh/meteor-bootstrap-tagsinput.git"
});

Package.on_use(function (api) {
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js', 'client');
    api.use('jquery@1.11.4', 'client');
    api.add_files('lib/bootstrap-tagsinput/dist/bootstrap-tagsinput.css', 'client');
});
