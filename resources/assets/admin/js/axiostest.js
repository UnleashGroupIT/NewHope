new Vue({
  el:"#PageContainer",
  data:{
    allowableTypes: ['jpg', 'jpeg', 'png', 'gif'],
    maximumSize: 5000000,
    selectedImage: null,
    image: null,
    options:{
      url: 'https://httpbin.org/post',
      type: "POST",
      processData: false, 
      contentType: false 
    }
  },
  methods: {
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
    	
      this.selectedImage = $event.target.files[0]
      //validate the image
      if (!this.validate(this.selectedImage))
        return
      // create a form
     const form = new FormData();
      form.append('speaker_img', this.selectedImage);
      // submit the image

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

			axios.post('api/speakers', form, config)
			  .then(function (response) {
			   console.log(response);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });


    },

  } 
})