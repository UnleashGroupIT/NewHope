window._ = require('lodash');

	 window.jQuery = require('jquery');
	 window.$ = window.jQuery;
     window.bootstrap = require('bootstrap');
global.axios = require('axios');


window.jQuery.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});

global.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  global.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}




global.Vue = require('vue');

var VueResource = require('vue-resource');

Vue.use(VueResource);

global.PNotify = require('pnotify');



import 'pnotify/dist/pnotify.css';
import 'pnotify/dist/pnotify.brighttheme.css';
import 'pnotify/dist/pnotify.buttons.css';
import 'pnotify/dist/pnotify.buttons.js';
import 'pnotify/dist/pnotify.confirm.js';


PNotify.prototype.options.styling = "bootstrap3";
PNotify.prototype.options.styling = "fontawesome";
PNotify.prototype.options.delay = 3500;


//const instantsearch = require('instantsearch.js');  
global.moment = require('moment');

const momenttimezone = require('moment-timezone');

/*@preserve
 * Tempus Dominus Bootstrap4 v5.0.0-alpha14 (https://tempusdominus.github.io/bootstrap-4/)
 * Copyright 2016-2017 Jonathan Peterson
 * Licensed under MIT (https://github.com/tempusdominus/bootstrap-3/blob/master/LICENSE)
 */

 Vue.component(
    'agenda-sessions',
    require('./components/AgendaSessions.vue')
);

