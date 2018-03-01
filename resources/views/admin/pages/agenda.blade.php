@extends('admin.main')
       
@section('title', 'Agenda')


@section('customcss')
   <link href="{{ mix('css/style.css', '/admin') }}" rel="stylesheet">

<link href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/bootstrap.min.css', '/admin') }}" rel="stylesheet" type="text/css">
  
 
 <link href="{{ mix('css/agenda.css', '/admin') }}" rel="stylesheet" type="text/css">
  <link href="{{ mix('css/common.css', '/admin') }}" rel="stylesheet" type="text/css">

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.4.1/dist/instantsearch.min.css">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.4.1/dist/instantsearch-theme-algolia.min.css"> 


    <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">

<style>

.hiddenTab{
	display:none;
 
} 
.activeTab{
	display:block;
}

.tab{
	transition: all 0.3s;
}
.tab:hover{
	background-color: rgb(175, 201, 40);
	color:#fff !important;
}
#SessionFilterSection, #SessionList{
	display: inline-block;
	text-align: left;

}
#SessionFilterSection{
	vertical-align: top;
}
#SessionContentSectionContainer{
	margin: 0 auto;
	text-align: center;
}
#SearchBarContainer{
	margin: 3vw auto;
text-align: center;
}
.SearchBar{
	background-color: rgba(191, 194, 194, 0.32);
	width: 50%;
	margin: 0 auto;
	text-align: left;
	height: 36px;

}
.SpeakerListContainer{
	margin-top:25px;
}
.SpeakerContent, .SpeakerImgContainer{
	display:inline-block;
}
.SpeakerContent{
	margin-left: 5px;
}
.SpeakerImgContainer{
	width: 60px;
}
.SpeakerContent h3{
	line-height: 1em;
	margin: 0;
}
.SpeakerContent p{
	line-height: 1.3em;
	margin: 0;
}
.SpeakerImage{
	vertical-align: text-bottom;
}
.SpeakerListContainer ul li{
	margin-bottom: 10px;
}
.SessionAdmin{

}
.EditSession, .DeleteSession {
display: inline-block;

padding: 9px 5px;
margin: 0 11px;
font-size: 24px;
}
.EditSession{

}
.DeleteSession{

}
.ssfname{
background-color: rgba(174, 176, 111, 0.11);
}
.SessDesc{
	width: 100%;
	height: 185px;
	margin: 30px 0 40px 0;
	background-color: rgba(246, 231, 209, 0.57);
}
.sessionform{
width: 87%;
margin: 60px auto;
}
.dateSelectorContainer{
	margin: 25px 0;
}
.dateSelector{
	background-color: rgba(174, 176, 111, 0.11);
    padding: 7px 10px;
    cursor:pointer;
}
.SpList{
	width: 100%;
margin: 0 auto;
max-width: 57%;
margin-bottom: 200px;
}
.SpSearchBar{
	width: 100%;
background-color: rgba(83, 99, 99, 0.13);
padding: 10px;
margin-bottom: 40px;
}
.SpVisual{
	margin: 10px 0;
cursor: pointer;
}
</style> 

@endsection
@section('content')
<div id="PageContainer">
 <section id="GridSection">
<p>Event Selector - (Only London for now)</p>
  <div id="GridInnerContainer">

            <select name="EventSelect" id ="EventSelect" v-model="eventid" disabled>
            	@foreach ($events as $event)
            		@if($event->event_code == Config::get('unleash.admin.default_event'))
		              <option value="{{ $event->id }}" selected>
		                {{ $event->event_name }}
		              </option>
		             @else
		              <option value="{{ $event->id }}">
		                {{ $event->event_name }}
		              </option>		             
		             @endif
            	@endforeach

            </select>

  </div>
 </section>
 				<div class="tabs-wrp admin-wrp">
					<nav>
						<ul class="side tabs">
							<li @click="selectPage('Sessions')" class="tab adminActive" id = "SessionButton">Sessions</li> 
							<li @click="selectPage('NewSession')" class="tab" id="NewSessionButton">Create new Session</li> 
					    	 <li {{--@click="selectPage('Tracks')" --}} class="tab" id="TrackButton">Tracks (Not Yet Implemented)</li>
					    	
						</ul>
					</nav>
				</div>
	

 </div>

