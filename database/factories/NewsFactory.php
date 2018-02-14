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
        'slug' => $faker->slug,
        'excerpt' => $faker->paragraph,
        'content' => $faker->paragraph($nbSentences = 5),
        'featured_img' => $faker->imageUrl($width = 800, $height = 600, 'cats')        
    ];
});

$factory->define(App\Talks::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'slug' => $faker->slug,
        'excerpt' => $faker->paragraph,
        'content' => $faker->paragraph($nbSentences = 5),
        'video_url' => $faker->url,
        'featured_img' => $faker->imageUrl($width = 800, $height = 600, 'cats')         
    ];
});

$factory->define(App\Speakers::class, function (Faker $faker) {
    $prefix = $faker->title($gender = null);
    $fname = $faker->firstName($gender = null);
    $lname = $faker->lastName;
    $fullname = $prefix.' '.$fname.' '.$lname;

    return [
        'prefix' => $prefix,
        'first_name' => $fname,
        'last_name' => $lname,
        'full_name' => $fullname,
        'slug' => $faker->slug,
        'job_title' => $faker->jobTitle,
        'bio' => $faker->paragraph,
        'company' => $faker->company,
        'img_url' => $faker->imageUrl($width = 800, $height = 600, 'cats'),
        'facebook' => 'https://facebook.com/'.$faker->userName,
        'linkedin' => 'https://linkedin.com/'.$faker->userName,
        'twitter' => 'https://twitter.com/'.$faker->userName,
        'website' => $faker->url,        
    ];
});


$factory->define(App\Sponsors::class, function (Faker $faker) {
    return [
        'company_name' => $faker->company,
        'slug' => $faker->slug,
        'website' => $faker->url,
        'logo_url' => $faker->imageUrl($width = 800, $height = 600, 'cats'),
        'description' => $faker->paragraph,
        'facebook' => 'https://facebook.com/'.$faker->userName,
        'linkedin' => 'https://linkedin.com/'.$faker->userName,
        'twitter' => 'https://twitter.com/'.$faker->userName,
        'solutions' => $faker->words($nb = 3, $asText = false),
        'contacts' => [
            'name' => $faker->name($gender = null),
            'job_title' => $faker->jobTitle,
            'email' => $faker->email,
            'phone' => $faker->phoneNumber,
        ] 

    ];
});

$factory->define(App\Grids::class, function (Faker $faker) {
    return [
        'title' => $faker->catchPhrase,
        'description' => $faker->paragraph,   
        'type' => mt_rand(1,2)   
    ];
});


$factory->define(App\AgendaTracks::class, function (Faker $faker) {
    return [
        'track_name' => $faker->words($nb = 2, $asText = true),
        'description' => $faker->paragraph,
        'quote' => $faker->paragraph, 
        'room' => $faker->word.' '.$faker->randomDigit,
        'class' => $faker->word,
        'color' => $faker->hexcolor,
        'url' => $faker->word,
        'level' => $faker->randomDigit,
        'status' => 1,
        'order' => $faker->randomDigit,
    ];
});

$factory->define(App\AgendaSessions::class, function (Faker $faker) {
    return [
        'session_title' => $faker->catchPhrase,
        'description' => $faker->paragraph, 
        'category' => mt_rand(1,3),  
        'start_time' => '2018-03-'.$day.' '.mt_rand(8,17).':'.mt_rand(0,59).':00',
        'end_time' => '2018-03-'.$day.' '.mt_rand(8,17).':'.mt_rand(0,59).':00',
        'extra_category' => '' 
    ];
});

$factory->define(App\Bookmarks::class, function (Faker $faker) {
    return [
        'moo' => 'Mooo'
    ];
});

$factory->define(App\Unleashevents::class, function (Faker $faker) {
    return [
        'name' => $faker->catchPhrase,
        'description' => $faker->paragraph,
        'event_date' => $faker->dateTime($max = 'now', $timezone = null),
        'keywords' => [
            [
            'name' => $faker->word,
            'description' => $faker->paragraph
            ],
            [
            'name' => $faker->word,
            'description' => $faker->paragraph
            ],
            [
            'name' => $faker->word,
            'description' => $faker->paragraph
            ],                          
        ]
    ];
});