const spVue = new Vue({
	el: '#app',

	data: {

		eventid: null,
		eventcode: null,
		day: null,
		filters: [],
		searchbar: null,
		agendasession: null,
		events: null,
		day1: null,
		day2: null,
		speakersearch: null,
		speakers: null,
		newSpeaker: [], //This contains the true ids for speaker upload for sessions
		newSpeakerVisual: [],
		sessionedit: null,
		editmode: false,
		tracks: null,
		NewEditTitle: 'Create New Session',
		underEditId: null,
		

	},//data,



	methods: {
		newSession(){
			console.log('moo');
		},
		resetNewForm(){
			  	document.getElementById("NewSessionForm").reset();
				jQuery('#NSSBar').attr('value','');
				jQuery('#NSSBar').attr('html','');
				spVue.speakersearch = null;
				spVue.speakers = null;
				spVue.newSpeaker= [];
				spVue.newSpeakerVisual = [];
				spVue.NewEditTitle = 'Create New Session';
				spVue.editmode = false;
				spVue.underEditId = null;
		},

		getDays(){
			var vm = this;
		this.events.forEach(function(element) {
		     if(element.id == default_event_id){
		   		vm.day1 = element.day1;
		   		vm.day2 = element.day2;
		     }
			});
		},	

		changeDay(selected, id){
			this.day = selected;
			this.filteredSearch();
			$('.tabs .tab').removeClass('active');
			$('#s_day-'+id).addClass('active');
		},	

 		filteredSearch(){
			let eId = this.eventid;
			let day = this.day;
			var filters;
			let searchQuery = '';
			
			if (this.filters[0]){
				filters = this.filters;
			     filters = JSON.stringify(filters);
    			 filters = encodeURIComponent(filters);	
			} else {
				 filters = ' ';
			}

			if (this.searchbar){
				searchQuery = '&keyword='+this.searchbar;
			}
    			 
			axios.get('/api/agenda/search?eventid='+eId+'&day='+day+'&tracks='+filters+searchQuery)
			  	   .then((response) => {
  			this.agendasession = response.data;
  			});
		},


		selectPage(type){
			let activteThis = '';
			jQuery('.tab').removeClass('adminActive');
			   switch (type) {
				 	case 'Sessions':
				 		activteThis = "#Sessions";
				 		jQuery('#SessionButton').addClass('adminActive');
				 		this.sessionedit = null;
				 		this.editmode = false;
						spVue.filteredSearch();
				 		
				 		break;
				 	case 'NewSession':
				 		activteThis = "#NewSession";
				 		jQuery('#NewSessionButton').addClass('adminActive');
				 		this.sessionedit = null;
				 		this.editmode = false;
				 		
				 		break;
				 	case 'Tracks':
				 	    jQuery('#TrackButton').addClass('adminActive');
				 		activteThis = "#Tracks";
				 		this.sessionedit = null;
				 		this.editmode = false;
				 		
				 		break;				 						 	
				 	default:
				 		
				 		break;
				 }

				 this.resetNewForm();

				 let activeNow = jQuery('.activeTab').attr("id");
				

			jQuery('.activeTab').animateCss('bounceOutRight', function () {
				jQuery('.activeTab').addClass('hiddenTab');
				jQuery("#"+activeNow).removeClass("activeTab");

			    jQuery(activteThis).animateCss('bounceInLeft');
			    jQuery(activteThis).addClass('activeTab');
			});
					
				 

		},

     searchForSpeakers(keyword){

        axios.get(`/api/speakers?search=${keyword}&limit=5`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.speakers = response.data.data;
          
        })
        .catch(e => {
         console.log(e);
        })

     },

	addSpeakerToNewSession(speaker_Id){

		if(!this.newSpeaker.includes(speaker_Id)){
			this.newSpeaker.push(speaker_Id);
			var vm = this;

			this.speakers.forEach(function(element) {
			     if(element.id == speaker_Id){

			     	vm.newSpeakerVisual.push(element);
			  
			     }
				});			

		}

	},

	removeSpeakerFromNewSession(speaker_Id){

		if(this.newSpeaker.includes(speaker_Id)){
			let rIndex = this.newSpeaker.indexOf(speaker_Id);
			 this.newSpeaker.splice(rIndex, 1);
		
			var vm = this;

			this.newSpeakerVisual = this.newSpeakerVisual.filter(function(el) {
    			return el.id !== speaker_Id;
			});

					
		}

	},

	newSessionSubmit($event){
		var vm = this;
      // create a form
      const form = new FormData();
      form.append('sessionTitle', $event.target.session_name.value);
      form.append('startTime', $event.target.startTime.value);
      form.append('endTime', $event.target.endTime.value);
      form.append('description', $event.target.description.value);
      form.append('speakers', JSON.stringify(this.newSpeaker));
      form.append('track', $event.target.NewSessionTrack.value);
      form.append('sessiontype', $event.target.sessiontype.value);
      form.append('eventid', this.eventid);
      
      
      // submit the image			
      var targeurl = '';
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        if(spVue.editmode){
        	targeurl = `/api/session/${this.underEditId}?_method=PATCH`;

        } else{
        	targeurl ='/api/session';
        }

        

			axios.post(targeurl, form, config)
			  .then(function (response) {
			  	if(!spVue.editmode){
					spVue.resetNewForm();
				 }
			  		
			 		    new PNotify({
					        title: 'Success!',
					        text: 'Session Saved!',
					        type: 'success'
    					});

			 		   spVue.filteredSearch();
    			
			  })
			  .catch(function (error) {
			  	 new PNotify({
                  title: 'Error!',
                  text: 'There was an unexpected error with the upload. Please, reload the page and try again!',
                  type: 'error'
              });
			    console.log(error);
			  });


	},

	triggerEdit(sId){

		var vm = this;
		spVue.editmode = true;

        axios.get(`/api/session/${sId}`)
        .then(response => {
          // JSON responses are automatically parsed.

                 //03/20/2018 8:00:00
          this.sessionedit = response.data;
          this.sessionedit.startformatted = this.sessionedit.start_time.month+'/'+this.sessionedit.start_time.day+'/'+this.sessionedit.start_time.year+' '+this.sessionedit.start_time.time+':00';
          this.sessionedit.endformatted = this.sessionedit.end_time.month+'/'+this.sessionedit.end_time.day+'/'+this.sessionedit.end_time.year+' '+this.sessionedit.end_time.time+':00';
         
 		jQuery("#session_name").attr('value',this.sessionedit.session_title);
		
 		jQuery('input[name="startTime"]').val(this.sessionedit.startformatted);
 		jQuery('input[name="endTime"]').val(this.sessionedit.endformatted);		
		
 		jQuery("#startTime").attr('value',this.sessionedit.startformatted);
 		jQuery("#endTime").attr('value',this.sessionedit.endformatted);

 		jQuery("#description").html(this.sessionedit.session_description);
 		jQuery("#NewSessionTrack").val(this.sessionedit.tracks[0].id);
 		jQuery("#sessiontype").val(this.sessionedit.category_id);
 		spVue.NewEditTitle = "Edit Session";
 		spVue.underEditId = sId;
			

		if(this.sessionedit.speakers[0]){


			this.sessionedit.speakers.forEach(function(element) {

					spVue.newSpeaker.push(element.id);
			     	spVue.newSpeakerVisual.push(element);

				});			

		} 		

            let activeNow = jQuery('.activeTab').attr("id");
			jQuery('.activeTab').animateCss('bounceOutRight', function () {
				jQuery('.activeTab').addClass('hiddenTab');
				jQuery("#"+activeNow).removeClass("activeTab");

			    jQuery("#NewSession").animateCss('bounceInLeft');
			    jQuery("#NewSession").addClass('activeTab');
			});

        })
        .catch(e => {
         console.log(e);
        })		

	},

	deleteSession(sId){
     
        (new PNotify({
            title: 'Confirmation Needed',
            text: 'Are you sure you want to delete this Session?',
            icon: 'fa fa-question-circle',
            type:'error',
            hide: false,
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }            

        })).get().on('pnotify.confirm', function() {
           

             axios.delete(`/api/session/${sId}`)
              .then(response => {
                // JSON responses are automatically parsed.

			 		    new PNotify({
					        title: 'Success!',
					        text: 'Session Deleted!',
					        type: 'success'
    					});
                 spVue.filteredSearch();
      
              })
            .catch(function (error) {
               new PNotify({
                      title: 'Error!',
                      text: 'There was an unexpected error with the request. Please, reload the page and try again!',
                      type: 'error'
                  });           
              console.log(error);
            });

         
        }).on('pnotify.cancel', function() {
           
        });




    },		

	},

  mounted(){
  	this.eventid = default_event_id;
  	this.eventcode = default_event_code;
  	this.day = default_day;
  	this.events = eventdata;
  	eventdata = '';
  	this.getDays();
  	this.tracks = tracks;
  	//this.sessionedit = 1;
  },

  watch: {

  	filters: function (val){
  		this.filters = val;
  		this.filteredSearch();

  	},
  	searchbar: function (val){
  	  	this.searchbar = val;
  		this.filteredSearch();	
  	},
    speakersearch: function (val){
    	this.searchForSpeakers(val);
    },

   /* eventid: function (val){
    	this.eventid(val);
    	this.filteredSearch();



    }*/

  }  


});







