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

        
     factory(App\User::class, 15)->create();
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

     factory(App\Speakers::class, 100)->create()->each(function($speakers){
             for ($i=0; $i < mt_rand(1,3); $i++) { 

                $speakers->tags()->create($this->fillWithRandom('App\Tags'));
            }
     
     });    

     factory(App\Sponsors::class, 100)->create()->each(function($sponsors){
             for ($i=0; $i < mt_rand(1,3); $i++) { 

                $sponsors->tags()->create($this->fillWithRandom('App\Tags'));
            }
     
     });      


     factory(App\Grids::class, 10)->create()->each(function($grids){

            $type = mt_rand(1,2);

                if($type == 1){
                         for ($i=0; $i < mt_rand(10,35); $i++) { 

                            $grids->speakers()->create($this->fillWithRandom('App\Speakers'));
                        }

                }

                if($type == 2){
                         for ($i=0; $i < mt_rand(10,35); $i++) { 

                            $grids->sponsors()->create($this->fillWithRandom('App\Sponsors'));
                        }

                }

     
     }); 

     factory(App\AgendaTracks::class, 25)->create();
            
    }


}


