<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">

 	 @yield('meta')

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
       <link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
       <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
	   <link rel='stylesheet' href="{{ mix('css/index.css') }}" type='text/css' />

	<title>@yield('title')</title>


	 @yield('headercontent')
	 

</head>
<body>
	<div id="root">
		@yield('maincontent')	
	</div>

</body>

@yield('footerscripts')
<script src="{{ mix('js/index.js') }}"></script>	
</html>