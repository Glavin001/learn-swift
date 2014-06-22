var playground = require('swift-playground-builder');
var path = require('path');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        md: {
            files: 'Sources/**/*.md',
            tasks: ['playground'],
            options: {

            }
        }
    }
  });

  // Playground builder task
  grunt.registerTask('playground', 'Generate Playgrounds from Markdown', function() {
      var done = this.async();
      var inputDirectory = path.join(__dirname, 'Sources/');
      var outputDirectory = path.join(__dirname, 'Playgrounds/');

      var options = {
          outputDirectory: outputDirectory
      };
      playground.createFromFiles(inputDirectory, options, function(err) {
          if (err) {
              grunt.log.error(err);
          }
          done();
      });
  });

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['playground', 'watch']);

};
