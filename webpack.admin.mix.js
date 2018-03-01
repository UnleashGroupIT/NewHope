let mix = require('laravel-mix').setPublicPath(path.normalize('public/admin'));


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


 mix.js('resources/assets/admin/js/app.js', 'js')
   .js('resources/assets/admin/js/api.js', 'js')
   .sass('resources/assets/admin/scss/app.scss', 'css');

mix.sass('resources/assets/admin/scss/style.scss', 'css'); 
mix.sass('resources/assets/admin/scss/common.scss', 'css');  
mix.sass('resources/assets/admin/scss/speakers.scss', 'css'); 
mix.sass('resources/assets/admin/scss/sponsors.scss', 'css'); 
mix.sass('resources/assets/admin/scss/agenda.scss', 'css'); 
   
mix.js('resources/assets/admin/js/speakers.js', 'js');
mix.js('resources/assets/admin/js/sponsors.js', 'js');
mix.js('resources/assets/admin/js/agenda.js', 'js');
mix.js('resources/assets/admin/js/axiostest.js', 'js');


mix.copy('resources/assets/admin/scss/bootstrap.min.css', 'public/admin/css/bootstrap.min.css');

mix.copy('resources/assets/admin/gfx', 'public/admin/gfx', false); // Don't flatten!   


   