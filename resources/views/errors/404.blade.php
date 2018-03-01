@extends('global.main')

@section('title', '404')

@section('headercss')

	<link rel="stylesheet" type="text/css" href="{{ asset('css/404.css') }}">

@endsection

@section('headerjs')
<!--Empty for now-->
@endsection


@section('maincontent')
        <section id="Content">
            <img id="Logo404" src="{{ asset('gfx/404/logo-404.svg') }}" alt="404">
            <h2 id="Headline404">oops, it seems like <span class="TabletLineBreak FontProximaNova">you are lost.</span></h2>
            <p id="Info404"><span class="TabletLineBreak">We will take you back to our home page in <span id="Countdown">10</span> seconds</span></p>
            <img id="MobileBG" src="{{ asset('gfx/404/mobile-bg.png') }}" alt="Mobile">
        </section>
		
        <!-- It's the Final Countdown: https://youtu.be/9jK-NcRmVcw -->
        <script type="text/javascript">
           window.onload = function () {
                var countdownElement = document.getElementById('Countdown'),
                        seconds = 9,
                        second = 0,
                        interval;

                interval = setInterval(function () {
                    countdownElement.firstChild.data = (seconds - second);
                    if (second >= seconds) {
                        clearInterval(interval);
                    }

                    second++;
                    if (second == 10) {
                        window.location = 'http://www.unleashgroup.io';
                    }
                }, 1000);
            }
        </script>		
	
@endsection

@section('footerscripts')
<script src="https://use.typekit.net/oip3jmq.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
@endsection
