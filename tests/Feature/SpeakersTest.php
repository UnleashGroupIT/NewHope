<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\User;

class SpeakersTest extends TestCase
{
    use DatabaseMigrations;
    /**
     * A basic test example.
     *
     * @return void
     */

    /** @test  */
    public function apiSpeakersIndex()
    {
        $user = factory(User::class)->create();

        $user->user_level = 2;

        $response = $this->actingAs($user, 'api')
                         ->withSession(['foo' => 'bar'])
                         ->get('/api/speakers');

        $response
        ->assertStatus(200)
        ->assertJsonStructure([
            'current_page',
            'data' => [
                '*' => [
                    '_id',
                    'fist_name',
                    'last_name',
                    'full_name'
                ]
            ]

        ]);                 
    }

    /** @test  */
   public function apiSpeakersCreate(){

        $user = factory(User::class)->create();

        $user->user_level = 2;  

         Storage::fake('testing');


        $response = $this->actingAs($user, 'api')
                         ->json('POST', '/api/speakers', [
                            '_token' => csrf_token(),
                            'prefix' => 'Mr.',
                            'first_name' => 'Fluff',
                            'last_name' => 'Ball',
                            'full_name' => 'Mr. Fluff Ball',
                            'slug' => 'fluff.ball',
                            'job_title' => 'Professional Cat',
                            'bio' => 'Mr. Fluff Ball is a cat. He likes milk and balls.',
                            'company' => 'Fluff Corp.',
                            'speaker_img' =>  UploadedFile::fake()->image('fluff.ball'),
                            'facebook' => 'https://facebook.com/mrfluff',
                            'linkedin' => 'https://linkedin.com/mrfluff',
                            'twitter' => 'https://twitter.com/mrfluff',
                            'website' => 'http://fluffball.com', 
                        ]);


              Storage::disk('testing')->assertExists('speakers/fluff.ball.jpg');             

        $response
            ->assertStatus(200)
            ->assertSee('first_name');

   }   
}
