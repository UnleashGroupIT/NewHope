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

        
     factory(App\User::class, 16)->create();
     factory(App\Tags::class, 10)->create();
     factory(App\NewsCategories::class, 5)->create();
     factory(App\Unleashevents::class, 5)->create();
     factory(App\Articles::class, 20)->create()->each(function($articles){


               for ($i=0; $i < mt_rand(1,6); $i++) { 

                  $articles->tags()->create($this->fillWithRandom('App\Tags'));
                }
                
                
                $articles->author()->create($this->fillWithRandom('App\User'));

                $articles->category()->create($this->fillWithRandom('App\NewsCategories'));

            });
     factory(App\Talks::class, 20)->create()
            ->each(function($talks){

               for ($i=0; $i < mt_rand(1,6); $i++) { 

                  $talks->tags()->create($this->fillWithRandom('App\Tags'));
                }
                
                
                $talks->author()->create($this->fillWithRandom('App\User'));

                $talks->category()->create($this->fillWithRandom('App\NewsCategories'));

            });

     factory(App\Speakers::class, 20)->create()->each(function($speakers){
             for ($i=0; $i < mt_rand(1,3); $i++) { 

                $speakers->tags()->create($this->fillWithRandom('App\Tags'));
            }
     
     });    

     factory(App\Sponsors::class, 20)->create()->each(function($sponsors){
             for ($i=0; $i < mt_rand(1,3); $i++) { 

                $sponsors->tags()->create($this->fillWithRandom('App\Tags'));
            }
     
     });      


     factory(App\Grids::class, 5)->create()->each(function($grids){

            $type = $grids->type;

                if($type == 1){
                   
                 for ($i=0; $i < mt_rand(2,5); $i++) { 

                    $grids->speakers()->save(App\Speakers::take(1)->skip(mt_rand(0,App\Speakers::count()-1))->first());
                }

                }

                if($type == 2){
                    
                         for ($i=0; $i < mt_rand(3,5); $i++) { 

                            $grids->sponsors()->save(App\Sponsors::take(1)->skip(mt_rand(0,App\Sponsors::count()-1))->first());
                        }

                }
        $grids->unleashevents()->save(App\Unleashevents::take(1)->skip(mt_rand(0,App\Unleashevents::count()-1))->first());
     
     }); 

     factory(App\AgendaTracks::class, 5)->create();
	 

     factory(App\Bookmarks::class, 2)->create()->each(function($bookmarks){

			$user = App\User::take(1)->skip(mt_rand(0,App\User::count()-1))->first();
			$bookmarks->user_id = $user->id;

            $bookmarks->save();
           
                 for ($i=0; $i < mt_rand(5,15); $i++) { 

                    $bookmarks->articles()->save(App\Articles::take(1)->skip(mt_rand(0,App\Articles::count()-1))->first());
                }

       

    
            
                 for ($i=0; $i < mt_rand(5,15); $i++) { 

                    $bookmarks->talks()->save(App\Talks::take(1)->skip(mt_rand(0,App\Talks::count()-1))->first());
                }

                

     
     }); 
            
    }


}


