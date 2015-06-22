module.exports = function(grunt) {
	grunt.initConfig({
		jshint:{
			all:['scripts.js']
		},
		concat: {
			dist: {
				src: ['scripts.js', 'script1.js', 'script2.js'],
				dest: 'union.js'
			}
		},
		uglify: {
			dist: {
				src:'union.js',
				dest:'build/union.min.js'
			}
		}
		shell: {
			multiple: {
				command: [
					'del union.js',
					'mkdir deploy',
					'move build\\union.min.js deploy\\union.min.js'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');

grunt.registerTask('default', ['jshint', 'concat', 'uglify','shell']);
};