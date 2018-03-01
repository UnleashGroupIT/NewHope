<template>
	<div v-if="dataready">
	<!-- Main Stage -->
	<div v-for="sess in agendasession" class="cnt-wrp main-stage">
		<div class="left-side">
			<div class="upper-side">
				<div class="date">
					<h4>{{sess.start_time.month_name}} {{sess.start_time.day}}.</h4>
				</div>
				<div class="time">
					<h2>{{sess.start_time.time}}</h2>
				</div>
				<div class="session-name">
					<h3 v-if="sess.tracks[1]">ALL STAGES</h3>
					<h3 v-else >{{sess.tracks[0].track_name}}</h3>
				</div>
				<div class="SessionAdmin">
					<div class="EditSession" @click="triggerEdit(sess.id)">
						<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
					</div>
					<div class="DeleteSession" @click="deleteSession(sess.id)">
						<i class="fa fa-trash-o" aria-hidden="true"></i>
					</div>					
				</div>	
			</div>
<!-- 			<div class="shares">
				<a href="https://www.facebook.com/unleashgroup/"><img src="{{ URL::asset('gfx/facebook-white.svg') }}" alt="Facebook"></a>
				<a href="https://www.linkedin.com/company/hrn-europe---pan-european-hr-network/"><img src="{{ URL::asset('gfx/linkedin-white.svg') }}" alt="Linkedin"></a>
				<a href="https://twitter.com/hrtechworld"><img src="{{ URL::asset('gfx/twitter-white.svg') }}" alt="Twitter"></a>
			</div> -->
		</div>
		<div class="right-side">
			<div class="header">
				<div class="place">
					<h4>{{sess.tracks[0].room}}</h4>
				</div>
			</div>
			<div class="body">
				<div class="title">
					<h2>{{sess.session_title}}</h2>
				</div>
				<div class="content">
					<p>{{sess.session_description}}</p>
				</div>
				<div class='SpeakerListContainer'>
					<ul>
					  <li v-if="sess.speakers[0]" v-for="speakers in sess.speakers">
					  	<a :href="'/london/speaker/'+speakers.slug">
					  	<div class="SpeakerImgContainer">
					  		<img class="SpeakerImage" :alt="speakers.full_name" :src="'/storage/speakers/'+speakers.img_url">
					  	</div>
					  	<div class="SpeakerContent">
					  		<h3>{{speakers.full_name}}</h3>
					  		<p>{{speakers.job_title}}</p>
					  		<p>{{speakers.company}}</p>
					  	</div>
					  	</a>	
					  </li>
					</ul>	
				</div>	
			</div>
		</div>
	</div>
	<!-- END Main Stage -->
 </div>	
</template>

<script>

export default {
    aSessions: null,
    dataReady: false,	
  data() {
	return {
		agendasession: null,
		dataready: false,
		eventid: null,
		eventcode: null,
		day: null,
		
 
	};
  
  },

 props: ['agendadata'],

//TODO: Reload the selected grid when we edit a speaker

  methods: {

  	triggerEdit(data){
		this.$parent.$options.methods.triggerEdit(data);
  	},

  	deleteSession(data){
  		this.$parent.$options.methods.deleteSession(data);
  	}


  },

  // Fetches posts when the component is created.
  async mounted() {

  	axios.get('/api/agenda/search?eventid='+default_event_id+'&day='+default_day)
  	   .then((response) => {
  			this.agendasession = response.data;
       		this.dataready = true;
  	});

  	this.eventid = default_event_id;
  	this.eventcode = default_event_code;
  	this.day = default_day;

  },

  watch: {

  	agendadata: function (val){
  		this.agendasession = val;


  	},

  }


}
</script>