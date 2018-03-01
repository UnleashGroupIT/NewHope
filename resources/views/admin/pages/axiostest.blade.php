<html>
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

            <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Speakers</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
       

  <link href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
</head>

<body>
  <div id="PageContainer">
<form v-on:submit.prevent="formSubmit" enctype="multipart/form-data">
  <input type="file" name="speaker_img" id="speaker_img" @change="changeImage" accept="image/*">
  <p>Drag your files here or click in this area.</p>
  <button type="submit">Upload</button>
</form>

</div>





<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script>

$(document).ready(function(){
$('form input').change(function () {
$('form p').text(this.files.length + " file(s) selected");
  });
});

</script>

<style>

body{
  background: rgba(0,0,0,0.9);
}
form{

  width: 500px;
  height: 200px;
  border: 4px dashed #fff;
}
form p{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 170px;
  color: #ffffff;
  font-family: Arial;
}
form input{

  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}
form button{
  margin: 0;
  color: #fff;
  background: #16a085;
  border: none;
  width: 508px;
  height: 35px;
  margin-top: -20px;
  margin-left: -4px;
  border-radius: 4px;
  border-bottom: 4px solid #117A60;
  transition: all .2s ease;
  outline: none;
}
form button:hover{
  background: #149174;
  color: #0C5645;
}
form button:active{
  border:0;
}


</style>

<script src="js/app.js" type="text/javascript"></script>
<script src="js/axiostest.js" type="text/javascript"></script>
</body>
</html>
