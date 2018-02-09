<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Tags::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph,
    ];
});

$factory->define(App\NewsCategories::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->paragraph
    ];
});



$factory->define(App\Articles::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph,
        'body' => $faker->paragraph($nbSentences = 5),
        'featured_img' => $faker->imageUrl($width = 800, $height = 600, 'cats')        
    ];
});

$factory->define(App\Talks::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph,
        'body' => $faker->paragraph($nbSentences = 5),
        'featured_img' => $faker->imageUrl($width = 800, $height = 600, 'cats')        
    ];
});

$factory->define(App\Speakers::class, function (Faker $faker) {
    return [
        'name' => $faker->catchPhrase,
        'description' => $faker->paragraph,
        'img_url' => $faker->imageUrl($width = 800, $height = 600, 'cats')        
    ];
});


$factory->define(App\Sponsors::class, function (Faker $faker) {
    return [
        'company_name' => $faker->catchPhrase,
        'description' => $faker->paragraph,

    ];
});

$factory->define(App\Grids::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph,       
    ];
});


$factory->define(App\AgendaTracks::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph, 
        'room' => $faker->word,       
    ];
});

$factory->define(App\AgendaSessions::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph, 
        'category' => $faker->word,       
    ];
});