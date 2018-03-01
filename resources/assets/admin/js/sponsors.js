
Vue.component(
    'sponsors-all',
    require('./components/SponsorsAll.vue')
);

Vue.component(
    'sponsors-selected',
    require('./components/SponsorsSelected.vue')
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
		sponsors: [],
		selected : null,
		selectedName: '',
		sponsorSearch: '',
		sponsorAll: '',
		event: null,
		editSponsorData: {},
		GridType: 2,
		sortableOptions: {
			animation: 150,
			forceFallback: false,
			// Changed sorting within list
			onUpdate: function (/**Event*/evt) {

					let new_item_id = evt.item.dataset.sponsorid
					let new_item_order = evt.newIndex
					let old_item_order = evt.oldIndex;
					let old_item_id = $( "#CustomSpeakerGrid").children().eq(evt.oldIndex).data('sponsorid');
					let gridId = $("#SelectSponsorGrid").val();

				axios.patch(`/api/sponsorgrid/${gridId}/${old_item_id}`, {
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

				  axios.patch(`/api/sponsorgrid/${gridId}/${new_item_id}`, {
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


			axios.get('/api/sponsorgrid/'+this.selected).then(response => this.sponsors = response.data);

	       
	       this.sponsorAll = this.$refs.allSponsorGrid;
	       this.sponsorAll.filterSponsors(this.selected, this.sponsorSearch);

	       this.$refs.SelectedSponsorGrid1.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid2.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid3.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid4.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid5.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid6.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid7.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid10.sponsors = this.sponsors;
	       this.$refs.SelectedSponsorGrid0.sponsors = this.sponsors;


			setTimeout(function(){ 
				     jQuery('#CustomSpeakerLoading').fadeOut();
				     jQuery( "#CustomSpeakerGrid" ).fadeIn();
			 		/* jQuery( "#CustomSpeakerGrid" ).slideToggle( "slow", function() {
			 
			  });*/
			 }, 2000);

		},

	//Attach a sponsor to the selected grid
		addToGrid(sponsorId) {
			
         if(!this.selected){
         	    new PNotify({
                  title: 'Error!',
                  text: 'Please select a grid first!',
                  type: 'error'
              });
         } else {

			var selected = this.selected;

			var notice = new PNotify({
			    text: $('#CategorySelector').html(),
			    icon: false,
			    width: 'auto',
			    hide: false,
			    buttons: {
			        closer: false,
			        sticker: false
			    },
			    insert_brs: false
			});
			notice.get().on('click', '#CatCancelButton', function() {
			    notice.remove();
			});
			notice.get().on('click', '#CatSelectButton', function() {
			  var selectedCategoryId = notice.get().find('#CatSelect').val();
					axios.post('/api/sponsorgrid/'+selected, {
								    sponsor_id: sponsorId,
								    category_id: selectedCategoryId
								  })
								  .then(function (response) {

										 notice.update({
									        title: 'Success!',
									        text: 'Added to Grid!',
									        icon: true,
									        width: PNotify.prototype.options.width,
									        hide: true,
									        buttons: {
									            closer: true,
									            sticker: true
									        },
									        type: 'success'
									    });       
								    spVue.showGrid('');
								  })
								  .catch(function (error) {
										 notice.update({
							                  title: 'Error!',
							                  text: 'There was an unexpected error with the request. Please, reload the page and try again!',
							                  type: 'error'
									    });          
								    console.log(error);
								  });  
			  
			});
		}
            

		},

	//Remove a sponsor from the selected grid	
		removeFromGrid(sponsorId) {
			
         if(!this.selected){
         	alert('No Grid is selected!');
         } else {

			axios.delete('/api/sponsorgriditem/'+this.selected+'/'+sponsorId, {
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

	//Filter sponsors by the filter field's value and ofc by the selected grid
	//We don't want to show sponsors in the "all sponsors" section
	//who is also in the selected grid.

        filterSponsors(){
           this.sponsorAll = this.$refs.allSponsorGrid;
	       
		   this.sponsorAll.filterSponsors(this.selected, this.sponsorSearch);
        	
      
		},

	//Create a new Sponsor	
	newSponsorSubmit($event){
			let ref = this.$refs.allSponsorGrid;
			let selectedGr = this.selected;
			let SearchVar = this.sponsorSearch;
      // create a form
      const form = new FormData();
      form.append('sponsor_img', this.selectedImage);
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

			axios.post('/api/sponsors', form, config)
			  .then(function (response) {
			  	document.getElementById("NewSponsorForm").reset();
				document.getElementById("sponsorPrevImg").src="";
			  	document.getElementById("ImgAreaPlaceholder").innerHTML = 'Drag your files here or click in this area.';	
			 		    new PNotify({
					        title: 'Success!',
					        text: 'Sponsor Saved!',
					        type: 'success'
    					});

    			ref.filterSponsors(selectedGr, SearchVar);	
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
//We use this for the preview image for the image uplod in the "create new sponsor" modal
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

    editFilteredSponsor(sponsorId){

        axios.get(`/api/sponsor/${sponsorId}`)
        .then(response => {
          // JSON responses are automatically parsed.
           this.sponsorEditRequest(response.data);
        })
        .catch(e => {
          console.log(e);
         // this.errors.push(e)
        })


       
    },

	sponsorEditRequest(sponsorData){
		this.editSponsorData = sponsorData;
		this.imgPrev =  '/storage/sponsors/colored/'+sponsorData.logo_url+'?id='+this.generateHash(10);
	    $('#edit_form_modal').modal({backdrop: 'static', keyboard: true});
	},

	editSponsor($event){
		var thiiiis = this;
      // create a form
      const form = new FormData();
      form.append('sponsor_img', this.selectedImage);
      form.append('company_name', $event.target.company.value);
      form.append('facebook', $event.target.facebook.value);
      form.append('twitter', $event.target.twitter.value);
      form.append('linkedin', $event.target.linkedin.value);
	  form.append('short_bio', $event.target.bio.value);
	  form.append('website', $event.target.website.value);
	  
	  console.log($event.target.bio.value);
      // submit the image			

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

			axios.post(`/api/sponsor/${this.editSponsorData.id}?_method=PATCH`, form, config)
			  .then(function (response) {
			  	
			 		    new PNotify({
					        title: 'Success!',
					        text: 'Sponsor Saved!',
					        type: 'success'
    					});
			 thiiiis.showGrid(thiiiis.selected);
    				
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
    	document.getElementById("EditSponsorForm").reset();
    	document.getElementById("NewSponsorForm").reset();
    	this.selectedImage = '';
    	this.imgPrev = '';
		this.image= '';
    	this.sponsorPrevImg = '';
		$('#sponsorPrevImg').attr('src','');
    })
  },

});



