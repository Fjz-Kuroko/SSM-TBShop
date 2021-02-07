//
// Main.js
//

/* ------------------------------------------------------------------
 * Name         : Beid - HTML Template
 * File         : main.js
 * Author       : ScanThemes
 * Author URI   : scanthemes@gmail.com
 *
 * All Rights Reserved.
 * --------------------------------------------------------------------- */
/* ---------------------------------------------------------------------

  [Table of contents]

    - Default options
    - Google Map (Init)
    - Contact form
    - Scroll To Element
    - Plugins load
    - Google Map
    - Off-Canvas
    - Navbar Affix
    - Modal Window Video (Bootstrap)
    - Carousel (Bootstrap)
    - Progress Bar Animate
    - Animate on scroll
    - Owl-carousel
    - jQuery.NiceScroll
    - Countdown
    - Carousel + animation
    - Count Up
    - Partially collapsing sidebar
    - Collapser

------------------------------------------------------------------------ */
/*---------------------------------------------------------------------- */

//------------------- Default options -------------------
if ( ( options == undefined ) || ( options == false ) ) {
  var options = true,
      GoogleMapAPI = { 
        key : '',
        language : '',
        region : '',
        disableDefaultUI : false,
        markerIcon: '',
        customMapStyle: ''
      },
      scrollToElement = { scrollSpeed : 700 },
      slider = { interval : 5000 };
}

//----------------------- Init Map ------------------------
function initMap() {
    var map_item = document.querySelectorAll('[data-map]');
    Array.prototype.forEach.call(map_item, function(el) {
        var GM_lat = -34.400,
            GM_lng = 150.9,
            GM_zoom = 8,
            GM_disableDefaultUI = GoogleMapAPI.disableDefaultUI,
            GM_marker_lat = -34.400,
            GM_marker_lng = 150.9,
            GM_marker_title = 'Marker title',
            GM_marker_icon = GoogleMapAPI.markerIcon,
            GM_marker_animation = false,
            GM_marker_label = '',
            GM_marker_content = '',
            GM_style,
            map;

    if ( (el.closest('[data-lat]')) && (el.closest('[data-lng]')) ) {
      GM_lat = Number(el.getAttribute('data-lat'));
      GM_lng = Number(el.getAttribute('data-lng'));
      GM_zoom = Number(el.getAttribute('data-zoom'));
    }
    if ( el.closest('[data-zoom]') ) {
      GM_zoom = Number(el.getAttribute('data-zoom'));
    }
    if ( (el.closest('[data-marker-lat]')) && (el.closest('[data-marker-lng]')) ) {
      GM_marker_lat = Number(el.getAttribute('data-marker-lat'));
      GM_marker_lng = Number(el.getAttribute('data-marker-lng'));
    }
    if ( el.closest('[data-marker-title]') ) {
      GM_marker_title = el.getAttribute('data-marker-title');
    }
    if ( el.closest('[data-marker-animation="drop"]') ) {
      GM_marker_animation = google.maps.Animation.DROP;
    }
    if ( el.closest('[data-marker-animation="bounce"]') ) {
      GM_marker_animation = google.maps.Animation.BOUNCE;
    }
    if ( el.closest('[data-marker-label]') ) {
      GM_marker_label = el.getAttribute('data-marker-label');
    }
    if ( el.closest('[data-marker-icon]') ) {
      GM_marker_icon = el.getAttribute('data-marker-icon');
    }
    if ( el.closest('[data-marker-content]') ) {
      GM_marker_content = el.getAttribute('data-marker-content');
    }
    if ( el.closest('[data-map-style="light"]') ) {
      GM_style = 
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
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
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
    } else if ( el.closest('[data-map-style="dark"]') ) {
      GM_style = 
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
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
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]
    } else if ( el.closest('[data-map-style="custom"]') ) {
      GM_style = GoogleMapAPI.customMapStyle
    }

    map = new google.maps.Map(el, {
      styles: GM_style,
      center: {lat: GM_lat, lng: GM_lng},
      zoom: GM_zoom,
      disableDefaultUI: GM_disableDefaultUI
    });
    var marker = new google.maps.Marker({
        position: {lat: GM_marker_lat, lng: GM_marker_lng},
        map: map,
        animation: GM_marker_animation,
        title: GM_marker_title,
        label: GM_marker_label,
        icon: GM_marker_icon
    });
    if ( GM_marker_content ) {
      var infowindow = new google.maps.InfoWindow({
          content: GM_marker_content
      });
      marker.addListener('click', function() {
          infowindow.open(map, marker);
      });
    }
  });
}

//----------------------- Init Chart (Animation) ------------------------
function initChart(chartItems) {
  let chartCloneClass = 'chartClone-CJSA';
  Array.prototype.forEach.call(chartItems, function(CAI) {

    let chartClone = document.createElement("canvas"),
        chartCloneArr = chartClone.className.split(" "),
        chartOriginHeight = CAI.offsetHeight,
      dataURL = CAI.toDataURL(),
      parentDiv,
      chartSizeAnim;
    chartClone.style.background = "url("+dataURL+") 0 0/contain repeat-x";
    if (chartCloneArr.indexOf(chartCloneClass) == -1) {
      chartClone.className += " " + chartCloneClass;
    }
    chartClone.style.height = chartOriginHeight + "px";
    parentDiv = CAI.parentNode;
    parentDiv.insertBefore(chartClone, CAI);
    chartSizeAnim = chartClone.offsetWidth;
    function ChartAnim(elem) {
        let left = 0,
            id = setInterval(ChartAnimFrame, 60); // animation speed
        function ChartAnimFrame() {
            left++
            elem.style.backgroundPositionX = left + 'px';
            if (left >= chartSizeAnim)
              left = 0
        }
    }
    ChartAnim(chartClone);
  });
}