{{-- TRACKS --}}
	<section id="Tracks" class="agenda hiddenTab">
		<div class="title-section">
			<h1>Tracks</h1>
			<h4>London 20-21 March 2018 | ExCeL</h4>
		</div>
		<div class="contents-bg">
			<div class="contents-wrp">
				<div class="tabs-wrp">
					<nav>
						<ul class="side tabs">
					    	<li class="tab active" id = "day-1">March 20.</li>
					    	<li class="tab" id = "day-2">March 21.</li>  
						</ul>
					</nav>
				</div>
				<div id="day1" class="tabContent active">

					<!-- Main Stage -->
	    			<div class="cnt-wrp main-stage">
	    				<div class="left-side">
	    					<div class="upper-side">
		    					<div class="date">
		    						<h4>March 20.</h4>
		    					</div>

		    					<div class="session-name">
		    						<h3>Main Stage</h3>
		    					</div>
	    					</div>
	    					<div class="shares">
	    						<a href="https://www.facebook.com/unleashgroup/"><img src="{{ URL::asset('gfx/facebook-white.svg') }}" alt="Facebook"></a>
	    						<a href="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/"><img src="{{ URL::asset('gfx/linkedin-white.svg') }}" alt="Linkedin"></a>
	    						<a href="https://twitter.com/hrtechworld"><img src="{{ URL::asset('gfx/twitter-white.svg') }}" alt="Twitter"></a>
	    					</div>
	    				</div>
	    				<div class="right-side">
	    					<div class="header">
	    						<div class="place">
	    							<h4>ICC Auditorium</h4>
	    						</div>
	    					</div>
	    					<div class="body">
	    						<div class="title">
	    							<h2>Inspiration Visionaries, Entrepreneurs and Thinkers.</h2>
	    						</div>
	    						<div class="content">
	    							<p>Inspirational Visionaries, Entrepreneurs and Thinkers who get the challenges of the tech revolution and what it means for business and organizations. Our Main Stage is second to none when it comes to helping you better understand and meet the challenges posed by technology. Let our speakers inspire you to create a better and brighter future world of work, and improved organizations that feel at ease in their ability to meet the challenge of disruptive innovation.</p>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<!-- END Main Stage -->

					<!-- HR Tech -->
	    			<div class="cnt-wrp hr-tech">
	    				<div class="left-side">
	    					<div class="upper-side">
		    					<div class="date">
		    						<h4>March 20.</h4>
		    					</div>
		    					<div class="time">
		    						<h2>08:00</h2>
		    					</div>
		    					<div class="session-name">
		    						<h3>HR Tech</h3>
		    					</div>
	    					</div>
	    					<div class="shares">
	    						<a href="https://www.facebook.com/unleashgroup/"><img src="{{ URL::asset('gfx/facebook-white.svg') }}" alt="Facebook"></a>
	    						<a href="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/"><img src="{{ URL::asset('gfx/linkedin-white.svg') }}" alt="Linkedin"></a>
	    						<a href="https://twitter.com/hrtechworld"><img src="{{ URL::asset('gfx/twitter-white.svg') }}" alt="Twitter"></a>
	    					</div>
	    				</div>
	    				<div class="right-side">
	    					<div class="header">
	    						<div class="place">
	    							<h4>Room 14</h4>
	    						</div>
	    					</div>
	    					<div class="body">
	    						<div class="title">
	    							<h2>Get behind the scene on tech-driven transformation.</h2>
	    						</div>
	    						<div class="content">
	    							<p>Get behind the scenes and take a good hard look at what HR Technology does and does not offer. Does it do what it’s supposed to do, and if not, why not? Tech driven transformation is never going to be easy in a world where the range of solutions is bewildering. Hear from senior executives who have been there and done that to benefit from their insights about how they’d do things differently with the benefit of hindsight.</p>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<!-- END HR Tech -->

	    			    			   			


				</div>
				<div id="day2" class="tabContent">

			<!-- Main Stage -->
	    			<div class="cnt-wrp main-stage">
	    				<div class="left-side">
	    					<div class="upper-side">
		    					<div class="date">
		    						<h4>March 21.</h4>
		    					</div>
		    					<div class="time">
		    						<h2>08:00</h2>
		    					</div>
		    					<div class="session-name">
		    						<h3>Main Stage</h3>
		    					</div>
	    					</div>
	    					<div class="shares">
	    						<a href="https://www.facebook.com/unleashgroup/"><img src="{{ URL::asset('gfx/facebook-white.svg') }}" alt="Facebook"></a>
	    						<a href="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/"><img src="{{ URL::asset('gfx/linkedin-white.svg') }}" alt="Linkedin"></a>
	    						<a href="https://twitter.com/hrtechworld"><img src="{{ URL::asset('gfx/twitter-white.svg') }}" alt="Twitter"></a>
	    					</div>
	    				</div>
	    				<div class="right-side">
	    					<div class="header">
	    						<div class="place">
	    							<h4>ICC Auditorium</h4>
	    						</div>
	    					</div>
	    					<div class="body">
	    						<div class="title">
	    							<h2>Inspiration Visionaries, Entrepreneurs and Thinkers.</h2>
	    						</div>
	    						<div class="content">
	    							<p>Inspirational Visionaries, Entrepreneurs and Thinkers who get the challenges of the tech revolution and what it means for business and organizations. Our Main Stage is second to none when it comes to helping you better understand and meet the challenges posed by technology. Let our speakers inspire you to create a better and brighter future world of work, and improved organizations that feel at ease in their ability to meet the challenge of disruptive innovation.</p>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<!-- END Main Stage -->

					<!-- HR Tech -->
	    			<div class="cnt-wrp hr-tech">
	    				<div class="left-side">
	    					<div class="upper-side">
		    					<div class="date">
		    						<h4>March 21.</h4>
		    					</div>
		    					<div class="time">
		    						<h2>08:00</h2>
		    					</div>
		    					<div class="session-name">
		    						<h3>HR Tech</h3>
		    					</div>
	    					</div>
	    					<div class="shares">
	    						<a href="https://www.facebook.com/unleashgroup/"><img src="{{ URL::asset('gfx/facebook-white.svg') }}" alt="Facebook"></a>
	    						<a href="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/"><img src="{{ URL::asset('gfx/linkedin-white.svg') }}" alt="Linkedin"></a>
	    						<a href="https://twitter.com/hrtechworld"><img src="{{ URL::asset('gfx/twitter-white.svg') }}" alt="Twitter"></a>
	    					</div>
	    				</div>
	    				<div class="right-side">
	    					<div class="header">
	    						<div class="place">
	    							<h4>Room 14</h4>
	    						</div>
	    					</div>
	    					<div class="body">
	    						<div class="title">
	    							<h2>Get behind the scene on tech-driven transformation.</h2>
	    						</div>
	    						<div class="content">
	    							<p>Get behind the scenes and take a good hard look at what HR Technology does and does not offer. Does it do what it’s supposed to do, and if not, why not? Tech driven transformation is never going to be easy in a world where the range of solutions is bewildering. Hear from senior executives who have been there and done that to benefit from their insights about how they’d do things differently with the benefit of hindsight.</p>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    			<!-- END HR Tech -->

	    				    	

				</div>
			</div>
		</div>
	</section>

