<template>
  <ul class="SpeakersGrid">
					<li v-for="speaker in speakers" :id=speaker.id :data-speakerId=speaker.id>
                        <div class="GridImageContainer">
                          <div class="IconContainer">
                           <div title="Add To Current Grid" class="AddToGrid" @click="addSpeakerToGrid(speaker.id)"><i class="fa fa-plus-square" aria-hidden="true"></i></div>
                           <div title="Edit speaker across events" class="EditSpeakerGlobal" @click="editSpeaker(speaker.id)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>                           
                           <div title="Delete from Database" class="DeleteItem"  @click="deleteFromDatabase(speaker.id)"><i class="fa fa-trash" aria-hidden="true"></i></div>
                          </div>
                            <div class="GridOverlay">
                                <h2 class="SliphoverHeadline">{{ speaker.full_name }}</h2>
                               <h3 class="SmallParagraph">{{ speaker.job_title }}</h3>
                                <h3 class="SmallParagraph CompanyName">{{ speaker.company }}</h3>
                            </div>

                            <img class="Square GridItem" :alt="speaker.full_name" :src="'/storage/speakers/'+speaker.img_url+'?id='+generateHash(10)">
                        </div>
                    </li>
 
    </ul>                
</template>

<script>

export default {
  data() {
	return {
		speakers: [],
    bottom: false,
    speakerPageData: {
        current_page: 0,
        list: [],
        busy: false
      },
   filtered: false   
	};
  
  },

  methods: {
  	addSpeakerToGrid(speakerId){

  		this.$emit('speakeradded', speakerId);
  	},

    deleteFromDatabase(speakerId){
       var thisInstance = this;
       let thisSelected = this.selected;
       let thisSearch = this.speakerSearch;
     
        (new PNotify({
            title: 'Confirmation Needed',
            text: 'Are you sure you want to delete this speaker?',
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
           

             axios.delete(`/api/speaker/${speakerId}`)
              .then(response => {
                // JSON responses are automatically parsed.
                thisInstance.filterSpeakers(thisSelected, thisSearch);
                     new PNotify({
                        title: 'Success!',
                        text: 'Deleted Successfully!',
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

         
        }).on('pnotify.cancel', function() {
           
        });




    },
    editSpeaker(speakerId){

        axios.get(`/api/speaker/${speakerId}`)
        .then(response => {
          // JSON responses are automatically parsed.
            this.$emit('editspeakerdata', response.data);
        })
        .catch(e => {
          console.log(e);
         // this.errors.push(e)
        })


       
    },

    filterSpeakers(gridId, searchQuery){
       let exludeG = '';
       let searchQ = '';

       this.filtered = true;

        if(gridId){
           exludeG = `exlude=${gridId}`;
        } 

        if(searchQuery){
           searchQ = `search=${searchQuery}`;
        } 

        axios.get(`/api/speakers?${exludeG}&${searchQ}`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.speakers = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    getAllSpeakers(){
      this.filtered = false;
        axios.get(`/api/speakers`)
        .then(response => {
        //console.log(response.data);
          // JSON responses are automatically parsed.
          this.speakers = response.data.data;

        })
        .catch(e => {
          this.errors.push(e)
        })

    },

  generateHash(num){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < num; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

  },

    bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },  

 loadMore() {

if (this.speakerPageData.current_page != this.speakerPageData.max + 1) {
     axios.get(`/api/speakers`, {
        params: {
          page: this.speakerPageData.current_page +1,
        },
      }).then(({ data }) => {
        if (data.data.length) {
          this.speakerPageData.current_page = data.current_page;  
          this.speakerPageData.max = data.last_page;
          this.speakers = this.speakers.concat(data.data);

        } 
      }); 

}

  },  

  },

  // Fetches posts when the component is created.
  created() {
   window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.loadMore();

    //  this.getAllSpeakers();

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  },

  watch: {
    bottom(bottom) {
      if (bottom && this.filtered == false) {
        this.loadMore()
      }
    }
  }  
}
</script>

