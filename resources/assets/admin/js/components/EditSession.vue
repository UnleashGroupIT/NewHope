<template>
		<div class="title-section">
			<h1>Create New Session</h1>
			<h4>London 20-21 March 2018 | ExCeL</h4>
		</div>
		<div class="contents-bg">
			<div class="contents-wrp">

				<div id="day1" class="tabContent active">

					<!-- Main Stage -->
	    			<div class="cnt-wrp main-stage">
                        <form id="NewSessionForm" role="form" v-on:submit.prevent="newSessionSubmit">
              
     
                           <input type="text" required name="session_name" id="session_name" placeholder="Session Name" class="form-control">



									<input type="text" id="startTime" name="startTime" value="03/20/2018 8:00:00" />
									<input type="text" id="endTime" name="endTime" value="03/20/2018 8:00:00" />


				<select id="NewSessionTrack" name="NewSessionTrack" v-model="SessionTrackEdit">
				
					<option v-for(track in tracks) :value="track.id"> {{ track.track_name }}</option>
				
				</select>

				<select id="sessiontype" name="sessiontype">
					<option value="1">Normal Session</option>
					<option value="2">Registration</option>
					<option value="3">Coffee Break</option>
					<option value="4">Coctail Break</option>
					<option value="5">Lunch Break</option>
				</select>	
                            <br />
                            <textarea name="description" id="description" placeholder="Session Description"></textarea>
                            <br />

			<div id="NSSList">
				<ul>
					<li v-if="newSpeakerVisual" v-for="speakervisual in newSpeakerVisual">
						<div @click="removeSpeakerFromNewSession(speakervisual.id)">
					  	<div class="SpeakerImgContainer">
					  		<img class="SpeakerImage" :alt="speakervisual.full_name" :src="'/storage/speakers/'+speakervisual.img_url">
					  	</div>
					  	<div class="SpeakerContent">
					  		<h3>{{speakervisual.full_name}}</h3>
					  		<p>{{speakervisual.job_title}}</p>
					  		<p>{{speakervisual.company}}</p>
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
		</div>  
</template>	