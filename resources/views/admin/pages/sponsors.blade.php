@extends('admin.main')
       
@section('title', 'Sponsors')


@section('customcss')
<link href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/bootstrap.min.css', '/admin') }}" rel="stylesheet" type="text/css">
  
 
    <link href="{{ mix('css/style.css', '/admin') }}" rel="stylesheet">
  <link href="{{ mix('css/sponsors.css', '/admin') }}" rel="stylesheet" type="text/css">
  <link href="{{ mix('css/common.css', '/admin') }}" rel="stylesheet" type="text/css">
@endsection
  
@section('content')

<div id="PageContainer">
 <section id="GridSection">
  <h2>Grid Selector</h2>
  <div id="GridInnerContainer">

      <h3 id="NewGridHeadline"><i class="fa fa-plus-circle" aria-hidden="true"></i> Create New Sponsor Grid</h3> 

    <grid-controller v-bind:gridtype="GridType" @griddisplay="showGrid($event)"></grid-controller>

  <div>
 </section>

 <section>
    <div class="SectionHeader">
      <h2>@{{ selectedName }}</h2>

    </div>
    
  {{-- This is the selected grid's template  --}}  

<div class="infinite-loading-container" id="CustomSpeakerLoading" _v-34d8cf3a=""> <div _v-34d8cf3a="" style=""> <i _v-34d8cf3a="" class="loading-default"></i> </div> <div class="infinite-status-prompt" _v-34d8cf3a="" style="display: none;"> No results :( </div> <div class="infinite-status-prompt" _v-34d8cf3a="" style="display: none;"> No more data :) </div> </div>

    <div class="GridContainer CustomSpeakerContainer">
        <div class="SponsorsGrid" id="CustomSpeakerGrid">
         <sponsors-selected ref="SelectedSponsorGrid1" :sponsors="sponsors" :category_name="'Headline'" :category_id="1" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid2" :sponsors="sponsors" :category_name="'Diamond'" :category_id="2" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid3" :sponsors="sponsors" :category_name="'Emerald'" :category_id="3" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid4" :sponsors="sponsors" :category_name="'Platinum'" :category_id="4" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid5" :sponsors="sponsors" :category_name="'Gold'" :category_id="5" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid6" :sponsors="sponsors" :category_name="'Silver'" :category_id="6" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid7" :sponsors="sponsors" :category_name="'Exhibitors'" :category_id="7" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid8" :sponsors="sponsors" :category_name="'Startup'" :category_id="8" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
         <sponsors-selected ref="SelectedSponsorGrid10" :sponsors="sponsors" :category_name="'A La Carte Only'" :category_id="10" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
          <sponsors-selected ref="SelectedSponsorGrid0" :sponsors="sponsors" :category_name="'No Category'" :category_id="0" @removesponsor="removeFromGrid" @editsponsor="editFilteredSponsor"></sponsors-selected>
       </div>
      </div> 
 </section>

  <section id="AllSponsorSection">
    <div class="SectionHeader">
        <h2>All Sponsors</h2>
    </div>

    <!-- form-modal -->
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#form_modal">
        <i class="fa fa-plus-circle" aria-hidden="true"></i> New Sponsor
    </button>

    <div class="SearchContainer">
       <input type="text" placeholder="Search" name="SearchSponsors" id="SearchSponsors" v-model="sponsorSearch" @keyUp="filterSponsors()">

    </div>
   
    <div class="GridContainer">
        

    <sponsors-all ref="allSponsorGrid" @sponsoradded="addToGrid($event)" @editsponsordata="sponsorEditRequest($event)"></sponsors-all>
      
<div class="infinite-loading-container" _v-34d8cf3a=""> <div _v-34d8cf3a="" style=""> <i _v-34d8cf3a="" class="loading-default"></i> </div> <div class="infinite-status-prompt" _v-34d8cf3a="" style="display: none;"> No results :( </div> <div class="infinite-status-prompt" _v-34d8cf3a="" style="display: none;"> No more data :) </div> </div>

   </div> 
 </section>


                            <div id="form_modal" class="modal fade animated" data-backdrop="static" data-keyboard="true" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Add New Sponsor</h4>
                                        </div>
                                            
                                            <form id="NewSponsorForm" role="form" v-on:submit.prevent="newSponsorSubmit">
                                            <div class="modal-body">


                                                <label class="sr-only" for="company">Company</label>
                                                <input type="text" name="company" id="company" placeholder="Company Name" class="form-control m-t-10"> 



                                                <label class="sr-only" for="website">Website</label>
                                                <input type="text" name="website" id="website" placeholder="Website URL" class="form-control m-t-10"> 

                                                <label class="sr-only" for="facebook">Facebook</label>
                                                <input type="text" name="facebook" id="facebook" placeholder="Facebook URL" class="form-control m-t-10">


                                                <label class="sr-only" for="twitter">Twitter</label>
                                                <input type="text" name="twitter" id="twitter" placeholder="Twitter URL" class="form-control m-t-10">

                                                <label class="sr-only" for="linkedin">Linkedin</label>
                                                <input type="text" name="linkedin" id="linkedin" placeholder="Linkedin URL" class="form-control m-t-10">

                                                <br />
                                                <textarea name="bio" id="bio" placeholder="Short Bio"></textarea>
                                                <br />

                                                <div class="imgUploadContainer">
                                               <input type="file" name="sponsor_img" id="sponsor_img" class="imgInput" @change="changeImage" accept="image/*">
                                                <p id="ImgAreaPlaceholder">@{{imgTempText}}</p>
                                                <img id="sponsorPrevImg" :src="imgPrev"/>
                                               </div>                                                                                                 

                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-succes">Submit</button>
                                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- form-modal end -->



                            <div id="edit_form_modal" ref="editmodal" class="modal fade animated" data-backdrop="static" data-keyboard="true" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">Edit global information</h4>
                                        </div>
                                            
                                            <form id="EditSponsorForm" role="form" v-on:submit.prevent="editSponsor">
                                            <div class="modal-body">



                                                <label class="sr-only" for="company">Company</label>
                                                <input type="text" name="company" id="company" :value="editSponsorData.company_name ? editSponsorData.company_name : ''" placeholder="Company Name" class="form-control m-t-10"> 


                                                <label class="sr-only" for="website">Website</label>
                                                <input type="text" name="website" id="website" :value="editSponsorData.website ? editSponsorData.website : ''" placeholder="Website URL" class="form-control m-t-10"> 

                                                <label class="sr-only" for="facebook">Facebook</label>
                                                <input type="text" name="facebook" id="facebook" :value="editSponsorData.facebook ? editSponsorData.facebook : ''" placeholder="Facebook URL" class="form-control m-t-10">


                                                <label class="sr-only" for="twitter">Twitter</label>
                                                <input type="text" name="twitter" id="twitter" :value="editSponsorData.twitter ? editSponsorData.twitter : ''" placeholder="Twitter URL" class="form-control m-t-10">

                                                <label class="sr-only" for="linkedin">Linkedin</label>
                                                <input type="text" name="linkedin" id="linkedin" :value="editSponsorData.linkedin ? editSponsorData.linkedin : ''" placeholder="Linkedin URL" class="form-control m-t-10">

                                                <br />

                                                <textarea name="bio" id="bio" placeholder="Short Bio" v-if="editSponsorData.short_bio">@{{editSponsorData.short_bio}}</textarea>

                                                <textarea name="bio" id="bio" placeholder="Short Bio" v-else></textarea>
                                                <br />                                                

                                                <div class="imgUploadContainer">
                                               <input type="file" name="sponsor_img" id="sponsor_img" class="imgInput" @change="changeImage" accept="image/*">
                                                <p id="EditImgAreaPlaceholder">@{{imgTempText}}</p>
                                                <img id="sponsorPrevImg" :src="imgPrev"/>
                                               </div>                                                                                                 

                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-succes">Submit</button>
                                                <button type="button" class="btn btn-default" data-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- form-modal end --> 

<div id="CategorySelector">
   <h3>Please select a category</h3>
   <select id="CatSelect" name="CatSelect">
     <option value="1">Headline</option>
     <option value="2">Diamond</option>
     <option value="3">Emerald</option>
     <option value="4">Platinum</option>
     <option value="5">Gold</option>
     <option value="6">Silver</option>
     <option value="7">Exhibitor</option>
     <option value="8">Startup</option>
     <option value="10">A La Carte Only</option>
     <option value="0">No Category</option>
   </select> 
   <br />
   <button id="CatSelectButton" class="ui-pnotify-action-button btn btn-default">Save</button>
   <button id="CatCancelButton" class="ui-pnotify-action-button btn btn-default">Cancel</button>
</div>    

</div>

<style>
.imgInput{
    opacity: 0;
    width: 95%;
    padding: 3vw;
    position: absolute;
    margin: -2vw;
  }
 .imgUploadContainer{
      border: 1px solid black;
      padding: 2vw;

 }
 #sponsorPrevImg{
  width:200px;
 } 


</style>


@endsection


@section('customscripts')
   <script src="{{ mix('js/app.js', '/admin') }}" type="text/javascript"></script>
  <script src="{{ mix('js/sponsors.js', '/admin') }}" type="text/javascript"></script>

<script>
jQuery( "#NewGridHeadline" ).click(function() {
  jQuery( "#NewGridContainer" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

</script>  
@endsection

