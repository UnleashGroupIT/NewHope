
Vue.component(
    'speakers-all',
    require('./components/SpeakersAll.vue')
);

Vue.component(
    'grid-controller',
    require('./components/GridComponent.vue')
);

import Sortable from 'sortablejs';

Vue.directive('sortable', {
  inserted: function (el, binding) {
    var sortable = new Sortable(el, binding.value || {});
  }
});	  

var spVue = new Vue({
	el: '#PageContainer',

	data: {
		speakers: [],
		selected : null,
		selectedName: '',
		speakerSearch: '',
		speakerAll: '',
		event: null,
		editSpeakerData: {},
		GridType: 1,
		sortableOptions: {
			animation: 150,
			forceFallback: false,
			// Changed sorting within list
			onUpdate: function (/**Event*/evt) {

					let new_item_id = evt.item.dataset.speakerid
					let new_item_order = evt.newIndex
					let old_item_order = evt.oldIndex;
					let old_item_id = $( "#CustomSpeakerGrid").children().eq(evt.oldIndex).data('speakerid');
					let gridId = $("#SelectSpeakerGrid").val();

				axios.patch(`/api/speakergrid/${gridId}/${old_item_id}`, {
				    order_number: old_item_order
				  })
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
				        new PNotify({
		                  title: 'Error!',
		                  text: 'There was an unexpected error with the request. Please, reload the page and try again!',
		                  type: 'error'
             		 }); 
					console.log(error);             		  
				  });

				  axios.patch(`/api/speakergrid/${gridId}/${new_item_id}`, {
				    order_number: new_item_order
				  })
				  .then(function (response) {
				    console.log(response);
				  })
				  .catch(function (error) {
			        new PNotify({
		                  title: 'Error!',
		                  text: 'There was an unexpected error with the request. Please, reload the page and try again!',
		                  type: 'error'
             		 });  				  	
				    console.log(error);
				  });		


					
					
			},
		},

		//Image Variables
   		allowableTypes: ['jpg', 'jpeg', 'png', 'gif'],
    	maximumSize: 5000000,
    	selectedImage: null,
    	image: null,
    	imgPrev: '',
    	imgTempText: 'Drag your files here or click in this area.',
		

	},



	methods: {

	//Function that triggers when a grid is selected.
	//The function gets the id of the grid from the Grid Child component
	//With an axios request we get the content of the grid and display it
		showGrid(event) {

				if(event[0]){
					this.selected = event[0];
					this.selectedName = event[1];	
				}


			axios.get('/api/speakergrid/'+this.selected).then(response => this.speakers = response.data);
	       
	       this.speakerAll = this.$refs.allSpeakerGrid;
	       this.speakerAll.filterSpeakers(this.selected, this.speakerSearch);

			setTimeout(function(){ 
				     jQuery('#CustomSpeakerLoading').fadeOut();
				     jQuery( "#CustomSpeakerGrid" ).fadeIn();
			 		/* jQuery( "#CustomSpeakerGrid" ).slideToggle( "slow", function() {
			 
			  });*/
			 }, 2000);

		},

	//Attach a speaker to the selected grid
		addToGrid(speakerId) {
			
         if(!this.selected){
         	    new PNotify({
                  title: 'Error!',
                  text: 'Please select a grid first!',
                  type: 'error'
              });
         } else {

			axios.post('/api/speakergrid/'+this.selected, {
			    speaker_id: speakerId
			  })
			  .then(function (response) {
              new PNotify({
                  title: 'Success!',
                  text: 'Added to Grid!',
                  type: 'success'
              });          
			    spVue.showGrid('');
			  })
			  .catch(function (error) {
           new PNotify({
                  title: 'Error!',
                  text: 'There was an unexpected error with the request. Please, reload the page and try again!',
                  type: 'error'
              });           
			    console.log(error);
			  });

         	
         }
            

		},

	//Remove a speaker from the selected grid	
		removeFromGrid(speakerId) {
			
         if(!this.selected){
         	alert('No Grid is selected!');
         } else {

			axios.delete('/api/speakergriditem/'+this.selected+'/'+speakerId, {
			  })
			  .then(function (response) {
			    spVue.showGrid('');
              new PNotify({
                  title: 'Success!',
                  text: 'Removed from Grid!',
                  type: 'success'
              });             
			  })
			  .catch(function (error) {
           new PNotify({
                  title: 'Error!',
                  text: 'There was an unexpected error with the request. Please, reload the page and try again!',
                  type: 'error'
              });          
			    console.log(error);
			  });
				
         	
         }
		
		},

	//Filter speakers by the filter field's value and ofc by the selected grid
	//We don't want to show speakers in the "all speakers" section
	//who is also in the selected grid.

        filterSpeakers(){
           this.speakerAll = this.$refs.allSpeakerGrid;
	       
		   this.speakerAll.filterSpeakers(this.selected, this.speakerSearch);
        	
      
		},

	//Create a new Speaker	
	newSpeakerSubmit($event){
			let ref = this.$refs.allSpeakerGrid;
			let selectedGr = this.selected;
			let SearchVar = this.speakerSearch;
      // create a form
      const form = new FormData();
      form.append('speaker_img', this.selectedImage);
      form.append('first_name', $event.target.first_name.value);
      form.append('last_name', $event.target.last_name.value);
      form.append('job_title', $event.target.job_title.value);
      form.append('company', $event.target.company.value);
      form.append('facebook', $event.target.facebook.value);
      form.append('twitter', $event.target.twitter.value);
      form.append('linkedin', $event.target.linkedin.value);
	  form.append('bio', $event.target.bio.value);
	  form.append('website', $event.target.website.value);
      // submit the image			

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

			axios.post('/api/speakers', form, config)
			  .then(function (response) {
			  	document.getElementById("NewSpeakerForm").reset();
				document.getElementById("speakerPrevImg").src="";
			  	document.getElementById("ImgAreaPlaceholder").innerHTML = 'Drag your files here or click in this area.';	
			 		    new PNotify({
					        title: 'Success!',
					        text: 'Speaker Saved!',
					        type: 'success'
    					});

    			ref.filterSpeakers(selectedGr, SearchVar);	
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


//Image Functions
//We use this for the preview image for the image uplod in the "create new speaker" modal
 	validate(image) {
      if (!this.allowableTypes.includes(image.name.split(".").pop().toLowerCase())) {
        alert(`Sorry you can only upload ${this.allowableTypes.join("|").toUpperCase()} files.`)
        return false
      }

      if (image.size > this.maximumSize){
        alert("Sorry File size exceeding from 5 Mb")
        return false
      }

      return true
    },

    onImageError(err){
      console.log(err, 'do something with error')
    },

    changeImage($event) {
    	
      this.selectedImage = $event.target.files[0];
      //validate the image
      if (!this.validate(this.selectedImage))
        return

    	this.createImage();



    },

     createImage() {

      const reader = new FileReader()
      reader.onload = (e) => {
      	 this.image = e.target.result;
        this.imgPrev = e.target.result;
      	
      };
       reader.readAsDataURL(this.selectedImage);
     this.imgTempText = '';
    }, 

    editFilteredSpeaker(speakerId){

        axios.get(`/api/speaker/${speakerId}`)
        .then(response => {
          // JSON responses are automatically parsed.
           this.speakerEditRequest(response.data);
        })
        .catch(e => {
          console.log(e);
         // this.errors.push(e)
        })


       
    },

	speakerEditRequest(speakerData){
		this.editSpeakerData = speakerData;
		this.imgPrev =  '/storage/speakers/'+speakerData.img_url+'?id='+this.generateHash(10);
	    $('#edit_form_modal').modal({backdrop: 'static', keyboard: true});
	},

	editSpeaker($event){
			let ref = this.$refs.allSpeakerGrid;
			let selectedGr = this.selected;
			let SearchVar = this.speakerSearch;
      // create a form
      const form = new FormData();
      form.append('speaker_img', this.selectedImage);
      form.append('prefix', $event.target.prefix.value);      
      form.append('first_name', $event.target.first_name.value);
      form.append('last_name', $event.target.last_name.value);
      form.append('job_title', $event.target.job_title.value);
      form.append('company', $event.target.company.value);
      form.append('facebook', $event.target.facebook.value);
      form.append('twitter', $event.target.twitter.value);
      form.append('linkedin', $event.target.linkedin.value);
	  form.append('bio', $event.target.bio.value);
	  form.append('website', $event.target.website.value);
	  
	  console.log($event.target.bio.value);
      // submit the image			

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

			axios.post(`/api/speaker/${this.editSpeakerData.id}?_method=PATCH`, form, config)
			  .then(function (response) {
			  	
			 		    new PNotify({
					        title: 'Success!',
					        text: 'Speaker Saved!',
					        type: 'success'
    					});

    			ref.filterSpeakers(selectedGr, SearchVar);	
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

  generateHash(num){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < num; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

  }, 

},

  mounted(){
    $(this.$refs.editmodal).on("hidden.bs.modal", function(){
    	document.getElementById("EditSpeakerForm").reset();
    	document.getElementById("NewSpeakerForm").reset();
    	this.selectedImage = '';
    	this.imgPrev = '';
		this.image= '';
    	this.speakerPrevImg = '';
		$('#speakerPrevImg').attr('src','');
    })
  },


});



