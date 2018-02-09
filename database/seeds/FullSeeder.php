<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Tags;

class FullSeeder extends Seeder
{

    protected function fillWithRandom($model){
        $results = [];
        $instance = $model::take(1)->skip(mt_rand(0,$model::count()-1))->first()->getAttributes(); 
      
        $protected = $model::doNotEmbedThis();

            foreach ($instance as $resultKey => $resultValue) {
                if(!$protected || !in_array($resultKey,  $protected)){
                    $results[$resultKey] = $resultValue;
                }
                
            }

        return $results;
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        
     factory(App\User::class, 30)->create();
     factory(App\Tags::class, 25)->create();
     factory(App\NewsCategories::class, 12)->create();
     factory(App\Articles::class, 50)->create()->each(function($articles){


               for ($i=0; $i < mt_rand(1,6); $i++) { 

                  $articles->tags()->create($this->fillWithRandom('App\Tags'));
                }
                
                
                $articles->author()->create($this->fillWithRandom('App\User'));

                $articles->category()->create($this->fillWithRandom('App\NewsCategories'));

            });
     factory(App\Talks::class, 50)->create()
            ->each(function($talks){

               for ($i=0; $i < mt_rand(1,6); $i++) { 

                  $talks->tags()->create($this->fillWithRandom('App\Tags'));
                }
                
                
                $talks->author()->create($this->fillWithRandom('App\User'));

                $talks->category()->create($this->fillWithRandom('App\NewsCategories'));

            });
            
    }


}


