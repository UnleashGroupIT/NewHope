<template>
      <div id="GridController">
    
        <div id="NewGridContainer">
           <div id="GridLabelContainer">
            <label for="EventSelect">Unleash Event - </label>
            <label for="NewGrid">Grid Name</label>
          </div>
          <br/>
            <select v-model="seletedevent" name="EventSelect" id ="EventSelect">
              <option v-for="eventdata in events" v-bind:value="eventdata.event_code">
                {{ eventdata.event_name }}
              </option>
            </select>
            -
            <input type="text" name="NewGrid" v-model="NewGridName" id="NewGrid">

            <button class="btn-xs btn-info" @click="saveGrid()">Create</button>
        </div>
<p>or</p>
<p>Please select an existing grid for editing</p>
    <div id="GridSelectContainer">
        <select name="GridSelect" id="SelectSpeakerGrid" v-model="selectedGrid" v-on:change="prepareGrid">
          <option v-for="grid in grids" v-bind:value="grid.id">
          {{ grid.events[0].event_name }} - {{ grid.grid_name }}
          </option>

        </select>
    </div> 
<!-- 
Ide még kell egy remove grid button és egy edit grid name
-->


      </div>               

</template>

<script>

export default {
  data() {
	return {
		events: [],
    grids: [],
    selectedGrid: null,
    seletedevent: null,
    NewGridName: null,
	};
  
  },

  props: ['gridtype'],

  methods: {

    prepareGrid(event){
      jQuery( "#CustomSpeakerGrid" ).fadeOut();
      jQuery('#CustomSpeakerLoading').fadeIn();
       
         if(event){
            let options = event.target.options;
            let selectedOption = options[options.selectedIndex];
              if (selectedOption){
                this.selectedName = selectedOption.textContent;
              }
              

         }
        
         if (this.selectedGrid){
           this.$emit('griddisplay', [this.selectedGrid, this.selectedName]);
         }
     
    },

    getAllEvents(){
        axios.get(`/api/events`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.events = response.data;
        })
        .catch(e => {
          this.errors.push(e)
        })

    },

   
    saveGrid(){
      var self = this;
      if(this.seletedevent && this.NewGridName){
            axios.post('/api/grids', {
              eventId: this.seletedevent,
              grid_name: this.NewGridName,
              type: this.gridtype
            })
            .then(function (response) {
              self.NewGridName = '';
              self.displayGrid();
            })
            .catch(function (error) {
              console.log(error);
            });

      } else {
        if(!this.seletedevent && !this.NewGridName){
                 new PNotify({
                  title: 'Error!',
                  text: 'Grid name is not set and no event has been selected!',
                  type: 'error'
              });
         
        } else {
          if(!this.seletedevent){
               new PNotify({
                  title: 'Error!',
                  text: 'No Event is selected!',
                  type: 'error'
              });
          
          }
          if(!this.NewGridName){
                new PNotify({
                  title: 'Error!',
                  text: 'Grid name is missing!',
                  type: 'error'
              });
          }


        }
      }

    },

   displayGrid(){

    axios.get('/api/grids?category='+this.gridtype).then(response => {
      this.grids = response.data;

    });
   }

  },

  // Fetches posts when the component is created.
  created() {
      this.getAllEvents();
      this.displayGrid();

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>

