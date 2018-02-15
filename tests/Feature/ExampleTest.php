<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\User;

class ExampleTest extends TestCase
{
    use DatabaseMigrations;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test  */
    public function apiFreshUserAuthTest()
    {
        $user = factory(User::class)->create();

        $response = $this->actingAs($user, 'api')
                         ->withSession(['foo' => 'bar'])
                         ->get('/api/speakers');

        $response
        ->assertStatus(403);                
    }


}
