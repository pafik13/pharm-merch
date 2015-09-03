module.exports = function (grunt) {
	grunt.registerTask('default', ['jsbeautifier:default', 'compileAssets', 'linkAssets',  'watch']);
};
