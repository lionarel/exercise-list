let gulp = require ( 'gulp' );
let change = require ( 'gulp-change' );

function imports ( content ) 
{
    return content.replace ( /vendor/g, '..');
}

gulp.task ( 'Make production ready', [ 'Build element' ], ( ) => 
{
    return gulp.src ( 'dist/imports.html' ).
    pipe ( change ( imports ) ).
    pipe ( gulp.dest ( 'dist/' ) )
} );