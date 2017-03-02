let gulp = require ( 'gulp' );
let sass = require ( 'gulp-sass' );
let polymerize = require ( 'gulp-polymerize-css' );
let rename = require ( 'gulp-rename' )

gulp.task ( 'Publish styles', [ 'Transpile scss' ], ( ) =>
{
  	return gulp.src ( 'temp/exercise-list.css' ).
    	pipe ( polymerize ( { styleId:'exercise-list-styles' } ) ).
    	pipe ( rename ( 'exercise-list-styles.html' ) ).
    	pipe ( gulp.dest ( 'dist' ) );
} );

gulp.task ( 'Transpile scss', ( ) =>
{
	return gulp.src ( './element/*.scss' ).
	pipe ( sass ( ) ).
	pipe ( gulp.dest ( './temp' ) );
} );