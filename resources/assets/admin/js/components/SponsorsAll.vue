<template>
  <ul class="SponsorsGrid">
					<li v-for="sponsor in sponsors" :id=sponsor.id :data-sponsorId=sponsor.id>
                        <div class="GridImageContainer">
                          <div class="IconContainer">
                           <div title="Add To Current Grid" class="AddToGrid" @click="addSponsorToGrid(sponsor.id)"><i class="fa fa-plus-square" aria-hidden="true"></i></div>
                           <div title="Edit sponsor across events" class="EditSponsorGlobal" @click="editSponsor(sponsor.id)"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>                           
                           <div title="Delete from Database" class="DeleteItem"  @click="deleteFromDatabase(sponsor.id)"><i class="fa fa-trash" aria-hidden="true"></i></div>
                          </div>
                            <div class="GridOverlay">
                                <h2 class="SliphoverHeadline">{{ sponsor.company_name }}</h2>

                            </div>

                            <img class="Square GridItem SponsorItem" :alt="sponsor.company_name" :src="'/storage/sponsors/colored/'+sponsor.logo_url+'?id='+generateHash(10)">
                        </div>
                    </li>
 
    </ul>                
</template>

<script>

export default {
  data() {
	return {
		sponsors: [],
    bottom: false,
    sponsorPageData: {
        current_page: 0,
        list: [],
        busy: false
      },
   filtered: false   
	};
  
  },

  methods: {
  	addSponsorToGrid(sponsorId){

  		this.$emit('sponsoradded', sponsorId);
  	},

    deleteFromDatabase(sponsorId){
       var thisInstance = this;
       let thisSelected = this.selected;
       let thisSearch = this.sponsorSearch;
     
        (new PNotify({
            title: 'Confirmation Needed',
            text: 'Are you sure you want to delete this sponsor?',
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
           

             axios.delete(`/api/sponsor/${sponsorId}`)
              .then(response => {
                // JSON responses are automatically parsed.
                thisInstance.filterSponsors(thisSelected, thisSearch);
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
    editSponsor(sponsorId){

        axios.get(`/api/sponsor/${sponsorId}`)
        .then(response => {
          // JSON responses are automatically parsed.
            this.$emit('editsponsordata', response.data);
        })
        .catch(e => {
          console.log(e);
         // this.errors.push(e)
        })


       
    },

    filterSponsors(gridId, searchQuery){
       let exludeG = '';
       let searchQ = '';

       this.filtered = true;

        if(gridId){
           exludeG = `exlude=${gridId}`;
        } 

        if(searchQuery){
           searchQ = `search=${searchQuery}`;
        } 

        axios.get(`/api/sponsors?${exludeG}&${searchQ}`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sponsors = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    getAllSponsors(){
      this.filtered = false;
        axios.get(`/api/sponsors`)
        .then(response => {
        //console.log(response.data);
          // JSON responses are automatically parsed.
          this.sponsors = response.data.data;

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

if (this.sponsorPageData.current_page != this.sponsorPageData.max + 1) {
     axios.get(`/api/sponsors`, {
        params: {
          page: this.sponsorPageData.current_page +1,
        },
      }).then(({ data }) => {
        if (data.data.length) {
          this.sponsorPageData.current_page = data.current_page;  
          this.sponsorPageData.max = data.last_page;
          this.sponsors = this.sponsors.concat(data.data);

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

    //  this.getAllSponsors();

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