(function($) {

    "use strict";

    //---------------- Contact form --------------
    if($('[data-form="contact_form"]').length) {
        var form = $('[data-form="contact_form"]'),
            alert_message = '<div class="alert" role="alert" data-alert="result" style="display: none;">',
            form_data,
            SDresult;
        form.prepend(alert_message);
        SDresult = $('[data-alert="result"]');
        // Success function
        function sending_done(response) {
            SDresult.fadeIn().removeClass('alert-danger').addClass('alert-success');
            SDresult.text(response);
            form.find('input:not([type="submit"]), textarea').val('');
        }
        // Fail function
        function sending_fail(data) {
            SDresult.fadeIn().removeClass('alert-success').addClass('alert-danger');
            SDresult.text(data.responseText);
        }
        form.submit(function (e) {
            e.preventDefault();
            form_data = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: form.attr('action'),
                data: form_data
            })
            .done(sending_done)
            .fail(sending_fail);
        });
    }

    //------------------------ Plugins load ----------------------------- 
    var _mainJS = document.querySelector('#_mainJS[data-plugins="load"]');

    if ( _mainJS ) {
        // Parallax
        if ( document.querySelector('[data-parallax]') ) {
            var parallax_js = document.createElement("script");
            parallax_js.src = 'assets/plugins/parallax/parallax.js';
            document.body.insertBefore(parallax_js, _mainJS);
        }

        // Countdown
        if ( document.querySelector('[data-countdown]') ) {
            var countdown_js = document.createElement("script");
            countdown_js.src = 'assets/plugins/countdown/jquery.countdown.min.js';
            document.body.insertBefore(countdown_js, _mainJS);
        }

        // Scrollbar
        if ( document.querySelector('[data-scrollbar]') ) {
            var nicescroll_js = document.createElement("script");
            nicescroll_js.src = 'assets/plugins/scrollbar/jquery.nicescroll.min.js';
            document.body.insertBefore(nicescroll_js, _mainJS);
        }

        // Carousel
        if ( (document.querySelector('[data-carousel="owl-carousel"]')) || (document.getElementsByClassName('owl-carousel')) ) {
            var owl_carousel_js = document.createElement("script");
            owl_carousel_js.src = 'assets/plugins/owl.carousel/owl.carousel.min.js';
            document.body.insertBefore( owl_carousel_js, _mainJS);
        }

    }

    //----------- Google Map ---------- 最新最全最好的Bootstrap模板：http://www.bootstrapMB.com
  if ( document.querySelector('[data-map]') ) { 
    var GM_item = document.querySelector('[data-map]'),
        GM_map  = document.createElement("script"),
        GM_api  = 'http://ditu.googleapis.cn/maps/api/js?key=',
        GM_key  =  GoogleMapAPI.key,
        GM_init = '&callback=initMap',
        GM_lang = GoogleMapAPI.language,
        GM_reg  = GoogleMapAPI.region,
        GM_src;
    if (GM_lang) {
        GM_lang = '&language=' + GM_lang;
    }
    if (GM_reg) {
        GM_reg = '&region=' + GM_reg;
    }
    GM_src = GM_api + GM_key + GM_init + GM_lang + GM_reg;
    GM_map.src = GM_src;
    document.body.insertBefore( GM_map, _mainJS);
  }

  //------------- Off-Canvas ---------------
  $('[data-toggle="offcanvas"]').on('click', function(e) {
      e.preventDefault();
      var offcanvas_target = $(this).data("target");
      if ($(offcanvas_target).is('.show')) {
          $(offcanvas_target).addClass("showing").delay(300).queue(function(next){
              $(this).removeClass("showing");
              next();
          });
          $(offcanvas_target).removeClass('show');
          $('.overlay-offcanvas').remove();
      } else {
          $(offcanvas_target).addClass("showing").delay(300).queue(function(next){
              $(this).removeClass("showing");
              next();
          });
          $(offcanvas_target).addClass('show');
          $('<div data-offcanvas-overlay="' + offcanvas_target + '-overlay" class="overlay-offcanvas"></div>').insertBefore(offcanvas_target);
      }
  });

  /* offcanvas-close */
  $('[data-toggle="offcanvas-close"]').on('click', function() {
      var offcanvas_close_item = $(this).closest('[class*="offcanvas"]').attr('id'),
          offcanvas_close_overlay = ( '#' + offcanvas_close_item + '-overlay' );
      $( '#' + offcanvas_close_item + '.show' ).addClass("showing").delay(300).queue(function(next){
          $(this).removeClass("showing");
          next();
      });
      $( '#' + offcanvas_close_item + '.show' ).removeClass('show');
      $( '[data-offcanvas-overlay="' + offcanvas_close_overlay + '"]').remove();
  });

  /* offcanvas-overlay */
  $(document).on('click', '[data-offcanvas-overlay]', function() {
      var offcanvas_overlay_item = $(this).next('.offcanvas');
      $( offcanvas_overlay_item ).addClass("showing").delay(300).queue(function(next){
          $(this).removeClass("showing");
          next();
      });
      $(offcanvas_overlay_item).removeClass('show');
      $(this).remove();
  });

  //----------- Navbar Affix -----------------
  $(window).on('scroll', function (event) {
      var scrollValue = $(window).scrollTop();
      if (scrollValue > 60) {
          $('.navbar-affix').addClass('affix');
      } else{
          $('.navbar-affix').removeClass('affix');
      }
  });

  //----------- Modal Window Video (Bootstrap) ----------- 
  $('[data-modal-video="play"]').on('click', function () {
      var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').on('click', function () {
          $(theModal + ' iframe').attr('src', videoSRC);
      });
  });

  //----------- Carousel (Bootstrap) -----------
  $('#slider_fade').carousel({
      interval: slider.interval // set interval
  });

  //----------- Progress Bar Animate ---------------
  function progressbar_animate() {
      $('.progress .progress-bar').css("width",
          function() {
              return $(this).attr("aria-valuenow") + "%";
          }
      );
  }

  $(window).on('load', function () {
    //------------- Owl-carousel --------------
    if ( document.querySelector('.owl-carousel') ) {
        var owl_col = [1, 3, 5],
            owl_margin = 0,
            owl_loop = true,
            owl_center = false,
            owl_mouseDrag = true,
            owl_touchDrag = true,
            owl_pullDrag = true,
            owl_freeDrag = false,
            owl_autoWidth = false,
            owl_startPosition = 0,
            owl_nav = false,
            owl_rewind = true,
            owl_navText = ['<span class="ti-angle-left"></span>','<span class="ti-angle-right"></span>'],
            owl_navElement = 'button',
            owl_slideBy = 1,
            owl_slideTransition = '',
            owl_dots = false,
            owl_autoplay = false,
            owl_autoplayTimeout = 5000,
            owl_autoplayHoverPause = false,
            owl_video = false,
            owl_smartSpeed = 250,
            owl_lazyLoad = false,
            owl_animateOut = false,
            owl_animateIn = false,
            owl_stagePadding = 0;
        $( '.owl-carousel' ).each(function() {
            if( $(this).attr('data-carousel-items') ) {
              owl_col = $(this).attr('data-carousel-items').split(",").map(Number);
            }
            if( $(this).attr('data-carousel-margin') ) {
              owl_margin = parseInt($(this).attr('data-carousel-margin'), 10);
            }
            if( $(this).attr('data-carousel-loop') ) {
              owl_loop = JSON.parse($(this).attr('data-carousel-loop'));
            }
            if( $(this).attr('data-carousel-center') ) {
              owl_center = JSON.parse($(this).attr('data-carousel-center'));
            }
            if( $(this).attr('data-carousel-mouseDrag') ) {
              owl_mouseDrag = JSON.parse($(this).attr('data-carousel-mouseDrag'));
            }
            if( $(this).attr('data-carousel-touchDrag') ) {
              owl_touchDrag = JSON.parse($(this).attr('data-carousel-touchDrag'));
            }
            if( $(this).attr('data-carousel-pullDrag') ) {
              owl_pullDrag = JSON.parse($(this).attr('data-carousel-pullDrag'));
            }
            if( $(this).attr('data-carousel-freeDrag') ) {
              owl_freeDrag = JSON.parse($(this).attr('data-carousel-freeDrag'));
            }
            if( $(this).attr('data-carousel-stagePadding') ) {
              owl_stagePadding = parseInt($(this).attr('data-carousel-stagePadding'), 10);
            }
            if( $(this).attr('data-carousel-autoWidth') ) {
              owl_autoWidth = JSON.parse($(this).attr('data-carousel-autoWidth'));
            }
            if( $(this).attr('data-carousel-startPosition') ) {
              owl_startPosition = JSON.parse($(this).attr('data-carousel-startPosition'));
            }
            if( $(this).attr('data-carousel-nav') ) {
              owl_nav = JSON.parse($(this).attr('data-carousel-nav'));
            }
            if( $(this).attr('data-carousel-rewind') ) {
              owl_rewind = JSON.parse($(this).attr('data-carousel-rewind'));
            }
            if( $(this).attr('data-carousel-navText') ) {
              owl_navText = $(this).attr('data-carousel-navText').split(",");
            }
            if( $(this).attr('data-carousel-navElement') ) {
              owl_navElement = $(this).attr('data-carousel-navElement');
            }
            if( $(this).attr('data-carousel-slideBy') ) {
              owl_slideBy = parseInt($(this).attr('data-carousel-slideBy'), 10);
            }
            if( $(this).attr('data-carousel-slideTransition') ) {
              owl_slideTransition = $(this).attr('data-carousel-slideTransition');
            }
            if( $(this).attr('data-carousel-dots') ) {
              owl_dots = JSON.parse($(this).attr('data-carousel-dots'));
            }
            if( $(this).attr('data-carousel-autoplay') ) {
              owl_autoplay = JSON.parse($(this).attr('data-carousel-autoplay'));
            }
            if( $(this).attr('data-carousel-autoplayTimeout') ) {
              owl_autoplayTimeout = parseInt($(this).attr('data-carousel-autoplayTimeout'), 10);
            }
            if( $(this).attr('data-carousel-autoplayHoverPause') ) {
              owl_autoplayHoverPause = JSON.parse($(this).attr('data-carousel-autoplayHoverPause'));
            }
            if( $(this).attr('data-carousel-smartSpeed') ) {
              owl_smartSpeed = parseInt($(this).attr('data-carousel-smartSpeed'), 10);
            }
            if( $(this).attr('data-carousel-video') ) {
              owl_video = JSON.parse($(this).attr('data-carousel-video'));
            }
            if( $(this).attr('data-carousel-lazyLoad') ) {
              owl_lazyLoad = JSON.parse($(this).attr('data-carousel-lazyLoad'));
            }
            if( $(this).attr('data-carousel-animateOut') ) {
              owl_animateOut = $(this).attr('data-carousel-animateOut');
            }
            if( $(this).attr('data-carousel-animateIn') ) {
              owl_animateIn = $(this).attr('data-carousel-animateIn');
            }
            $(this).owlCarousel({
              margin: owl_margin,
              dots: owl_dots,
              loop: owl_loop,
              center: owl_center,
              mouseDrag: owl_mouseDrag,
              touchDrag: owl_touchDrag,
              pullDrag: owl_pullDrag,
              stagePadding: owl_stagePadding,
              autoWidth: owl_autoWidth,
              startPosition: owl_startPosition,
              nav: owl_nav,
              navText: owl_navText,
              navElement: owl_navElement,
              rewind: owl_rewind,
              slideBy: owl_slideBy,
              slideTransition: owl_slideTransition,
              autoplay: owl_autoplay,
              autoplayTimeout: owl_autoplayTimeout,
              autoplayHoverPause: owl_autoplayHoverPause,
              smartSpeed: owl_smartSpeed,
              video: owl_video,
              lazyLoad: owl_lazyLoad,
              animateOut: owl_animateOut,
              animateIn: owl_animateIn,
              responsive: {
                0: {
                  items: owl_col[0]
                },
                992: {
                  items: owl_col[1]
                },
                1200: {
                  items: owl_col[2]
                }
              }
            });
        });
    }

    //------------- jQuery.NiceScroll --------------
    if ( document.querySelector('[data-scrollbar="scroll"]') ) {
        var nicescroll = {
            cursorcolor : '#5E7EAF',
            cursorborder : 0,
            cursorwidth : '8px',
            hwacceleration: true,
            autohidemode: false,
            iframeautoresize: true,
            disableoutline: true,
            smoothscroll: true,
            enablescrollonselection: true,
            enableobserver: true,
            zindex : 10
        };
        $( '[data-scrollbar="scroll"]' ).each(function() {
          if( $(this).attr('data-scrollbar-color') ) {
            nicescroll.cursorcolor = $(this).attr('data-scrollbar-color');
          }
          if( $(this).attr('data-scrollbar-border') ) {
            nicescroll.cursorborder = $(this).attr('data-scrollbar-border');
          }
          if( $(this).attr('data-scrollbar-width') ) {
            nicescroll.cursorwidth = $(this).attr('data-scrollbar-width');
          }
          if( $(this).attr('data-scrollbar-zindex') ) {
            nicescroll.zindex = parseInt($(this).attr('data-scrollbar-zindex'), 10);
          }
          $(this).niceScroll({
            cursorcolor: nicescroll.cursorcolor,
            cursorborder: nicescroll.cursorborder,
            cursorwidth: nicescroll.cursorwidth,
            hwacceleration: nicescroll.hwacceleration,
            iframeautoresize: nicescroll.iframeautoresize,
            disableoutline: nicescroll.disableoutline,
            smoothscroll: nicescroll.smoothscroll,
            enablescrollonselection: nicescroll.enablescrollonselection,
            enableobserver: nicescroll.enableobserver,
            zindex: nicescroll.zindex
          });
        });
    }

    // dropdown-scrollbar
    if ( document.querySelector('[data-scrollbar="dropdown"]') ) {
      var nicescroll_dropdown = {
          cursorcolor : 'rgba(255,255,255, .7)',
          cursorborder : 0,
          cursorwidth : '6px',
          hwacceleration: true,
          autohidemode: false,
          iframeautoresize: true,
          disableoutline: true,
          smoothscroll: true,
          enablescrollonselection: true,
          enableobserver: true,
          zindex : 11
      };
      $( '[data-scrollbar="dropdown"]' ).each(function() {
        $(this).niceScroll({
          cursorcolor: nicescroll_dropdown.cursorcolor,
          cursorborder: nicescroll_dropdown.cursorborder,
          cursorwidth: nicescroll_dropdown.cursorwidth,
          hwacceleration: nicescroll_dropdown.hwacceleration,
          iframeautoresize: nicescroll_dropdown.iframeautoresize,
          disableoutline: nicescroll_dropdown.disableoutline,
          smoothscroll: nicescroll_dropdown.smoothscroll,
          enablescrollonselection: nicescroll_dropdown.enablescrollonselection,
          enableobserver: nicescroll_dropdown.enableobserver,
          zindex: nicescroll_dropdown.zindex
        });
      });
    }

    // tab-scrollbar
    if ( document.querySelector('[data-scrollbar="tab"]') ) {
      var nicescroll_dropdown = {
          cursorcolor : 'rgba(255,255,255, .7)',
          cursorborder : 0,
          cursorwidth : '6px',
          hwacceleration: true,
          autohidemode: false,
          iframeautoresize: true,
          disableoutline: true,
          smoothscroll: true,
          enablescrollonselection: true,
          enableobserver: true,
          zindex : 11
      };
      $('[data-scrollbar="tab"]').each(function() {
        $(this).niceScroll({
          cursorcolor: nicescroll_dropdown.cursorcolor,
          cursorborder: nicescroll_dropdown.cursorborder,
          cursorwidth: nicescroll_dropdown.cursorwidth,
          hwacceleration: nicescroll_dropdown.hwacceleration,
          iframeautoresize: nicescroll_dropdown.iframeautoresize,
          disableoutline: nicescroll_dropdown.disableoutline,
          smoothscroll: nicescroll_dropdown.smoothscroll,
          enablescrollonselection: nicescroll_dropdown.enablescrollonselection,
          enableobserver: nicescroll_dropdown.enableobserver,
          zindex: nicescroll_dropdown.zindex
        });
      });
    }

    // chat-scrollbar
    if ( document.querySelector('[data-scrollbar="chat"]') ) {
      let nicescroll_chat = {
          cursorcolor : 'rgba(255,255,255, .7)',
          cursorborder : 0,
          cursorwidth : '6px',
          hwacceleration: true,
          autohidemode: false,
          iframeautoresize: true,
          disableoutline: true,
          smoothscroll: true,
          enablescrollonselection: true,
          enableobserver: true,
          zindex : 11
      };
      $('[data-scrollbar="chat"]').each(function() {
        $(this).niceScroll({
          cursorcolor: nicescroll_chat.cursorcolor,
          cursorborder: nicescroll_chat.cursorborder,
          cursorwidth: nicescroll_chat.cursorwidth,
          hwacceleration: nicescroll_chat.hwacceleration,
          iframeautoresize: nicescroll_chat.iframeautoresize,
          disableoutline: nicescroll_chat.disableoutline,
          smoothscroll: nicescroll_chat.smoothscroll,
          enablescrollonselection: nicescroll_chat.enablescrollonselection,
          enableobserver: nicescroll_chat.enableobserver,
          zindex: nicescroll_chat.zindex
        });
      });
    }

    // offcanvas-scrollbar
    if ( document.querySelector('[data-scrollbar="offcanvas"]') ) {
      var nicescroll_offcanvas = {
          cursorcolor : 'rgba(255,255,255, .7)',
          cursorborder : 0,
          cursorwidth : '6px',
          hwacceleration: true,
          autohidemode: false,
          iframeautoresize: true,
          disableoutline: true,
          smoothscroll: true,
          enablescrollonselection: true,
          enableobserver: true,
          zindex : 1290,
          cursorborderradius: 0
      };
      $('[data-scrollbar="offcanvas"]').each(function() {
        $(this).niceScroll({
          cursorcolor: nicescroll_offcanvas.cursorcolor,
          cursorborder: nicescroll_offcanvas.cursorborder,
          cursorwidth: nicescroll_offcanvas.cursorwidth,
          hwacceleration: nicescroll_offcanvas.hwacceleration,
          iframeautoresize: nicescroll_offcanvas.iframeautoresize,
          disableoutline: nicescroll_offcanvas.disableoutline,
          smoothscroll: nicescroll_offcanvas.smoothscroll,
          enablescrollonselection: nicescroll_offcanvas.enablescrollonselection,
          enableobserver: nicescroll_offcanvas.enableobserver,
          zindex: nicescroll_offcanvas.zindex,
          cursorborderradius: nicescroll_offcanvas.cursorborderradius
        });
      });
    }

    // sidebar-scrollbar
    if ( document.querySelector('[data-scrollbar="sidebar"]') ) {
      let nicescroll_sidebar = {
          cursorcolor : '#0cc44c',
          cursorborder : 0,
          cursorwidth : '6px',
          hwacceleration: true,
          autohidemode: false,
          iframeautoresize: true,
          disableoutline: true,
          smoothscroll: true,
          enablescrollonselection: true,
          enableobserver: true,
          zindex : 11,
          cursorborderradius: 0
      };
      $( '[data-scrollbar="sidebar"]' ).each(function() {
        $(this).niceScroll({
          cursorcolor: nicescroll_sidebar.cursorcolor,
          cursorborder: nicescroll_sidebar.cursorborder,
          cursorwidth: nicescroll_sidebar.cursorwidth,
          hwacceleration: nicescroll_sidebar.hwacceleration,
          iframeautoresize: nicescroll_sidebar.iframeautoresize,
          disableoutline: nicescroll_sidebar.disableoutline,
          smoothscroll: nicescroll_sidebar.smoothscroll,
          enablescrollonselection: nicescroll_sidebar.enablescrollonselection,
          enableobserver: nicescroll_sidebar.enableobserver,
          zindex: nicescroll_sidebar.zindex,
          cursorborderradius: 0
        });
      });
    }

    //------------ Countdown -------------
    // countdown default
    $('.countdown-default').each(function() {
        var $countdown_default = $(this),
            finalDate;
        if( $countdown_default.attr('data-countdown') ) {
            finalDate = $countdown_default.data('countdown');
        } else {
            finalDate = 0;
        }
        $countdown_default.countdown(finalDate, function(event) {
          $countdown_default.html(event.strftime('<div class="row gutters-y">'
            + '<div class="col"><h1>%w</h1> Weeks </div>'
            + '<div class="col"><h1>%d</h1> Days </div>'
            + '<div class="col"><h1>%H</h1> Hours </div>'
            + '<div class="col"><h1>%M</h1> Minutes </div>'
            + '<div class="col"><h1>%S</h1> Seconds </div>'));
        });
    });

    // countdown outline
    $('.countdown-outline').each(function() {
        var $countdown_outline = $(this),
            finalDate;
        if( $countdown_outline.attr('data-countdown') ) {
            finalDate = $countdown_outline.data('countdown');
        } else {
            finalDate = 0;
        }
        $countdown_outline.countdown(finalDate, function(event) {
          $countdown_outline.html(event.strftime('<div class="row gutters-y">'
            + '<div class="col countdown-outline-box"><h1>%w</h1> Weeks </div>'
            + '<div class="col countdown-outline-box"><h1>%d</h1> Days </div>'
            + '<div class="col countdown-outline-box"><h1>%H</h1> Hours </div>'
            + '<div class="col countdown-outline-box"><h1>%M</h1> Minutes </div>'
            + '<div class="col countdown-outline-box"><h1>%S</h1> Seconds </div>'));
        });
    });

    // countdown coupon
    $('.countdown-coupon').each(function() {
        var $countdown_coupon = $(this),
            finalDate;
        if( $countdown_coupon.attr('data-countdown') ) {
            finalDate = $countdown_coupon.data('countdown');
        } else {
            finalDate = 0;
        }
        $countdown_coupon.countdown(finalDate)
        .on('update.countdown', function(event) {
            var format = '%H:%M:%S';
            if(event.offset.totalDays > 0) {
              format = '%-d day%!d ' + format;
            }
            if(event.offset.weeks > 0) {
              format = '%-w week%!w ' + format;
            }
            $(this).html(event.strftime(format));
        })
        .on('finish.countdown', function(event) {
            $(this).html('This offer has expired!')
            .parent().addClass('disabled');
        });
      });
  });

  //------------ Carousel + animation -------------
  $('.carousel [data-slide]').on('click', function () {
    $('.carousel-inner .carousel-item').find('[data-carousel-animation]').removeClass('active');
    $('.carousel-inner .carousel-item.active').find('[data-carousel-animation]').addClass('active');
  });

  //------------ Count Up -------------
  if ( document.querySelector('.counter') ) {
    var counterActive = 0;
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top,
          elementBottom = elementTop + $(this).outerHeight(),
          viewportTop = $(window).scrollTop(),
          viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(window).on('load resize scroll', function() {
        if ($('.counter').isInViewport() && counterActive == 0 ) {
          $('.counter').each(function() {
                var $counter_item = $(this),
                    countTo = $counter_item.attr('data-count'),
                    animation = { countNum: countTo },
                    sec = 1000,
                    duration = 4 * sec,
                    EPV =  0.9989,
                    start = 0,
                    prefix = '',
                    suffix = '',
                    decimal;

                // Start
                if( $counter_item.attr('data-start') ) {
                    $counter_item.text($counter_item.attr('data-start'));
                } else {
                    $counter_item.text('0');
                }

                // Duration
                if( $counter_item.attr('data-duration') ) {
                    duration = Math.floor($counter_item.attr('data-duration') * sec);
                } else {
                    duration = Math.floor(4 * sec); // default
                }

                // Prefix
                if( $counter_item.attr('data-prefix') ) {
                    prefix = $counter_item.attr('data-prefix');
                } else {
                    prefix = '';
                }

                // Suffix
                if( $counter_item.attr('data-suffix') && prefix == '' ) {
                    suffix = $counter_item.attr('data-suffix');
                } else {
                    suffix = '';
                }

                // Decimal
                if( $counter_item.attr('data-decimal') ) {
                    decimal = $counter_item.attr('data-decimal');
                } else {
                    decimal = 0;
                }

                // Easing
                if( $counter_item.attr('data-easing') == 'false' ) {
                    $({ countNum: $counter_item.text()}).animate(animation, {
                        duration: 4000,
                        easing:'linear',
                        step: function() {
                            if(decimal > 0 && decimal <= 3) {
                                $counter_item.text(prefix + parseFloat(this.countNum).toFixed(decimal) + suffix);
                            } else {
                                $counter_item.text(prefix + parseInt(this.countNum, 10) + suffix);
                            }
                        },
                        complete: function() {
                            $counter_item.text(prefix + parseInt(this.countNum, 10) + suffix);
                        }
                    });
                } else {
                    $({ countNum: $counter_item.text() }).animate(animation, {
                        duration: duration,
                        step: function (SD, EP) {
                            if(decimal > 0 && decimal <= 3) {
                                $counter_item.text(prefix + parseFloat(this.countNum).toFixed(decimal) + suffix);
                            } else {
                                $counter_item.text(prefix + parseInt(this.countNum, 10) + suffix);
                            }
                            if (EP.pos > EPV) {
                                $(this).stop();
                                $(this).animate(animation, {
                                    duration: 300,
                                    step: function () {
                                        if(decimal > 0 && decimal <= 3) {
                                            $counter_item.text(prefix + parseFloat(this.countNum).toFixed(decimal) + suffix);
                                        } else {
                                            $counter_item.text(prefix + parseInt(this.countNum, 10) + suffix);
                                        }
                                    },
                                    complete: function () {
                                        if(decimal > 0 && decimal <= 3) {
                                            $counter_item.text(prefix + parseFloat(this.countNum).toFixed(decimal) + suffix);
                                        } else {
                                            $counter_item.text(prefix + parseInt(this.countNum, 10) + suffix);
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
          });
          counterActive = 1;
        }
    });
  }

  //-------------------- Partially collapsing sidebar -------------------
  $('[data-collapsing="partially"]').on('click', function () {
      var p_collapsing_item = $(this).attr('data-collapsing-target');
      if($(p_collapsing_item).is('.p-collapse')) {
        $(p_collapsing_item).removeClass('p-collapse');
      } else {
        $(p_collapsing_item).addClass('p-collapse');
      }
  });

  //------------------------- Collapser (sidebar) -------------------------
  $('.main-sidebar .collapser').on('click', function() {
      if($(this).is('.collapser-active')) {
        $(this).removeClass('collapser-active');
        $(this).closest(".nav-item").removeClass('active');
      } else {
        $(this).addClass('collapser-active');
        $('.collapser').closest(".nav-item").removeClass('active');
        $(this).closest(".nav-item").addClass('active');
      }
      $(this).next().collapse('toggle');
  });

  //------------------------- Collapser (Global) -------------------------
  $('.collapser:not(.sbr-collapse)').on('click', function() {
    if($(this).is('.collapser-active')) {
      $(this).removeClass('collapser-active');
    } else {
      $(this).addClass('collapser-active');
    }
    $(this).next().collapse('toggle');
  });
  

  //------------------------- ChartJS -------------------------
  if ($('#_chartJS_min').length > 0) {

    // -- Glow chart-light
    const glowLineLightEL = Chart.elements.Line.extend({
      draw () {
        const { ctx } = this._chart;
        const originalStroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save()
          ctx.shadowColor = glowLineLightColor
          ctx.shadowBlur = 2.5
          ctx.shadowOffsetX = 0
          ctx.shadowOffsetY = 0
          originalStroke.apply(this, arguments)
          ctx.restore()
        }
        Chart.elements.Line.prototype.draw.apply(this, arguments)
        ctx.stroke = originalStroke;
      }
    })
    Chart.defaults.glowLineLight = Chart.defaults.line
    Chart.controllers.glowLineLight = Chart.controllers.line.extend({
      datasetElementType: glowLineLightEL
    })

    // -- Glow chart-warning
    const glowLineWarningEL = Chart.elements.Line.extend({
      draw () {
        const { ctx } = this._chart;
        const originalStroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save()
          ctx.shadowColor = glowLineWarningColor
          ctx.shadowBlur = 3
          ctx.shadowOffsetX = 0
          ctx.shadowOffsetY = 0
          originalStroke.apply(this, arguments)
          ctx.restore()
        }
        Chart.elements.Line.prototype.draw.apply(this, arguments)
        ctx.stroke = originalStroke;
      }
    })
    Chart.defaults.glowLineWarning = Chart.defaults.line
    Chart.controllers.glowLineWarning = Chart.controllers.line.extend({
      datasetElementType: glowLineWarningEL
    })

    // -- Glow chart-primary
    const glowLinePrimaryEL = Chart.elements.Line.extend({
      draw () {
        const { ctx } = this._chart;
        const originalStroke = ctx.stroke;
        ctx.stroke = function () {
          ctx.save()
          ctx.shadowColor = glowLinePrimaryColor
          ctx.shadowBlur = 3
          ctx.shadowOffsetX = 0
          ctx.shadowOffsetY = 0
          originalStroke.apply(this, arguments)
          ctx.restore()
        }
        Chart.elements.Line.prototype.draw.apply(this, arguments)
        ctx.stroke = originalStroke;
      }
    })
    Chart.defaults.glowLinePrimary = Chart.defaults.line
    Chart.controllers.glowLinePrimary = Chart.controllers.line.extend({
      datasetElementType: glowLinePrimaryEL
    })

    // chart-plugin
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
          //Get ctx from string
          var ctx = chart.chart.ctx;

          //Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = centerConfig.fontStyle || 'Open Sans';
          var txt = centerConfig.text;
          var color = centerConfig.color || '#fff';
          var maxFontSize = centerConfig.maxFontSize || 25;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          //Start with a base font of 30px
          ctx.font = "30px " + fontStyle;

          //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);

          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);

          //Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = fontSizeToUse + "px " + fontStyle;
          ctx.fillStyle = color;

          //Draw text in center
          ctx.fillText(txt, centerX, centerY);
        }
      }
    });

  }

  //------------------------ fullscreen -----------------------
  let fullscreen_btn = document.querySelectorAll('[data-toggle="fullscreen-btn"]');
  Array.prototype.forEach.call(fullscreen_btn, function(cBtn) {
    cBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let fullscreenBtn_target = this.closest('.panel');
      if (fullscreenBtn_target.matches('.fullscreenActive')) {
        fullscreenBtn_target.classList.remove('fullscreenActive');
      } else {
        fullscreenBtn_target.classList.add('fullscreenActive');
      }
    });
  });

  //---------------------------- Dropdown Scrollbar ----------------------------
  let dropdown_scrollbar = document.querySelectorAll('[data-toggle="dropdown"]');
  Array.prototype.forEach.call(dropdown_scrollbar, function(dSB) {
    dSB.addEventListener('click', function(e) {
      setTimeout(function(){
        $('[data-scrollbar="dropdown"]').getNiceScroll().resize();
      }, 200);
    });
  });

  //---------------------------- Sidebar Scrollbar ----------------------------
  let nav_scrollbar = document.querySelectorAll('.main-sidebar [data-toggle="collapse"]');
  Array.prototype.forEach.call(nav_scrollbar, function(navSB) {
    navSB.addEventListener('click', function(e) {
      setTimeout(function(){
        $('[data-scrollbar="sidebar"]').getNiceScroll().resize();
      }, 200);
    });
  });

  //---------------------------- borders (right) ----------------------------
  function tempBordersCol() {
    let panelCol = document.querySelectorAll('.panel-col'),
        clientWidth = document.documentElement.clientWidth;
    Array.prototype.forEach.call(panelCol, function(panelColItem) {
      let scrollLeft = panelColItem.getBoundingClientRect();
      if(scrollLeft.right==clientWidth) {
        panelColItem.classList.add('no-border-right'); // kill border
      } else if(panelColItem.matches('.no-border-right')) {
        panelColItem.classList.remove('no-border-right');
      }
    });
  }
  tempBordersCol();
  window.addEventListener('resize', tempBordersCol); //resize

  //---------------------------- Sizing (svh) ----------------------------
  function sVH() {
    let sVHItem = document.querySelectorAll('.sVH'),
        clientHeight = document.documentElement.clientHeight;
    Array.prototype.forEach.call(sVHItem, function(sVHItemEl) {
      if($(window).width() >= 992) {
        let scrollLeft = sVHItemEl.getBoundingClientRect(),
        sVHFooter = document.getElementById('footer').clientHeight,
        sVHBody = clientHeight - scrollLeft.top - sVHFooter - 1;
        if($(sVHItemEl).is(":visible")) {
          sVHItemEl.style.height = sVHBody + 'px';
        } else {
          sVHItemEl.style.height = '350px';
        }
      } else {
        sVHItemEl.style.height = '350px';
      }
    });
  }
  sVH();
  window.addEventListener('resize', sVH); //resize

  //---------------------------- Sizing (svhF) ----------------------------
  function sVHF() {
    let sVHItem = document.querySelectorAll('.sVHF'),
        clientHeight = document.documentElement.clientHeight;
    Array.prototype.forEach.call(sVHItem, function(sVHFItemEl) {
      if($(window).width() >= 992) {
        let scrollLeft = sVHFItemEl.getBoundingClientRect(),
        sVHFFooter = document.getElementById('footer').clientHeight,
        sVHF_form_control = document.getElementById('sVHF_form').clientHeight,
        sVHF_space_Y = 16,
        sVHFBody = clientHeight - scrollLeft.top - sVHFFooter - sVHF_form_control - sVHF_space_Y - 1;
        if($(sVHFItemEl).is(":visible")) {
          sVHFItemEl.style.height = sVHFBody + 'px';
        } else {
          sVHFItemEl.style.height = '350px';
        }
      } else {
        sVHFItemEl.style.height = '350px';
      }
    });
  }
  sVHF();
  window.addEventListener('resize', sVHF); //resize

  //---------------------------- Tab Scrollbar ----------------------------
  let tab_scrollbar = document.querySelectorAll('[data-toggle="tab"]');
  Array.prototype.forEach.call(tab_scrollbar, function(tSB) {
    tSB.addEventListener('click', function(e) {
      setTimeout(function(){
        $('[data-scrollbar="tab"]').getNiceScroll().resize();
        sVH();
      }, 200);
    });
  });

  // refresh (placeholder demo)
  let refresh_btn = document.querySelectorAll('[data-toggle="refresh"]');
  Array.prototype.forEach.call(refresh_btn, function(rBtn) {
    rBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let refreshBtn_target = this.closest('.panel');
      refreshBtn_target.classList.add('refresh-active');
      setTimeout(function() {
        refreshBtn_target.classList.remove('refresh-active');
      }, 1500);
    });
  });

  // remove (placeholder demo)
  let removePanel_btn = document.querySelectorAll('[data-toggle="remove"]');
  Array.prototype.forEach.call(removePanel_btn, function(rpBtn) {
    rpBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let remove_btn_target = this.closest('.panel');
      remove_btn_target.classList.add('d-none');
    });
  });

  // tooltip
  $('.tooltip-def').tooltip(options);
  
})( jQuery );




