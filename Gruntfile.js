'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-enyo-builder');
	grunt.loadNpmTasks('grunt-contrib-symlink');
	grunt.loadNpmTasks("grunt-bower-install-simple");

	grunt.initConfig({
		"enyo-builder" : {
			"production" : {
				options : {
					tag : "2.4.0"
				}
			},
		},
		"layout-clone" : {
			"production" : {
				options : {
					tag : "2.4.0"
				}
			},
		},
		"onyx-clone" : {
			"production" : {
				options : {
					tag : "2.4.0"
				}
			},
		},
		"enyo-clone" : {
			"production" : {
				options : {
					tag : "2.4.0"
				}
			},
		},
		"bower-install-simple" : {
			options : {
				color : true,
				production : false,
				directory : "lib/bower"
			}
		},
		clean :  ["dist","enyo","node_modules","lib/bower","lib/contrib","bower_components"]
		,
		"symlink" :{
			options : {
				overwrite : false
			},
			explicit : {
				src : 'node_modules/grunt-enyo-builder/layout',
				dest : 'layout'
			}
			
		}
	});

	grunt.registerTask('setup', [ 'bower-install-simple', 'enyo-clone','onyx-clone','layout-clone' ]);
	grunt.registerTask('setup-maven', [ 'enyo-clone','onyx-clone','layout-clone' ]);
	grunt.registerTask('default', [ 'enyo-builder' ]);
}