{{-- END TRACKS --}}


{{-- NEW SESSION --}}
<!-- 	<section id="NewSession" class="agenda activeTab ">-->
	<section id="NewSession" class="agenda hiddenTab "> 


		<div class="title-section">
			<h1>@{{ NewEditTitle }}</h1>
			<h4>London 20-21 March 2018 | ExCeL</h4>
		</div>
		<div class="contents-bg">
			<div class="contents-wrp">

				<div id="day1" class="tabContent active">

					<!-- Main Stage -->
	    			<div class="cnt-wrp main-stage">
                        <form id="NewSessionForm" role="form" v-on:submit.prevent="newSessionSubmit" class="sessionform">
              
     
                           <input type="text" required name="session_name" id="session_name" placeholder="Session Name" class="form-control ssfname">

                           <div class="dateSelectorContainer">
									Start Time: <input type="text" class="dateSelector" id="startTime" name="startTime" value="03/20/2018 8:00:00" />
									End Time: <input type="text" class="dateSelector" id="endTime" name="endTime" value="03/20/2018 8:00:00" />                           	
                           </div>



                 Stage:
				<select id="NewSessionTrack" name="NewSessionTrack" class="dateSelector">
				@foreach($AgendaTracks as $TrackFilters)
					<option value="{{$TrackFilters->id}}"> {{ $TrackFilters->track_name }}</option>
				@endforeach
				</select>

				Session Type:
				<select id="sessiontype" name="sessiontype" class="dateSelector">
					<option value="1">Normal Session</option>
					<option value="2">Registration</option>
					<option value="3">Coffee Break</option>
					<option value="4">Coctail Break</option>
					<option value="5">Lunch Break</option>
				</select>	
                            <br />
                            <textarea name="description" id="description" placeholder="Session Description" class="SessDesc"></textarea>
                            <br />

			<div id="NSSList">
				<ul>
					<li v-if="newSpeakerVisual" v-for="speakervisual in newSpeakerVisual" class="SpVisual">
						<div @click="removeSpeakerFromNewSession(speakervisual.id)">
					  	<div class="SpeakerImgContainer">
					  		<img class="SpeakerImage" :alt="speakervisual.full_name" :src="'/storage/speakers/'+speakervisual.img_url">
					  	</div>
					  	<div class="SpeakerContent">
					  		<h3>@{{speakervisual.full_name}}</h3>
					  		<p>@{{speakervisual.job_title}}</p>
					  		<p>@{{speakervisual.company}}</p>
					  	</div>
					  </div>
					</li>
				</ul>	
			</div>	                                                                          

                            <button type="submit" class="btn btn-succes">Submit</button>

            
                    </form>

	    			</div>
	    			<!-- END Main Stage -->

				</div>

			</div>

		<div id="NewSessionSpeakers" class="SpList">
			<h4>Speakers</h4>
			<div id="NSSearchBarCont">
				<input type="text" id="NSSBar" v-model="speakersearch" class="SpSearchBar">
			</div>
			<div id="NSSList">
				<ul>
					<li v-if="speakers" v-for="speaker in speakers" class="SpVisual">
						<div @click="addSpeakerToNewSession(speaker.id)">
					  	<div class="SpeakerImgContainer">
					  		<img class="SpeakerImage" :alt="speaker.full_name" :src="'/storage/speakers/'+speaker.img_url">
					  	</div>
					  	<div class="SpeakerContent">
					  		<h3>@{{speaker.full_name}}</h3>
					  		<p>@{{speaker.job_title}}</p>
					  		<p>@{{speaker.company}}</p>
					  	</div>
					  </div>
					</li>
				</ul>	
			</div>	
		</div>	

		</div>  



	</section>	
{{-- END NEW SESSION --}}

