//
// Scripts
//

"use strict";

/* -------------------------------------------------------------------------------------- //

	Options

	Here you can customize the options for your website

// -------------------------------------------------------------------------------------- */

var options = true, // Enable / Disable user settings

scrollToElement = {

	/* -------------------------------------------------------------------------------------- //

		With this duration option you can change the scrolling speed to the item. Duration are
		given in milliseconds. Higher values indicate slower animations, not faster ones.

	// -------------------------------------------------------------------------------------- */

	scrollSpeed : 700  // Milliseconds

},

GoogleMapAPI = {

	/* -------------------------------------------------------------------------------------- //

		To use the Maps JavaScript API, you must register your app project on the Google
		Cloud Platform Console and get a Google API key which you can add to your app.

	// -------------------------------------------------------------------------------------- */

	key : 'AIzaSyBKAtINYLdAjSg-qBuhCndrkN7BBu22dGc', // YOUR_API_KEY

	/* -------------------------------------------------------------------------------------- //

		By default the API will attempt to load the most appropriate language based on the
		users location or browser settings. Some APIs allow you to explicitly set a language
		when you make a request

	// -------------------------------------------------------------------------------------- */

	language : '', // auto by default

	/* -------------------------------------------------------------------------------------- //

		If you set the language of the map, it's important to consider setting the region too.
		This helps ensure that your application complies with local laws.

	// -------------------------------------------------------------------------------------- */

	region : '', // auto by default

	/* -------------------------------------------------------------------------------------- //

		You may wish to turn off the API's default UI settings entirely. To do so, set the
		map's disableDefaultUI property to true. This property disables any automatic UI
		behavior from the Maps JavaScript API.

	// -------------------------------------------------------------------------------------- */

	disableDefaultUI : false,

	/* -------------------------------------------------------------------------------------- //

		The icon can simply indicate an image to use instead of the default Google Maps
		pushpin icon. To specify such an icon, set the marker's icon property to the URL of
		an image. The Maps JavaScript API will size the icon automatically.

	// -------------------------------------------------------------------------------------- */

	markerIcon: '',

	/* -------------------------------------------------------------------------------------- //

		You can use the custom style for the map. Copy and paste your style below.
		To switch, use data-map-style="custom" in your HTML code.

	// -------------------------------------------------------------------------------------- */

	customMapStyle: ''

},

slider = {

	/* -------------------------------------------------------------------------------------- //

		The amount of time to delay between automatically cycling an item. If false,
		carousel will not automatically cycle.

	// -------------------------------------------------------------------------------------- */

	interval : 5000, // Milliseconds

},

scrollbar = {
	zindex: 12
};