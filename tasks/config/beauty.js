/**
 * Beautifier for JavaScript files.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/vkadam/grunt-jsbeautifier
 *
 */
module.exports = function(grunt) {

	grunt.config.set('jsbeautifier', {
		"default": {
			src : ["api/**/*.js"]
		},
		"git-pre-commit": {
			src : ["api/**/*.js"],
			options : {
				mode:"VERIFY_ONLY"
			}
		}
	});

	grunt.loadNpmTasks("grunt-jsbeautifier");
};