{{-- SESSIONS --}}
 <section id="Sessions" class="agenda activeTab"> 
<!--<section id="Sessions" class="agenda hiddenTab">-->	
		<div class="title-section">
			<h1 id="TestAgendaText">Sessions</h1>
			<h4>London 20-21 March 2018 | ExCeL</h4>
		</div>
		<div id="SearchBarContainer">
			<input v-model="searchbar" class="SearchBar" type="text" id="SessionSearchBar" name="SessionSearchBar">
		</div>
		<div id="SessionContentSectionContainer">
		<div id="SessionFilterSection">
			<div class="FilterInnerSection">
				@foreach($AgendaTracks as $TrackFilters)
					<input v-model="filters" type="checkbox" value="{{$TrackFilters->id}}"> {{ $TrackFilters->track_name }} <br />
				@endforeach
				
			</div>	
		</div>	
		<div class="contents-bg" id="SessionList">
			<div class="contents-wrp">
				<div class="tabs-wrp">
					<nav>
						<ul class="side tabs">
					    	<li @click="changeDay(day1, 1)" class="tab active" id = "s_day-1">March 20.</li>
					    	<li @click="changeDay(day2, 2)" class="tab" id = "s_day-2">March 21.</li>  
						</ul>
					</nav>
				</div>
				<div id="SessionContent" class="tabContent active">

					
					  <agenda-sessions ref="Sessions" :agendadata="agendasession"></agenda-sessions>
	    			    			   			


				</div>

			</div>
		</div>
	 </div>	
	</section>	
{{-- END SESSIONS --}}


    

@endsection

@section('customscripts')
  <script src="{{ mix('js/agenda.js', '/admin') }}" type="text/javascript"></script>
  

	<script>
	jQuery('#day2').addClass('hide');

	jQuery('#day-1').click(function() { 
		if (!jQuery(this).hasClass('active')) {
			jQuery('#day1').removeClass('hide');
			/*jQuery('#day1').show();*/
			jQuery('#day-1').addClass('active');
			jQuery('#day-2').removeClass('active');
			jQuery('#day2').addClass('hide');
			/*jQuery('#day2').hide();*/
		}
	});
	jQuery('#day-2').click(function() { 
		if (!jQuery(this).hasClass('active')) {
			jQuery('#day2').removeClass('hide');
			/*jQuery('#day2').show();*/
			jQuery('#day-2').addClass('active');
			jQuery('#day-1').removeClass('active');
			jQuery('#day1').addClass('hide');
			/*jQuery('#day1').hide();*/
		}
	});
	</script>


<script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />

<script>


jQuery(function() {
   jQuery('input[name="startTime"]').daterangepicker({
        timePicker: true,
   		//timePicker24Hour: true,	        
        timePickerIncrement: 5,
        singleDatePicker: true,
   		minDate: "03/20/2018",
   		maxDate: "03/21/2018 11:59 PM",
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });

   jQuery('input[name="endTime"]').daterangepicker({
        timePicker: true,
       // timePicker24Hour: true,	
        timePickerIncrement: 5,
        singleDatePicker: true,
   		minDate: "03/20/2018",
   		maxDate: "03/21/2018 11:59 PM",			        
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        }
    });   
});

</script>	
@endsection
