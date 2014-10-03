module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("bootstrap-autohidingnavbar.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      js: {
        src: [ "src/jquery.bootstrap-autohidingnavbar.js" ],
        dest: "dist/jquery.bootstrap-autohidingnavbar.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Style checker definitions
    jscs: {
      src: [ "src/jquery.bootstrap-autohidingnavbar.js" ],
      options: {
        preset: "jquery"
      }
    },

    // Lint definitions
    jshint: {
      files: [ "src/jquery.bootstrap-autohidingnavbar.js" ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      js: {
        src: [ "dist/jquery.bootstrap-autohidingnavbar.js" ],
        dest: "dist/jquery.bootstrap-autohidingnavbar.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", [ "jshint", "jscs", "concat", "uglify" ]);
  grunt.registerTask("travis", [ "jshint", "jscs" ]);

};
