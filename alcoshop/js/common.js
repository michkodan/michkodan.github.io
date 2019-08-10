$(window).on('load', function() {
	$('.preloader').delay(100).fadeOut('slow');
});

window.onload = function() {
		if($(window).width() < 1200) {
  		$(".mobile").addClass('side-nav');
  		$(".mobile").attr('id', 'slide-out');
  	} else {
  		$(".mobile").removeClass('side-nav');
  	}
};

$(window).resize(function() {
   if($(window).width() < 1200) {
  	$(".mobile").addClass('side-nav');
  	$(".mobile").attr('id', 'slide-out');
  } else {
  	$(".mobile").removeClass('side-nav');
  }
});	

$(function() {

	$('.hamburger').on('click', function() {
  	$(this).toggleClass('opened');
  	$(".side-nav").toggleClass('active');
	});

	$('select').material_select();


	 $(function() {
	    $( "#slider-range" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 500,
	      max: 2500,
	      values: [ 1000, 2000 ],
	      slide: function( event, ui ) {
	        $( "#amount" ).val( ui.values[ 0 ] + " " +  "р." );
	        $( "#amount_1" ).val( ui.values[ 1 ] + " " +  "р." );
	      }
	    });
	    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	    $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input#amount").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input#amount").val(value1);
		  	}
		  	$("#slider-range").slider("values",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_1").change(function(){
		  	var value1=$("input#amount").val();
		  	var value2=$("input#amount_1").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_1").val(value2);
		  	}
		  	$("#slider-range").slider("values",1,value2);
		  });

	  });

	  $(function() {
	    $( "#slider-range2" ).slider({
	      // orientation: "vertical",
	      // step: 15,
	      range: true,
	      min: 0,
	      max: 15,
	      values: [ 2, 7 ],
	      slide: function( event, ui ) {
	        $( "#amount2" ).val( ui.values[ 0 ] );
	        $( "#amount_2" ).val( ui.values[ 1 ] );
	      }
	    });
	    $( "#amount2" ).val( $( "#slider-range2" ).slider( "values", 0 ) );
	    $( "#amount_2" ).val( $( "#slider-range2" ).slider( "values", 1 ) );

	    // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input#amount2").change(function(){
		  	var value1=$("input#amount2").val();
		  	var value2=$("input#amount_2").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input#amount2").val(value1);
		  	}
		  	$("#slider-range2").slider("values",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input#amount_2").change(function(){
		  	var value1=$("input#amount2").val();
		  	var value2=$("input#amount_2").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input#amount_2").val(value2);
		  	}
		  	$("#slider-range2").slider("values",1,value2);
		  });


	  });

	$('.catalog__filter').slideUp();
	$('.catalog__button').on('click', function(){
		$('.catalog__filter').slideToggle();
	});


	$('#search-input').focus(function(event) {
		$('.placeholder').css('display', 'none');
	});

	$('#search-input').blur(function(event) {
		$('.placeholder').css('display', 'block');
	});

	$('.button-collapse').sideNav('show');

});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        zoomControl: false,
        scrollwheel: false,
        scaleControl: false,
        rotateControl: false,
        panControl: false,
        mapMaker: false,
        disableDefaultUI: false,
        streetViewControl: false,
        signInControl: false,
        mapTypeControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(59.907830, 30.316904), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e9e9e9"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 29
			            },
			            {
			                "weight": 0.2
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 18
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#dedede"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 36
			            },
			            {
			                "color": "#333333"
			            },
			            {
			                "lightness": 40
			            }
			        ]
			    },
			    {
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f2f2f2"
			            },
			            {
			                "lightness": 19
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 1.2
			            }
			        ]
			    }
			]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);


    var neighborhoods = [
        // Main
        {lat: 59.907830, lng: 30.316904, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.907744, lng: 30.341108, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.907430, lng: 30.386904, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
        {lat: 59.901503, lng: 30.343597, title: 'Title 1', content: 'Text text text', icon: 'map-icon.svg'},
    ];


    /* Info windows
    =========================*/
    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {

       // this variable sets the map bounds and zoom level according to markers position
       var bounds = new google.maps.LatLngBounds();

       // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
       for (var i = 0; i < neighborhoods.length; i++){

          var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
          var name = neighborhoods[i].title;
          var icon = neighborhoods[i].icon;
          var content = neighborhoods[i].content;

          createMarker(latlng, name, content, icon, i * 250);

          // Marker’s Lat. and Lng. values are added to bounds variable
          bounds.extend(latlng);
       }

    }


    function createMarker(latlng, title, content, icon, timeout) {

        window.setTimeout(function() {
           var marker = new google.maps.Marker({
              map: map,
              position: latlng,
              clickable: true,
              icon: {
                url: "img/" + icon
              },
              animation: google.maps.Animation.DROP
           });

           google.maps.event.addListener(marker, 'click', function() {
              var infoContent = '<div id="info_container">' +
              '<h3 class="info_title">' + title + '</h3><div>' + content + '</div></div>';

              infoWindow.setContent(infoContent);
              infoWindow.open(map, marker);

           });

        }, timeout);

    }

    displayMarkers();





    // Enable scroll zoom after click on map
    map.addListener('click', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Enable scroll zoom after drag on map
    map.addListener('drag', function() {
       map.setOptions({
           scrollwheel: true
       });
    });


    // Disable scroll zoom when mouse leave map
    map.addListener('mouseout', function() {
       map.setOptions({
           scrollwheel: false
       });
    });


    /* Map center on resize
    =========================*/
    var getCen = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(getCen);
    });



}

